import { useQuery } from "@tanstack/react-query";
import { DietFormValues, DietRecommendationResponse } from "@/lib/types";

export function useDietRecommendations(formData: DietFormValues | null) {
  return useQuery<DietRecommendationResponse>({
    queryKey: ["/api/recipes", formData],
    queryFn: async () => {
      if (!formData) return { recipes: [] };
      
      const response = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch recipe recommendations');
      }
      
      return response.json();
    },
    enabled: !!formData,
    refetchOnWindowFocus: false,
  });
}
