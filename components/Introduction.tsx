'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, TrendingUp, Users, Zap } from 'lucide-react';

export default function Introduction() {
  const t = useTranslations('introduction');

  const responsibilities = [0, 1, 2, 3, 4, 5, 6, 7].map(i => t(`responsibilityList.${i}`));

  const reasons = [
    { title: t('reasons.0.title'), description: t('reasons.0.description'), icon: <TrendingUp className="w-8 h-8" />, color: 'from-green-500 to-emerald-500' },
    { title: t('reasons.1.title'), description: t('reasons.1.description'), icon: <Zap className="w-8 h-8" />, color: 'from-yellow-500 to-orange-500' },
    { title: t('reasons.2.title'), description: t('reasons.2.description'), icon: <Target className="w-8 h-8" />, color: 'from-purple-500 to-pink-500' },
    { title: t('reasons.3.title'), description: t('reasons.3.description'), icon: <Users className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500' },
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="intro">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What is an AI Engineer */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* Responsibilities */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-10 gradient-text-2">
            {t('responsibilities')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {responsibilities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, x: 10 }}
                className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose AI Engineering */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            {t('whyChoose')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative group"
              >
                <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${reason.color} mb-4 text-white`}>
                    {reason.icon}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3">
                    {reason.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
