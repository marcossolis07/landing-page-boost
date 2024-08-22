import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-primary p-6 md:py-12 w-full">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2">
          <UtensilsIcon className="w-6 h-6" />
          <span className="text-lg font-semibold">Sabores Deliciosos</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            to="/"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Inicio
          </Link>
          <Link
            to="/catalog"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Catálogo y Productos
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Contacto
          </Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

function UtensilsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
