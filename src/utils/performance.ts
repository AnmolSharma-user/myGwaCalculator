
// Performance optimization utilities
export const preloadCriticalResources = () => {
  // Preload critical CSS
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'style';
  link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
  document.head.appendChild(link);
};

export const optimizeImages = () => {
  // Add loading="lazy" to images that are not immediately visible
  const images = document.querySelectorAll('img');
  images.forEach((img, index) => {
    if (index > 2) { // Keep first 3 images eager loading
      img.loading = 'lazy';
    }
  });
};

export const deferNonCriticalScripts = () => {
  // Defer non-critical JavaScript
  const scripts = document.querySelectorAll('script[data-defer]');
  scripts.forEach(script => {
    script.setAttribute('defer', '');
  });
};

// Initialize performance optimizations
export const initPerformanceOptimizations = () => {
  // Run after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      preloadCriticalResources();
      optimizeImages();
      deferNonCriticalScripts();
    });
  } else {
    preloadCriticalResources();
    optimizeImages();
    deferNonCriticalScripts();
  }
};
