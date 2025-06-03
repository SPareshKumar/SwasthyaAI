import { FC } from "react";
import { Scale, Salad, Activity, ArrowLeft } from "lucide-react"; 
import { Link } from "wouter";

const BMICalculator: FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white pt-12 pb-8 md:pt-20 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
              <Scale className="h-4 w-4 mr-2" />
              Health Metrics
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              BMI Calculator
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Calculate your Body Mass Index to check if your weight is healthy for your height and
              get personalized recommendations.
            </p>
            <Link href="/">
              <a className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to Diet Recommendations
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-12 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          {/* Calculator Card */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md overflow-hidden md:w-1/2 relative group hover:shadow-lg transition-all duration-300">
            {/* Accent strip at the top */}
            <div className="h-2 w-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
            
            <div className="p-8">
              <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-sm mb-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-700 transition-colors duration-200">
                  BMI Calculator Coming Soon
                </h2>
                <p className="text-gray-700">
                  This page is a placeholder for the BMI Calculator feature which will be implemented soon.
                  Return to the Diet Recommender to get personalized recipe suggestions.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="inline-flex items-center px-5 py-3 rounded-lg font-medium bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-sm">
                  <Scale className="h-5 w-5 mr-2" />
                  Coming Soon
                </div>
              </div>
            </div>
          </div>
          
          {/* Health Tips Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-md overflow-hidden md:w-1/2 relative group hover:shadow-lg transition-all duration-300">
            {/* Accent strip at the top */}
            <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-teal-500"></div>
            
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6 group-hover:text-emerald-700 transition-colors duration-200">
                BMI Health Tips
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white bg-opacity-80 p-5 rounded-lg shadow-sm flex gap-4">
                  <div className="shrink-0 p-3 bg-blue-100 text-blue-700 rounded-lg">
                    <Scale className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Monitor your BMI regularly</h3>
                    <p className="text-gray-600">Regular BMI monitoring can help track your health progress and make necessary adjustments to your lifestyle.</p>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-80 p-5 rounded-lg shadow-sm flex gap-4">
                  <div className="shrink-0 p-3 bg-green-100 text-green-700 rounded-lg">
                    <Salad className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Balanced nutrition is key</h3>
                    <p className="text-gray-600">Focus on a diet rich in fruits, vegetables, lean proteins, and whole grains while limiting processed foods.</p>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-80 p-5 rounded-lg shadow-sm flex gap-4">
                  <div className="shrink-0 p-3 bg-orange-100 text-orange-700 rounded-lg">
                    <Activity className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Regular physical activity</h3>
                    <p className="text-gray-600">Aim for at least 150 minutes of moderate activity or 75 minutes of vigorous activity weekly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BMICalculator;
