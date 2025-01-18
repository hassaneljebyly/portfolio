import path from 'path';

import purgecssPlugin from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';
import postcssCustomProperties from 'postcss-custom-properties';
import { defineConfig } from 'vite';

// @ts-expect-error: this line works but smh shows an error of Property 'default' does not exist on type 'PluginCreator<UserDefinedOptions>'
const purgecss = purgecssPlugin as unknown as typeof purgecssPlugin.default;

export default defineConfig(({ mode }) => ({
  build: {
    cssMinify: mode === 'production',
    cssCodeSplit: mode === 'production',
    minify: mode === 'production',
    sourcemap: mode !== 'production',
  },
  css: {
    // PostCSS configuration
    postcss: {
      plugins: [
        ...(mode === 'production'
          ? [
              autoprefixer,
              postcssCustomProperties({
                preserve: true,
              }),
              purgecss.default({
                content: ['./src/**/*.{html,ts}', './index.html'],
                defaultExtractor: (content: string) =>
                  content.match(/[A-Za-z0-9-_:/]+/g) || [],
                rejected: true,
                verbose: true,
              }),
            ]
          : []),
      ],
    },
    preprocessorOptions: {
      scss: {},
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Use @ for the src folder
      '~scss': path.resolve(__dirname, './src/scss'), // Use ~scss for SCSS files
    },
  },
}));
