import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="homepage"></div>
      <div className="content">
      <h1> Anime wallpaper</h1>
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
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Homepage;
