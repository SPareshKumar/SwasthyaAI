import React from 'react';
import { motion, Variants } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: "Mood.fm",
      description: "Tracks mood using heatmap and AI chatbot, and gives Spotify playlist suggestions for music therapy. Understand your emotional patterns and get personalized music recommendations.",
      icon: "🎵",
      gradient: "rgba(59, 130, 246, 0.3)", // Blue
    },
    {
      title: "Vital Cart",
      description: "From patient's reports, identifies deficiencies and possible risks of diseases, then generates a personalized custom grocery cart with targeted nutrition recommendations.",
      icon: "🛒",
      gradient: "rgba(16, 185, 129, 0.3)", // Green
    },
    {
      title: "WiseBites",
      description: "Based on user's eating preferences, generates Indian healthy recipe recommendations, and includes a chatbot for health wellness queries and nutritional guidance.",
      icon: "🍽️",
      gradient: "rgba(245, 158, 11, 0.3)", // Amber
    },
    {
      title: "WhatsApp Journal",
      description: "A smart journal using WhatsApp to log meals and workouts, create personalized tips, and provide daily wellness insights directly to your phone.",
      icon: "📱",
      gradient: "rgba(139, 92, 246, 0.3)", // Purple
    },
    {
      title: "BMI Calculator",
      description: "Sleek and user-friendly interface for calculating Body Mass Index with personalized health insights and recommendations based on your results.",
      icon: "⚖️",
      gradient: "rgba(236, 72, 153, 0.3)", // Pink
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.04, 0.62, 0.23, 0.98], // Using bezier curve instead of string
      },
    },
  };

  return (
    <section className="relative bg-black py-6 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            variants={titleVariants}
            className="mb-4"
          >
            <span className="text-teal-400 text-sm font-semibold tracking-wide uppercase">
              Powered by AI
            </span>
          </motion.div>
          
          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-white">Comprehensive</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
              Wellness Features
            </span>
          </motion.h2>
          
          <motion.p
            variants={titleVariants}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Discover our suite of AI-powered wellness tools designed to understand and enhance your health journey through personalized insights and recommendations.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <SpotlightCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              gradient={feature.gradient}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;