import React from "react";
import "../styles/MediaCard.css";

function MediaCard({ image, title, link, alt, info }) {
  return (
    <div className="media-card">
      <a href={link} className="media-card-link">
        <img
          src={image}
          alt={alt || title}
          className="media-card-image"
        />

        <h3 className="media-card-title">
          {title}
        </h3>

        {info && (
          <p className="media-card-info">
            {info}
          </p>
        )}
      </a>
    </div>
  );
}

export default MediaCard;
