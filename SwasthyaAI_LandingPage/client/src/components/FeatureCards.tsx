import React from "react";
import { motion } from "framer-motion";
import { 
  Utensils, 
  Timer, 
  HeartPulse, 
  MessageSquare, 
  LineChart, 
  Leaf
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay }) => {
  return (
    <motion.div 
      className="flip-card h-80"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      data-scroll
    >
      <div className="flip-card-inner relative w-full h-full">
        <div className="flip-card-front absolute w-full h-full glassmorphism rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-gradient-to-br from-blue-100 to-blue-200 shadow-md">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">{title}</h3>
        </div>
        <div className="flip-card-back absolute w-full h-full glassmorphism rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const FeatureCards: React.FC = () => {
  const features = [
    {
      title: "AI Diet Planning",
      description: "Smart meals based on your lifestyle, preferences, and goals",
      icon: <Utensils className="h-12 w-12 text-rose-500" />,
    },
    {
      title: "WhatsApp-Based Health Logging",
      description: "Record, monitor, and stay healthy through WhatsApp",
      icon: <Timer className="h-12 w-12 text-indigo-500" />,
    },
    {
      title: "BMI & Health Metrics",
      description: "Instant BMI insights with intuitive charts",
      icon: <HeartPulse className="h-12 w-12 text-green-500" />,
    },
    {
      title: "Chatbot Assistant",
      description: "24/7 health advice with our AI-powered assistant",
      icon: <MessageSquare className="h-12 w-12 text-amber-500" />,
    },
    {
      title: "Progress Reports",
      description: "Track weight, calories, and workout growth visually",
      icon: <LineChart className="h-12 w-12 text-purple-500" />,
    },
    {
      title: "Veg/Non-veg Friendly",
      description: "Filter your preferences with smart meal suggestions",
      icon: <Leaf className="h-12 w-12 text-emerald-500" />,
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 translate-y-1/2 translate-x-1/4"></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Designed for your wellness journey</h2>
          <p className="text-lg text-gray-600">Discover how SwasthyaAI transforms your health and fitness experience with intelligent features designed around you.</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
