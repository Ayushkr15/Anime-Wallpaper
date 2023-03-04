import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="homepage"></div>
      <div className="content d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center">Anime Wallpaper</h2>
        <span className="text-center">
          Enjoy your free variety collection of anime wallpaper
        </span>

        <a href="/Gallery" class="start-btn">
          <button type="button" className="btn btn-light">
            Start
          </button>
        </a>
      </div>

      <style jsx>{`
        .content {
          width: 100%;
          height: 100%;
          padding: 2rem;
        }

        @media screen and (max-width: 768px) {
          .content {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Homepage;
