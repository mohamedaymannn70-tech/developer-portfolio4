
import React from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types.ts';
import { Code2, Layers, Cpu, BookOpen } from 'lucide-react';

interface HeroProps {
  content: Content['hero'];
  onOpenBook: () => void;
}

const Hero: React.FC<HeroProps> = ({ content, onOpenBook }) => {
  return (
    <section id="hero" className="min-h-screen relative flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-slate-950 dark:to-slate-900">
      
      {/* Background Abstract Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 rtl:-translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 rtl:translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-primary text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            {content.role}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
            {content.headline.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-2 rtl:ml-2 rtl:mr-0">{word}</span>
            ))}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
            {content.subheadline}
          </p>
          
          <motion.div 
            className="flex flex-wrap gap-4 group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button 
              onClick={onOpenBook}
              className="px-8 py-4 rounded-lg font-bold flex items-center gap-2 shadow-lg transition-all duration-300
                         bg-slate-900 text-white dark:bg-white dark:text-slate-900
                         group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary dark:group-hover:text-white"
            >
              <BookOpen size={18} />
              {content.cta}
            </button>
            <a 
              href="#contact" 
              className="px-8 py-4 rounded-lg font-bold border transition-all duration-300
                         border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300
                         group-hover:border-primary group-hover:text-primary group-hover:bg-primary/10"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Visual Content - Abstract Code Interface */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transform rotate-[-2deg] rtl:rotate-[2deg] hover:rotate-0 transition-transform duration-500">
            {/* Fake Window Header */}
            <div className="bg-slate-100 dark:bg-slate-900 p-4 flex items-center gap-2 border-b border-slate-200 dark:border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 rtl:mr-4 text-xs text-slate-400 font-mono">product_architect.tsx</div>
            </div>
            
            {/* Fake Code Content */}
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="text-slate-400">
                <span className="text-purple-600 dark:text-purple-400">import</span> {`{ Future }`} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-green-600 dark:text-green-400">'./reality'</span>;
              </div>
              <div className="pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                <p className="text-blue-600 dark:text-blue-400">const <span className="text-yellow-600 dark:text-yellow-400">Builder</span> = (problem) ={`>`} {`{`}</p>
                <p className="pl-4 text-slate-600 dark:text-slate-300"><span className="text-purple-600 dark:text-purple-400">return</span> new Solution({`{`}</p>
                <p className="pl-8 text-slate-600 dark:text-slate-300">code: <span className="text-orange-500">true</span>,</p>
                <p className="pl-8 text-slate-600 dark:text-slate-300">design: <span className="text-orange-500">true</span>,</p>
                <p className="pl-8 text-slate-600 dark:text-slate-300">impact: <span className="text-green-600 dark:text-green-400">'Maximum'</span></p>
                <p className="pl-4 text-slate-600 dark:text-slate-300">{`}`});</p>
                <p className="text-slate-600 dark:text-slate-300">{`}`};</p>
              </div>
              <div className="flex gap-4 mt-8">
                 <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-lg flex items-center gap-2">
                    <Code2 size={16} className="text-blue-500" />
                    <span className="text-slate-500 dark:text-slate-400 text-xs">Clean Code</span>
                 </div>
                 <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-lg flex items-center gap-2">
                    <Layers size={16} className="text-purple-500" />
                    <span className="text-slate-500 dark:text-slate-400 text-xs">Scalable</span>
                 </div>
                 <div className="bg-slate-100 dark:bg-slate-900 p-3 rounded-lg flex items-center gap-2">
                    <Cpu size={16} className="text-green-500" />
                    <span className="text-slate-500 dark:text-slate-400 text-xs">High Perf</span>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-primary to-blue-600 rounded-xl shadow-lg opacity-20 rotate-12"
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
