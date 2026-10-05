# Gestor de Tareas

Aplicación web para organizar tareas, creada con Ionic y Angular standalone. Permite agregar tareas con prioridad, marcarlas como completadas y guardarlas en el navegador.

## Requisitos

- Node.js 18.19 o superior y npm. También son compatibles Node.js 20 y 22 en versiones admitidas por Angular.
- Ionic CLI.

Instala Ionic CLI si aún no lo tienes:

```bash
npm install -g @ionic/cli
```

## Instalación y ejecución

Clona este repositorio y entra en la carpeta del proyecto:

```bash
git clone https://github.com/Eliastutio121122123/gestor-tareas-codigo.git
cd gestor-tareas-codigo
npm install
ionic serve
```

La aplicación estará disponible en `http://localhost:8100`. También puedes iniciarla con `npm start`.

Para generar la compilación de producción:

```bash
npm run build
```

## Funcionalidades

- Crear tareas con título, descripción corta y prioridad alta, media o baja.
- Validar que el título tenga al menos cinco caracteres.
- Marcar tareas como completadas o eliminarlas.
- Conservar las tareas en `localStorage` al recargar la página.

## Estructura del proyecto

- `src/app/models`: modelo de tarea.
- `src/app/services`: lógica de tareas y almacenamiento local.
- `src/app/components/tarea-form`: formulario para crear tareas.
- `src/app/home`: pantalla principal con la lista de tareas.
