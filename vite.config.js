import { defineConfig } from 'vite'
import React from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    React(),
    tailwindcss(),
    base: "/Hagz909.github.io"
  ],
})