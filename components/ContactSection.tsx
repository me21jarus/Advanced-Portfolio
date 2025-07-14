"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, Linkedin, Github, Twitter, Mail, Instagram, Sparkles } from "lucide-react"

// Animation variants
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      setShowSuccessAnimation(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // After animation completes, show success message
        setTimeout(() => {
          setSubmitStatus("success");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setShowSuccessAnimation(false);
        }, 2000);
      } else {
        setSubmitStatus("error");
        setShowSuccessAnimation(false);
      }
    } catch (error) {
      setSubmitStatus("error");
      setShowSuccessAnimation(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-slate-50 dark:bg-slate-900 py-16 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-800 opacity-50" />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-8 lg:px-16 xl:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
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
                Contact Me
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
              Ready to bring your ideas to life? Drop me a message and let's create something amazing together.
            </motion.p>
          </motion.div>

          {/* Centered Contact Form */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full max-w-2xl"
            >
              <AnimatePresence mode="wait">
                {showSuccessAnimation ? (
                  <motion.div
                    key="success-animation"
                    initial={{ scale: 1, rotate: 0 }}
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 360, 720, 1080],
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      scale: { duration: 0.5 },
                      rotate: { duration: 2, ease: "easeInOut" }
                    }}
                    className="flex items-center justify-center p-16"
                  >
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="w-24 h-24 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <Send className="w-12 h-12 text-white" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="text-2xl font-bold text-green-600 dark:text-green-400"
                      >
                        Message Sent!
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="text-slate-600 dark:text-slate-300 mt-2"
                      >
                        I'll get back to you soon!
                      </motion.p>
                    </div>
                  </motion.div>
                ) : (
                  <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 text-center">
                        Send me a message
                      </h3>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div
                          className="grid grid-cols-1 md:grid-cols-2 gap-4"
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.1 }}
                        >
                          <div className="space-y-2">
                            <Label
                              htmlFor="name"
                              className="text-slate-700 dark:text-slate-300 font-medium"
                            >
                              Name *
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              type="text"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105"
                              placeholder="Your full name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor="email"
                              className="text-slate-700 dark:text-slate-300 font-medium"
                            >
                              Email *
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105"
                              placeholder="your.email@example.com"
                            />
                          </div>
                        </motion.div>

                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <Label
                            htmlFor="subject"
                            className="text-slate-700 dark:text-slate-300 font-medium"
                          >
                            Subject *
                          </Label>
                          <Input
                            id="subject"
                            name="subject"
                            type="text"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 focus:scale-105"
                            placeholder="What's this about?"
                          />
                        </motion.div>

                        <motion.div
                          className="space-y-2"
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <Label
                            htmlFor="message"
                            className="text-slate-700 dark:text-slate-300 font-medium"
                          >
                            Message *
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-600 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 resize-none focus:scale-105"
                            placeholder="Tell me about your project or idea..."
                          />
                        </motion.div>

                        {submitStatus === "success" && !showSuccessAnimation && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"
                          >
                            <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                              Message sent successfully! I'll get back to you soon.
                            </p>
                          </motion.div>
                        )}

                        {submitStatus === "error" && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                          >
                            <p className="text-red-600 dark:text-red-400 text-sm font-medium">
                              Failed to send message. Please try again or contact me
                              directly.
                            </p>
                          </motion.div>
                        )}

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                        >
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95"
                          >
                            {isSubmitting ? (
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                Sending...
                              </div>
                            ) : (
                              <div className="flex items-center gap-2">
                                <Send className="w-4 h-4" />
                                Send Message
                              </div>
                            )}
                          </Button>
                        </motion.div>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Connect with me section - moved below form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-8">
              Connect with me
            </h3>
            <div className="flex justify-center gap-4 flex-wrap">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/suraj-e-m-407610307/",
                  color: "from-blue-500 to-blue-600",
                  hoverColor: "hover:from-blue-600 hover:to-blue-700",
                  name: "LinkedIn"
                },
                {
                  icon: Github,
                  href: "https://github.com/me21jarus",
                  color: "from-gray-700 to-gray-800",
                  hoverColor: "hover:from-gray-800 hover:to-gray-900",
                  name: "GitHub"
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com/@SurajEM1",
                  color: "from-blue-400 to-cyan-500",
                  hoverColor: "hover:from-blue-500 hover:to-cyan-600",
                  name: "Twitter"
                },
                {
                  icon: Mail,
                  href: "mailto:surajem217@gmail.com",
                  color: "from-red-500 to-red-600",
                  hoverColor: "hover:from-red-600 hover:to-red-700",
                  name: "Email"
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/suraj_em_217",
                  color: "from-pink-500 to-purple-600",
                  hoverColor: "hover:from-pink-600 hover:to-purple-700",
                  name: "Instagram"
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white rounded-lg shadow-lg transition-all duration-300 group relative overflow-hidden`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -10, 10, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <social.icon className="w-5 h-5 relative z-10" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
