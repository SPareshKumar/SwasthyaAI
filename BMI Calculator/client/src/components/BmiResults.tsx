import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { BmiData, BmiResult } from "@/pages/BmiCalculator";

interface BmiResultsProps {
  bmiData: BmiData;
  bmiResult: BmiResult;
  onRecalculate: () => void;
}

export default function BmiResults({ bmiData, bmiResult, onRecalculate }: BmiResultsProps) {
  const { unitSystem, weight, weightImperial } = bmiData;
  const { bmi, category, color, message, indicatorPosition, healthyRange } = bmiResult;

  // Format ranges
  const formatWeight = (value: number): string => {
    return value.toFixed(1);
  };

  // Get weight unit
  const weightUnit = unitSystem === "metric" ? "kg" : "lbs";
  const displayWeight = unitSystem === "metric" ? weight : weightImperial;

  // Get category color class
  const getCategoryColorClass = (): string => {
    switch (color) {
      case "bg-blue-500":
        return "bg-blue-500";
      case "bg-green-500":
        return "bg-green-500";
      case "bg-yellow-500":
        return "bg-yellow-500";
      case "bg-red-500":
        return "bg-red-500";
      default:
        return "bg-green-500";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="space-y-8"
    >
      <Card className="overflow-hidden bg-white shadow-md">
        <CardContent className="p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your BMI Result</h2>
            <div className="flex justify-center items-center">
              <motion.div 
                className="text-5xl font-bold text-primary"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 10, 
                  delay: 0.2 
                }}
              >
                {bmi.toFixed(1)}
              </motion.div>
              <motion.div 
                className={`ml-2 px-3 py-1 rounded-full text-sm font-medium text-white ${getCategoryColorClass()}`}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {category}
              </motion.div>
            </div>
          </div>

          {/* BMI Gauge */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex">
                <div className="flex-1 bg-blue-500" style={{ background: "linear-gradient(90deg, #3B82F6 0%, #3B82F6 16%)" }}></div>
                <div className="flex-1 bg-green-500" style={{ background: "linear-gradient(90deg, #10B981 0%, #10B981 35%)" }}></div>
                <div className="flex-1 bg-yellow-500" style={{ background: "linear-gradient(90deg, #FBBF24 0%, #FBBF24 25%)" }}></div>
                <div className="flex-1 bg-red-500" style={{ background: "linear-gradient(90deg, #EF4444 0%, #EF4444 25%)" }}></div>
              </div>
              <motion.div 
                className="absolute h-14 w-1 bg-white bottom-0 transform -translate-x-1/2 shadow-md"
                style={{ 
                  left: indicatorPosition,
                  boxShadow: "0 0 5px rgba(0,0,0,0.3)"
                }}
                initial={{ height: 0 }}
                animate={{ height: 14 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
              ></motion.div>
              <div className="absolute bottom-0 transform -translate-x-1/2 text-[10px] font-medium text-gray-600" style={{ left: "8%" }}>16</div>
              <div className="absolute bottom-0 transform -translate-x-1/2 text-[10px] font-medium text-gray-600" style={{ left: "25%" }}>18.5</div>
              <div className="absolute bottom-0 transform -translate-x-1/2 text-[10px] font-medium text-gray-600" style={{ left: "43%" }}>25</div>
              <div className="absolute bottom-0 transform -translate-x-1/2 text-[10px] font-medium text-gray-600" style={{ left: "68%" }}>30</div>
              <div className="absolute bottom-0 transform -translate-x-1/2 text-[10px] font-medium text-gray-600" style={{ left: "92%" }}>40</div>
            </div>
            <div className="flex text-xs mt-1 text-gray-500 justify-between">
              <span>Underweight</span>
              <span>Normal</span>
              <span>Overweight</span>
              <span>Obese</span>
            </div>
          </motion.div>

          {/* Personalized Message */}
          <motion.div 
            className="p-4 bg-primary-50 rounded-lg mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: message }}></p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 gap-4 mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">Healthy weight range</div>
              <div className="font-semibold">
                {formatWeight(healthyRange.min)} - {formatWeight(healthyRange.max)} {weightUnit}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-xs text-gray-500 mb-1">Body weight</div>
              <div className="font-semibold">
                {displayWeight} {weightUnit}
              </div>
            </div>
          </motion.div>

          {/* Recalculate Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              onClick={onRecalculate} 
              className="w-full border-primary text-primary hover:bg-primary-50 font-medium"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Recalculate BMI
            </Button>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
