import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // puerto para desarrollo: 3000
  },
  preview: {
    port: 4000, // puerto para para el servidor de prueba "build": 4000
  },
  build: {
    // optimizaciones del build para que el codigo final sea generado de mejor manera
    incremental: true, // acelerar la generacion de build para que tarde menos
    babel: {
      // optimizacion para que el codigo generado sea mas compatible con navegadores antiguos
      presets: [["@babel/preset-react", "@babel/preset-env"]],
      compact: true,
    },
    outDir: "docs", // carpeta de salida para github pages
    cache: true, //verifica si el código sigue siendo el mismo o no y cachea el código del build
    minify: true, // minifica el código generado
    cssMinify: true, // minifica el css generado
    mode: "production", // espesifica un contexto de produccion para el build
    chunks: true, // genera un archivo por cada componente "multiples chucks"
    moduleBundling: true, // me permite tomar el código de las librerias para produccion y bajarlas
  },
});
