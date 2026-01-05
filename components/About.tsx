import React from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types.ts';
import { User, Target, Lightbulb } from 'lucide-react';

interface AboutProps {
  content: Content['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          
          {/* Visual Column */}
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="md:col-span-5 relative"
          >
             <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 relative z-10 shadow-xl flex items-center justify-center">
                 {/* Placeholder for Profile Image - using a gradient/icon for privacy/template */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50 dark:from-slate-800 dark:to-slate-700 flex flex-col items-center justify-center text-slate-300 dark:text-slate-600">
                    <User size={120} strokeWidth={1} />
                 </div>
             </div>
             <div className="absolute top-10 -left-10 w-full h-full border-2 border-primary/30 rounded-2xl z-0 hidden md:block"></div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7 space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                <Target className="text-primary" />
                {content.title}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed whitespace-pre-line">
                {content.text}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 border-t border-slate-200 dark:border-slate-800 pt-8">
              {content.stats.map((stat, idx) => (
                <div key={idx} className="text-center md:text-start">
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-blue-50 dark:bg-slate-900 border-l-4 border-blue-500 rounded-r-lg">
                <div className="flex gap-3">
                    <Lightbulb className="text-blue-500 shrink-0" size={24} />
                    <p className="text-sm text-slate-700 dark:text-slate-300 italic">
                       "A user interface is like a joke. If you have to explain it, it’s not that good."
                    </p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;