export type DietPreferences = "vegetarian" | "non-vegetarian";

export interface Recipe {
  name: string;
  cooking_time: number;
  cuisine: string;
  url: string;
}

export interface DietFormValues {
  age: number;
  gender: "male" | "female";
  diet_preference: DietPreferences;
  meal_type: "breakfast" | "lunch" | "dinner";
  top_n: number;
}

export interface DietRecommendationResponse {
  recipes: Recipe[];
}
