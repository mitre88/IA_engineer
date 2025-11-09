'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Lightbulb, Zap, Rocket, Clock } from 'lucide-react';

const levelIcons = [
  <Lightbulb className="w-6 h-6" key="beginner" />,
  <Zap className="w-6 h-6" key="intermediate" />,
  <Rocket className="w-6 h-6" key="advanced" />,
];

const levelColors = [
  'from-green-500 to-emerald-500',
  'from-yellow-500 to-orange-500',
  'from-purple-500 to-pink-500',
];

export default function Projects() {
  const t = useTranslations('projects');
  const levels = ['beginner', 'intermediate', 'advanced'];

  return (
    <section className="relative py-20" id="projects">
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

        <div className="space-y-12">
          {levels.map((level, levelIndex) => {
            const items = t.raw(`${level}.items`) as any[];

            return (
              <motion.div
                key={level}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: levelIndex * 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${levelColors[levelIndex]} text-white`}>
                    {levelIcons[levelIndex]}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {t(`${level}.title`)}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10, scale: 1.02 }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                    >
                      <h4 className="text-xl font-bold text-white mb-3">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 mb-4 text-sm">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.skills.map((skill: string, skillIndex: number) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{item.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
