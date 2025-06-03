import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Mars, Venus, Calculator } from "lucide-react";
import { BmiData, BmiResult, Gender, UnitSystem } from "@/pages/BmiCalculator";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
};

// Form schema
const formSchema = z.object({
  gender: z.enum(["male", "female"]),
  age: z.number().min(2, "Age must be at least 2").max(120, "Age must be at most 120"),
  height: z.number().optional(),
  weight: z.number().optional(),
  unitSystem: z.enum(["metric", "imperial"]),
  feet: z.number().optional(),
  inches: z.number().optional(),
  weightImperial: z.number().optional(),
});

interface BmiFormProps {
  onCalculate: (data: BmiData, result: BmiResult) => void;
}

export default function BmiForm({ onCalculate }: BmiFormProps) {
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "male",
      age: 25,
      height: 170,
      weight: 70,
      unitSystem: "metric",
      feet: 5,
      inches: 7,
      weightImperial: 154,
    },
  });

  // Function to calculate BMI and determine category
  const calculateBMI = (data: z.infer<typeof formSchema>) => {
    let bmi: number;
    let height: number;
    let weight: number;
    
    if (data.unitSystem === "metric") {
      height = data.height! / 100; // convert cm to meters
      weight = data.weight!;
      bmi = weight / (height * height);
    } else {
      // Convert feet/inches to meters
      height = ((data.feet! * 12) + data.inches!) * 0.0254;
      weight = data.weightImperial! / 2.205; // convert lbs to kg
      bmi = weight / (height * height);
    }
    
    // Round to 1 decimal place
    bmi = Math.round(bmi * 10) / 10;
    
    // Determine category, color, message, and indicator position
    let category: string;
    let color: string;
    let message: string;
    let indicatorPosition: string;
    
    if (bmi < 16) {
      category = "Severely Underweight";
      color = "bg-blue-500";
      message = "Your BMI indicates you're <strong>severely underweight</strong>. This can be associated with health risks. Consider consulting a healthcare professional.";
      indicatorPosition = "8%";
    } else if (bmi < 18.5) {
      category = "Underweight";
      color = "bg-blue-500";
      message = "Your BMI indicates you're <strong>underweight</strong>. Focus on nutrient-dense foods and consider consulting a nutritionist to gain weight healthily.";
      indicatorPosition = (((bmi - 16) / (18.5 - 16)) * (25 - 8) + 8) + "%";
    } else if (bmi < 25) {
      category = "Normal";
      color = "bg-green-500";
      message = "Your BMI indicates you're in the <strong>normal weight</strong> range. Maintaining a healthy weight reduces your risk of health problems.";
      indicatorPosition = (((bmi - 18.5) / (25 - 18.5)) * (43 - 25) + 25) + "%";
    } else if (bmi < 30) {
      category = "Overweight";
      color = "bg-yellow-500";
      message = "Your BMI indicates you're <strong>overweight</strong>. Consider increasing physical activity and making dietary adjustments to achieve a healthier weight.";
      indicatorPosition = (((bmi - 25) / (30 - 25)) * (68 - 43) + 43) + "%";
    } else if (bmi < 35) {
      category = "Obese Class I";
      color = "bg-red-500";
      message = "Your BMI indicates <strong>Class I obesity</strong>. This increases risk for health conditions. Consider consulting a healthcare provider for a weight management plan.";
      indicatorPosition = (((bmi - 30) / (35 - 30)) * (80 - 68) + 68) + "%";
    } else {
      category = "Obese Class II+";
      color = "bg-red-500";
      message = "Your BMI indicates <strong>Class II obesity or higher</strong>. This significantly increases health risks. Please consult a healthcare provider for guidance.";
      indicatorPosition = "92%";
    }
    
    // Calculate healthy weight range
    let heightInMeters: number;
    if (data.unitSystem === "metric") {
      heightInMeters = data.height! / 100;
    } else {
      heightInMeters = ((data.feet! * 12) + data.inches!) * 0.0254;
    }
    
    const minHealthyWeight = 18.5 * (heightInMeters * heightInMeters);
    const maxHealthyWeight = 24.9 * (heightInMeters * heightInMeters);
    
    return {
      bmi,
      category,
      color,
      message,
      indicatorPosition,
      healthyRange: {
        min: data.unitSystem === "metric" ? minHealthyWeight : minHealthyWeight * 2.205,
        max: data.unitSystem === "metric" ? maxHealthyWeight : maxHealthyWeight * 2.205,
      }
    };
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const result = calculateBMI(values);
    onCalculate(values as BmiData, result);
  };

  const handleUnitSystemChange = (value: UnitSystem) => {
    setUnitSystem(value);
    form.setValue("unitSystem", value);
  };

  return (
    <Card className="bg-white shadow-md transition-all hover:shadow-lg">
      <CardContent className="p-6 md:p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Unit System Toggle */}
            <div className="flex justify-center mb-6">
              <div className="bg-gray-100 rounded-lg p-1 inline-flex shadow-sm">
                <Button 
                  type="button"
                  variant={unitSystem === "metric" ? "default" : "ghost"}
                  className={`py-2 px-4 text-sm font-medium ${unitSystem === "metric" 
                    ? "bg-primary text-white shadow-sm" 
                    : "bg-transparent text-gray-700 hover:text-primary"}`}
                  onClick={() => handleUnitSystemChange("metric")}
                >
                  Metric (cm/kg)
                </Button>
                <Button 
                  type="button"
                  variant={unitSystem === "imperial" ? "default" : "ghost"}
                  className={`py-2 px-4 text-sm font-medium ${unitSystem === "imperial" 
                    ? "bg-primary text-white shadow-sm" 
                    : "bg-transparent text-gray-700 hover:text-primary"}`}
                  onClick={() => handleUnitSystemChange("imperial")}
                >
                  Imperial (ft/lbs)
                </Button>
              </div>
            </div>

            {/* Gender Selection */}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Select your gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 gap-4"
                    >
                      <Label
                        htmlFor="male"
                        className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          field.value === "male" ? "border-primary bg-primary/10" : "border-gray-200"
                        }`}
                      >
                        <RadioGroupItem value="male" id="male" className="sr-only" />
                        <Mars className="h-8 w-8 text-primary mb-2" />
                        <span className="font-medium">Male</span>
                      </Label>
                      <Label
                        htmlFor="female"
                        className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                          field.value === "female" ? "border-primary bg-primary/10" : "border-gray-200"
                        }`}
                      >
                        <RadioGroupItem value="female" id="female" className="sr-only" />
                        <Venus className="h-8 w-8 text-orange-500 mb-2" />
                        <span className="font-medium">Female</span>
                      </Label>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Age Input */}
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <div className="flex justify-between">
                    <FormLabel>Age (years)</FormLabel>
                    <span className="text-sm font-medium text-primary">{field.value}</span>
                  </div>
                  <FormControl>
                    <Slider
                      min={2}
                      max={120}
                      step={1}
                      value={[field.value]}
                      onValueChange={(vals) => field.onChange(vals[0])}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Height Input - Metric */}
            <AnimatePresence mode="wait">
              {unitSystem === "metric" ? (
                <motion.div
                  key="metric-height"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeIn}
                >
                  <FormField
                    control={form.control}
                    name="height"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <div className="flex justify-between">
                          <FormLabel>Height (cm)</FormLabel>
                          <span className="text-sm font-medium text-primary">{field.value}</span>
                        </div>
                        <FormControl>
                          <Slider
                            min={50}
                            max={250}
                            step={1}
                            value={[field.value || 170]}
                            onValueChange={(vals) => field.onChange(vals[0])}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="imperial-height"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeIn}
                >
                  <div className="space-y-3">
                    <FormLabel>Height</FormLabel>
                    <div className="grid grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="feet"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500">Feet</FormLabel>
                            <Select
                              value={String(field.value)}
                              onValueChange={(value) => field.onChange(Number(value))}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select feet" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Array.from({ length: 8 }, (_, i) => i + 1).map((foot) => (
                                  <SelectItem key={foot} value={String(foot)}>
                                    {foot}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="inches"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs text-gray-500">Inches</FormLabel>
                            <Select
                              value={String(field.value)}
                              onValueChange={(value) => field.onChange(Number(value))}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select inches" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {Array.from({ length: 12 }, (_, i) => i).map((inch) => (
                                  <SelectItem key={inch} value={String(inch)}>
                                    {inch}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Weight Input */}
            <AnimatePresence mode="wait">
              {unitSystem === "metric" ? (
                <motion.div
                  key="metric-weight"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeIn}
                >
                  <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <div className="flex justify-between">
                          <FormLabel>Weight (kg)</FormLabel>
                          <span className="text-sm font-medium text-primary">{field.value}</span>
                        </div>
                        <FormControl>
                          <Slider
                            min={10}
                            max={250}
                            step={1}
                            value={[field.value || 70]}
                            onValueChange={(vals) => field.onChange(vals[0])}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="imperial-weight"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={fadeIn}
                >
                  <FormField
                    control={form.control}
                    name="weightImperial"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <div className="flex justify-between">
                          <FormLabel>Weight (lbs)</FormLabel>
                          <span className="text-sm font-medium text-primary">{field.value}</span>
                        </div>
                        <FormControl>
                          <Slider
                            min={22}
                            max={550}
                            step={1}
                            value={[field.value || 154]}
                            onValueChange={(vals) => field.onChange(vals[0])}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Calculate Button */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                className="w-full py-3 font-medium flex items-center justify-center gap-2"
              >
                <Calculator className="h-5 w-5" />
                <span>Calculate BMI</span>
              </Button>
            </motion.div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
