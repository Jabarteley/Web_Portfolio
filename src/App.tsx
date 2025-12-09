import { useState, useEffect, lazy, Suspense } from 'react';
import Header from './components/Header';
import { ThemeProvider } from './contexts/ThemeContext';

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  // State to track if page has loaded
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set page as loaded after a short delay to allow animation
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Header />
        <main>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">Loading...</div>}>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </Suspense>
        </main>
        <Suspense fallback={<div className="bg-slate-900 text-white py-12">Loading footer...</div>}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;