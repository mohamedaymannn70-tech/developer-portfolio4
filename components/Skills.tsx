import React from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types.ts';
import { SKILLS_DATA, TOOLS_DATA } from '../constants.tsx';

interface SkillsProps {
  content: Content['skills'];
  toolsContent: Content['tools'];
}

const Skills: React.FC<SkillsProps> = ({ content, toolsContent }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Skills Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{content.title}</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{content.subtitle}</p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {SKILLS_DATA.map((skill) => (
              <motion.div 
                key={skill.name}
                variants={item}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-4 group"
              >
                <skill.icon className={`w-12 h-12 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                <span className="font-semibold text-slate-700 dark:text-slate-200">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools Section */}
        <div id="tools">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">{toolsContent.title}</h2>
            <p className="text-slate-600 dark:text-slate-400">{toolsContent.subtitle}</p>
          </motion.div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-8"
          >
            {TOOLS_DATA.map((tool) => (
              <motion.div 
                key={tool.name}
                variants={item}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700 group-hover:border-primary/50 transition-colors"
                >
                  <tool.icon className="w-8 h-8 text-slate-600 dark:text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Skills;