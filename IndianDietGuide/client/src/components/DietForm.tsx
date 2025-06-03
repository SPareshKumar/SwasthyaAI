import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserCircle, CircleUser, Leaf, Drumstick, Coffee, Utensils, Moon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { DietPreferences } from "@/lib/types";

const formSchema = z.object({
  age: z.coerce
    .number()
    .min(1, { message: "Age must be at least 1 year" })
    .max(120, { message: "Age must be less than 120 years" }),
  gender: z.enum(["male", "female"]),
  diet_preference: z.enum(["vegetarian", "non-vegetarian"]),
  meal_type: z.enum(["breakfast", "lunch", "dinner"]),
});

export type DietFormValues = z.infer<typeof formSchema>;

interface DietFormProps {
  onSubmit: (data: DietFormValues) => void;
  isLoading: boolean;
}

const DietForm: FC<DietFormProps> = ({ onSubmit, isLoading }) => {
  const form = useForm<DietFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 25,
      gender: "male",
      diet_preference: "vegetarian",
      meal_type: "breakfast",
    },
  });

  const handleSubmit = (values: DietFormValues) => {
    onSubmit(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        {/* Age Input */}
        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">Age (years)</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type="number"
                    min={1}
                    max={120}
                    {...field}
                    className="w-full pl-3 pr-12 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-gray-500">
                    Years
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Gender Selection */}
        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">Gender</FormLabel>
              <FormControl>
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "flex-1 flex items-center justify-center",
                      field.value === "male" &&
                        "bg-blue-50 border-primary text-primary"
                    )}
                    onClick={() => form.setValue("gender", "male")}
                  >
                    <UserCircle className="mr-2 h-4 w-4" />
                    Male
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "flex-1 flex items-center justify-center",
                      field.value === "female" &&
                        "bg-blue-50 border-primary text-primary"
                    )}
                    onClick={() => form.setValue("gender", "female")}
                  >
                    <CircleUser className="mr-2 h-4 w-4" />
                    Female
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Diet Preference */}
        <FormField
          control={form.control}
          name="diet_preference"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">Diet Preference</FormLabel>
              <FormControl>
                <div className="flex space-x-4">
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "flex-1 flex items-center justify-center",
                      field.value === "vegetarian" &&
                        "bg-blue-50 border-primary text-primary"
                    )}
                    onClick={() => form.setValue("diet_preference", "vegetarian")}
                  >
                    <Leaf className="mr-2 h-4 w-4" />
                    Vegetarian
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "flex-1 flex items-center justify-center",
                      field.value === "non-vegetarian" &&
                        "bg-blue-50 border-primary text-primary"
                    )}
                    onClick={() => form.setValue("diet_preference", "non-vegetarian")}
                  >
                    <Drumstick className="mr-2 h-4 w-4" />
                    Non-Vegetarian
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Meal Type */}
        <FormField
          control={form.control}
          name="meal_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">Meal Type</FormLabel>
              <FormControl>
                <div className="grid grid-cols-3 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "col-span-1 flex items-center justify-center",
                      field.value === "breakfast" &&
                        "bg-blue-50 border-primary text-primary"
                    )}
                    onClick={() => form.setValue("meal_type", "breakfast")}
                  >
                    <Coffee className="mr-1 h-4 w-4" />
                    <span className="text-sm">Breakfast</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "col-span-1 flex items-center justify-center",
                      field.value === "lunch" &&
                        "bg-blue-50 border-primary text-primary"
                    )}
                    onClick={() => form.setValue("meal_type", "lunch")}
                  >
                    <Utensils className="mr-1 h-4 w-4" />
                    <span className="text-sm">Lunch</span>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className={cn(
                      "col-span-1 flex items-center justify-center",
                      field.value === "dinner" &&
                        "bg-blue-50 border-primary text-primary"
                    )}
                    onClick={() => form.setValue("meal_type", "dinner")}
                  >
                    <Moon className="mr-1 h-4 w-4" />
                    <span className="text-sm">Dinner</span>
                  </Button>
                </div>
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-md transition duration-150 flex items-center justify-center"
          disabled={isLoading}
        >
          <span>{isLoading ? "Finding Recipes..." : "Get Recommendations"}</span>
          {isLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};

export default DietForm;
