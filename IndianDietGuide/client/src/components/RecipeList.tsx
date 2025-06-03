import { FC } from "react";
import RecipeCard from "./RecipeCard";
import { Recipe, DietFormValues } from "@/lib/types";
import { CircleAlert, Utensils, Loader2, UtensilsCrossed, Coffee, Soup, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecipeListProps {
  recipes: Recipe[] | null;
  isLoading: boolean;
  error: Error | null;
  onRetry: () => void;
  formValues: DietFormValues | null;
}

const RecipeList: FC<RecipeListProps> = ({ recipes, isLoading, error, onRetry, formValues }) => {
  // Get icon based on meal type
  const getMealTypeIcon = () => {
    switch (formValues?.meal_type) {
      case 'breakfast':
        return <Coffee className="mx-auto h-12 w-12" />;
      case 'lunch':
        return <Soup className="mx-auto h-12 w-12" />;
      case 'dinner':
        return <ChefHat className="mx-auto h-12 w-12" />;
      default:
        return <Utensils className="mx-auto h-12 w-12" />;
    }
  };

  // Initial state (no recipes requested yet)
  if (!isLoading && !error && !recipes) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
        <div className="text-gray-400 mb-4">
          <Utensils className="mx-auto h-12 w-12" />
        </div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">No recipes yet</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          Submit your preferences to get personalized Indian recipe recommendations.
        </p>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="text-center py-16 bg-gradient-to-b from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <Loader2 className="absolute inset-0 h-16 w-16 animate-spin text-primary" />
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-primary/10 to-primary/5 blur-xl rounded-full"></div>
        </div>
        <h3 className="text-lg font-medium text-gray-700 mb-1">Finding delicious recipes for you</h3>
        <p className="text-gray-500 text-sm">This will only take a moment</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="text-center py-12 bg-red-50 rounded-xl border border-red-100 shadow-sm">
        <div className="text-red-500 mx-auto w-16 h-16 flex items-center justify-center bg-red-100 rounded-full mb-4">
          <CircleAlert className="h-10 w-10" />
        </div>
        <h3 className="text-lg font-medium text-red-700 mb-2">Something went wrong</h3>
        <p className="text-gray-700 max-w-sm mx-auto">
          {error.message || "We couldn't fetch recipe recommendations. Please try again."}
        </p>
        <Button
          onClick={onRetry}
          className="mt-5 bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-5 rounded-lg transition duration-150 shadow-sm hover:shadow"
        >
          Try Again
        </Button>
      </div>
    );
  }

  // Empty results
  if (recipes && recipes.length === 0) {
    return (
      <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
        <div className="text-gray-400 mx-auto w-16 h-16 flex items-center justify-center bg-gray-100 rounded-full mb-4">
          <UtensilsCrossed className="h-8 w-8" />
        </div>
        <h3 className="text-lg font-medium text-gray-700 mb-2">No recipes found</h3>
        <p className="text-gray-500 max-w-sm mx-auto">
          We couldn't find any recipes matching your criteria. Try different preferences.
        </p>
      </div>
    );
  }

  // Use consistent blue styling
  const getHeaderStyle = () => {
    return 'from-blue-500 to-indigo-600';
  };

  // Results state
  return (
    <div className="mt-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex items-center">
          <div className={`mr-3 p-2 rounded-md bg-gradient-to-r ${getHeaderStyle()} text-white`}>
            {getMealTypeIcon()}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              {formValues && formValues.diet_preference === 'vegetarian' ? 'Vegetarian' : 'Non-Vegetarian'} {' '}
              {formValues && formValues.meal_type ? formValues.meal_type.charAt(0).toUpperCase() + formValues.meal_type.slice(1) : 'Recipes'}
            </h2>
            <p className="text-gray-500">
              Personalized recipes based on your preferences
            </p>
          </div>
        </div>
        <div className="px-4 py-2 bg-blue-50 rounded-full text-sm font-medium text-blue-700">
          {recipes ? recipes.length : 0} recipes found
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes && recipes.map((recipe, index) => (
          <RecipeCard 
            key={index} 
            recipe={recipe} 
            mealType={formValues?.meal_type || "breakfast"} 
            dietPreference={formValues?.diet_preference || "vegetarian"}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;
