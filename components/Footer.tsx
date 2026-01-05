import React from 'react';
import { Content } from '../types.ts';

interface FooterProps {
  content: Content['footer'];
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="py-8 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 text-center">
      <p className="text-slate-500 dark:text-slate-500 text-sm">
        {content.copyright}
      </p>
    </footer>
  );
};

export default Footer;