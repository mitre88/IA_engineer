'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { BookOpen, Code, Award, Laptop } from 'lucide-react';

const categoryIcons = [
  <BookOpen className="w-6 h-6" key="courses" />,
  <Award className="w-6 h-6" key="books" />,
  <Code className="w-6 h-6" key="frameworks" />,
  <Laptop className="w-6 h-6" key="platforms" />,
];

const categoryColors = [
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
];

export default function Resources() {
  const t = useTranslations('resources');
  const categories = ['courses', 'books', 'frameworks', 'platforms'];

  return (
    <section className="relative py-20" id="resources">
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
          {categories.map((category, catIndex) => {
            const items = t.raw(`categories.${category}.items`) as any[];

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.2 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${categoryColors[catIndex]} text-white`}>
                    {categoryIcons[catIndex]}
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {t(`categories.${category}.title`)}
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                    >
                      <h4 className="text-xl font-bold text-white mb-2">
                        {item.name || item.title}
                      </h4>
                      {item.author && (
                        <p className="text-sm text-purple-400 mb-2">by {item.author}</p>
                      )}
                      {item.provider && (
                        <p className="text-sm text-purple-400 mb-2">{item.provider}</p>
                      )}
                      <p className="text-gray-400 text-sm mb-3">
                        {item.description}
                      </p>
                      {item.level && (
                        <span className="inline-block px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold">
                          {item.level}
                        </span>
                      )}
                      {item.use && (
                        <p className="text-xs text-gray-500 mt-2">Use: {item.use}</p>
                      )}
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
