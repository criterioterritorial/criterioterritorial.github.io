# Criterio Territorial

Sitio oficial estático construido con Astro, TypeScript y CSS propio. Tipografías IBM Plex Sans y Mono alojadas localmente. Sin frameworks de UI ni JavaScript de cliente. La colección sigue la [documentación oficial de Astro](https://docs.astro.build/en/guides/content-collections/).

## Desarrollo local

Requiere Node.js 24 y npm.

```sh
npm ci
npm run dev
```

El servidor local abre en `http://localhost:4321`. Para verificar y previsualizar la versión de producción:

```sh
npm run check
npm run build
npm test
npm run preview
```

`check` valida Astro y TypeScript. `test` revisa las páginas generadas, enlaces internos, recursos y archivos SEO; requiere un build previo.

## Estructura

- `src/pages`: páginas principales y ruta dinámica de estudios.
- `src/layouts/Layout.astro`: navegación, footer, tipografías y metadatos SEO.
- `src/components`: tarjetas de estudios y CTA reutilizables.
- `src/styles/global.css`: identidad visual y reglas responsive.
- `src/content.config.ts`: esquema validado de estudios.
- `src/content/estudios`: publicaciones Markdown.
- `public`: favicon, imagen Open Graph, imágenes editoriales y robots.

## Añadir un estudio

Crea `src/content/estudios/ciudad-001.md`. El nombre genera la ruta `/estudios/ciudad-001/`. Copia la estructura del estudio inicial y completa los campos:

```yaml
---
code: CT / CIUDAD / 001
category: Ciudad
title: Título del estudio
summary: Resumen breve del estudio.
location: Municipio, estado, México
year: 2026
image: /images/ciudad-001.jpg
imageAlt: Descripción accesible de la imagen.
status: Publicado
methodology:
  - Descripción del método aplicado.
results:
  - Resultado verificable del análisis.
sources:
  - name: Nombre de la fuente
    url: https://example.org/datos
reportUrl: https://example.org/informe.pdf
repositoryUrl: https://github.com/organizacion/estudio
---

Desarrollo del estudio en Markdown.
```

Categorías: Mercado, Ciudad, Sociedad, Ambiente y Territorio. Usa el código en mayúsculas y tres dígitos. `reportUrl`, `repositoryUrl` y la URL de cada fuente son opcionales; omítelos si todavía no existen. Guarda imágenes en `public/images`. No inventes datos ni enlaces para rellenar campos. El estudio inicial es un placeholder explícito, sin hallazgos publicados. Markdown está habilitado; MDX requeriría añadir su integración si se necesitan componentes dentro del contenido.

## GitHub Pages

Repositorio: `criterioterritorial/criterioterritorial.github.io`.
URL: `https://criterioterritorial.github.io`.

1. Sube los archivos a la rama `main`.
2. En GitHub, abre **Settings → Pages → Build and deployment → Source** y elige **GitHub Actions**.
3. El workflow `.github/workflows/deploy.yml` valida, construye, verifica y publica cada push a `main`. También puede ejecutarse desde **Actions → Publicar en GitHub Pages → Run workflow**.

El sitio de organización se publica en la raíz: no necesita `base` con el nombre del repositorio. El workflow utiliza los permisos mínimos de lectura, publicación de Pages y OIDC. No necesita secretos propios. La configuración está preparada; la publicación efectiva requiere subir los cambios y habilitar Pages en GitHub.

El sitemap se genera durante el build. Si cambias de dominio, actualiza `site` en `astro.config.mjs` y el sitemap de `public/robots.txt`. La imagen Open Graph provisional es `public/images/og.png`.

## Contacto y mantenimiento

El contacto usa enlaces `mailto:` a `criterio.territorialmx@gmail.com`; requiere un cliente de correo configurado. No se almacenan mensajes ni se simula un formulario enviado. Para cambiar el correo, revisa el layout y la página de contacto. Las páginas de servicios y metodología describen la propuesta inicial y pueden editarse directamente en Astro.
