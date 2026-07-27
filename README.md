# Il Massone | Ristorante & Pizzeria (Barcelona)

Sitio web single-page premium para **Il Massone**, una trattoria-pizzería italiana familiar en el corazón del Eixample de Barcelona (Carrer de Mallorca, 235).

Diseñado con una estética minimalista editorial oscura (inspirado en la identidad de marca del restaurante, la luz de velas y la fotografía de comida de alto contraste).

---

## 🚀 Stack Técnico

- **Framework**: Next.js 14+ (App Router, TypeScript)
- **Estilos**: Tailwind CSS con diseño de tokens oscuros (`#0E0C0A`, `#C9A15A`, `#F5F1E8`, `#3A1F1A`)
- **Animaciones & Transiciones**: Framer Motion
- **Scroll Suave Inercial**: Lenis (`lenis`)
- **Tipografía**: Google Fonts via `next/font/google` (Fraunces Serif + Plus Jakarta Sans)
- **SEO & Datos Estructurados**: Next.js Metadata API, `sitemap.xml`, `robots.txt`, y esquemas JSON-LD (`Restaurant` y `FAQPage`)

---

## 🍕 Secciones del Sitio Web

1. **Intro Animada (SVG + Framer Motion)**: Ilustración 2D de pizza estilizada tipo grabado girando en dorado/blanco sobre negro con rotación 2D y aparición tipográfica (~2.8s con opción de saltar con un clic y persistencia por sesión).
2. **Hero**: Fotografía editorial a sangre, logo grabado, propuesta de valor del Eixample y doble CTA (WhatsApp / Ver Carta).
3. **Nuestra Historia**: Narrativa de marca sobre el comedor cálido al bajar las escaleras, la atención familiar de Pina y la tradición italiana.
4. **Proceso Artesanal**: Los 3 pilares (Masa 72h, Horno de Piedra a 480°C e Ingredientes DOP).
5. **Nuestros Platos / La Carta**: Carrusel horizontal interactivo de platos por categorías (Pizzas, Pastas, Antipasti, Postres, Bebidas) con precios e indicadores de especialidad / vegetariano.
6. **Ambiente & Galería**: Mosaico editorial asimétrico de fotos del local, horno y preparación.
7. **Reseñas de Clientes**: Resumen de 4.5★ en Google Reviews y carrusel de comentarios reales.
8. **Preguntas Frecuentes (FAQ)**: Acordeón con respuestas claras a métodos de pago ("Solo efectivo y Bizum"), reservas, menú del mediodía y opciones vegetarianas.
9. **Ubicación & Contacto**: Mapa interactivo de Google Maps, dirección NAP completa, horario detallado, teléfono y botones de llamada/WhatsApp.

---

## 💻 Desarrollo Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## 📦 Compilación & Producción

Para compilar y verificar que no hay errores de TypeScript o compilación:
```bash
npm run build
```

Para probar la versión de producción localmente:
```bash
npm start
```

---

## 🌐 Despliegue en Vercel

Este proyecto está 100% optimizado para Vercel:

1. Sube el repositorio a GitHub / GitLab / Bitbucket.
2. Importa el proyecto en [Vercel](https://vercel.com).
3. Vercel detectará automáticamente Next.js. Haz clic en **Deploy**.

---

## 📸 Sustitución de Fotografías de Placeholder

Todas las imágenes actuales son de alta resolución con la atmósfera oscura y cálida requerida. En el código fuente se han dejado comentarios marcados como:
`{/* TODO: reemplazar con foto real del local — ... */}`

Para actualizar con fotos reales del restaurante:
1. Añade los archivos de alta resolución en la carpeta `/public/images/`.
2. Actualiza la propiedad `src` en los componentes correspondientes (`Hero.tsx`, `StorySection.tsx`, `MenuSection.tsx`, `GalleryMosaic.tsx`).
