import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Loading from "./Loading";



function Waifus() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [after, setAfter] = useState(null);
  const loaderRef = useRef(null);
  const [type , setType] = useState("all");

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.reddit.com/r/AnimePhoneWallpapers/top/.json?after=${after}&t=${type}`
      );
      const jsonData = await response.json();
      const newImages = jsonData.data.children.map(child => child.data.url);
      setImages([...images, ...newImages]);
      setAfter(jsonData.data.after);
      setLoading(false);
    };
    fetchImages();
  }, [after]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !loading) {
          setAfter(images[images.length - 1]);
        }
      },
      { rootMargin: "50px" }
    );


   
    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [Loading]);

  const handleImageLoad = (event, imageUrl) => {
    if (event.target.naturalWidth === 0) {
      setImages(images.filter(image => image !== imageUrl));
    } else {
      event.target.style.opacity = 1;
    }
  };

  const handleDownload = imageUrl => {
    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = imageUrl.split("/").pop();
     downloadLink.target = "_blank";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div class="d-flex justify-content-center align-items-center d-inline-block bg-info p-2">
        <h1 className="justify-content-center align-items-center m-2">
          Waifus Wallpaper
        </h1>
      </div>
      <Container>
        <Row xs={1} md={2} lg={3}>
          {images.map(imageUrl => (
            <Col className="mb-4" key={imageUrl}>
              <div style={{ position: "relative" }}>
                <img
                  src={imageUrl}
                  alt="anime phone wallpaper"
                  className="w-100"
                  style={{ opacity: 0 }}
                  onLoad={event => handleImageLoad(event, imageUrl)}
                />
                <Button
                  variant="primary"
                  size="sm"
                  style={{ position: "absolute", bottom: "5px", right: "5px" }}
                  onClick={() => handleDownload(imageUrl)}
                >
                  Download
                </Button>
              </div>
            </Col>
          ))}
        </Row>
        {loading && <p className="text-center">Loading...</p>}
        <div ref={loaderRef}></div>
      </Container>
    </>
  );
}


export default Waifus;
