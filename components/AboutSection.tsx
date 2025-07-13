"use client"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Timeline } from "@/components/ui/timeline"
import {
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  Trophy,
  Star,
  BookOpen,
  Users,
  Target,
  Sparkles,
  Heart,
  Code,
  Lightbulb,
  Rocket,
} from "lucide-react"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  }

  // Timeline data based on education years
  const timelineData = [
    {
      title: "2019",
      content: (
        <div>
          <motion.div
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-green-50 dark:bg-green-900/20 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <CardContent className="p-5 relative z-10">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg text-white shadow-lg"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Trophy className="w-5 h-5" />
                  </motion.div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white">Kendriya Vidyalaya Davangere</h4>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium text-sm">2019</span>
                      </div>
                    </div>
                    <p className="text-base font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      10th - CBSE
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 font-medium text-sm">Davangere, India</p>
                    <p className="text-green-600 dark:text-green-400 font-bold text-base">90%</p>

                    <div className="space-y-2 mt-3">
                      <h5 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Achievements
                      </h5>
                      {["School Vice Captain (2 consecutive years)", "2nd Place in State Level Debate Competition"].map(
                        (achievement, idx) => (
                          <div key={idx} className="flex items-center gap-3 group/achievement">
                            <Award className="w-4 h-4 text-yellow-500" />
                            <span className="text-slate-600 dark:text-slate-300 text-sm">{achievement}</span>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ),
    },
    {
      title: "2019-2021",
      content: (
        <div>
          <motion.div
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-purple-50 dark:bg-purple-900/20 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <CardContent className="p-5 relative z-10">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white shadow-lg"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Award className="w-5 h-5" />
                  </motion.div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white">SIR MV PU College</h4>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium text-sm">2019 - 2021</span>
                      </div>
                    </div>
                    <p className="text-base font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      12th - State Board
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 font-medium text-sm">Davangere, India</p>
                    <p className="text-green-600 dark:text-green-400 font-bold text-base">95% | KCET Rank: 3904</p>

                    <div className="grid grid-cols-2 gap-2 mt-3">
                      <div className="flex items-center gap-2 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                        <BookOpen className="w-4 h-4 text-purple-500" />
                        <span className="text-xs font-medium">Academic Excellence</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                        <Target className="w-4 h-4 text-pink-500" />
                        <span className="text-xs font-medium">Top Rank</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ),
    },
    {
      title: "2021-2025",
      content: (
        <div>
          <motion.div
            className="mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-blue-50 dark:bg-blue-900/20 backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
              <motion.div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <CardContent className="p-5 relative z-10">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg text-white shadow-lg"
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <GraduationCap className="w-5 h-5" />
                  </motion.div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                        M S Ramaiah Institution of Technology
                      </h4>
                      <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium text-sm">2021 - 2025</span>
                      </div>
                    </div>
                    <p className="text-base font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                      B.E - Information Science and Engineering
                    </p>
                    <p className="text-slate-600 dark:text-slate-300 font-medium text-sm">Bengaluru, India</p>
                    <p className="text-green-600 dark:text-green-400 font-bold text-base">CGPA: 9.15</p>

                    <div className="space-y-2 mt-3">
                      <h5 className="font-semibold text-slate-800 dark:text-white flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-yellow-500" />
                        Achievements
                      </h5>
                      <div className="flex items-center gap-3 group/achievement">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">3rd place for Final year Major project</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3">
                      <div className="flex items-center gap-1 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span className="text-xs font-medium">Graduate</span>
                      </div>
                      <div className="flex items-center gap-1 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                        <BookOpen className="w-4 h-4 text-cyan-500" />
                        <span className="text-xs font-medium">ISE</span>
                      </div>
                      <div className="flex items-center gap-1 p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                        <Star className="w-4 h-4 text-yellow-500" />
                        <span className="text-xs font-medium">9.15 CGPA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ),
    },
  ]

  // Personal highlights data
  const personalHighlights = [
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Passionate about creating seamless user experiences",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Love tackling complex challenges with innovative solutions",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    },
    {
      icon: Rocket,
      title: "Innovation Enthusiast",
      description: "Always exploring new technologies and methodologies",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
    },
    {
      icon: Heart,
      title: "Team Player",
      description: "Believe in collaborative development and knowledge sharing",
      color: "from-red-500 to-rose-500",
      bgColor: "bg-red-50 dark:bg-red-900/20",
    },
  ]

  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-900 py-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="float"
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center gap-2 mb-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Sparkles className="w-6 h-6 text-purple-500" />
              <motion.h2
                className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                About Me
              </motion.h2>
              <Sparkles className="w-6 h-6 text-purple-500" />
            </motion.div>
            
            <motion.div
              className="w-20 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            />

            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              A passionate Information Science Engineering graduate with a love for creating innovative solutions
              and building exceptional digital experiences.
            </motion.p>

            {/* Contact Details in One Line */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-4 pt-4"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: MapPin,
                  text: "Bengaluru, India",
                  color: "text-blue-500",
                  bgColor: "from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800",
                },
                {
                  icon: Phone,
                  text: "+91 9900102534",
                  color: "text-green-500",
                  bgColor: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-800",
                },
                {
                  icon: Mail,
                  text: "surajem217@gmail.com",
                  color: "text-red-500",
                  bgColor: "from-red-100 to-red-200 dark:from-red-900 dark:to-red-800",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 text-slate-600 dark:text-slate-300 group cursor-pointer relative"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div
                    className={`p-2 rounded-full bg-gradient-to-r ${item.bgColor} group-hover:shadow-lg transition-all duration-300 relative overflow-hidden`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className={`w-4 h-4 ${item.color} relative z-10`} />
                  </motion.div>
                  <span className="text-sm font-medium group-hover:text-slate-800 dark:group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Personal Highlights */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div className="text-center space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                What Drives Me
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300">The passion that fuels my journey</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {personalHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className={`${highlight.bgColor} backdrop-blur-xl border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative`}>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <CardContent className="p-6 relative z-10">
                      <div className="flex items-start gap-4">
                        <motion.div
                          className={`p-3 bg-gradient-to-r ${highlight.color} rounded-lg text-white shadow-lg`}
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        >
                          <highlight.icon className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1 space-y-2">
                          <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                            {highlight.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                            {highlight.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div className="text-center space-y-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Educational Journey
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300">Building the foundation for excellence</p>
            </motion.div>

            {/* Timeline */}
            <motion.div
              className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.005 }}
              transition={{ duration: 0.3 }}
            >
              <Timeline data={timelineData} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}