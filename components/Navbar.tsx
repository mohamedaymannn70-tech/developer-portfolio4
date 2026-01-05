import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Content, Language, Theme } from '../types.ts';

interface NavbarProps {
  content: Content['nav'];
  lang: Language;
  setLang: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Navbar: React.FC<NavbarProps> = ({ content, lang, setLang, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => setLang(lang === 'en' ? 'ar' : 'en');
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: content.home, href: "#hero" },
    { name: content.about, href: "#about" },
    { name: content.skills, href: "#skills" },
    { name: content.tools, href: "#tools" },
    { name: content.projects, href: "#projects" },
    { name: content.contact, href: "#contact" },
  ];

  // Navbar container variants for smooth transitions between full width and floating pill
  const navVariants = {
    top: {
      width: "100%",
      maxWidth: "1280px", // max-w-7xl
      borderRadius: "0px",
      backgroundColor: "rgba(255, 255, 255, 0)",
      borderColor: "rgba(255, 255, 255, 0)",
      padding: "1.5rem 1.5rem", // py-6 px-6
      y: 0,
    },
    scrolled: {
      width: "90%",
      maxWidth: "1024px", // max-w-5xl
      borderRadius: "9999px", // rounded-full
      backgroundColor: theme === 'dark' ? "rgba(2, 6, 23, 0.7)" : "rgba(255, 255, 255, 0.7)",
      borderColor: theme === 'dark' ? "rgba(30, 41, 59, 0.5)" : "rgba(255, 255, 255, 0.5)",
      padding: "0.75rem 1.5rem", // py-3 px-6
      y: 10,
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pointer-events-none">
      <motion.nav 
        initial="top"
        animate={scrolled ? "scrolled" : "top"}
        variants={navVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="pointer-events-auto backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-primary/5 border flex justify-between items-center"
      >
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-sans tracking-tighter uppercase cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Mohamed
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors"
            >
              {hoveredIndex === index && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-slate-100 dark:bg-slate-800 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className={`relative z-10 transition-colors duration-200 ${hoveredIndex === index ? 'text-primary' : ''}`}>
                {link.name}
              </span>
            </a>
          ))}
          
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-4 rtl:mx-4 opacity-50"></div>

          <div className="flex items-center gap-2">
            <motion.button 
              onClick={toggleTheme} 
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>

            <motion.button 
              onClick={toggleLanguage} 
              className="flex items-center gap-1 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300 font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe size={20} />
              <span className="text-xs uppercase">{lang}</span>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
           <motion.button 
             onClick={toggleTheme} 
             className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
             whileHover={{ scale: 1.1 }}
             whileTap={{ scale: 0.9 }}
           >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
          <motion.button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-slate-600 dark:text-slate-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-24 md:hidden left-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-2xl rounded-2xl border border-white/20 dark:border-slate-800 z-40 overflow-hidden pointer-events-auto"
          >
            <div className="flex flex-col p-4 space-y-2">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary dark:hover:text-primary transition-all"
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-slate-200 dark:border-slate-700 my-2" />
              <button 
                onClick={() => { toggleLanguage(); setIsOpen(false); }} 
                className="w-full flex items-center gap-2 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium transition-all"
              >
                <Globe size={20} />
                <span>Switch to {lang === 'en' ? 'Arabic' : 'English'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;