"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Brain,
  Bot,
  Palette,
  Sparkles,
  Zap,
  ExternalLink,
  Github
} from "lucide-react";
import { motion } from "framer-motion";
import { ExpandableCardDemo } from "@/components/ui/expandable-card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export function ProjectSection() {
  type ProjectTabKey = 'webdev' | 'aiml' | 'aiagents' | 'others';
  const [activeTab, setActiveTab] = useState<ProjectTabKey>("webdev");

  // Project data categorized by type
  const projectsData: Record<ProjectTabKey, ProjectCategory> = {
    webdev: {
      title: "Web Development",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      projects: [
        {
          title: "Privee",
          description: "Privacy-first real-time messaging platform with zero data retention",
          src: "/privee.png",
          ctaText: "View Live",
          ctaLink: "https://advanced-privee.vercel.app/",
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Built a secure, privacy-focused chat application that prioritizes user confidentiality
                through real-time messaging without any data persistence. The platform ensures complete
                privacy by implementing a zero-storage architecture where conversations exist only in
                memory during active sessions.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Instant messaging with WebSocket connections</li>
                  <li>• Zero data persistence for maximum privacy protection</li>
                  <li>• Responsive, intuitive user interface design</li>
                  <li>• Cross-platform compatibility and accessibility</li>
                  <li>• Real-time user presence indicators</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Node.js",
                    "Express.js",
                    "Socket.io",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  href="https://advanced-privee.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
              </div>
            </div>
          ),
        },
        {
          title: "Cook Connect",
          description: "Social recipe sharing platform with community-driven culinary discovery",
          src: "/cookconnect.png",
          ctaText: "View Demo",
          ctaLink: "https://advanced-cook-connect.vercel.app/", // Add your actual link
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Developed a comprehensive recipe sharing ecosystem that connects culinary enthusiasts
                worldwide. The platform combines social networking features with recipe management,
                enabling users to discover new dishes, share cooking experiences, and build a
                community around their passion for food.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Secure user authentication and personalized profiles</li>
                  <li>• Rich recipe creation with image uploads and step-by-step instructions</li>
                  <li>• Social engagement through follows, likes, and comments</li>
                  <li>• Advanced search with filters by cuisine, dietary preferences, and ingredients</li>
                  <li>• Mobile-responsive design optimized for all devices</li>
                  <li>• Recipe rating and review system</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Node.js", "MongoDB", "Express.js", "JWT", "Cloudinary"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  href="https://advanced-cook-connect.vercel.app/" // Add your demo link
                  className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/me21jarus/advanced-cook-connect" // Add your GitHub link
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          ),
        },
        {
          title: "Smart Expense Tracker",
          description: "AI-powered personal finance management with intelligent categorization",
          src: "/tracker.png",
          ctaText: "View Demo",
          ctaLink: "https://smart-expense-tracker-eight.vercel.app/", // Add your actual link
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Created an intelligent expense management solution that leverages AI to automatically
                categorize transactions and provide actionable financial insights. The application
                features advanced analytics, budget tracking, and receipt processing to help users
                make informed financial decisions.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• AI-powered automatic expense categorization</li>
                  <li>• Interactive dashboard with dynamic charts and analytics</li>
                  <li>• Smart budget planning with customizable alerts</li>
                  <li>• OCR-enabled receipt scanning and data extraction</li>
                  <li>• Comprehensive reporting with multiple export formats</li>
                  <li>• Spending trend analysis and financial insights</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "Chart.js", "Node.js", "MongoDB", "OCR API", "JWT"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  href="https://smart-expense-tracker-eight.vercel.app/" // Add your demo link
                  className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/me21jarus/Smart-Expense-Tracker" // Add your GitHub link
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          ),
        },
        {
          title: "Enterprise Monitoring Dashboard",
          description: "Real-time system monitoring solution developed during Oracle internship",
          src: "/dashboard.png",
          ctaText: "View Details",
          ctaLink: "https://internship-oracle.vercel.app/", // Add your actual link
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Engineered a comprehensive enterprise monitoring solution during my Oracle internship,
                designed to provide real-time visibility into system performance and infrastructure
                health. The dashboard delivers critical metrics, proactive alerting, and historical
                analytics to support enterprise-level operations.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Real-time system metrics visualization and monitoring</li>
                  <li>• Configurable alert thresholds with intelligent notifications</li>
                  <li>• Historical data analysis with trend identification</li>
                  <li>• Multi-server monitoring with centralized management</li>
                  <li>• Enterprise-grade security and role-based access control</li>
                  <li>• Scalable architecture for high-availability environments</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "D3.js", "WebSocket", "Oracle Database", "REST API", "Docker"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-lg text-sm">
                  Developed during Oracle Internship
                </span>
              </div>
            </div>
          ),
        },
        {
          title: "Interactive Rock Paper Scissors",
          description: "Modern web-based game with enhanced AI opponent and smooth animations",
          src: "/rps.png",
          ctaText: "Play Game",
          ctaLink: "https://adavnced-rock-paper-scissor-game.vercel.app/",
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Reimagined the classic Rock Paper Scissors game with modern web technologies,
                featuring an intelligent computer opponent, smooth animations, and engaging
                gameplay mechanics. The project demonstrates proficiency in game development
                fundamentals and interactive user interface design.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Intuitive click-based gameplay with visual feedback</li>
                  <li>• Smart computer AI with randomized decision making</li>
                  <li>• Dynamic score tracking and game statistics</li>
                  <li>• Smooth CSS animations and transitions</li>
                  <li>• Responsive design for desktop and mobile devices</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "DOM Manipulation",
                    "Game Logic",
                    "Responsive Design",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  href="https://adavnced-rock-paper-scissor-game.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Play Game
                </a>
                <a
                  href="https://github.com/me21jarus/Adavnced-Rock-Paper-Scissor-Game"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          ),
        },
        {
          title: "Advanced Tic Tac Toe",
          description: "Strategic game implementation with intelligent AI and modern interface",
          src: "/ttt.png",
          ctaText: "Play Game",
          ctaLink: "https://advanced-tic-tac-toe-game-beta.vercel.app/",
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Developed an advanced Tic Tac Toe game featuring strategic AI implementation
                and polished user experience. The project showcases algorithm design, game
                theory concepts, and modern web development practices with clean, maintainable code.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Strategic AI opponent with minimax algorithm implementation</li>
                  <li>• Intelligent move prediction and blocking strategies</li>
                  <li>• Instant win condition detection and game state management</li>
                  <li>• One-click game reset with session persistence</li>
                  <li>• Modern, accessible user interface design</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "HTML5",
                    "CSS3",
                    "JavaScript",
                    "Algorithm Design",
                    "Game AI",
                    "Minimax Algorithm",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  href="https://advanced-tic-tac-toe-game-beta.vercel.app/"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Play Game
                </a>
                <a
                  href="https://github.com/me21jarus/advanced-tic-tac-toe-game"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          ),
        },
      ],
    },
    aiml: {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      projects: [
        {
          title: "Real-Time Emotion Detection System",
          description: "Deep learning-powered facial emotion recognition with live video processing",
          src: "/emotion.png",
          ctaText: "View Code",
          ctaLink: "https://github.com/me21jarus/emotion-detection-system", // Add your GitHub link
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Engineered a sophisticated emotion detection system that analyzes facial expressions
                in real-time using deep learning models. The system accurately identifies seven distinct
                emotions including happiness, sadness, anger, fear, surprise, disgust, and neutral states,
                with applications in human-computer interaction and behavioral analysis.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Real-time facial emotion detection with live camera feed</li>
                  <li>• Multi-class emotion classification (7 primary emotions)</li>
                  <li>• High-accuracy CNN model trained on FER2013 dataset</li>
                  <li>• Confidence score display with prediction probability</li>
                  <li>• Batch processing capability for image collections</li>
                  <li>• Face detection and preprocessing pipeline</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "FER2013", "NumPy"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  href="https://github.com/me21jarus/emotion-detection-system" // Add your GitHub link
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              </div>
            </div>
          ),
        },
        {
          title: "Change Detection in Satellite Imagery",
          description: "Advanced remote sensing analysis for environmental monitoring using deep learning",
          src: "/ml.png",
          ctaText: "View Code",
          ctaLink: "https://github.com/roltrox7/change_detection_using_rs_images",
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Developed a comprehensive satellite image analysis system that detects and quantifies
                environmental changes caused by human activities. The solution employs advanced deep
                learning techniques to process multi-temporal satellite imagery and identify
                deforestation, urban expansion, and agricultural changes with high precision.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Multi-temporal satellite image processing and analysis</li>
                  <li>• Deep learning model for change detection classification</li>
                  <li>• Advanced change detection algorithms with pixel-level accuracy</li>
                  <li>• Remote sensing data preprocessing and georeferencing</li>
                  <li>• Environmental impact assessment and quantification</li>
                  <li>• Temporal analysis for trend identification</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "Deep Learning", "Computer Vision", "Remote Sensing", "GDAL", "Rasterio", "Scikit-learn"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  href="https://github.com/roltrox7/change_detection_using_rs_images"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              </div>
            </div>
          ),
        },
        {
          title: "Volume Control Hand Gesture System",
          description: "Computer vision-based gesture recognition for touchless system interaction",
          src: "/volume.png",
          ctaText: "View Code",
          ctaLink: "https://github.com/me21jarus/Volume-Gesture",
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Created an innovative touchless control system that translates hand gestures into
                system volume adjustments using computer vision and machine learning. The system
                provides precise finger tracking and smooth gesture-to-volume mapping, offering
                an intuitive alternative to traditional hardware controls.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Real-time hand gesture recognition and tracking</li>
                  <li>• Precise finger distance calculation for volume mapping</li>
                  <li>• Seamless system audio integration and control</li>
                  <li>• Smooth gesture-to-volume conversion with noise filtering</li>
                  <li>• Cross-platform compatibility (Windows, macOS, Linux)</li>
                  <li>• Calibration system for personalized gesture sensitivity</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "OpenCV", "MediaPipe", "Computer Vision", "NumPy", "Pycaw", "Math"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  href="https://github.com/me21jarus/Volume-Gesture"
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              </div>
            </div>
          ),
        },
        {
          title: "AI-Powered Document Summarizer",
          description: "Intelligent text summarization using advanced NLP and transformer models",
          src: "/summarizer.png",
          ctaText: "View Code",
          ctaLink: "https://github.com/me21jarus/file-summariser", // Add your GitHub link
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Developed an advanced document summarization tool that leverages state-of-the-art
                natural language processing techniques to extract key information from large
                documents. The system supports both extractive and abstractive summarization
                methods, providing users with flexible options for content condensation.
              </p>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Key Features:
                </h4>
                <ul className="space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Multi-format document support (PDF, TXT, DOCX, HTML)</li>
                  <li>• Dual summarization modes: extractive and abstractive</li>
                  <li>• Customizable summary length and compression ratios</li>
                  <li>• Key phrase and entity extraction capabilities</li>
                  <li>• Batch processing for multiple documents</li>
                  <li>• Interactive web interface with real-time processing</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Python", "NLTK", "Transformers", "SpaCy", "PyPDF2", "Streamlit", "BERT"].map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 pt-4">
                <a
                  href="https://github.com/me21jarus/file-summariser" // Add your GitHub link
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  View Repository
                </a>
              </div>
            </div>
          ),
        },
      ],
    },
    aiagents: {
      title: "AI Agents",
      icon: Bot,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      projects: [
        // Add your AI Agents projects here
        {
          title: "Coming Soon",
          description: "Exciting AI Agent projects in development",
          src: "/comingsoon.png",
          ctaText: "Stay Tuned",
          ctaLink: "#",
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                AI Agent projects are currently in development. Stay tuned for innovative
                autonomous systems and intelligent agents that will showcase advanced AI capabilities.
              </p>
            </div>
          ),
        },
      ],
    },
    others: {
      title: "Other Projects",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      projects: [
        // Add your other projects here
        {
          title: "More Projects Coming",
          description: "Additional creative and technical projects",
          src: "/comingsoon.png",
          ctaText: "Explore",
          ctaLink: "#",
          content: () => (
            <div className="space-y-4">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                More diverse projects spanning different technologies and creative domains
                are coming soon. This section will showcase experimental work and innovative solutions.
              </p>
            </div>
          ),
        },
      ],
    },
  };

  interface ProjectCard {
    title: string;
    description: string;
    src: string;
    ctaText: string;
    ctaLink: string;
    content: () => React.ReactNode;
  }

  interface ProjectCategory {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    bgColor: string;
    projects: ProjectCard[];
  }

  const renderTabContent = (category: ProjectCategory): React.JSX.Element => {
    if (category.projects.length > 0) {
      return (
        <div className="transition-opacity duration-300 opacity-100">
          <ExpandableCardDemo cards={category.projects} />
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div
          className={`relative p-6 bg-gradient-to-r ${category.color} rounded-full text-white shadow-xl mb-6`}
        >
          <category.icon className="w-12 h-12 relative z-10" />
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
            Coming Soon
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md">
            Exciting {category.title.toLowerCase()} projects are currently in
            development. Stay tuned for amazing innovations!
          </p>

          <div className="mt-8 px-8 py-4 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full relative overflow-hidden">
            <span className="relative z-10 text-xs font-medium text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Sparkles className="w-3 h-3" />
              Under Development
              <Zap className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="projects"
      className="bg-slate-50 dark:bg-slate-900 py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-8 lg:px-16 xl:px-20 relative z-10">
        <div className="space-y-12">
          {/* Header */}

          {/* Replace this in your ProjectSection component */}
          <div className="text-center space-y-4">
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
                Projects
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
              Showcase of my latest work and achievements across different technologies with cutting-edge solutions
            </motion.p>
          </div>

          {/* Compact Tabs like Aceternity */}
          <Tabs defaultValue="webdev" value={activeTab} onValueChange={(value) => setActiveTab(value as ProjectTabKey)}>
            <div className="space-y-8">
              {/* Tab Navigation */}
              <div className="flex justify-center">
                <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:grid-cols-none lg:flex">
                  {Object.entries(projectsData).map(([key, tab]) => (
                    <TabsTrigger
                      key={key}
                      value={key}
                      icon={<tab.icon className="w-4 h-4" />}
                      hideTextOnMobile={true}
                    >
                      {tab.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* Tab Content */}
              {Object.entries(projectsData).map(([key, tab]) => (
                <TabsContent key={key} value={key} className="relative min-h-[400px]">
                  <Card className={`${tab.bgColor} border-0 shadow-lg`}>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-8">
                        <div className={`p-3 bg-gradient-to-r ${tab.color} rounded-xl text-white shadow-lg`}>
                          <tab.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-800 dark:text-white">
                            {tab.title} Projects
                          </h4>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            {tab.projects.length > 0
                              ? `${tab.projects.length} projects showcasing expertise in ${tab.title.toLowerCase()}`
                              : "Exciting projects coming soon"}
                          </p>
                        </div>
                      </div>
                      {renderTabContent(tab)}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
}