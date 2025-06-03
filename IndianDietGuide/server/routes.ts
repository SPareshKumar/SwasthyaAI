import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import axios from "axios";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoint to get diet recommendations
  app.post("/api/recipes", async (req, res) => {
    try {
      const { age, gender, diet_preference, meal_type, top_n } = req.body;

      // Validate input
      if (!age || !gender || !diet_preference || !meal_type) {
        return res.status(400).json({ 
          message: "Missing required fields: age, gender, diet_preference, and meal_type are required" 
        });
      }

      console.log("Sending request to diet API with params:", {
        age: Number(age),
        gender,
        diet_preference,
        meal_type,
        top_n: top_n || 8
      });
      
      // Provide different recipe recommendations based on user selections
      // We'll use diet_preference and meal_type to determine which recipes to show
      
      const allRecipes = {
        vegetarian: {
          breakfast: [
            {
              name: "Masala Dosa",
              cooking_time: 30,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/masala-dosa-recipe/"
            },
            {
              name: "Poha",
              cooking_time: 20,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/poha-recipe-kanda-batata-poha/"
            },
            {
              name: "Idli Sambar",
              cooking_time: 40,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/soft-idli-recipe-using-idli-rava/"
            },
            {
              name: "Aloo Paratha",
              cooking_time: 25,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/aloo-paratha-recipe/"
            },
            {
              name: "Upma",
              cooking_time: 15,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/upma-recipe/"
            },
            {
              name: "Besan Chilla",
              cooking_time: 15,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/besan-chilla-recipe/"
            },
            {
              name: "Medu Vada",
              cooking_time: 35,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/medu-vada-recipe/"
            },
            {
              name: "Rava Uttapam",
              cooking_time: 20,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/rava-uttapam-recipe/"
            }
          ],
          lunch: [
            {
              name: "Rajma Chawal",
              cooking_time: 45,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/rajma-recipe-rajma-masala/"
            },
            {
              name: "Bisi Bele Bath",
              cooking_time: 40,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/bisi-bele-bath/"
            },
            {
              name: "Chole Bhature",
              cooking_time: 50,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/chole-bhature/"
            },
            {
              name: "Vegetable Biryani",
              cooking_time: 50,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/veg-biryani/"
            },
            {
              name: "Dal Makhani",
              cooking_time: 60,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/dal-makhani-recipe/"
            },
            {
              name: "Sambar Rice",
              cooking_time: 30,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/sambar-rice-recipe/"
            },
            {
              name: "Pav Bhaji",
              cooking_time: 40,
              cuisine: "West Indian",
              url: "https://www.indianhealthyrecipes.com/pav-bhaji-recipe-how-to-make-pav-bhaji-step-by-step-recipe/"
            },
            {
              name: "Pulao",
              cooking_time: 35,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/pulao-recipe-veg-pulao/"
            }
          ],
          dinner: [
            {
              name: "Palak Paneer",
              cooking_time: 35,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/palak-paneer-recipe/"
            },
            {
              name: "Masala Khichdi",
              cooking_time: 30,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/masala-khichdi-recipe/"
            },
            {
              name: "Methi Thepla",
              cooking_time: 25,
              cuisine: "Gujarati",
              url: "https://www.indianhealthyrecipes.com/thepla-recipe/"
            },
            {
              name: "Vegetable Korma",
              cooking_time: 45,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/vegetable-korma-recipe/"
            },
            {
              name: "Roti with Mixed Veg Curry",
              cooking_time: 40,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/mix-veg-curry/"
            },
            {
              name: "Baingan Bharta",
              cooking_time: 40,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/baingan-bharta-recipe/"
            },
            {
              name: "Dosa with Tomato Chutney",
              cooking_time: 30,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/dosa-recipe-dosa-batter-recipe/"
            },
            {
              name: "Paneer Butter Masala",
              cooking_time: 35,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/paneer-butter-masala-restaurant-style/"
            }
          ]
        },
        "non-vegetarian": {
          breakfast: [
            {
              name: "Keema Paratha",
              cooking_time: 30,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/keema-paratha-recipe/"
            },
            {
              name: "Egg Bhurji",
              cooking_time: 15,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/egg-bhurji/"
            },
            {
              name: "Chicken Sandwich",
              cooking_time: 20,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/chicken-sandwich-recipe/"
            },
            {
              name: "Masala Omelette",
              cooking_time: 10,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/masala-omelette-recipe/"
            },
            {
              name: "Egg Appam",
              cooking_time: 25,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/appam-recipe/"
            },
            {
              name: "Mutton Keema with Paratha",
              cooking_time: 40,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/mutton-keema-recipe/"
            },
            {
              name: "Egg Dosa",
              cooking_time: 20,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/egg-dosa-recipe/"
            },
            {
              name: "Chicken Stuffed Paratha",
              cooking_time: 35,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/tandoori-chicken-recipe/"
            }
          ],
          lunch: [
            {
              name: "Butter Chicken",
              cooking_time: 45,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/butter-chicken/"
            },
            {
              name: "Chicken Biryani",
              cooking_time: 60,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/chicken-biryani-recipe/"
            },
            {
              name: "Fish Curry",
              cooking_time: 35,
              cuisine: "Coastal Indian",
              url: "https://www.indianhealthyrecipes.com/fish-curry-recipe/"
            },
            {
              name: "Mutton Rogan Josh",
              cooking_time: 60,
              cuisine: "Kashmiri",
              url: "https://www.indianhealthyrecipes.com/rogan-josh-recipe/"
            },
            {
              name: "Prawn Curry",
              cooking_time: 30,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/prawn-curry-recipe/"
            },
            {
              name: "Chicken Chettinad",
              cooking_time: 50,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/chicken-chettinad/"
            },
            {
              name: "Egg Curry",
              cooking_time: 30,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/egg-curry-recipe/"
            },
            {
              name: "Kerala Fish Fry",
              cooking_time: 25,
              cuisine: "South Indian",
              url: "https://www.indianhealthyrecipes.com/fish-fry-recipe/"
            }
          ],
          dinner: [
            {
              name: "Tandoori Chicken",
              cooking_time: 45,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/tandoori-chicken-recipe/"
            },
            {
              name: "Chicken Tikka Masala",
              cooking_time: 40,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/chicken-tikka-masala/"
            },
            {
              name: "Mutton Curry",
              cooking_time: 55,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/mutton-curry-recipe/"
            },
            {
              name: "Fish Biryani",
              cooking_time: 50,
              cuisine: "Indian",
              url: "https://www.indianhealthyrecipes.com/fish-biryani-recipe/"
            },
            {
              name: "Chicken Korma",
              cooking_time: 45,
              cuisine: "Mughlai",
              url: "https://www.indianhealthyrecipes.com/chicken-korma-recipe/"
            },
            {
              name: "Keema Matar",
              cooking_time: 35,
              cuisine: "North Indian",
              url: "https://www.indianhealthyrecipes.com/keema-recipe/"
            },
            {
              name: "Goan Fish Curry",
              cooking_time: 40,
              cuisine: "Goan",
              url: "https://www.indianhealthyrecipes.com/goan-fish-curry-recipe/"
            },
            {
              name: "Hyderabadi Chicken Curry",
              cooking_time: 45,
              cuisine: "Hyderabadi",
              url: "https://www.indianhealthyrecipes.com/hyderabadi-chicken-curry/"
            }
          ]
        }
      };
      
      // Get the appropriate recipes based on diet preference and meal type
      const recipes = allRecipes[diet_preference as 'vegetarian' | 'non-vegetarian']?.[meal_type as 'breakfast' | 'lunch' | 'dinner'] || [];
      
      return res.json({ recipes });
    } catch (error) {
      console.error("Error fetching recipes:", error);
      
      if (axios.isAxiosError(error)) {
        return res.status(error.response?.status || 500).json({ 
          message: error.response?.data?.message || "Failed to fetch recipe recommendations" 
        });
      }
      
      return res.status(500).json({ 
        message: "An unexpected error occurred while fetching recipe recommendations" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
