import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Person jogging on a trail at sunrise",
    title: "Active Lifestyle",
    description: "Regular exercise improves mood and health",
  },
  {
    src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Colorful healthy meal prep with vegetables",
    title: "Balanced Nutrition",
    description: "Eat colorful, nutrient-dense foods",
  },
  {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    alt: "Person meditating outdoors in a peaceful setting",
    title: "Mental Wellness",
    description: "Mind-body balance for overall health",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=350",
    alt: "Family exercising together outdoors",
    title: "Social Activity",
    description: "Staying active with friends and family",
  },
];

export default function LifestyleImages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative overflow-hidden rounded-xl h-64 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
          <motion.img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <h3 className="text-white font-medium">{image.title}</h3>
            <p className="text-gray-200 text-sm">{image.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
