import { ArrowDownCircle, Cloud, Code2, Database, Rocket, Server, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

import GlassCard from './ui/GlassCard';

const Hero = () => {
  const stackItems = [
    { label: 'React / Next.js', icon: <Code2 size={18} /> },
    { label: 'React Native', icon: <Smartphone size={18} /> },
    { label: 'Node.js APIs', icon: <Server size={18} /> },
    { label: 'Cloud Deploy', icon: <Cloud size={18} /> },
  ];

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
      className="min-h-screen flex items-center justify-center relative bg-white dark:bg-slate-900 overflow-hidden py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(0,250,154,0.12)_0%,_rgba(255,255,255,0)_44%,_rgba(15,23,42,0.06)_100%)] dark:bg-[linear-gradient(135deg,_rgba(0,250,154,0.12)_0%,_rgba(15,23,42,0)_42%,_rgba(255,255,255,0.04)_100%)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center lg:text-left">
            <motion.div
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-medium-spring-green-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-medium-spring-green-500/30 dark:bg-slate-800/80 dark:text-slate-300"
              variants={itemVariants}
            >
              <Rocket size={16} className="text-medium-spring-green-500" />
              Founder, full stack developer, and product builder
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight mb-5 break-words"
              variants={itemVariants}
            >
              I turn product ideas into
              <span className="block text-medium-spring-green-500">usable software.</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              I build scalable web and mobile applications from scratch using React,
              React Native, Node.js, and cloud deployment tools, with a strong focus on
              architecture, real users, and fast execution.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 bg-slate-800 hover:bg-slate-700 dark:bg-medium-spring-green-500 dark:hover:bg-medium-spring-green-600 text-white rounded-lg transition-colors font-medium transform hover:scale-105 transition-transform duration-300"
              >
                View My Work
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto px-6 py-3 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-colors font-medium transform hover:scale-105 transition-transform duration-300"
              >
                Contact Me
              </a>

              <a
                href="/Abduljabar_Asaju_Resume.pdf"
                download
                className="w-full sm:w-auto justify-center px-6 py-3 bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-colors font-medium flex items-center gap-2 transform hover:scale-105 transition-transform duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <GlassCard
              className="p-4 sm:p-5 bg-white/60 dark:bg-slate-800/50 backdrop-blur-sm border border-medium-spring-green-200 dark:border-medium-spring-green-500/30"
              blur="8px"
            >
              <div className="grid gap-4 sm:grid-cols-[0.85fr_1.15fr]">
                <div className="overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-900">
                  <img
                    src="/abduljabar.jpeg"
                    alt="Abduljabar Asaju"
                    className="h-full min-h-64 w-full object-cover object-center"
                  />
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg bg-slate-900 p-4 text-left text-sm text-slate-100 shadow-lg">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                      <span className="h-2.5 w-2.5 rounded-full bg-medium-spring-green-500" />
                    </div>
                    <p className="text-medium-spring-green-400">const builder = &#123;</p>
                    <p className="pl-4">frontend: 'React',</p>
                    <p className="pl-4">backend: 'Node.js',</p>
                    <p className="pl-4">mission: 'ship products'</p>
                    <p className="text-medium-spring-green-400">&#125;</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {stackItems.map((item) => (
                      <div
                        key={item.label}
                        className="min-w-0 rounded-lg border border-slate-200 bg-white p-3 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                      >
                        <div className="mb-2 text-medium-spring-green-500">{item.icon}</div>
                        <p className="text-xs font-semibold break-words">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg border border-medium-spring-green-200 bg-medium-spring-green-50 p-4 dark:border-medium-spring-green-500/30 dark:bg-medium-spring-green-900/10">
                    <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-800 dark:text-white">
                      <Database size={16} className="text-medium-spring-green-500" />
                      Product systems
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-300">
                      Marketplaces, admin dashboards, bookings, authentication, and payments.
                    </p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
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
