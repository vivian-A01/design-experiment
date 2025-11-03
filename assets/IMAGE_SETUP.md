# Image Setup Guide for hero-redesign.html

## Required Images

Please place the following images in the `assets/images/` folder:

### Navigation/Branding
1. **abconvert-logo-white.png** - White ABConvert logo for navbar and footer
   - Recommended size: 200-300px wide
   - Format: PNG with transparency
   - Background: Transparent

### Hero Section
2. **shopify-logo-white.png** - White Shopify logo
   - Recommended size: 100-150px wide
   - Format: PNG with transparency
   - Background: Transparent

### Logo Carousel (Brand Logos)
3. **vanquish-logo.png** - Vanquish Fitness logo
4. **kompsos-logo.png** - Kompsos logo
5. **edikted-logo.png** - Edikted logo
6. **fum-logo.png** - FÜM logo
7. **brand-logo.png** - Generic brand logo

All carousel logos should be:
- White or light colored (for visibility on dark background)
- Approximately 120-150px wide
- PNG format with transparency
- Will be filtered to white using CSS if needed

## Image Paths in HTML

All images are referenced as:
```html
<img src="./assets/images/filename.png" alt="Description">
```

## Folder Structure
```
revenue-calculator/
├── hero-redesign.html
└── assets/
    ├── images/
    │   ├── abconvert-logo-white.png
    │   ├── shopify-logo-white.png
    │   ├── vanquish-logo.png
    │   ├── kompsos-logo.png
    │   ├── edikted-logo.png
    │   ├── fum-logo.png
    │   └── brand-logo.png
    └── IMAGE_SETUP.md (this file)
```

## Quick Upload to GitHub

After adding your images to `assets/images/`, run:

```bash
git add assets/
git commit -m "feat: add brand assets for hero-redesign"
git push design-experiment main
```

## Alternative: Temporary Placeholder Images

If you don't have the images yet, the HTML will show broken image icons. The site will still function, but images won't display. Consider:

1. Using placeholder services temporarily
2. Creating simple SVG text logos
3. Uploading your actual brand assets ASAP

## Notes

- The ABConvert logo appears in both navbar (top) and footer (bottom)
- All logos should work on dark backgrounds
- The Shopify logo is displayed inline in the hero section
- Carousel logos are displayed in a scrolling animation
