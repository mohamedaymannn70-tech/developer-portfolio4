
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookContent } from '../types.ts';
import { ChevronLeft, ChevronRight, X, Bookmark } from 'lucide-react';

interface InteractiveBookProps {
  content: BookContent;
  onClose: () => void;
  lang: 'en' | 'ar';
}

const InteractiveBook: React.FC<InteractiveBookProps> = ({ content, onClose, lang }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const totalPages = content.pages.length;

  const paginate = (newDirection: number) => {
    const nextPage = page + newDirection;
    if (nextPage >= 0 && nextPage < totalPages) {
      setPage([nextPage, newDirection]);
    }
  };

  const isRTL = lang === 'ar';

  // Page Flip Variants
  const variants = {
    enter: (direction: number) => ({
      rotateY: direction > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.9,
      transformOrigin: '50% 50%'
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        stiffness: 260,
        damping: 20
      }
    },
    exit: (direction: number) => ({
      rotateY: direction > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4
      }
    })
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/30 dark:bg-slate-950/30 backdrop-blur-sm overflow-hidden">
      
      {/* Background Elements - Enhanced for Glass Effect Visibility */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/40 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/40 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse delay-700"></div>
      </div>

      {/* Close Button */}
      <motion.button 
        onClick={onClose}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        className="absolute top-6 right-6 md:top-10 md:right-10 p-3 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur text-slate-600 dark:text-slate-300 z-50 shadow-lg cursor-pointer hover:bg-red-50 hover:text-red-500 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-colors border border-white/20"
        aria-label={content.close}
      >
        <X size={24} />
      </motion.button>

      {/* Book Container */}
      <div className="relative w-full max-w-4xl h-[70vh] md:h-[600px] px-4 [perspective:2000px]">
        
        <AnimatePresence initial={false} mode="wait" custom={direction}> 
            <motion.div
              key={page}
              custom={direction} 
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 flex flex-col md:flex-row bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/40 dark:border-white/10"
              style={{ transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
            >
              
              {/* Left Decoration / Image Side - Glassy but darker */}
              <div className="hidden md:flex w-1/3 bg-slate-50/50 dark:bg-slate-800/50 items-center justify-center relative overflow-hidden border-r border-white/20">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="relative z-10 p-8 text-center">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg mb-6 transform rotate-12 border border-white/20">
                    <Bookmark className="text-white w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-widest drop-shadow-sm">{content.pages[page].title}</h3>
                  <div className="mt-4 flex justify-center gap-2">
                    {content.pages.map((_, idx) => (
                      <div 
                        key={idx} 
                        className={`w-2 h-2 rounded-full transition-colors shadow-sm ${idx === page ? 'bg-primary' : 'bg-slate-400/50 dark:bg-slate-600/50'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative">
                 <div className="md:hidden mb-6 flex items-center justify-between">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider">{content.pages[page].title}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{page + 1} / {totalPages}</span>
                 </div>

                 <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.3 }} // Delay text slightly after page flip
                 >
                   <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-8 relative inline-block drop-shadow-sm">
                     {content.pages[page].title}
                     <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full shadow-sm"></span>
                   </h2>
                   
                   <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 leading-relaxed whitespace-pre-line drop-shadow-sm font-medium">
                     {content.pages[page].content}
                   </p>
                 </motion.div>

                 {/* Navigation Controls */}
                 <div className="mt-auto pt-8 flex items-center justify-between">
                   <button 
                     onClick={() => paginate(-1)}
                     disabled={page === 0}
                     className={`flex items-center gap-2 text-sm font-bold transition-colors px-4 py-2 rounded-lg ${page === 0 ? 'opacity-30 cursor-not-allowed text-slate-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:text-primary'}`}
                   >
                     {isRTL ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                     <span>{content.prev}</span>
                   </button>

                   <button 
                     onClick={() => paginate(1)}
                     disabled={page === totalPages - 1}
                     className={`flex items-center gap-2 text-sm font-bold transition-colors px-4 py-2 rounded-lg ${page === totalPages - 1 ? 'opacity-30 cursor-not-allowed text-slate-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:text-primary'}`}
                   >
                     <span>{content.next}</span>
                     {isRTL ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                   </button>
                 </div>
              </div>

            </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default InteractiveBook;
