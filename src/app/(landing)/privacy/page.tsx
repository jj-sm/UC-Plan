import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-16">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Regresar
        </Link>
      </div>

      <h1 className="mb-8 text-4xl font-bold tracking-tighter">
        Política de Privacidad
      </h1>

      <div className="prose prose-gray dark:prose-invert max-w-none">
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            ¿Qué información recolectamos?
          </h2>
          <p className="mb-4 text-muted-foreground">
            Recolectamos únicamente la información necesaria cuando usas UC-Plan
          </p>
          <ul className="mb-4 list-disc pl-6 text-muted-foreground">
            <li>Correo Electrónico</li>
            <li>Selección de cursos y las mallas que creaste</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            ¿Cómo usamos tu información?
          </h2>
          <p className="mb-4 text-muted-foreground">
            Usamos tu información para:
          </p>
          <ul className="mb-4 list-disc pl-6 text-muted-foreground">
            <li>Mejorar nuestra app</li>
            <li>Guardar tus selecciones y progreso</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            Almacenamiento de datos y Seguridad
          </h2>
          <p className="mb-4 text-muted-foreground">
            Tus datos están guardados de manera segura y NO son vendidos o compartidos con terceros
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Tus derechos</h2>
          <p className="mb-4 text-muted-foreground">Tienes derecho a:</p>
          <ul className="mb-4 list-disc pl-6 text-muted-foreground">
            <li>Acceder a tu información personal</li>
            <li>Solicitar la eliminación de tus datos</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Contáctanos</h2>
          <p className="text-muted-foreground">
            Si tienes alguna duda relacionada con UC-Plan contáctanos en: {" "}
            <a
              href="mailto:jjsanchezmedina@gmail.com"
              className="text-primary hover:underline"
            >
              Correo del Desarrollador
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
