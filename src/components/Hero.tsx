import { ArrowDownCircle } from 'lucide-react';
import { motion } from 'framer-motion';

import GlassCard from './ui/GlassCard';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-white to-pale-green-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,_255,_255,_0.8)_0,_rgba(255,_255,_255,_0)_50%)] dark:bg-[radial-gradient(circle_at_center,_rgba(15,_23,_42,_0.8)_0,_rgba(15,_23,_42,_0)_50%)]"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <GlassCard
            className="p-8 mb-8 bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-medium-spring-green-200 dark:border-medium-spring-green-500/30"
            blur="8px"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-white tracking-tight mb-4"
              variants={itemVariants}
            >
              <span className="text-medium-spring-green-500">Full Stack</span> Developer &
              <span className="block">Problem Solver</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
            >
              I craft efficient, scalable digital solutions with a focus on detail,
              performance, and user experience.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 dark:bg-medium-spring-green-500 dark:hover:bg-medium-spring-green-600 text-white rounded-lg transition-colors font-medium transform hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-colors font-medium transform hover:scale-105 transition-transform duration-300"
              >
                Contact Me
              </a>

              <a
                href="/Abduljabar-Asaju-Resume.pdf"
                download
                className="px-6 py-3 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-colors font-medium flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </GlassCard>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition-colors"
        aria-label="Scroll down"
        whileHover={{ y: -5 }}
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut"
        }}
      >
        <ArrowDownCircle size={36} />
      </motion.button>
    </section>
  );
};

export default Hero;