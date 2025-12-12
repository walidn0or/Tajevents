# Responsive Design Patterns for Taj Events Website

## Breakpoint System

Based on your components, here's the responsive breakpoint structure used:

```css
/* Mobile (default) */
/* Small screens: < 640px */

/* Tablet */
@media (min-width: 768px) {
  /* md: prefix styles */
}

/* Desktop */
@media (min-width: 1024px) {
  /* lg: prefix styles */
}

/* Large Desktop */
@media (min-width: 1280px) {
  /* xl: prefix styles */
}
```

## Component-Specific Responsive Patterns

### 1. Hero Section

#### Layout Structure
```tsx
<section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
```

#### Responsive Typography
```tsx
<!-- Mobile -->
<span className="text-accent font-serif text-lg">Perfect Planning</span>

<!-- Tablet/Desktop -->
<span className="text-accent font-serif text-xl">Perfect Planning</span>

<!-- Mobile Heading -->
<h1 className="text-4xl font-serif font-bold text-primary-foreground">
  Creating Unforgettable Moments
</h1>

<!-- Tablet -->
<h1 className="text-5xl font-serif font-bold text-primary-foreground">
  Creating Unforgettable Moments
</h1>

<!-- Desktop -->
<h1 className="text-6xl font-serif font-bold text-primary-foreground">
  Creating Unforgettable Moments
</h1>
```

#### Button Layout
```tsx
<!-- Mobile: Stacked -->
<div className="flex flex-col gap-3 justify-center items-center mt-8 px-4">
  <button className="w-full px-6 py-3">Book Now</button>
  <button className="w-full px-6 py-3">Explore Gallery</button>
</div>

<!-- Tablet/Desktop: Side by side -->
<div className="flex sm:flex-row gap-4 justify-center items-center mt-12 px-4">
  <button className="w-full sm:w-auto px-8 py-3">Book Now</button>
  <button className="w-full sm:w-auto px-8 py-3">Explore Gallery</button>
</div>
```

### 2. About Section

#### Section Spacing
```tsx
<section className="py-16 md:py-24 px-4 bg-background">
```

#### Grid Layout
```tsx
<!-- Mobile: Single column -->
<div className="grid grid-cols-1 gap-8 items-center">

<!-- Tablet/Desktop: Two columns -->
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
```

#### Image Container
```tsx
<!-- Mobile -->
<div className="relative h-64 rounded-2xl overflow-hidden">

<!-- Tablet/Desktop -->
<div className="relative h-96 rounded-2xl overflow-hidden">
```

#### Typography Scaling
```tsx
<!-- Subtitle -->
<span className="text-base font-serif text-base md:text-lg font-bold">About Taj Events</span>

<!-- Main Heading -->
<h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
  Founded in Excellence
</h2>

<!-- Body Text -->
<p className="text-base md:text-lg text-muted-foreground">
  Content here...
</p>
```

#### Stats Grid
```tsx
<!-- Mobile: Compact -->
<div className="grid grid-cols-3 gap-2 mb-6">
  <div className="rounded-xl p-3 text-center">
    <div className="text-2xl font-serif font-bold text-accent">500+</div>
    <div className="text-xs mt-1">Events Decorated</div>
  </div>
</div>

<!-- Tablet/Desktop: More spacing -->
<div className="grid grid-cols-3 gap-4 mb-8">
  <div className="rounded-xl p-4 text-center">
    <div className="text-3xl font-serif font-bold text-accent">500+</div>
    <div className="text-sm mt-2">Events Decorated</div>
  </div>
</div>
```

#### Button Sizing
```tsx
<!-- Mobile -->
<button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg">
  Learn More
</button>

<!-- Tablet/Desktop -->
<button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg">
  Learn More
</button>
```

### 3. Booking Section

#### Section Spacing
```tsx
<section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
```

#### Header Container
```tsx
<!-- Mobile -->
<div className="inline-block px-6 py-2 bg-gradient-to-r rounded-full mb-4">
  <h2 className="text-2xl font-serif font-bold text-white">
    Reserve Your <span className="text-accent">Perfect Event</span>
  </h2>
</div>

<!-- Tablet/Desktop -->
<div className="inline-block px-8 py-3 bg-gradient-to-r rounded-full mb-6">
  <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white">
    Reserve Your <span className="text-accent">Perfect Event</span>
  </h2>
</div>
```

#### Feature Grid
```tsx
<!-- Mobile: Vertical stack -->
<div className="grid grid-cols-1 gap-6 mb-8">
  <div className="flex gap-3 items-start">
    <Clock size={20} />
    <div>
      <h3 className="font-serif font-bold mb-1 text-sm">Book Your Time</h3>
      <p className="text-sm">Select your preferred consultation time</p>
    </div>
  </div>
</div>

<!-- Tablet/Desktop: Three columns -->
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
  <div className="flex gap-4 items-start">
    <Clock size={20} />
    <div>
      <h3 className="font-serif font-bold mb-1 text-base">Book Your Time</h3>
      <p className="text-base">Select your preferred consultation time</p>
    </div>
  </div>
</div>
```

#### Form Layout
```tsx
<!-- Form Container -->
<form className="bg-card text-foreground p-6 md:p-8 rounded-lg shadow-xl">

<!-- Input Grids -->
<div className="grid md:grid-cols-2 gap-6 mb-6">
  <input className="px-4 py-3 border rounded-lg" />
  <input className="px-4 py-3 border rounded-lg" />
</div>
```

#### Social Media Icons
```tsx
<!-- Mobile: Smaller icons -->
<div className="flex gap-4 justify-center mb-6">
  <a className="p-2.5 rounded-full">
    <Facebook size={20} className="md:hidden" />
    <Facebook size={24} className="hidden md:block" />
  </a>
</div>

<!-- Tablet/Desktop: Larger icons -->
<div className="flex gap-6 justify-center mb-8">
  <a className="p-3 rounded-full">
    <Facebook size={24} className="hidden md:block" />
  </a>
</div>
```

#### Contact Links
```tsx
<!-- Mobile: Vertical stack -->
<div className="flex flex-col gap-4 justify-center text-sm">
  <a href="tel:+13658894928">+1 (365) 889-4928</a>
  <a href="https://wa.me/12897009451">WhatsApp: +1 (289) 700-9451</a>
  <a href="mailto:tajevents.ca@gmail.com">tajevents.ca@gmail.com</a>
</div>

<!-- Tablet/Desktop: Horizontal row -->
<div className="flex flex-col sm:flex-row gap-6 justify-center text-base">
  <a href="tel:+13658894928">+1 (365) 889-4928</a>
  <a href="https://wa.me/12897009451">WhatsApp: +1 (289) 700-9451</a>
  <a href="mailto:tajevents.ca@gmail.com">tajevents.ca@gmail.com</a>
</div>
```

### 4. Gallery Section

#### Section Spacing
```tsx
<section className="py-16 md:py-24 px-4">
```

#### Header Typography
```tsx
<!-- Mobile -->
<h2 className="text-3xl font-serif font-bold text-primary mb-3">
  Gallery <span className="accent-text">Showcase</span>
</h2>

<!-- Tablet/Desktop -->
<h2 className="text-4xl lg:text-5xl font-serif font-bold text-primary mb-4">
  Gallery <span className="accent-text">Showcase</span>
</h2>
```

#### Category Headers
```tsx
<!-- Mobile -->
<div className="flex items-center gap-3 mb-8">
  <h3 className="text-2xl font-serif font-semibold text-primary">{section.category}</h3>
</div>

<!-- Tablet/Desktop -->
<div className="flex items-center gap-4 mb-12">
  <h3 className="text-3xl font-serif font-semibold text-primary">{section.category}</h3>
</div>
```

#### Image Grid
```tsx
<!-- Mobile: Single column -->
<div className="grid grid-cols-1 gap-4">

<!-- Small Tablets: Two columns -->
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<!-- Tablet/Desktop: Three columns -->
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
```

#### Image Cards
```tsx
<!-- Mobile -->
<div className="relative h-64 rounded-xl overflow-hidden">
  <div className="text-base font-serif text-accent mb-2">{item.title}</div>
</div>

<!-- Tablet/Desktop -->
<div className="relative h-80 rounded-xl overflow-hidden">
  <div className="text-lg font-serif text-accent mb-2">{item.title}</div>
</div>
```

#### Lightbox Navigation
```tsx
<!-- Close Button -->
<button className="text-accent hover:text-white">
  <X size={28} className="md:hidden" />
  <X size={32} className="hidden md:block" />
</button>

<!-- Navigation Buttons -->
<button className="p-2 rounded-full border">
  <ChevronLeft size={20} className="md:hidden text-accent" />
  <ChevronLeft size={24} className="hidden md:block text-accent" />
</button>
```

## Common Responsive Patterns

### 1. Container Max Widths
```tsx
<!-- Standard sections -->
<div className="max-w-7xl mx-auto">

<!-- Booking section (narrower) -->
<div className="max-w-5xl mx-auto">

<!-- Hero section -->
<div className="max-w-4xl mx-auto">
```

### 2. Spacing Patterns
```tsx
<!-- Section padding -->
className="py-16 md:py-24 px-4"

<!-- Component margins -->
className="mb-6 md:mb-8"
className="mt-8 md:mt-12"

<!-- Grid gaps -->
className="gap-4 md:gap-8"
className="gap-2 md:gap-4"
```

### 3. Typography Scale
```tsx
<!-- Small text -->
className="text-xs md:text-sm"

<!-- Body text -->
className="text-base md:text-lg"

<!-- Subheadings -->
className="text-lg md:text-xl"

<!-- Headings -->
className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
```

### 4. Button Patterns
```tsx
<!-- Mobile: Full width -->
<button className="w-full px-6 py-3">

<!-- Desktop: Auto width -->
<button className="w-full sm:w-auto px-8 py-3">
```

### 5. Icon Sizing
```tsx
<!-- Mobile icons -->
<Icon size={20} className="md:hidden" />
<Icon size={24} className="hidden md:block" />
```

## Utility Classes Used

### Display & Layout
- `flex`, `grid`, `block`
- `flex-col`, `flex-row`
- `grid-cols-1`, `grid-cols-2`, `grid-cols-3`
- `items-center`, `items-start`
- `justify-center`

### Spacing
- `p-3`, `p-4`, `p-6`, `p-8`
- `px-4`, `px-6`, `px-8`
- `py-2`, `py-3`, `py-16`, `py-24`
- `gap-2`, `gap-3`, `gap-4`, `gap-6`, `gap-8`, `gap-12`
- `mb-3`, `mb-4`, `mb-6`, `mb-8`, `mb-12`, `mb-16`
- `mt-1`, `mt-2`, `mt-3`, `mt-4`, `mt-8`, `mt-12`

### Typography
- `text-xs`, `text-sm`, `text-base`, `text-lg`, `text-xl`
- `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`
- `font-serif`, `font-bold`, `font-semibold`

### Responsive Modifiers
- `md:`, `lg:`, `xl:`, `sm:`
- `w-full sm:w-auto`
- `flex-col sm:flex-row`
- `grid-cols-1 sm:grid-cols-2 md:grid-cols-3`

This comprehensive guide covers all the responsive design patterns used in your Taj Events website components.
