import React, { useState, useEffect } from "react";

function Loading() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setLoaded(true);
    });
  }, []);

  return (
    <>
      {!loaded && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      )}
      <div className="content">{loaded && <p>Loading...</p>}</div>

      <style jsx>{`
        .loading {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 100vh;
        }

        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top-color: #ffffff;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s infinite linear;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

export default Loading;
