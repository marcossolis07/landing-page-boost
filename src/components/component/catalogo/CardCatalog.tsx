import React from "react";
import { Link } from "react-router-dom";

function CardCatalog({ name, description, price, image, alt }) {
  return (
    <div className="bg-blue-200 relative overflow-hidden transition-transform duration-300 ease-in-out rounded-xl shadow-lg group hover:shadow-xl hover:-translate-y-2">
      <Link to="/" className="absolute inset-0 z-10">
        <span className="sr-only">Ver Plato</span>
      </Link>
      <img
        src={image}
        alt={alt}
        width={500}
        height={400}
        className="object-cover w-full h-64"
        style={{ aspectRatio: "500/400", objectFit: "cover" }}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
        <h4 className="text-lg font-semibold md:text-xl">{price}</h4>
      </div>
    </div>
  );
}

export default CardCatalog;
