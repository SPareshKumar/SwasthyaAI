import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const subscribeSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Email subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { name, email } = subscribeSchema.parse(req.body);
      
      // In a real app, you would save this to a database
      // For now, we'll just return a success response
      console.log(`New subscription: ${name}, ${email}`);
      
      res.status(200).json({ 
        success: true, 
        message: "Subscription successful" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Subscribe error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Something went wrong" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
