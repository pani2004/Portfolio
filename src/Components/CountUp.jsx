import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const CountUp = ({ value, duration = 1.5, className = '' }) => {
  const numeric = parseFloat(String(value).replace(/[^0-9.]/g, '')) || 0
  const suffix = String(value).replace(/^[0-9.]+/, '')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = null
    const step = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      setDisplay(Math.floor(progress * numeric))
      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(numeric)
    }
    requestAnimationFrame(step)
  }, [isInView, numeric, duration])

  return (
    <motion.p ref={ref} className={className}>
      {display}{suffix}
    </motion.p>
  )
}

export default CountUp
