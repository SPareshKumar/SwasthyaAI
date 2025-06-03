import { FC, useState } from "react";
import DietForm, { DietFormValues } from "@/components/DietForm";
import RecipeList from "@/components/RecipeList";
import LifestyleSection from "@/components/LifestyleSection";
import { useDietRecommendations } from "@/hooks/useDietRecommendations";

const Home: FC = () => {
  const [formValues, setFormValues] = useState<DietFormValues | null>(null);
  const { data, isLoading, error, refetch, isFetching } = useDietRecommendations(formValues);

  const handleSubmit = (data: DietFormValues) => {
    setFormValues({ ...data, top_n: 8 });
  };

  const handleRetry = () => {
    if (formValues) {
      refetch();
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-bg pt-10 pb-8 md:pt-16 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-3">
              Indian Diet Recommender
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Get personalized Indian recipe recommendations based on your preferences and dietary needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              {/* Form Section */}
              <div className="md:w-2/5 p-6 md:p-8 border-b md:border-b-0 md:border-r border-gray-200">
                <h2 className="text-xl font-semibold mb-6">Your Preferences</h2>
                <DietForm onSubmit={handleSubmit} isLoading={isLoading || isFetching} />
              </div>

              {/* Results Section */}
              <div className="md:w-3/5 p-6 md:p-8 bg-gray-50">
                <RecipeList
                  recipes={data?.recipes || null}
                  isLoading={isLoading || isFetching}
                  error={error as Error}
                  onRetry={handleRetry}
                  formValues={formValues}
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lifestyle Section */}
      <LifestyleSection />
    </>
  );
};

export default Home;
