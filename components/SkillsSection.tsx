"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Database, Brain, Settings, Sparkles, Award, Target, Zap, Calendar, Building, Star } from "lucide-react"

const Badge = ({ children, className = "", variant = "default" }) => {
    const variants = {
        default: "bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-200",
        secondary: "bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
    }

    return (
        <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
        >
            {children}
        </span>
    )
}

const Card = ({ children, className = "" }) => (
    <div
        className={`bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-2xl shadow-md dark:shadow-none border border-slate-200/50 dark:border-slate-700/50 ${className}`}
    >
        {children}
    </div>
)

const CardContent = ({ children, className = "" }) => <div className={`p-4 ${className}`}>{children}</div>

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState("frontend")
    const [isVisible, setIsVisible] = useState(false)

    // Trigger shuffle when component becomes visible

    // Enhanced skills data - limited to 6 skills per category
    const skillsData = {
        frontend: {
            title: "Frontend Development",
            icon: Code,
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
            skills: [
                { name: "React", icon: "⚛️", level: "Expert", color: "bg-blue-500" },
                { name: "Next.js", icon: "🚀", level: "Advanced", color: "bg-slate-700" },
                { name: "TypeScript", icon: "📘", level: "Advanced", color: "bg-blue-600" },
                { name: "Tailwind CSS", icon: "🎨", level: "Expert", color: "bg-cyan-500" },
                { name: "JavaScript", icon: "💛", level: "Expert", color: "bg-yellow-500" },
                { name: "HTML/CSS", icon: "🌐", level: "Expert", color: "bg-orange-500" },
            ],
        },
        backend: {
            title: "Backend Development",
            icon: Database,
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
            skills: [
                { name: "Python", icon: "🐍", level: "Expert", color: "bg-yellow-500" },
                { name: "FastAPI", icon: "⚡", level: "Advanced", color: "bg-green-500" },
                { name: "Node.js", icon: "🟢", level: "Intermediate", color: "bg-green-600" },
                { name: "SQL", icon: "🗃️", level: "Advanced", color: "bg-blue-600" },
                { name: "MongoDB", icon: "🍃", level: "Intermediate", color: "bg-green-700" },
                { name: "REST APIs", icon: "🌐", level: "Expert", color: "bg-orange-500" },
            ],
        },
        aiml: {
            title: "AI/ML & Data Science",
            icon: Brain,
            color: "from-purple-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
            skills: [
                { name: "Machine Learning", icon: "🧠", level: "Advanced", color: "bg-purple-500" },
                { name: "NLP", icon: "📝", level: "Advanced", color: "bg-pink-500" },
                { name: "BART Model", icon: "🎯", level: "Expert", color: "bg-green-500" },
                { name: "Pegasus", icon: "🚀", level: "Expert", color: "bg-blue-500" },
                { name: "Pandas", icon: "🐼", level: "Expert", color: "bg-blue-800" },
                { name: "Scikit-learn", icon: "🔬", level: "Advanced", color: "bg-blue-400" },
            ],
        },
        tools: {
            title: "DevOps & Tools",
            icon: Settings,
            color: "from-orange-500 to-red-500",
            bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
            skills: [
                { name: "Git & GitHub", icon: "🐙", level: "Expert", color: "bg-slate-700" },
                { name: "Docker", icon: "🐋", level: "Intermediate", color: "bg-blue-500" },
                { name: "VS Code", icon: "💻", level: "Expert", color: "bg-blue-600" },
                { name: "AWS", icon: "🟠", level: "Intermediate", color: "bg-orange-600" },
                { name: "Linux", icon: "🐧", level: "Intermediate", color: "bg-yellow-600" },
                { name: "Postman", icon: "📮", level: "Advanced", color: "bg-orange-500" },
            ],
        },
    }

    const experienceData = [
        {
            company: "Oracle Corporation",
            role: "Software Development Intern",
            period: "Jan 2025 - Jul 2025",
            type: "Internship",
            location: "Bangalore, India",
            description: "Worked on enterprise CRM solutions, cloud-native architectures, and DevOps automation with focus on Siebel CRM customization and deployment optimization.",
            achievements: [
                "Developed real-time dashboard for monitoring Siebel component health with live status updates and log visualization",
                "Automated Siebel repository and non-repository migrations reducing deployment time and manual intervention",
                "Built CI/CD pipelines using Jenkins with automated health checks and deployment validation",
            ],
            technologies: ["Siebel CRM", "Docker", "Kubernetes", "Jenkins", "Python", "Flask", "UNIX/Linux", "Shell Scripting", "Open UI"],
            skills: ["CRM Configuration", "Cloud Native Architecture", "DevOps Automation", "Container Orchestration", "CI/CD Pipelines", "Enterprise System Integration"],
            impact: "Streamlined migration lifecycle and enhanced deployment reliability across environments with zero-downtime deployment practices",
            color: "from-red-500 to-pink-500",
            bgColor: "bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20",
            icon: Database,
            companyLogo: "🔴",
        },
        {
            company: "Bharat Electronics Limited",
            role: "Software Engineering Intern",
            period: "Sept 2024 - Oct 2024",
            type: "Internship",
            location: "Bangalore, India",
            description: "Developed an AI-driven document summarization tool using advanced NLP models and modern web technologies, focusing on offline processing capabilities for secure document handling in defense applications.",
            achievements: [
                "Engineered offline PDF/DOCX summarization tool achieving 95% accuracy using state-of-the-art BART and Pegasus transformer models",
                "Architected and developed full-stack solution with React frontend and FastAPI backend capable of handling 1000+ concurrent users",
                "Implemented robust secure document processing pipeline with zero data retention policy ensuring compliance with defense security standards",
            ],
            technologies: ["Python", "React", "FastAPI", "BART", "Pegasus", "Transformers", "NLP", "PyTorch", "JavaScript", "REST APIs"],
            skills: ["AI/ML Model Implementation", "Full-Stack Development", "API Design & Development", "Natural Language Processing", "Document Processing", "Security-First Architecture"],
            impact: "Streamlined document analysis workflow for legal and administrative teams, reducing processing time by 93% and enabling secure offline document summarization for sensitive defense applications",
            color: "from-orange-500 to-red-500",
            bgColor: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
            icon: Building,
            companyLogo: "🏢",
        },
        
    ]

    const categories = Object.keys(skillsData)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true)
        }, 500)
        return () => clearTimeout(timer)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    }

    const skillVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotateY: -180,
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
        },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            rotateY: 0,
            x: 0,
            y: 0,
            transition: {
                duration: 0.6,
                delay: i * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 15,
            },
        }),
    }

    const currentSkills = skillsData[activeCategory]

    return (
        <section id="skills" className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-8 lg:px-16 xl:px-24 relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
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
                                Skills & Experience
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
                            Exploring the intersection of creativity and technology through innovative solutions
                        </motion.p>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <motion.div
                            className="text-center space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Technical Arsenal
                                </span>
                            </h3>
                            <p className="text-base text-slate-600 dark:text-slate-300">
                                Technologies I work with to bring ideas to life
                            </p>
                        </motion.div>

                        {/* Vertical Layout: Tabs on Left, Skills on Right */}
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Vertical Category Tabs */}
                            <motion.div
                                className="lg:w-64 flex lg:flex-col gap-3"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {categories.map((category, index) => {
                                    const categoryData = skillsData[category]
                                    const Icon = categoryData.icon
                                    return (
                                        <motion.button
                                            key={category}
                                            onClick={() => setActiveCategory(category)}
                                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 text-left w-full ${activeCategory === category
                                                ? `bg-gradient-to-r ${categoryData.color} text-white shadow-lg`
                                                : "bg-white/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-600"
                                                }`}
                                            whileHover={{ scale: 1.02, x: activeCategory === category ? 0 : 4 }}
                                            whileTap={{ scale: 0.98 }}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                        >
                                            <Icon className="w-4 h-4 flex-shrink-0" />
                                            <span className="hidden lg:block">{categoryData.title}</span>
                                        </motion.button>
                                    )
                                })}
                            </motion.div>

                            {/* Skills Grid */}
                            <motion.div
                                className={`flex-1 relative p-6 rounded-2xl ${currentSkills.bgColor} border border-slate-200/50 dark:border-slate-700/50 shadow-lg`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <motion.div
                                            className={`p-3 bg-gradient-to-r ${currentSkills.color} rounded-xl text-white shadow-md`}
                                            whileHover={{ rotateY: 180, scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <currentSkills.icon className="w-4 h-4" />
                                        </motion.div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-800 dark:text-white">{currentSkills.title}</h4>
                                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                                {currentSkills.skills.length} technologies mastered
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {currentSkills.skills.map((skill, index) => (
                                        <motion.div
                                            key={skill.name}
                                            custom={index}
                                            variants={skillVariants}
                                            initial="hidden"
                                            animate="visible"
                                            whileHover={{
                                                scale: 1.05,
                                                y: -4,
                                                rotateY: 10,
                                            }}
                                            className="group relative"
                                        >
                                            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
                                                <CardContent className="p-3 text-center relative">
                                                    <motion.div
                                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        style={{
                                                            background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}05)`,
                                                        }}
                                                    />

                                                    <motion.div
                                                        className="text-lg mb-2 relative z-10"
                                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        {skill.icon}
                                                    </motion.div>

                                                    <h5 className="font-semibold text-xs text-slate-800 dark:text-white mb-2 relative z-10">
                                                        {skill.name}
                                                    </h5>

                                                    <Badge
                                                        className={`relative z-10 text-black font-medium text-xs`}
                                                        style={{ backgroundColor: skill.color }}
                                                    >
                                                        {skill.level}
                                                    </Badge>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div variants={itemVariants} className="space-y-8">
                        <motion.div
                            className="text-center space-y-4"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h3 className="text-2xl font-bold">
                                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                    Professional Journey
                                </span>
                            </h3>
                            <p className="text-base text-slate-600 dark:text-slate-300">
                                Real-world impact through innovative solutions
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {experienceData.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="group relative h-full"
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.2,
                                        type: "spring",
                                        stiffness: 100,
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        y: -4,
                                    }}
                                >
                                    <Card
                                        className={`${exp.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative h-full flex flex-col`}
                                    >
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                        />

                                        <CardContent className="p-6 relative z-10 flex-grow flex flex-col justify-between">
                                            <div>
                                                {/* Company Header */}
                                                <div className="flex items-start justify-between mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <motion.div
                                                            className={`p-3 bg-gradient-to-r ${exp.color} rounded-xl text-white shadow-md`}
                                                            whileHover={{ rotateY: 180, scale: 1.1 }}
                                                            transition={{ duration: 0.6 }}
                                                        >
                                                            <exp.icon className="w-4 h-4" />
                                                        </motion.div>
                                                        <div>
                                                            <h4 className="text-lg font-bold text-slate-800 dark:text-white">{exp.role}</h4>
                                                            <p className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                                                                {exp.company}
                                                            </p>
                                                            <div className="flex items-center gap-2 mt-1">
                                                                <Calendar className="w-3 h-3 text-slate-500" />
                                                                <span className="text-sm text-slate-600 dark:text-slate-300">{exp.period}</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <motion.div
                                                        className="text-2xl"
                                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                                        transition={{ duration: 0.5 }}
                                                    >
                                                        {exp.companyLogo}
                                                    </motion.div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-base text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                                                    {exp.description}
                                                </p>

                                                {/* Impact */}
                                                <motion.div
                                                    className="mb-4 p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg border border-green-200 dark:border-green-800"
                                                    whileHover={{ scale: 1.02 }}
                                                >
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <Target className="w-4 h-4 text-green-600" />
                                                        <h5 className="font-semibold text-sm text-green-800 dark:text-green-200">Key Impact</h5>
                                                    </div>
                                                    <p className="text-xs text-green-700 dark:text-green-300">{exp.impact}</p>
                                                </motion.div>
                                            </div>

                                            <div>
                                                {/* Technologies */}
                                                <div className="mb-4">
                                                    <h5 className="font-semibold text-sm text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                                                        <Zap className="w-4 h-4 text-yellow-500" />
                                                        Technologies Used
                                                    </h5>
                                                    <div className="flex flex-wrap gap-1">
                                                        {exp.technologies.map((tech, idx) => (
                                                            <motion.div key={idx} whileHover={{ scale: 1.05, y: -1 }} transition={{ duration: 0.2 }}>
                                                                <Badge className="bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 text-xs">
                                                                    {tech}
                                                                </Badge>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Achievements */}
                                                <div className="space-y-2">
                                                    <h5 className="font-semibold text-sm text-slate-800 dark:text-white flex items-center gap-2">
                                                        <Award className="w-4 h-4 text-purple-500" />
                                                        Key Achievements
                                                    </h5>
                                                    <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-xs space-y-1 pl-2">
                                                        {exp.achievements.map((achievement, idx) => (
                                                            <motion.li
                                                                key={idx}
                                                                whileHover={{ scale: 1.01, x: 2 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
                                                            >
                                                                {achievement}
                                                            </motion.li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* Skills */}
                                                <div className="mt-4">
                                                    <h5 className="font-semibold text-sm text-slate-800 dark:text-white mb-2 flex items-center gap-2">
                                                        <Star className="w-4 h-4 text-pink-500" />
                                                        Skills Gained
                                                    </h5>
                                                    <div className="flex flex-wrap gap-1">
                                                        {exp.skills.map((skill, idx) => (
                                                            <motion.div key={idx} whileHover={{ scale: 1.05, y: -1 }} transition={{ duration: 0.2 }}>
                                                                <Badge className="bg-gradient-to-r from-pink-100 to-pink-50 dark:from-pink-900 dark:to-pink-800 text-pink-800 dark:text-pink-100 border border-pink-200 dark:border-pink-700 text-xs">
                                                                    {skill}
                                                                </Badge>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
