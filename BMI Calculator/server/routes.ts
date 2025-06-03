import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { healthTips } from "../shared/tips";
import { Scales, Utensils, Dumbbell, DropletHalf, Heart, UserX, Users, Activity, RefreshCw, ChevronDown, CalendarDays, Egg, Apple, Clock, XCircle, ClipboardCheck, ChartLineUp, Stethoscope } from "lucide-react";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health tips API endpoint
  app.get("/api/health-tips", (req, res) => {
    const category = req.query.category as string;
    
    if (!category) {
      // Default tips if no category provided
      return res.json([
        {
          id: "regular-monitoring",
          icon: "<Scales className='h-5 w-5' />",
          title: "Monitor your BMI regularly",
          description: "Regular BMI monitoring can help track your health progress and make necessary adjustments to your lifestyle.",
          color: "bg-primary-100 text-primary-600",
        },
        {
          id: "balanced-nutrition",
          icon: "<Utensils className='h-5 w-5' />",
          title: "Balanced nutrition is key",
          description: "Focus on a diet rich in fruits, vegetables, lean proteins, and whole grains while limiting processed foods.",
          color: "bg-green-100 text-green-600",
        },
        {
          id: "physical-activity",
          icon: "<Dumbbell className='h-5 w-5' />",
          title: "Regular physical activity",
          description: "Aim for at least 150 minutes of moderate activity or 75 minutes of vigorous activity weekly.",
          color: "bg-orange-100 text-orange-600",
        },
        {
          id: "stay-hydrated",
          icon: "<DropletHalf className='h-5 w-5' />",
          title: "Stay hydrated",
          description: "Drink plenty of water throughout the day to support metabolism and overall health.",
          color: "bg-blue-100 text-blue-600",
        },
      ]);
    }
    
    // Find tips for the specific category
    const categoryTips = healthTips.find(ct => ct.category === category);
    
    if (!categoryTips) {
      return res.status(404).json({ message: "No tips found for this category" });
    }
    
    // Map icon strings to JSX components
    const tipsWithComponents = categoryTips.tips.map(tip => {
      return {
        ...tip,
        icon: getIconComponent(tip.icon),
      };
    });
    
    return res.json(tipsWithComponents);
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Helper function to map icon names to components
function getIconComponent(iconName: string): string {
  switch (iconName) {
    case "scales": return "<Scales className='h-5 w-5' />";
    case "utensils": return "<Utensils className='h-5 w-5' />";
    case "dumbbell": return "<Dumbbell className='h-5 w-5' />";
    case "droplet": return "<DropletHalf className='h-5 w-5' />";
    case "heart": return "<Heart className='h-5 w-5' />";
    case "user-x": return "<UserX className='h-5 w-5' />";
    case "users": return "<Users className='h-5 w-5' />";
    case "activity": return "<Activity className='h-5 w-5' />";
    case "refresh": return "<RefreshCw className='h-5 w-5' />";
    case "calendar": return "<CalendarDays className='h-5 w-5' />";
    case "egg": return "<Egg className='h-5 w-5' />";
    case "apple": return "<Apple className='h-5 w-5' />";
    case "clock": return "<Clock className='h-5 w-5' />";
    case "x-circle": return "<XCircle className='h-5 w-5' />";
    case "clipboard": return "<ClipboardCheck className='h-5 w-5' />";
    case "chart-line": return "<ChartLineUp className='h-5 w-5' />";
    case "stethoscope": return "<Stethoscope className='h-5 w-5' />";
    default: return "<Scales className='h-5 w-5' />";
  }
}
