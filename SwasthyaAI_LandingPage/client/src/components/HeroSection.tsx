import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HeartPulse, Utensils } from "lucide-react";

const HeroSection: React.FC = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="home" className="relative pt-24 md:pt-32 pb-36 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-12">
          <motion.div
            className="lg:col-span-6"
            variants={containerVariants}
            initial="hidden"
            animate={isAnimated ? "visible" : "hidden"}
            data-scroll
          >
            <div className="text-center lg:text-left space-y-6 mb-8">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text leading-tight"
                variants={itemVariants}
              >
                Your Personalized Health Companion
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl text-gray-600 font-light"
                variants={itemVariants}
              >
                From healthy meals to calorie tracking — it's all here
              </motion.p>
              
              <motion.div
                className="mt-4"
                variants={itemVariants}
              >
                <p className="animate-letter text-lg md:text-xl text-gray-700 italic max-w-2xl">
                  Say goodbye to generic plans, take control of wellness.
                </p>
              </motion.div>
              
              
            </div>
          </motion.div>
          
          <motion.div
            className="lg:col-span-6 relative"
            variants={containerVariants}
            initial="hidden"
            animate={isAnimated ? "visible" : "hidden"}
            data-scroll
          >
            <motion.img
              src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900"
              alt="Woman tracking health metrics on smartphone" 
              className="w-full h-auto rounded-3xl shadow-lg"
              variants={itemVariants}
            />
            
            <motion.div
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 glassmorphism rounded-2xl shadow-lg p-4 md:p-6 max-w-[200px] md:max-w-[250px] animate-float"
              variants={itemVariants}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-500">
                  <HeartPulse className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Your BMI</p>
                  <p className="text-lg font-bold text-gray-800">22.4</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="absolute -top-6 right-0 md:-top-8 md:right-8 glassmorphism rounded-2xl shadow-lg p-4 md:p-6 max-w-[200px] md:max-w-[250px]"
              variants={itemVariants}
              animate={{
                y: [0, -10, 0],
                transition: {
                  duration: 3,
                  delay: 0.5,
                  repeat: Infinity,
                  repeatType: "loop"
                }
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500">
                  <Utensils className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Calories Burned</p>
                  <p className="text-lg font-bold text-gray-800">2,150</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;