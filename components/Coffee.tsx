'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Coffee as CoffeeIcon, Heart, CheckCircle, Share2 } from 'lucide-react';

const STRIPE_LINK = 'https://buy.stripe.com/9B63cvcLObRc8ZJ81bfbq0b';

export default function Coffee() {
  const t = useTranslations('coffee');
  const benefits = [0, 1, 2, 3].map(i => t(`benefits.items.${i}`));

  return (
    <section className="relative py-20 overflow-hidden" id="coffee">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Animated Coffee Icon */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 mx-auto bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl flex items-center justify-center transform rotate-12 glow-pink">
              <CoffeeIcon className="w-14 h-14 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-400 mb-3">
            {t('subtitle')}
          </p>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 mb-10 border border-yellow-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <Heart className="w-6 h-6 text-pink-500 mr-2" />
              {t('benefits.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full text-white font-bold text-xl shadow-2xl"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 60px rgba(245, 158, 11, 0.8)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <CoffeeIcon className="w-7 h-7" />
              <span>{t('button')}</span>
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 mt-8"
          >
            {t('thanks')}
          </motion.p>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex items-center justify-center text-gray-400"
          >
            <Share2 className="w-5 h-5 mr-2" />
            <span>{t('share')}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
