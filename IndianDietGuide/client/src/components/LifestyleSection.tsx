import { FC } from "react";

const LifestyleSection: FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold text-center mb-8">Healthy Lifestyle Inspiration</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Active Lifestyle Card */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350')",
              }}
            ></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Active Lifestyle</h3>
              <p className="text-gray-600 text-sm">Regular exercise improves mood and health</p>
            </div>
          </div>

          {/* Balanced Nutrition Card */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350')",
              }}
            ></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Balanced Nutrition</h3>
              <p className="text-gray-600 text-sm">Eat colorful, nutrient-dense foods</p>
            </div>
          </div>

          {/* Mental Wellness Card */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350')",
              }}
            ></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Mental Wellness</h3>
              <p className="text-gray-600 text-sm">Mind-body balance for overall health</p>
            </div>
          </div>

          {/* Social Activity Card */}
          <div className="rounded-lg overflow-hidden shadow-md">
            <div
              className="h-48 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350')",
              }}
            ></div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">Social Activity</h3>
              <p className="text-gray-600 text-sm">Staying active with friends and family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
