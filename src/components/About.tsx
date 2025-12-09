import { Code, Lightbulb, Award, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import  LazyImage  from './animations/LazyImage';
import AnimatedSection from './animations/ScrollAnimate';

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
    <section id="about" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              className="text-3xl font-bold text-slate-800 dark:text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About <span className="text-amber-500">Me</span>
            </motion.h2>
            <motion.div
              className="w-16 h-1 bg-amber-500 mx-auto mb-6"
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
              I'm a passionate front-end developer with a strong design background, creating
              exceptional digital experiences that combine form and function.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection animationType="slideInLeft">
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
                <LazyImage
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-500 rounded-lg -z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="slideInRight">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4">
                Full Stack Developer & Problem Solver
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                I'm a motivated and detail-oriented Full Stack Developer with strong skills in
                building responsive web applications using modern frontend and backend technologies.
                I'm passionate about creating efficient, scalable, and user-centric solutions.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Currently pursuing a B.Sc in Computer Science at Federal University Wukari,
                I combine technical expertise with creative problem-solving to deliver solutions
                that not only look great but also function flawlessly. I'm constantly learning
                and exploring new technologies to stay at the forefront of web development.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {qualities.map((quality, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 dark:bg-slate-800 flex items-center justify-center text-amber-500 mr-3">
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;