import React from "react";
import { motion } from "framer-motion";
import { Star, StarHalf } from "lucide-react";

interface TestimonialCardProps {
  rating: number;
  text: string;
  name: string;
  position: string;
  imageUrl: string;
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  rating,
  text,
  name,
  position,
  imageUrl,
  delay,
}) => {
  // Generate star rating
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={i} className="fill-yellow-400 text-yellow-400 h-5 w-5" />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="fill-yellow-400 text-yellow-400 h-5 w-5" />);
  }

  return (
    <motion.div
      className="glassmorphism rounded-2xl shadow-lg p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      data-scroll
    >
      <div className="flex items-center mb-6">
        <div className="text-yellow-400 flex">
          {stars}
        </div>
        <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
      </div>

      <p className="text-gray-700 mb-6">{text}</p>

      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
          <img
            src={imageUrl}
            alt={`${name} avatar`}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </motion.div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      rating: 5.0,
      text: "\"SwasthyaAI helped me find the perfect diet plan that aligns with my vegetarian lifestyle. I have lost 15 pounds in just 2 months!\"",
      name: "Priya S.",
      position: "Nutritionist",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 5.0,
      text: "\"As a fitness coach, I recommend SwasthyaAI to all my clients. The workout tracking features are beyond impressive. Game changer!\"",
      name: "Raj K.",
      position: "Fitness Coach",
      imageUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
    {
      rating: 4.5,
      text: "\"The AI chatbot is like having a personal health coach 24/7. It has transformed how I approach my wellness journey.\"",
      name: "Anita P.",
      position: "Retired Teacher",
      imageUrl: "https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-30 -translate-y-1/2 translate-x-1/4"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          data-scroll
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by health enthusiasts</h2>
          <p className="text-lg text-gray-600">
            See how SwasthyaAI has transformed the wellness journeys of users just like you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              name={testimonial.name}
              position={testimonial.position}
              imageUrl={testimonial.imageUrl}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
