import Card from "@/components/component/inicio/CardHome";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col w-full">
      <header className="bg-primary text-primary-foreground py-8 px-4 md:px-6">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            Sabores Deliciosos
          </h1>
          <p className="max-w-[600px] text-muted-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mb-10">
            Bienvenido a nuestro restaurante, donde cada platillo es una
            experiencia culinaria única. Disfruta de nuestros sabores auténticos
            y una atmósfera acogedora.
          </p>
          <div className="max-w-md">
            <img
              src="/public/plato-principal.jpg"
              width={800}
              height={533}
              alt="Plato gourmet"
              className="rounded-xl"
              style={{ aspectRatio: "800/533", objectFit: "cover" }}
            />
          </div>
          <div className="mt-6 text-sm text-muted-foreground/90">
            Abierto de Martes a Domingo, 12:00 pm a 10:00 pm
          </div>
        </div>
      </header>

      <section className="bg-primary py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Nuestros Platillos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card
              title="Ensalada de Quinoa"
              description="Mezcla de quinoa, vegetales frescos y aderezo de limón."
              image="/public/ensalada-quinoa.jpg"
              width={400}
              height={300}
              alt="Platillo 1"
            />
            <Card
              title="Pasta Carbonara"
              description="Pasta fresca con salsa cremosa de huevo y panceta."
              image="/public/pasta-carbonara.jpg"
              width={400}
              height={300}
              alt="Platillo 2"
            />
            <Card
              title="Salmón a la Parrilla"
              description="Salmón fresco a la parrilla con vegetales salteados."
              image="/public/salmon-parilla.avif"
              width={400}
              height={300}
              alt="Platillo 3"
            />
          </div>
        </div>
      </section>

      <div className="bg-primary py-8 px-4 md:px-6 text-center">
        <Link
          to="/catalog"
          className="inline-flex h-10 items-center justify-center rounded-full bg-blue-200 px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Ver Menú Completo
        </Link>
      </div>
    </div>
  );
}

export default Home;
