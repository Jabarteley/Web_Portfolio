import { useState } from 'react';
import { skills } from '../data/skills';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('technical');
  
  const tabs = [
    { id: 'technical', label: 'Technical Skills' },
    { id: 'design', label: 'Design Skills' },
    { id: 'soft', label: 'Soft Skills' },
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
            My <span className="text-amber-500">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-6" />
          <p className="text-lg text-slate-600 dark:text-slate-300">
            A comprehensive overview of my technical abilities, design skills, and professional competencies.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-slate-800 dark:bg-amber-500 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSkills.map((skill) => (
              <div 
                key={skill.id} 
                className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <div className="text-amber-500">{skill.icon}</div>
                </div>
                
                {skill.proficiency && (
                  <div className="mb-2">
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                    <div className="mt-1 text-xs text-right text-slate-500 dark:text-slate-400">
                      {skill.proficiency}%
                    </div>
                  </div>
                )}
                
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;