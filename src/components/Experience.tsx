import { Briefcase, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from './animations/ScrollAnimate';
import GlassCard from './ui/GlassCard';

const roles = [
  {
    company: 'KampusHub',
    title: 'Founder / Full Stack Developer',
    period: '2025 - Present',
    location: 'Nigeria',
    bullets: [
      'Co-founded and launched a campus-focused marketplace for buying, selling, and running errands within university communities.',
      'Designed and developed the full-stack system using React/Next.js and Node.js.',
      'Built listings, authentication, messaging, role-based interactions, and trust-focused product flows.',
      'Led product architecture, feature prioritization, and technical decision-making from MVP to early users.',
    ],
  },
  {
    company: 'ByteConnect',
    title: 'Co-Founder / Backend & Admin Systems Engineer',
    period: '2025 - Present',
    location: 'Nigeria',
    bullets: [
      'Co-founded a platform connecting users with local service providers, artisans, and businesses.',
      'Designed backend architecture for services, bookings, platform activity, and dynamic service listings.',
      'Built admin frontend and backend systems for managing users, services, events, and platform data.',
      'Contributed booking, community engagement, and service categorization features for local economic growth.',
    ],
  },
  {
    company: 'Flexisaf Edusoft LTD',
    title: 'Frontend Development Intern',
    period: '09/2025 - 04/2026',
    location: 'Abuja, Nigeria',
    bullets: [
      'Built and maintained responsive UI components.',
      'Collaborated with backend teams to integrate APIs.',
      'Improved user experience through optimized interface design.',
    ],
  },
  {
    company: 'Federal University Wukari ICT Department',
    title: 'Software Development Intern',
    period: '05/2023 - 10/2025',
    location: 'Wukari, Taraba State, Nigeria',
    bullets: [
      'Contributed to school management systems and internal tools.',
      'Implemented authentication improvements and strengthened database structure.',
      'Assisted in managing and deploying university web applications.',
    ],
  },
  {
    company: 'Bincom Dev Center',
    title: 'Mobile App / Frontend Intern',
    period: '12/2025 - 04/2026',
    location: 'Lagos, Nigeria',
    bullets: [
      'Developed mobile application features using React Native.',
      'Implemented navigation, state management, and API consumption flows.',
      'Participated in team sprints, code reviews, and product testing.',
    ],
  },
  {
    company: 'Quical Concept LTD',
    title: 'Software Engineering Lead',
    period: '01/2026 - Present',
    location: 'Lagos, Nigeria',
    bullets: [
      'Lead software engineering work across product planning, implementation, and delivery.',
      'Coordinate architecture decisions and practical execution for production-ready systems.',
    ],
  },
];

const education = [
  {
    school: 'Federal University Wukari',
    credential: 'Bachelor of Science, Computer Science',
    period: 'Expected graduation: 2026',
    location: 'Wukari, Taraba State, Nigeria',
  },
  {
    school: 'Ifako International Schools',
    credential: 'Secondary School Certificate',
    period: '09/2016 - 08/2022',
    location: 'Lagos, Nigeria',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-800">
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
              Experience & <span className="text-medium-spring-green-500">Education</span>
            </motion.h2>
            <motion.div
              className="w-16 h-1 bg-medium-spring-green-500 mx-auto mb-6"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            />
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A practical background across startups, internships, campus systems, admin tools,
              and full-stack product delivery.
            </motion.p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {roles.map((role, index) => (
              <GlassCard
                key={`${role.company}-${role.title}`}
                className="min-w-0 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm border border-medium-spring-green-200 dark:border-medium-spring-green-500/30 p-5 sm:p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 * index }}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-medium-spring-green-100 dark:bg-slate-800 flex items-center justify-center text-medium-spring-green-500">
                      <Briefcase size={20} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white break-words">
                        {role.company}
                      </h3>
                      <p className="text-sm font-medium text-medium-spring-green-700 dark:text-medium-spring-green-400 break-words">
                        {role.title}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 sm:text-right">
                    <p>{role.period}</p>
                    <p>{role.location}</p>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {role.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-medium-spring-green-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>

          <div className="space-y-6">
            {education.map((item, index) => (
              <GlassCard
                key={item.school}
                className="min-w-0 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm border border-medium-spring-green-200 dark:border-medium-spring-green-500/30 p-5 sm:p-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-medium-spring-green-100 dark:bg-slate-800 flex items-center justify-center text-medium-spring-green-500">
                    <GraduationCap size={20} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white break-words">
                      {item.school}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                      {item.credential}
                    </p>
                    <p className="text-sm text-medium-spring-green-700 dark:text-medium-spring-green-400 mt-3">
                      {item.period}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {item.location}
                    </p>
                  </div>
                </div>
              </GlassCard>
            ))}

            <GlassCard className="min-w-0 bg-white/30 dark:bg-slate-900/30 backdrop-blur-sm border border-medium-spring-green-200 dark:border-medium-spring-green-500/30 p-5 sm:p-6">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-3">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Scalable tech products',
                  'Startups',
                  'AI automation',
                  'Problem solving',
                  'Real-world innovation',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
