import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import createSvgSpritePlugin from 'vite-plugin-svg-spriter';
import path from 'path';

const SRC_PATH = path.resolve(__dirname, 'src');
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, 'assets', 'icons');

export default defineConfig({
  server: {
    open: true,
  },
  plugins: [tailwindcss(), createSvgSpritePlugin({ svgFolder: SVG_FOLDER_PATH })],
});
