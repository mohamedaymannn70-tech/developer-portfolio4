import React from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types.ts';
import { Github, ExternalLink, Code } from 'lucide-react';

interface ProjectsProps {
  content: Content['projects'];
}

const Projects: React.FC<ProjectsProps> = ({ content }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url === '#' || !url) {
      e.preventDefault();
    }
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-6">
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

        <div className="grid md:grid-cols-2 gap-8">
          {content.items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.3, delay: 0 } }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-2xl dark:hover:shadow-primary/10 transition-colors"
            >
              {/* Project Image Area */}
              <div className="h-56 bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                {project.image ? (
                  <>
                     <img 
                       src={project.image} 
                       alt={project.title} 
                       className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                     />
                     <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/40 transition-colors duration-300"></div>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 group-hover:scale-105 transition-transform duration-500"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 text-9xl font-bold text-slate-400/20 select-none">
                        {index + 1}
                    </div>
                  </>
                )}

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <motion.a 
                    href={project.repoUrl} 
                    target={project.repoUrl !== '#' ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => handleLinkClick(e, project.repoUrl)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full transition-colors ${project.repoUrl === '#' ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-white text-slate-900 hover:bg-primary hover:text-white'}`}
                    title={project.repoUrl === '#' ? "No repository linked" : "View Code"}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    href={project.demoUrl} 
                    target={project.demoUrl !== '#' ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    onClick={(e) => handleLinkClick(e, project.demoUrl)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full transition-colors ${project.demoUrl === '#' ? 'bg-slate-700 text-slate-500 cursor-not-allowed' : 'bg-white text-slate-900 hover:bg-primary hover:text-white'}`}
                    title={project.demoUrl === '#' ? "No live demo available" : "Live Demo"}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-medium text-slate-600 dark:text-slate-300 flex items-center gap-1 group-hover:border-primary/30 transition-colors duration-300">
                      <Code size={12} className="text-primary" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;