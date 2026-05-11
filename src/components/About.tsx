import { Code, Rocket, Server, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './animations/ScrollAnimate';
import GlassCard from './ui/GlassCard';

const About = () => {
  const facts = [
    {
      value: '2+',
      label: 'Products co-founded',
    },
    {
      value: 'MVP',
      label: 'Launch-ready builds',
    },
    {
      value: 'Full stack',
      label: 'Web, mobile, backend',
    },
  ];

  const strengths = [
    {
      icon: <Rocket size={20} />,
      title: 'Product ownership',
      text: 'I can take ideas from MVP planning to launch-ready execution.',
    },
    {
      icon: <Code size={20} />,
      title: 'Frontend quality',
      text: 'Responsive React interfaces with clean structure and usable flows.',
    },
    {
      icon: <Server size={20} />,
      title: 'Backend depth',
      text: 'APIs, authentication, admin systems, bookings, and platform logic.',
    },
    {
      icon: <ShieldCheck size={20} />,
      title: 'Reliable delivery',
      text: 'I focus on maintainable systems, role-based access, and real users.',
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
              About <span className="text-medium-spring-green-500">Me</span>
            </motion.h2>
            <motion.div
              className="w-16 h-1 bg-medium-spring-green-500 mx-auto mb-6"
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

        <AnimatedSection animationType="slideInUp">
          <GlassCard
            className="mx-auto max-w-5xl bg-white/30 dark:bg-slate-800/30 backdrop-blur-sm border border-medium-spring-green-200 dark:border-medium-spring-green-500/30 p-5 sm:p-8"
            blur="8px"
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-white mb-4">
                  <span className="text-medium-spring-green-500">Full Stack Developer</span> with startup execution.
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I build web and mobile products with React, React Native, Node.js,
                  TypeScript, and cloud deployment tools. I co-founded KampusHub and
                  ByteConnect, where I worked across architecture, backend systems,
                  admin tools, and user-facing workflows.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {facts.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-slate-200 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-900/60"
                    >
                      <p className="text-xl font-bold text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                      <p className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {strengths.map((strength, index) => (
                  <motion.div
                    key={strength.title}
                    className="flex gap-3 rounded-lg bg-slate-50 p-4 dark:bg-slate-900/70"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.06 * index }}
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-medium-spring-green-100 text-medium-spring-green-600 dark:bg-slate-800 dark:text-medium-spring-green-400">
                      {strength.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                        {strength.title}
                      </h4>
                      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                        {strength.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </GlassCard>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
