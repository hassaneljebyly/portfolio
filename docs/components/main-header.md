# Main Header

## Description

This is the main header for the entire website, containing the main navigation menu. It provides site-wide navigation and maintains consistent presence across all pages.

## Anatomy

The header consists of two distinct implementations:

1. Desktop Navigation

   - Logo/Site name
   - Horizontal navigation links
   - Local time display and location
   - Optional action buttons (theme toggle in later iterations)

2. Mobile Navigation
   - Logo/Site name
   - Hamburger menu button
   - Slide-out navigation panel
   - Local time display and location

The two implementations are mutually exclusive and toggle based on viewport width, I decided to build menus sense the design of desktop varies significantly

## Behavior

### Desktop (≥768px)

- Navigation links displayed horizontally
- Hover states on links
- Optional dropdown menus

### Mobile (<768px)

- Hamburger menu triggers slide-out panel
- Panel slides in from right
- Background overlay appears
- Body scroll locked when menu open

## Accessibility

- `aria-current="page"` denotes current page
- Hamburger button uses `aria-expanded`
- Mobile menu uses `aria-hidden`
- Focus trap in mobile menu when open
- Skip-to-main-content link
- All interactive elements are keyboard accessible
- For focus styling curtesy of [sarasoueidan](https://www.sarasoueidan.com/blog/focus-indicators/)

## Technical Notes

- Uses CSS custom properties for theming (later iteration)
- Mobile menu requires JavaScript for functionality
- Uses IntersectionObserver for scroll behavior (for animation in later iterations)
- Benefits from passive event listeners for performance

## Related

- Skip Link component
- Navigation Links component
- Dropdown Menu component
- Local time and location component
