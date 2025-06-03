export interface Tip {
  id: string;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface CategoryTips {
  category: string;
  tips: Tip[];
}

export const healthTips: CategoryTips[] = [
  {
    category: "Severely Underweight",
    tips: [
      {
        id: "calorie-increase",
        icon: "utensils",
        title: "Increase calorie intake",
        description: "Focus on nutrient-dense, high-calorie foods like nuts, avocados, and healthy oils.",
        color: "bg-blue-100 text-blue-600",
      },
      {
        id: "protein-rich",
        icon: "egg",
        title: "Prioritize protein",
        description: "Include protein-rich foods in every meal to support muscle development and healthy weight gain.",
        color: "bg-green-100 text-green-600",
      },
      {
        id: "small-frequent",
        icon: "clock",
        title: "Eat small, frequent meals",
        description: "Try eating 5-6 smaller meals throughout the day instead of 3 large ones.",
        color: "bg-orange-100 text-orange-600",
      },
      {
        id: "medical-advice",
        icon: "stethoscope",
        title: "Seek medical advice",
        description: "Consult a healthcare professional to rule out underlying conditions affecting your weight.",
        color: "bg-red-100 text-red-600",
      }
    ]
  },
  {
    category: "Underweight",
    tips: [
      {
        id: "nutrient-dense",
        icon: "apple",
        title: "Choose nutrient-dense foods",
        description: "Focus on whole grains, lean proteins, dairy, fruits, and vegetables rich in vitamins and minerals.",
        color: "bg-blue-100 text-blue-600",
      },
      {
        id: "strength-training",
        icon: "dumbbell",
        title: "Incorporate strength training",
        description: "Resistance exercises can help build muscle mass and improve overall body composition.",
        color: "bg-purple-100 text-purple-600",
      },
      {
        id: "healthy-snacks",
        icon: "utensils",
        title: "Include healthy snacks",
        description: "Add nutrient-rich snacks between meals like smoothies, trail mix, or yogurt with fruits.",
        color: "bg-green-100 text-green-600",
      },
      {
        id: "track-progress",
        icon: "scales",
        title: "Track your progress",
        description: "Monitor your weight gain journey to ensure you're gaining at a healthy rate of 0.5-1 lb per week.",
        color: "bg-primary-100 text-primary-600",
      }
    ]
  },
  {
    category: "Normal",
    tips: [
      {
        id: "maintain-balance",
        icon: "scales",
        title: "Maintain balanced nutrition",
        description: "Continue with a varied diet rich in whole foods to maintain your healthy weight.",
        color: "bg-green-100 text-green-600",
      },
      {
        id: "regular-exercise",
        icon: "dumbbell",
        title: "Stay physically active",
        description: "Aim for at least 150 minutes of moderate activity weekly to maintain fitness and overall health.",
        color: "bg-blue-100 text-blue-600",
      },
      {
        id: "stress-management",
        icon: "heart",
        title: "Manage stress effectively",
        description: "Practice stress-reduction techniques like meditation, yoga, or deep breathing exercises.",
        color: "bg-purple-100 text-purple-600",
      },
      {
        id: "regular-monitoring",
        icon: "chart",
        title: "Regular health check-ups",
        description: "Continue monitoring your BMI and overall health with regular medical check-ups.",
        color: "bg-primary-100 text-primary-600",
      }
    ]
  },
  {
    category: "Overweight",
    tips: [
      {
        id: "portion-control",
        icon: "utensils",
        title: "Practice portion control",
        description: "Be mindful of portion sizes and use smaller plates to help control calorie intake.",
        color: "bg-yellow-100 text-yellow-600",
      },
      {
        id: "increase-activity",
        icon: "dumbbell",
        title: "Increase daily activity",
        description: "Find ways to be more active throughout the day, such as taking stairs or walking more.",
        color: "bg-blue-100 text-blue-600",
      },
      {
        id: "reduce-processed",
        icon: "x-circle",
        title: "Reduce processed foods",
        description: "Limit intake of processed foods, sugary beverages, and high-calorie snacks.",
        color: "bg-red-100 text-red-600",
      },
      {
        id: "meal-planning",
        icon: "calendar",
        title: "Plan meals ahead",
        description: "Prepare healthy meals in advance to avoid impulsive, unhealthy food choices.",
        color: "bg-green-100 text-green-600",
      }
    ]
  },
  {
    category: "Obese Class I",
    tips: [
      {
        id: "medical-guidance",
        icon: "stethoscope",
        title: "Seek medical guidance",
        description: "Consult with healthcare professionals for personalized weight management strategies.",
        color: "bg-primary-100 text-primary-600",
      },
      {
        id: "gradual-weight-loss",
        icon: "chart-line",
        title: "Focus on gradual weight loss",
        description: "Aim for steady weight loss of 1-2 pounds per week rather than rapid, unsustainable changes.",
        color: "bg-green-100 text-green-600",
      },
      {
        id: "balanced-diet",
        icon: "utensils",
        title: "Follow a balanced diet",
        description: "Emphasize vegetables, fruits, lean proteins, and whole grains while monitoring calories.",
        color: "bg-orange-100 text-orange-600",
      },
      {
        id: "regular-exercise-routine",
        icon: "dumbbell",
        title: "Establish regular exercise",
        description: "Start with low-impact activities and gradually increase intensity as fitness improves.",
        color: "bg-blue-100 text-blue-600",
      }
    ]
  },
  {
    category: "Obese Class II+",
    tips: [
      {
        id: "comprehensive-approach",
        icon: "clipboard",
        title: "Take a comprehensive approach",
        description: "Work with a healthcare team that may include a doctor, dietitian, and fitness professional.",
        color: "bg-primary-100 text-primary-600",
      },
      {
        id: "behavior-modification",
        icon: "refresh",
        title: "Focus on behavior changes",
        description: "Identify and modify habits that contribute to weight gain for sustainable results.",
        color: "bg-purple-100 text-purple-600",
      },
      {
        id: "monitored-exercise",
        icon: "heart",
        title: "Exercise with supervision",
        description: "Begin exercise under guidance to ensure safety and appropriateness for your condition.",
        color: "bg-red-100 text-red-600",
      },
      {
        id: "support-systems",
        icon: "users",
        title: "Build support systems",
        description: "Connect with support groups or counseling to help maintain motivation and address emotional aspects.",
        color: "bg-green-100 text-green-600",
      }
    ]
  }
];
