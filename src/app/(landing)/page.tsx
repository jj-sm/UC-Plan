import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {Text} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center">
      {/* Hero Section */}
      <div className="flex w-full flex-col items-center justify-center space-y-4 px-4 py-24 text-center">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Welcome to UWPlan
        </h1>
        <p className="max-w-[600px] text-lg text-muted-foreground sm:text-xl">
          La manera inteligente de planear tus ramos en la UC; planea tu malla teniendo en cuenta equivalencias y restricciones.
          Esta herramienta se encuentra en fase (Beta) por ahora únicamente implementada para las mallas de Astronomía (:D) y Física (Pregrados).
          <blockquote>*Esta herramienta se implementó y adaptó del proyecto existente de la Universidad de Waterloo. <Link href={"https://github.com/pl3lee/uwplan"}>Repositorio original</Link> </blockquote>
        </p>
        <div className="space-x-4">
          <Button size="lg" asChild>
            <Link href="/signin">¡Comencemos!</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#features">Leer más...</a>
          </Button>
        </div>
        {/* Demo Video */}
        <div className="mt-8 aspect-video w-full max-w-6xl overflow-hidden rounded-lg shadow-xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/CRkpptNLp0A?si=fmXVjn5Bw4oO6uFq&autoplay=1&mute=1&loop=1&playlist=CRkpptNLp0A&controls=0&rel=0&modestbranding=1&iv_load_policy=3&fs=0&playsinline=1"
            title="UWPlan Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid w-full max-w-5xl grid-cols-1 gap-8 px-4 pb-24 md:grid-cols-3">
        <div className="flex flex-col items-center space-y-2 rounded-lg p-6 text-center transition-all hover:bg-accent hover:shadow-lg">
          <div className="rounded-full bg-primary/10 p-4">
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Revisa los requisitos</h3>
          <p className="text-muted-foreground">
            Monitorea fácilmente tu progreso académico y avance curricular
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 rounded-lg p-6 text-center transition-all hover:bg-accent hover:shadow-lg">
          <div className="rounded-full bg-primary/10 p-4">
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Ordena tus ramos</h3>
          <p className="text-muted-foreground">
            Construye y organiza diferentes ramos a lo largo de tus semestres
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2 rounded-lg p-6 text-center transition-all hover:bg-accent hover:shadow-lg">
          <div className="rounded-full bg-primary/10 p-4">
            <svg
              className="h-6 w-6 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold">Atención al detalle</h3>
          <p className="text-muted-foreground">
            También se tienen en cuenta los ramos que son anuales y su número de créditos
          </p>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="w-full scroll-mt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-4xl font-bold tracking-tighter sm:text-5xl">
              Acerca de UC-Plan
            </h2>

            {/* Mission Section */}
            <section className="mb-16">
              <h2 className="mb-4 text-2xl font-bold">Nuestra misión</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                UC-Plan surgió gracias a la necesidad de facilitar el proceso de planear 
                ramos a lo largo de una carrera, pues la malla sugerida no siempre se adapta a 
                las necesidades individuales de los estudiantes. Asímismo, esta herramienta 
                brinda un seguimiento más claro de el avance curricular de los alumnos.
              </p>
              <p className="text-lg text-muted-foreground">
                Combinando la información anual de los ramos podemos llegar a construir esta herramienta. 
                Por ahora, la construcción de currículums está restringida a una implementación manual. Se
                verán soluciones más adelante para facilitar este proceso. Por ahora la única manera es siguiendo 
                nuestra plantilla en <Link href={"https://github.com/jj-sm/UC-Plan"}>GitHub</Link> y creando una Issue relacionada.
              </p>
            </section>

            {/* Built For Students Section */}
            <section className="mb-16">
              <h2 className="mb-4 text-2xl font-bold">
                ¡Hecho por estudiantes, para estudiantes!
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Como estudiante propio de la UC, esta herramienta me hubiese facilitado muchos
                procesos a lo largo de mi carrera en la UC.
              </p>
            </section>

            {/* Open Source Section */}
            <section className="mb-16">
              <h2 className="mb-4 text-2xl font-bold">Open Source</h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Ten en cuenta, que como se mencionó antes, este es una adaptación e implementación del
                repositorio ya existente de la Universidad de Waterloo. Y, ¡este trabajo también es de código abierto!
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/pl3lee/uwplan"
                  className="inline-flex items-center space-x-2 text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  <span>Mira el GitHub</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Detailed Features Section */}
      <div id="features" className="w-full scroll-mt-16 bg-muted/50">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tighter sm:text-5xl">
              Novedades
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Todo lo que necesitas para planear tu avance curricular en la UC
            </p>
          </div>

          <div className="mt-16 grid gap-12">
            {/* Feature 1: Course Planning */}
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold">Planea tus Ramos</h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  Planea tus ramos y cuando los vas a tomar con nuestra fácil selección y
                  alertas en casos de conflictos de requisitos
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Planea tu curso semestre a semestre
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Lleva constantemente un seguimiento a tu avance académico
                  </li>
                </ul>
              </div>
              <div className="flex h-[300px] items-center justify-center overflow-hidden rounded-lg p-6">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/assets/schedule.png"
                    alt="Course scheduling interface"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Feature 2: Course Ratings */}
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="order-2 flex h-[300px] items-center justify-center overflow-hidden rounded-lg p-6 md:order-1">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src="/assets/select.png"
                    alt="Course selection interface"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="mb-4 text-3xl font-bold">
                  Requisitos y Equivalencias
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  No te preocupes por saber si puedes tomar el ramo, nosotros
                   te ayudaremos a verificar esto teniendo en cuenta los requisitos y
                  equivalencias.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    También tenemos en cuenta si el curso es anual
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Te brindaremos una breve descripción del curso
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Originalmente hecho para Lic. Astronomía
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="w-full bg-background py-16 text-center">
        <div className="mx-auto max-w-2xl space-y-4">
          <h2 className="text-3xl font-bold">Comienza a plenar tu Carrera</h2>
          <p className="text-lg text-muted-foreground">
            Únete a la siguiente generación de estudiantes planeando tus ramos con UC-Plan
          </p>
          <Button size="lg" asChild className="mt-4">
            <Link href="/signin">Comienza a planear tus ramos hoy →</Link>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full border-t">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Product */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Producto</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Novedades
                  </Link>
                </li>
                <li>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Acerca de Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contáctanos</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/jj-sm/UC-Plan"
                  className="text-muted-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} UWPlan | jj-sm | CEFF. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
