import React from 'react'
import { motion } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const Reveal = ({ children, delay = 0, className = '', y = 40, once = true }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export const RevealStagger = ({ children, className = '', staggerDelay = 0.08, once = true }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.15 }}
      transition={{ staggerChildren: staggerDelay }}
    >
      {children}
    </motion.div>
  )
}

export const RevealItem = ({ children, className = '', y = 24 }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
