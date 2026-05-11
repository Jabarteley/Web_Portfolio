import { Code, Lightbulb, Award, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import LazyImage from './animations/LazyImage';
import AnimatedSection from './animations/ScrollAnimate';
import GlassCard from './ui/GlassCard';

const About = () => {
  const qualities = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'I write code that is readable, maintainable, and follows best practices.',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Creative Solutions',
      description: 'I approach problems with innovative thinking and creative solutions.',
    },
    {
      icon: <Award size={24} />,
      title: 'Quality Focus',
      description: 'I pay attention to details and ensure high-quality output in all projects.',
    },
    {
      icon: <Rocket size={24} />,
      title: 'Fast Learner',
      description: 'I quickly adapt to new technologies and methodologies.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <motion.h2
              className="text-3xl font-bold text-slate-800 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-pale-green-500">Me</span>
            </motion.h2>
            <motion.div
              className="w-16 h-1 bg-pale-green-500 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Full Stack Developer, Computer Science student, and co-founder focused on
              turning practical product ideas into production-ready systems.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <AnimatedSection animationType="slideInLeft">
            <GlassCard
              className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-medium-spring-green-200 dark:border-medium-spring-green-500/30 p-0 relative"
              blur="8px"
            >
              <div className="relative">
                <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                  <LazyImage
                    src="/abduljabar.jpeg"
                    alt="Professional portrait"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-medium-spring-green-500 rounded-lg -z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </div>
            </GlassCard>
          </AnimatedSection>

          <AnimatedSection animationType="slideInRight">
            <GlassCard
              className="bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-medium-spring-green-200 dark:border-medium-spring-green-500/30 p-5 sm:p-6"
              blur="8px"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  <span className="text-medium-spring-green-500">Full Stack Developer</span> & Product Thinker
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  I'm a Full Stack Developer with hands-on experience building scalable web
                  and mobile applications using React, React Native, Node.js, TypeScript,
                  and modern deployment platforms. I enjoy owning products end to end, from
                  architecture and data models to responsive interfaces and real-world launch.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  I co-founded platforms including KampusHub and ByteConnect, where I worked
                  across product strategy, backend systems, admin tools, marketplace workflows,
                  and community-focused features. I'm currently pursuing a B.Sc. in Computer
                  Science at Federal University Wukari, with expected graduation in 2026.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {qualities.map((quality, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-medium-spring-green-100 dark:bg-slate-800 flex items-center justify-center text-medium-spring-green-500 mr-3">
                        {quality.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                          {quality.title}
                        </h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400">
                          {quality.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </GlassCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;
