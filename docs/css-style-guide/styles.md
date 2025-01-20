# Style Guide

## Why BEM + Utility Classes

- BEM for components (maintainable, scalable)
- Utilities for layout and simple modifications
- Keeps HTML cleaner by avoiding responsive utility classes
- Media queries stay with component styles

## Why SCSS

- makes it easier to create utility classes with the `@each` loop
- I like the nesting, I know CSS now have nesting but SCSS nesting still feels superior
- as for SCSS variables I'll be using just CSS custom properties mapped from SCSS variables, This way I can:
  - have runtime flexibility with Javascript
  - easily switch themes (I'll probably just toggle a class)
  - have better maintainability
  - ditch SCSS whenever I want and still have an esy to maintain and scale CSS file

## Naming guide

- use lowercase and kebab-case for classes `.some-class {color: red}`
- use `.js-*` for classes that will be used in Javascript `.js-menu__toggle`
- use `.u-*` for utility classes `.u-fs-100`
- keep utility classes to the right and BEM classes to left `<header class"header u-bg-100">...</header>`
- `--[scope]-[property]-[variant]` for css custom properties (e.g `--font-size-100`)
- Use `--_` prefix for custom (element-specific) CSS properties and `--` for global (shared across components) CSS properties to ensure clear scoping and maintainability.
- use `.u-[category]-[property]-[variant]` for utility classes
  - **Prefix**: `u-` (indicates utility class).
  - **Category**: Broad category like `m` (margin), `p` (padding), `fs` (font-size), or `bg` (background).
  - **Variant**: Variant like `100` to `900`

## Breakpoint System

This table outlines the breakpoint system used throughout the project, converted to `em` using base 16px, because I wanted my breakpoints to scale along with the user's font size.

| Shorthand | Dimension |        Media Query         |
| :-------: | :-------: | :------------------------: |
|    sm     |  ≥576px   |  @media (min-width: 36em)  |
|    md     |  ≥768px   |  @media (min-width: 48em)  |
|    lg     |  ≥992px   |  @media (min-width: 62em)  |
|    xl     |  ≥1200px  |  @media (min-width: 75em)  |
|    xxl    |  ≥1400px  | @media (min-width: 87.5em) |

### Usage in scss

```
$breakpoints: (
  'sm': 36em
  'md': 48em
  'lg': 62em
  ...
);

@mixin breakpoint($size) {
  @media (min-width: map-get($breakpoints, $size)) {
    @content;
  }
}

.component {
  padding: 1rem;

  @include breakpoint('md') {
    padding: 2rem;
  }
}
```

## Core Styles

### Colors:

#### Primary Palette

- 910: hsl(243, 77%, 5%); // base
- 900: hsl(243, 77%, 15%);
- 800: hsl(243, 77%, 25%);
- 700: hsl(243, 77%, 35%);
- 600: hsl(243, 77%, 45%);
- 500: hsl(243, 77%, 55%);
- 400: hsl(243, 77%, 65%);
- 500: hsl(243, 77%, 75%);
- 200: hsl(243, 77%, 85%);
- 100: hsl(243, 77%, 95%);

#### Secondary Palette

- 900: hsl(229, 96%, 12%);
- 800: hsl(229, 96%, 22%);
- 700: hsl(229, 96%, 52%);
- 600: hsl(229, 96%, 42%);
- 500: hsl(229, 96%, 52%);
- 400: hsl(229, 96%, 62%); // base
- 300: hsl(229, 96%, 72%);
- 200: hsl(229, 96%, 82%);
- 100: hsl(229, 96%, 92%);

#### Neutral Palette

- 920: hsl(0, 0%, 0%);
- 910: hsl(0, 0%, 10%);
- 900: hsl(0, 0%, 20%);
- 800: hsl(0, 0%, 30%);
- 700: hsl(0, 0%, 40%);
- 600: hsl(0, 0%, 50%);
- 500: hsl(0, 0%, 60%);
- 400: hsl(0, 0%, 70%);
- 500: hsl(0, 0%, 80%);
- 200: hsl(0, 0%, 90%);
- 100: hsl(0, 0%, 100%);

### Font

#### Font Family

- Inter
