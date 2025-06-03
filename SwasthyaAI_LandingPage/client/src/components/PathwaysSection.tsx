import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import bmiChartImage from "@/assets/images/bmi-chart.jpeg";

interface PathwayCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  buttonText: string;
  delay: number;
  onClick: () => void;
}

const PathwayCard: React.FC<PathwayCardProps> = ({ 
  id, 
  title, 
  description, 
  imageUrl, 
  buttonText, 
  delay,
  onClick 
}) => {
  return (
    <motion.div 
      id={id}
      className="glassmorphism rounded-2xl shadow-lg hover:shadow-xl p-8 transition-all duration-300 hover:-translate-y-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      data-scroll
    >
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover rounded-xl mb-6" 
      />
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <div className="h-20 flex items-end">
        <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-3 rounded-xl hover:shadow-lg transition duration-300 transform hover:scale-105 flex items-center justify-center"
          onClick={onClick}
          >
          {buttonText} <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
};

const PathwaysSection: React.FC = () => {
  const pathways = [
    {
      id: "diet",
      title: "Diet Recommendation",
      description: "Eat smart, stay fit — meals made for YOU",
      imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      buttonText: "Explore Diet AI",
      onClick: () => window.open("https://indian-diet-guide.onrender.com", "_blank"),
    },
    {
      id: "bmi",
      title: "BMI",
      description: "Know your numbers and take control",
      imageUrl: bmiChartImage,
      buttonText: "Check My BMI",
      onClick: () => window.open("https://bmi-calculator-3oj5.onrender.com", "_blank"),
    },
    {
      id: "fitness",
      title: "Health Logger",
      description: "Log meals and workouts. WhatsApp simple.",
      imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      buttonText: "Log via WhatsApp",
      onClick: () => window.open("https://smart-health-log-via-whatsapp.onrender.com/", "_blank"),
    },
  ];

  return (
    <section id="pathways" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 -translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-scroll
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start your SwasthyaAI journey</h2>
          <p className="text-lg text-gray-600">Choose the path that fits your health and wellness goals</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathways.map((pathway, index) => (
            <PathwayCard
              key={index}
              id={pathway.id}
              title={pathway.title}
              description={pathway.description}
              imageUrl={pathway.imageUrl}
              buttonText={pathway.buttonText}
              delay={index}
              onClick={pathway.onClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PathwaysSection;
