import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="homepage"></div>
      <div className="content container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <div class="d-flex align-items-center text-center">
              <h1 class="display-8">Anime Wallpaper</h1>
            </div>
          </div>
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
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default Homepage;
