
import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar.tsx";
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Skills from './components/Skills.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import InteractiveBook from './components/InteractiveBook.tsx';
import { CONTENT } from './constants.tsx';
import { Language, Theme } from './types.ts';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>('dark');
  const [view, setView] = useState<'home' | 'book'>('home');

  // Handle Theme Changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Handle Language Changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Switch fonts based on language
    if (lang === 'ar') {
      root.classList.add('font-arabic');
      root.classList.remove('font-sans');
    } else {
      root.classList.add('font-sans');
      root.classList.remove('font-arabic');
    }
  }, [lang]);

  const currentContent = CONTENT[lang];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Hide Navbar when book is open for better focus, or keep it but disable interactions? 
          Better to keep consistent UI but maybe z-index lower or simple presence.
          Let's keep it visible but interactive only when home. */}
      {view === 'home' && (
        <Navbar 
          content={currentContent.nav} 
          lang={lang} 
          setLang={setLang}
          theme={theme}
          setTheme={setTheme}
        />
      )}

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          >
            <Hero content={currentContent.hero} onOpenBook={() => setView('book')} />
            <About content={currentContent.about} />
            <Skills content={currentContent.skills} toolsContent={currentContent.tools} />
            <Projects content={currentContent.projects} />
            <Contact content={currentContent.contact} />
            <Footer content={currentContent.footer} />
          </motion.main>
        ) : (
          <motion.div
            key="book"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50"
          >
             <InteractiveBook 
                content={currentContent.book} 
                onClose={() => setView('home')} 
                lang={lang}
             />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
