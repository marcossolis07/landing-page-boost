import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="bg-primary py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-primary-foreground text-3xl md:text-4xl font-bold">
              Contáctanos
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/90">
              Somos un restaurante familiar que ofrece una experiencia culinaria
              única y auténtica. Estaremos encantados de atenderte.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-primary-foreground"
                  >
                    Nombre
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    className="bg-blue-200 rounded-xl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-primary-foreground"
                  >
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    className="bg-blue-200 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-primary-foreground"
                >
                  Asunto
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Ingresa el asunto de tu mensaje"
                  className="bg-blue-200 rounded-xl"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-primary-foreground"
                >
                  Mensaje
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Escribe tu mensaje"
                  className="bg-blue-200 rounded-xl"
                />
              </div>
              <Button type="submit" className="w-full md:w-auto bg-blue-200 hover:bg-blue-500 rounded-xl">
                Enviar mensaje
              </Button>
            </form>
          </div>
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                Información de contacto
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground/90">
                Visítanos o contáctanos a través de nuestros canales.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <LocateIcon className="h-6 w-6 text-muted-foreground/90" />
                <p className="text-muted-foreground/90">
                  123 Calle Ejemplo, Ciudad Ejemplo, País Ejemplo
                </p>
              </div>
              <div className="flex items-start gap-2">
                <PhoneIcon className="h-6 w-6 text-muted-foreground/90" />
                <p className="text-muted-foreground/90">+1 (123) 456-7890</p>
              </div>
              <div className="flex items-start gap-2">
                <MailIcon className="h-6 w-6 text-muted-foreground/90" />
                <p className="text-muted-foreground/90">info@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocateIcon(props) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

