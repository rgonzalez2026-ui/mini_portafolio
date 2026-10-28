# Mini portafolio personal

Portafolio de Roberto Leandro González López, estudiante de Ingeniería Civil
Informática en la Universidad Católica de Temuco. Presenta información
personal, habilidades, proyectos y un formulario de contacto.

## Requisitos

- Node.js y npm instalados.

## Instalación y ejecución

Desde la carpeta del proyecto:

```bash
npm install
npm run dev
```

Vite mostrará la dirección local en la que se puede abrir el portafolio.

Para validar la versión de producción:

```bash
npm run build
```

## Secciones y rutas

- `/`: presentación e intereses.
- `/sobre-mi`: estudios e intereses profesionales.
- `/habilidades`: tecnologías y nivel actual.
- `/proyectos`: proyectos Legal Prestigue y Promar.
- `/contacto`: formulario con validación en el navegador.

La navegación se implementa con React Router. El encabezado y el pie de página
se comparten en todas las rutas. El formulario valida nombre, formato de correo
y mensaje, y muestra una confirmación local; no está conectado a un servidor ni
envía datos.

## Publicación en GitHub Pages

El proyecto está configurado para publicarse en el repositorio
`rgonzalez2026-ui/mini_portafolio`. El workflow
`.github/workflows/deploy.yml` compila y publica el sitio automáticamente al
subir cambios a la rama `main`. En GitHub, configura **Settings → Pages → Build
and deployment → Source → GitHub Actions**. La navegación usa hash para que las
rutas funcionen también al recargar la página.

Una vez completada la ejecución del workflow, el sitio estará disponible en
<https://rgonzalez2026-ui.github.io/mini_portafolio/>.

## Estructura principal

```text
src/
  components/
    ContactForm.jsx   Formulario controlado y validación con useState
    Footer.jsx        Pie de página compartido
    Header.jsx        Navegación con enlaces activos
    Layout.jsx        Estructura compartida y Outlet de React Router
    ProjectCard.jsx   Tarjeta reutilizable de proyecto mediante props
  pages/
    About.jsx         Página Sobre mí
    Contact.jsx       Página Contacto
    Home.jsx          Página Inicio
    Projects.jsx      Página Proyectos
    Skills.jsx        Página Habilidades
  App.jsx             Rutas de la aplicación
  App.css             Estilos de componentes y diseño adaptable
  index.css           Estilos base
  main.jsx            Punto de entrada de React
index.html             Documento HTML inicial
uso_ia.md              Declaración del uso de inteligencia artificial
```

## Dificultades y decisiones

- Como el directorio inicial no contenía una aplicación, se creó la base con
  Vite y React y se organizaron las páginas en componentes separados.
- Se configuró React Router para que cada sección tenga una ruta propia en vez
  de ser una sola página con anclas.
- No se proporcionaron enlaces a repositorios ni tecnologías específicas de los
  proyectos, por lo que no se inventaron ni se añadieron enlaces ficticios.
- El formulario solo demuestra validación y estado de interfaz; para enviar
  mensajes realmente se necesitaría un servicio o backend.

## Uso de IA

El detalle de la asistencia de IA, los resultados y la reflexión se encuentra
en [`uso_ia.md`](./uso_ia.md).
