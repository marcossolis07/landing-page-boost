import React from "react";
import CardCatalog from "./CardCatalog";

const products = [
  {
    id: 1,
    name: "Ensalada Fresca",
    description: "Mezcla de lechugas, tomates, pepinos y aderezo de vinagreta.",
    price: "$12.99",
    image: "/public/ensalada-fresca.jpg",
    alt: "Plato 1",
  },
  {
    id: 2,
    name: "Hamburguesa Clásica",
    description: "Carne de res, queso, lechuga, tomate y cebolla.",
    price: "$15.99",
    image: "/public/hamburgesa-clasica.jpg",
    alt: "Plato 2",
  },
  {
    id: 3,
    name: "Pasta Alfredo",
    description: "Fettuccine con salsa cremosa de queso parmesano.",
    price: "$18.99",
    image: "/public/pasta-alfredo.jpg",
    alt: "Plato 3",
  },
  {
    id: 4,
    name: "Limonada Fresca",
    description: "Refrescante limonada hecha con limones recién exprimidos.",
    price: "$4.99",
    image: "/public/limonada-fresca.jpg",
    alt: "Bebida 1",
  },
  {
    id: 5,
    name: "Té Helado",
    description: "Té negro endulzado y refrescante.",
    price: "$3.99",
    image: "/public/te-helado.jpg",
    alt: "Bebida 2",
  },
  {
    id: 6,
    name: "Café Expreso",
    description: "Delicioso café expreso recién preparado.",
    price: "$2.99",
    image: "/public/cafe-espresso.jpg",
    alt: "Bebida 3",
  },
];

function Catalog() {
  return (
    <section className="bg-primary w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-6">
              Deliciosos Sabores de Nuestra Cocina
            </h2>
            <p className="max-w-[900px] text-muted-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-10">
              Disfruta de una amplia variedad de platos y bebidas preparados con
              los mejores ingredientes.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {products.map((product) => (
            <CardCatalog
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
