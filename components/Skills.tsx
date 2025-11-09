'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Code2, Users } from 'lucide-react';

export default function Skills() {
  const t = useTranslations('skills');

  const technicalItems = t.raw('technical.items') as any[];
  const softItems = t.raw('soft.items') as any[];

  return (
    <section className="relative py-20" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('technical.title')}</h3>
            </div>

            <div className="space-y-6">
              {technicalItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">
                    {item.category}
                  </h4>
                  <ul className="space-y-2">
                    {item.skills.map((skill: string, skillIndex: number) => (
                      <li key={skillIndex} className="text-gray-400 text-sm flex items-start">
                        <span className="text-purple-400 mr-2">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-purple-500/20"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 text-white">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">{t('soft.title')}</h3>
            </div>

            <div className="space-y-6">
              {softItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-lg bg-gray-800/50 border border-purple-500/10 hover:border-purple-500/30 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.skill}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
