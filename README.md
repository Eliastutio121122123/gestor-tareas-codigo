# Gestor de Tareas (Ionic + Angular)

Aplicación web/móvil para organizar tareas, desarrollada con Ionic y Angular standalone.

## Requisitos

- Node.js 18.19 o superior (o una versión compatible de Node.js 20/22) y npm.
- Ionic CLI: `npm install -g @ionic/cli`.

## Instalación y ejecución

Desde la carpeta del proyecto:
## Clonar repositorio 

git clone 


```bash
npm install
ionic serve
```

También puedes iniciar el servidor con `npm start`. La aplicación estará disponible en `http://localhost:8100`.

Para generar una compilación de producción:

```bash
npm run build
```

## Funcionalidades

- Crear tareas con título, descripción y prioridad.
- Validar que el título tenga al menos cinco caracteres.
- Marcar tareas como completadas y eliminarlas.
- Guardar las tareas en `localStorage` para conservarlas al recargar.

## Estructura

- `src/app/models`: modelo de tarea.
- `src/app/services`: gestión y persistencia de tareas.
- `src/app/components/tarea-form`: formulario de creación.
- `src/app/home`: pantalla principal.
