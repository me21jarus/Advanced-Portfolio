"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  AnimatedTestimonials,
  Testimonial,
} from "@/components/ui/animated-testimonials";

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function CertificationsSection() {
  const certificates: Testimonial[] = [
    {
      quote:
        "Internship at Bharat Electronics Limited on 'File Summarizer', gaining experience in real-time summarization tools and offline deployment.",
      name: "Internship on File Summarizer",
      designation: "Software Development Intern",
      company: "Bharat Electronics Limited",
      date: "Aug–Sep 2024",
      src: "/certificates/Bel.png",
      skills: [
        "File Summarization",
        "Python",
        "PDF/DOCX Processing",
        "Offline App Dev",
        "Project Execution",
      ],
    },
    {
      quote:
        "Attended a 2-day workshop on AI/ML/Data Science at IISc under Pravega'24, gaining hands-on experience with real-world AI applications.",
      name: "AI/ML/Data Science Workshop",
      designation: "Workshop Participant",
      company: "IISc + Edufabrica",
      date: "January 2024",
      src: "/certificates/AIML.png",
      skills: [
        "Machine Learning",
        "Data Science",
        "Python",
        "Model Building",
        "AI Foundations",
      ],
    },
    {
      quote:
        "Awarded 3rd place for developing a framework for cognitive detection based on text/audio/video in Pradarshana 2025 at RIT.",
      name: "Cognitive Detection Project",
      designation: "Project Exhibition Award",
      company: "Ramaiah Institute of Technology",
      date: "June 2025",
      src: "/certificates/3rdplace.png",
      skills: [
        "AI Projects",
        "Multimedia Analysis",
        "Cognitive Detection",
        "Presentation",
        "Team Collaboration",
      ],
    },
  ];

  return (
    <section id="certifications" className="bg-white dark:bg-slate-800 py-16">
      <div className="container mx-auto px-8 lg:px-16 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
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
                Certification
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
              Industry-recognized certifications validating expertise in key
              technologies and methodologies
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Animated Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AnimatedTestimonials testimonials={certificates} autoplay={true} />
        </motion.div>
      </div>
    </section>
  );
}

export default CertificationsSection;