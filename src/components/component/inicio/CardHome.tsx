import React from "react";

function Card({ title, description, image, width, height, alt }) {
  return (
    <div className="bg-blue-200 rounded-xl overflow-hidden">
      <img
        src={image}
        width={width}
        height={height}
        alt={alt}
        className="w-full h-48 object-cover"
        style={{ aspectRatio: `${width}/${height}`, objectFit: "cover" }}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default Card;
