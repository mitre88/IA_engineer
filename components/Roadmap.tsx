'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Code, Brain, Cpu, Cloud, Sparkles } from 'lucide-react';

const phaseIcons = [
  <BookOpen className="w-8 h-8" key="1" />,
  <Code className="w-8 h-8" key="2" />,
  <Brain className="w-8 h-8" key="3" />,
  <Cpu className="w-8 h-8" key="4" />,
  <Cloud className="w-8 h-8" key="5" />,
  <Sparkles className="w-8 h-8" key="6" />,
];

const phaseColors = [
  'from-blue-500 to-cyan-500',
  'from-green-500 to-emerald-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-red-500',
  'from-indigo-500 to-blue-500',
  'from-pink-500 to-rose-500',
];

export default function Roadmap() {
  const t = useTranslations('roadmap');
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const phases = [1, 2, 3, 4, 5, 6];

  return (
    <section className="relative py-20 overflow-hidden" id="roadmap">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-40 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
      </div>

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

        <div className="space-y-6">
          {phases.map((phase, index) => {
            const phaseKey = `phase${phase}` as const;
            const isExpanded = expandedPhase === index;

            // Get topics count
            const topicsCount = t.raw(`phases.${phaseKey}.topics`) ? (t.raw(`phases.${phaseKey}.topics`) as any[]).length : 0;

            return (
              <motion.div
                key={phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div
                  className={`bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 transition-all ${
                    isExpanded ? 'border-purple-500 shadow-lg shadow-purple-500/30' : 'border-gray-700'
                  }`}
                >
                  {/* Phase Header */}
                  <button
                    onClick={() => setExpandedPhase(isExpanded ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors rounded-2xl"
                  >
                    <div className="flex items-center space-x-4 flex-1">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${phaseColors[index]} text-white`}>
                        {phaseIcons[index]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">
                            {t(`phases.${phaseKey}.title`)}
                          </h3>
                          <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm font-semibold">
                            {t(`phases.${phaseKey}.duration`)}
                          </span>
                        </div>
                        <p className="text-gray-400">
                          {t(`phases.${phaseKey}.description`)}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-purple-400" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      )}
                    </motion.div>
                  </button>

                  {/* Phase Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 space-y-6">
                      {Array.from({ length: topicsCount }).map((_, topicIndex) => {
                        const topic = t.raw(`phases.${phaseKey}.topics.${topicIndex}`) as any;

                        return (
                          <motion.div
                            key={topicIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: topicIndex * 0.1 }}
                            className="bg-gray-800/50 rounded-xl p-5 border border-purple-500/20"
                          >
                            <h4 className="text-xl font-bold text-purple-300 mb-4">
                              {topic.name}
                            </h4>
                            <ul className="space-y-2">
                              {topic.items.map((item: string, itemIndex: number) => (
                                <motion.li
                                  key={itemIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: (topicIndex * 0.1) + (itemIndex * 0.05) }}
                                  className="flex items-start space-x-3 text-gray-300"
                                >
                                  <span className="text-purple-400 mt-1">▸</span>
                                  <span>{item}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </div>

                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <div className="flex justify-center my-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
