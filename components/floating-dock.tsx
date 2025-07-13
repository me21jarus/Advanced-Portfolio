"use client"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import type React from "react"

import { useRef } from "react"
import { cn } from "@/lib/utils"

interface FloatingDockProps {
  items: {
    title: string
    icon: React.ReactNode
    href: string
  }[]
  className?: string
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-white/10 dark:bg-black/10 backdrop-blur-xl px-4 pb-3 border border-white/20 dark:border-white/10 shadow-2xl",
        className,
      )}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
    >
      {items.map((item, index) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} index={index} />
      ))}
    </motion.div>
  )
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  index,
}: {
  mouseX: any
  title: string
  icon: React.ReactNode
  href: string
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40])

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20])

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  const y = useTransform(distance, [-150, 0, 150], [0, -40, 0])
  const ySpring = useSpring(y, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      className="aspect-square rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm flex items-center justify-center relative group"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <motion.div style={{ y: ySpring }} className="flex items-center justify-center w-full h-full">
        <motion.a
          href={href}
          target={href.startsWith("mailto:") || href.startsWith("tel:") ? "_self" : "_blank"}
          rel={
            href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("https://maps")
              ? undefined
              : "noopener noreferrer"
          }
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 relative z-10"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.a>
      </motion.div>

      {/* Tooltip */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-black/80 dark:bg-white/80 text-white dark:text-black text-sm rounded-lg backdrop-blur-md border border-white/10 dark:border-black/10 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        whileHover={{ opacity: 1, y: 0, scale: 1 }}
      >
        {title}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80 dark:border-t-white/80" />
      </motion.div>

      {/* Enhanced Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
        style={{ scale: useTransform(distance, [-150, 0, 150], [1, 1.3, 1]) }}
      />

      {/* Ripple effect on click */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20 dark:bg-black/20"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: [0, 0.3, 0] }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  )
}
