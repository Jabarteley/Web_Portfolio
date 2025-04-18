import { ArrowDownCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      <div 
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(247,_250,_252,_0.8)_0,_rgba(247,_250,_252,_0)_50%)] dark:bg-[radial-gradient(circle_at_center,_rgba(15,_23,_42,_0.8)_0,_rgba(15,_23,_42,_0)_50%)] opacity-0 transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : ''
        }`}
      />

      <div 
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transform transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white tracking-tight mb-4">
            <span className="text-amber-500">Creative</span> Design &
            <span className="block">Front-End Development</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            I craft beautiful, functional digital experiences with a focus on detail, 
            performance, and user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white rounded-lg transition-colors font-medium"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="px-6 py-3 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-colors font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={36} />
      </button>
    </section>
  );
};

export default Hero;