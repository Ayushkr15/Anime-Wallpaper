import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="homepage"></div>
      <div className="content">
        <div className="title">
          <h1>Anime Wallpaper</h1>
        </div>
        <div className="description">
          <p>Enjoy your free variety collection of anime wallpaper</p>
        </div>
        <a href="/Gallery">
          <button type="button" className="btn btn-light">
            Start
          </button>
        </a>
      </div>
      
      <style jsx>{`
        @media screen and (max-width: 768px) {
          .content {
            width: 80%;
          }
        }
      `}</style>
    
    </>
  );
};

export default Homepage;
