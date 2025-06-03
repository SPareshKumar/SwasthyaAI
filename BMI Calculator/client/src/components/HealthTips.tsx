import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Utensils, Dumbbell, Droplets } from "lucide-react";
import { BmiResult } from "@/pages/BmiCalculator";

interface Tip {
  id: string;
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

interface HealthTipsProps {
  bmiResult: BmiResult | null;
}

export default function HealthTips({ bmiResult }: HealthTipsProps) {
  // Fetch health tips based on BMI category
  const { data: tipsByCategory } = useQuery({
    queryKey: ['/api/health-tips', bmiResult?.category],
    enabled: bmiResult !== null,
  });

  const [tips, setTips] = useState<Tip[]>([
    {
      id: "regular-monitoring",
      icon: <Scale className="h-5 w-5" />,
      title: "Monitor your BMI regularly",
      description: "Regular BMI monitoring can help track your health progress and make necessary adjustments to your lifestyle.",
      color: "bg-primary-100 text-primary-600",
    },
    {
      id: "balanced-nutrition",
      icon: <Utensils className="h-5 w-5" />,
      title: "Balanced nutrition is key",
      description: "Focus on a diet rich in fruits, vegetables, lean proteins, and whole grains while limiting processed foods.",
      color: "bg-green-100 text-green-600",
    },
    {
      id: "physical-activity",
      icon: <Dumbbell className="h-5 w-5" />,
      title: "Regular physical activity",
      description: "Aim for at least 150 minutes of moderate activity or 75 minutes of vigorous activity weekly.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: "stay-hydrated",
      icon: <Droplets className="h-5 w-5" />,
      title: "Stay hydrated",
      description: "Drink plenty of water throughout the day to support metabolism and overall health.",
      color: "bg-blue-100 text-blue-600",
    },
  ]);

  useEffect(() => {
    if (tipsByCategory) {const iconMap: Record<string, JSX.Element> = {
      "regular-monitoring": <Scale className="h-5 w-5" />,
      "balanced-nutrition": <Utensils className="h-5 w-5" />,
      "physical-activity": <Dumbbell className="h-5 w-5" />,
      "stay-hydrated": <Droplets className="h-5 w-5" />,
    };

    const tipsWithIcons = (tipsByCategory as any[]).map((tip: any) => ({
   ...tip,
      icon: iconMap[tip.id] || null,
    }));

    setTips(tipsWithIcons);
  }
}, [tipsByCategory]);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6 md:p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">BMI Health Tips</h2>
        
        <motion.div 
          className="space-y-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <AnimatePresence>
            {tips.map((tip, index) => (
              <motion.div 
                key={tip.id}
                variants={item}
                className="p-4 border border-gray-100 rounded-xl hover:shadow-md transition-all hover:border-gray-200 cursor-pointer"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                custom={index}
                layout
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 ${tip.color} p-2 rounded-lg`}>
                    {tip.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">{tip.title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{tip.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </CardContent>
    </Card>
  );
}
