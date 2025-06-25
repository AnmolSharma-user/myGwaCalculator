
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initPerformanceOptimizations } from './utils/performance'

// Initialize performance optimizations
if (typeof window !== 'undefined') {
  initPerformanceOptimizations();
}

const root = document.getElementById("root");
if (root) {
  createRoot(root).render(<App />);
}
