import React from "react";

function Blob({ image }) {
  return (
    <svg
      className="lg:w-full lg:h-auto"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FF56F6"
        d="M61.5,-49.1C75.9,-31.1,81,-5.7,76,17.9C71.1,41.6,56.1,63.5,36.2,71.7C16.4,79.9,-8.4,74.3,-28.6,63.2C-48.8,52,-64.5,35.1,-71.4,13.7C-78.4,-7.7,-76.5,-33.6,-63.2,-51.4C-49.8,-69.2,-24.9,-78.8,-0.7,-78.2C23.6,-77.7,47.2,-67.1,61.5,-49.1Z"
        transform="translate(100 100)"
      />
      <foreignObject x="40" y="25" width="130" height="130">
        <div
          className="image-container"
          style={{ width: "100%", height: "100%" }}
        >
          <img
            src={image}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            alt="blob"
          />
        </div>
      </foreignObject>
    </svg>
  );
}

export default Blob;
