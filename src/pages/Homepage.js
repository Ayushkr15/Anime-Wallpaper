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
          <button type="button" class="btn btn-light">
            Start
          </button>
        </a>
      </div>
    </>
  );
};

export default Homepage;
