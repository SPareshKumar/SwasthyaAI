import { FC } from "react";
import { Recipe, DietPreferences } from "@/lib/types";
import { Clock, Utensils, ExternalLink } from "lucide-react";

interface RecipeCardProps {
  recipe: Recipe;
  mealType: "breakfast" | "lunch" | "dinner";
  dietPreference: DietPreferences;
}

const RecipeCard: FC<RecipeCardProps> = ({ recipe, mealType, dietPreference }) => {
  // Get accent color - always blue-based
  const getAccentColor = () => {
    return 'from-blue-500 to-indigo-600';
  };

  return (
    <div className="relative bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Accent strip at the top */}
      <div className={`h-2 w-full bg-gradient-to-r ${getAccentColor()}`}></div>
      
      {/* Card content */}
      <div className="p-6">
        {/* Recipe name */}
        <h3 className="font-semibold text-xl text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
          {recipe.name}
        </h3>
        
        {/* Recipe details */}
        <div className="space-y-3 mb-5">
          {/* Cuisine badge */}
          <div className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700">
            <Utensils className="mr-1.5 h-3.5 w-3.5" />
            {recipe.cuisine}
          </div>
          
          {/* Cooking time */}
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="mr-2 h-4 w-4 text-blue-400" />
            <span>{recipe.cooking_time} mins</span>
          </div>
        </div>
        
        {/* View recipe button */}
        <div className="pt-2">
          <a 
            href={recipe.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center justify-center w-full text-white py-2.5 px-4 rounded-lg transition-all duration-200 bg-gradient-to-r ${getAccentColor()} hover:shadow-lg`}
          >
            <ExternalLink className="mr-1.5 h-4 w-4" />
            View Recipe
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
