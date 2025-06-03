import { useState } from "react";
import { motion } from "framer-motion";
import BmiForm from "@/components/BmiForm";
import BmiResults from "@/components/BmiResults";
import HealthTips from "@/components/HealthTips";
import LifestyleImages from "@/components/LifestyleImages";
import BackgroundIllustration from "@/components/BackgroundIllustration";

// Types
export type Gender = "male" | "female";
export type UnitSystem = "metric" | "imperial";

export interface BmiData {
  gender: Gender;
  age: number;
  height: number; // in cm or inches based on unit
  weight: number; // in kg or lbs based on unit
  unitSystem: UnitSystem;
  feet?: number;
  inches?: number;
}

export interface BmiResult {
  bmi: number;
  category: string;
  color: string;
  message: string;
  indicatorPosition: string;
  healthyRange: {
    min: number;
    max: number;
  };
}

export default function BmiCalculator() {
  const [bmiData, setBmiData] = useState<BmiData | null>(null);
  const [bmiResult, setBmiResult] = useState<BmiResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleCalculate = (data: BmiData, result: BmiResult) => {
    setBmiData(data);
    setBmiResult(result);
    setShowResults(true);
  };

  const handleRecalculate = () => {
    setShowResults(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative">
      <BackgroundIllustration />
      
      <motion.section 
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">BMI Calculator</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your Body Mass Index to check if your weight is healthy for your height and get personalized recommendations.
        </p>
      </motion.section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {!showResults ? (
            <BmiForm onCalculate={handleCalculate} />
          ) : (
            <BmiResults 
              bmiData={bmiData!} 
              bmiResult={bmiResult!} 
              onRecalculate={handleRecalculate} 
            />
          )}
        </motion.div>

        <motion.div 
          className="lg:col-span-5 space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <HealthTips bmiResult={bmiResult} />
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Healthy Lifestyle Inspiration</h2>
        <LifestyleImages />
      </motion.section>
    </div>
  );
}
