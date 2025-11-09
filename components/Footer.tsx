'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black/50 border-t border-purple-500/20 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              AI Engineer
            </h3>
            <p className="text-gray-400 text-sm">
              {t('description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('quickLinks')}</h4>
            <div className="space-y-2">
              <a href="#roadmap" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Roadmap
              </a>
              <a href="#resources" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Resources
              </a>
              <a href="#skills" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Skills
              </a>
              <a href="#projects" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Projects
              </a>
              <a href="#coffee" className="block text-gray-400 hover:text-purple-400 transition-colors text-sm">
                Support
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">{t('connect')}</h4>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-purple-500/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-gray-400" />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-purple-500/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter className="w-5 h-5 text-gray-400" />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-purple-500/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-gray-400" />
              </motion.a>
              <motion.a
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-gray-800 hover:bg-purple-500/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5 text-gray-400" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} AI Engineer Learning Path. {t('rights')}
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              {t('madeWith')}{' '}
              <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />{' '}
              {t('for')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
