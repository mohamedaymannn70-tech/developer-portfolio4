import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Content } from '../types.ts';
import { Mail, Send, Github, Linkedin, Twitter } from 'lucide-react';

interface ContactProps {
  content: Content['contact'];
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/xaqnkplo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      });

      if (response.ok) {
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setIsSent(false), 3000);
      } else {
        console.error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    if (url === '#' || !url) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white dark:bg-slate-950 rounded-2xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800"
        >
          <div className="grid md:grid-cols-2">
            
            {/* Info Side */}
            <div className="p-10 bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">{content.title}</h2>
                <p className="text-slate-400 mb-8">{content.subtitle}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="p-2 bg-slate-800 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <span>mohamedaymannn80@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">Socials</h3>
                <div className="flex gap-4">
                  <motion.a 
                    href="https://github.com/mohamedaymannn70-tech" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-slate-800 rounded-lg hover:bg-primary transition-colors text-white"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    onClick={(e) => handleSocialClick(e, '#')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-slate-800 rounded-lg text-slate-500 cursor-not-allowed transition-colors"
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a 
                    href="#" 
                    onClick={(e) => handleSocialClick(e, '#')}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-slate-800 rounded-lg text-slate-500 cursor-not-allowed transition-colors"
                  >
                    <Twitter size={20} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {content.namePlaceholder}
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder={content.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {content.emailPlaceholder}
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white placeholder-slate-400"
                    placeholder={content.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    {content.messagePlaceholder}
                  </label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-slate-900 dark:text-white placeholder-slate-400 resize-none"
                    placeholder={content.messagePlaceholder}
                  />
                </div>

                <motion.button 
                  type="submit"
                  disabled={isSent || isSubmitting}
                  whileHover={!isSent && !isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSent && !isSubmitting ? { scale: 0.98 } : {}}
                  className={`w-full py-4 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                    isSent 
                    ? 'bg-green-500 text-white' 
                    : 'bg-primary text-white hover:bg-blue-600 shadow-lg hover:shadow-primary/30'
                  } ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
                >
                  {isSent ? content.successMessage : (
                    <>
                      {isSubmitting ? 'Sending...' : content.sendButton}
                      {!isSubmitting && <Send size={18} className="rtl:rotate-180" />}
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;