"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"

export const TracingBeam = ({ className, side = "left" }: { className?: string; side?: "left" | "right" }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setSvgHeight(ref.current.offsetHeight)
    }
  }, [])

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), {
    stiffness: 500,
    damping: 90,
  })

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), {
    stiffness: 500,
    damping: 90,
  })

  return (
    <motion.div
      ref={ref}
      className={`fixed ${side === "left" ? "left-1 md:left-2" : "right-1 md:right-2"} top-0 h-full w-8 z-40 ${className}`}
    >
      <svg viewBox={`0 0 32 ${svgHeight}`} width="32" height={svgHeight} className="block" aria-hidden="true">
        {/* Desktop/Laptop curved path */}
        <motion.path
          d={`M 2 0 V -36 l 28 24 V ${svgHeight * 0.8} l -28 24 V ${svgHeight}`}
          fill="none"
          stroke="#1f2937"
          strokeOpacity="0.4"
          strokeWidth="3"
          className="hidden md:block"
          transition={{
            duration: 10,
          }}
        />
        <motion.path
          d={`M 2 0 V -36 l 28 24 V ${svgHeight * 0.8} l -28 24 V ${svgHeight}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          className="motion-reduce:hidden hidden md:block"
          transition={{
            duration: 10,
          }}
        />
        
        {/* Mobile straight path */}
        <motion.path
          d={`M 16 0 V ${svgHeight}`}
          fill="none"
          stroke="#1f2937"
          strokeOpacity="0.4"
          strokeWidth="3"
          className="block md:hidden"
          transition={{
            duration: 10,
          }}
        />
        <motion.path
          d={`M 16 0 V ${svgHeight}`}
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="4"
          className="motion-reduce:hidden block md:hidden"
          transition={{
            duration: 10,
          }}
        />
        
        <defs>
          <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
            <stop stopColor="#1e40af" stopOpacity="0" />
            <stop stopColor="#1e40af" />
            <stop offset="0.325" stopColor="#7c3aed" />
            <stop offset="1" stopColor="#be185d" stopOpacity="0" />
          </motion.linearGradient>
        </defs>
        
        {/* Animated circles */}
        <motion.circle cx="16" cy={y1} r="5" fill="#1e40af" className="opacity-90" />
        <motion.circle cx="16" cy={y2} r="3" fill="#7c3aed" className="opacity-80" />
      </svg>
    </motion.div>
  )
}