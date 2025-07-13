"use client"
import { TextGenerateEffectName } from "@/components/ui/text-generate-effect-name"
import { AnimatedRoleText } from "@/components/animated-role-text"
import { AnimatedBackground } from "@/components/animated-background"
import { TracingBeam } from "@/components/tracing-beam"
import { FloatingDock } from "@/components/floating-dock"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Download, Sparkles, ArrowRight, Send, Phone, MapPin } from "lucide-react"
import {
  AboutSection,
  SkillsSection,
  ProjectSection,
  CertificationsSection,
  ContactSection,
} from "@/components/sections"

export default function HomePage() {
  const dockItems = [
    {
      title: "GitHub",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      href: "https://github.com/me21jarus",
    },
    {
      title: "LinkedIn",
      icon: (
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://www.linkedin.com/in/suraj-e-m-395880280/",
    },
    {
      title: "Email",
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      href: "mailto:surajem217@gmail.com",
    },
    {
      title: "Call",
      icon: <Phone className="w-full h-full" />,
      href: "tel:+919900102534",
    },
    {
      title: "Location",
      icon: <MapPin className="w-full h-full" />,
      href: "https://maps.google.com/?q=Bengaluru,India",
    },
  ]

  // Function to handle resume download
  const handleDownloadResume = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a')
    link.href = '/resume/Suraj_EM_Resume.pdf' // Path to your resume file in public folder
    link.download = 'Suraj_EM_Resume.pdf' // Name for the downloaded file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Function to handle contact button click
  const handleContactClick = () => {
    // Scroll to contact section
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <TracingBeam side="left" />
      <TracingBeam side="right" />
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Main Content */}
        <div
          id="home"
          className="relative z-10 min-h-screen bg-gradient-to-br from-slate-50/90 via-white/80 to-slate-100/90 dark:from-slate-900/90 dark:via-slate-800/80 dark:to-slate-900/90 backdrop-blur-sm"
        >
          <div className="container mx-auto px-8 lg:px-16 xl:px-24 py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-4 items-center min-h-[75vh]">
              {/* Left side - Image with conditional animations */}
              <motion.div
                className="flex justify-center lg:justify-start order-2 lg:order-1"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative">
                  {/* Main image container - desktop view with animations */}
                  <div className="hidden lg:block">
                    <motion.div
                      className="relative w-72 h-72 lg:w-80 lg:h-80"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-2xl relative z-10">
                        <Image
                          src="/images/suraj-profile.jpg"
                          alt="Suraj E M - Software Developer and AI Expert"
                          width={320}
                          height={320}
                          className="w-full h-full object-cover object-center"
                          priority
                        />
                      </div>

                      {/* Animated ring around image */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      />

                      {/* Floating icons with enhanced animations */}
                      <motion.div
                        className="absolute -top-3 -right-3 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-lg group cursor-pointer"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                      >
                        <Sparkles className="w-5 h-5 text-white" />
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-150"
                          initial={false}
                        />
                      </motion.div>

                      <motion.div
                        className="absolute -bottom-5 -left-5 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group cursor-pointer"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: { duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                          scale: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                        }}
                        whileHover={{ scale: 1.3, y: -5 }}
                      >
                        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                        </div>
                        {/* Glow effect */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md scale-150"
                          initial={false}
                        />
                      </motion.div>

                      {/* Additional glow effect for the photo */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-xl"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Mobile view - simple static image */}
                  <div className="lg:hidden">
                    <motion.div
                      className="relative w-64 h-64 mx-auto"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    >
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
                        <Image
                          src="/images/suraj-profile.jpg"
                          alt="Suraj E M - Software Developer and AI Expert"
                          width={256}
                          height={256}
                          className="w-full h-full object-cover object-center"
                          priority
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Text and Info */}
              <motion.div
                className="space-y-6 order-1 lg:order-2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="space-y-4">
                  {/* Name with letter-by-letter animation - reduced text size */}
                  <div className="space-y-3">
                    <TextGenerateEffectName
                      staticText="Hi I'm"
                      animatedText="Suraj E M"
                      className="text-2xl lg:text-4xl font-bold"
                      letterDuration={0.2}
                      waitDuration={7000}
                    />
                    <motion.div
                      className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: 80 }}
                      transition={{ duration: 1, delay: 3 }}
                    />
                  </div>

                  {/* Animated role text - reduced size */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2 }}
                  >
                    <div className="text-sm lg:text-base">
                      <AnimatedRoleText />
                    </div>
                  </motion.div>
                </div>

                {/* Brief Description - 2 lines */}
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.5 }}
                >
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    2025 B.E Graduate passionate about innovative solutions.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                    Dedicated to delivering high-quality software and solving complex problems.
                  </p>
                </motion.div>

                {/* Enhanced Action Buttons - reduced spacing */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3 }}
                >
                  {/* Primary Button - Get In Touch */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                    <Button
                      size="lg"
                      onClick={handleContactClick}
                      className="relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-xl hover:shadow-2xl transition-all duration-500 text-sm px-6 py-4 border-0 cursor-pointer"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />
                      <span className="relative z-10 flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Get In Touch
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <ArrowRight className="h-3 w-3" />
                        </motion.div>
                      </span>

                      {/* Animated border */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{
                          scale: [1, 1.05, 1],
                          opacity: [0.5, 0.8, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      />
                    </Button>
                  </motion.div>

                  {/* Secondary Button - Download Resume */}
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleDownloadResume}
                      className="relative overflow-hidden rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 bg-white/10 dark:bg-black/10 backdrop-blur-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 shadow-lg hover:shadow-xl transition-all duration-500 text-sm px-6 py-4 cursor-pointer"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download Resume
                        <motion.div
                          animate={{ y: [0, -2, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Download className="h-3 w-3" />
                        </motion.div>
                      </span>

                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={false}
                      />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Floating Dock for Social Media - Full animations on desktop, simple on mobile */}
                <motion.div
                  className="flex justify-center lg:justify-start pt-8"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3.5 }}
                >
                  {/* Desktop view - Keep original FloatingDock with animations */}
                  <div className="hidden lg:block">
                    <FloatingDock items={dockItems} />
                  </div>
                  
                  {/* Mobile view - Simple buttons without animations */}
                  <div className="flex gap-4 lg:hidden">
                    {dockItems.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
                        title={item.title}
                      >
                        <div className="w-6 h-6">
                          {item.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* All sections below home */}
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </>
  )
}