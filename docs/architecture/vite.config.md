# Vite Configuration Documentation

## PostCSS Plugins Configuration

My Vite setup uses PostCSS plugins only during production builds to optimize performance during development, The plugins are:

- `autoprefixer`: Adds vendor prefixes to CSS
- `postcss-custom-properties`: Handles CSS custom properties (variables)
- `@fullhuman/postcss-purgecss`: Removes unused CSS

### PurgeCSS TypeScript Issue Resolution

I encountered a TypeScript issue with PurgeCSS where the default export wasn't properly recognized, which threw a `purgecss is not defined error` The solution was to explicitly cast the import and access the default export:

```typescript
import purgecssPlugin from '@fullhuman/postcss-purgecss';

// TypeScript fix for PurgeCSS default export
const purgecss = purgecssPlugin as unknown as typeof purgecssPlugin.default;

// and then I implemented:
purgecss.default({
  content: [
    './src/**/*.{html,ts}',
    './index.html'
    ],
  defaultExtractor: (content: string) =>  content.match(/[A-Za-z0-9-_:/]+/g) || [],
  rejected: true,
  verbose: true,
}),
```

## Vite Path Aliases Configuration

To simplify import paths and avoid cumbersome relative paths (like `../../../`)
I configured **path aliases** for the `src` and `scss` directories.
This allows me to use shorthand imports instead of deep folder structures.

### Changes:

- **Alias `@`** for the `src` folder, making imports cleaner (e.g., `@/components/ComponentName`).
