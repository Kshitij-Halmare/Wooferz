import React from 'react';
import { motion } from 'framer-motion';

const defaultAvatar = 'src/assets/home2.jpg';

export default function Founder() {
  return (
    <div className="bg-orange-50 min-h-screen w-full flex flex-col md:flex-row items-stretch justify-stretch">
      <motion.div
        className="w-full md:w-1/2 flex items-center justify-center relative"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src={defaultAvatar}
          alt="Aniruddh Lakha"
          className="rounded-3xl shadow-2xl w-4/5 h-72 md:h-[500px] object-cover object-center mx-auto"
          style={{ borderRadius: '1.5rem' }}
        />
        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-30 -z-10"></div>
      </motion.div>
      <motion.div
        className="flex-1 flex flex-col justify-center px-6 py-12 md:py-0 md:px-16"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
      >
        <div className="mb-6 text-center md:text-left">
          <span className="block text-3xl md:text-4xl font-extrabold text-orange-600 mb-2">
            Aniruddh Lakha
          </span>
          <div className="w-16 h-1 bg-orange-300 rounded mx-auto md:mx-0 mb-2"></div>
          <span className="text-orange-400 font-semibold text-base tracking-wide">
            Founder
          </span>
        </div>
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          Founder's Note
        </h1>
        <p className="text-gray-700 text-lg text-left mb-4">
          I’m Anirudh Lakha, founder of Nagpur Street Dogs (NSD). What began in
          2020 as a solo mission to feed starving street dogs during the COVID
          lockdown has now grown into a movement of 100+ volunteers. From rescue
          ops to vaccination camps, water pot drives to our Radium Belt Project,
          we’re creating a safer, kinder world for street animals—one step at a
          time.
        </p>
        <blockquote className="italic text-orange-600 border-l-4 border-orange-400 pl-4 mt-4">
          "Every life matters. Compassion, action, and community can change the
          world for those who cannot speak for themselves."
        </blockquote>
      </motion.div>
    </div>
  );
}
