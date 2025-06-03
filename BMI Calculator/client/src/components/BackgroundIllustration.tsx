import { motion } from "framer-motion";

export default function BackgroundIllustration() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Top right decorative element */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 opacity-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            className="text-primary"
            d="M45.3,-58.8C58.4,-50.5,68.9,-36.7,73.7,-21.3C78.6,-6,77.7,10.9,70.8,24.5C63.9,38.1,50.9,48.4,37.1,57.3C23.2,66.1,8.5,73.5,-6.6,76.6C-21.8,79.6,-37.4,78.3,-49.9,70.1C-62.4,62,-71.7,47,-76.1,30.9C-80.5,14.8,-80,-1.5,-75.7,-16.9C-71.3,-32.3,-63,-46.8,-50.6,-55.4C-38.2,-64.1,-21.8,-66.8,-5.9,-64.3C10,-61.8,32.1,-67.1,45.3,-58.8Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* Bottom left decorative circle */}
      <motion.div
        className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full bg-primary opacity-5"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />

      {/* Middle left decorative element */}
      <motion.div
        className="absolute top-1/3 -left-8 w-24 h-24 opacity-10"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            className="text-green-500"
            d="M48.2,-66.7C60.4,-56,67.2,-39.2,72.6,-22.1C78,-4.9,82.1,12.6,77.5,27.2C73,41.8,59.7,53.5,45.2,61.6C30.7,69.7,15.3,74.1,-0.7,75.1C-16.8,76.1,-33.6,73.7,-47.9,65.1C-62.1,56.6,-73.9,41.8,-78.3,25.2C-82.8,8.6,-80.1,-9.9,-72.5,-25.4C-64.9,-40.9,-52.5,-53.5,-38.5,-63.5C-24.4,-73.5,-8.8,-80.9,4.9,-77.9C18.7,-74.9,36,-77.4,48.2,-66.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>

      {/* Middle right small circles */}
      <div className="absolute top-1/2 right-10 flex space-x-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="w-3 h-3 rounded-full bg-orange-500 opacity-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.2, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 + 0.5 }}
          />
        ))}
      </div>

      {/* Bottom right pattern */}
      <motion.div
        className="absolute bottom-10 right-10 w-48 h-48 opacity-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            className="text-blue-500"
            d="M34.6,-47.1C47.9,-39.1,63.6,-33.2,67.4,-22.6C71.2,-12.1,63.1,3.2,56.3,17.2C49.5,31.3,43.9,44.2,34.3,54.4C24.7,64.6,11.1,72.1,-3.2,72.9C-17.6,73.6,-35.3,67.6,-44.4,56.3C-53.4,45.1,-54,28.7,-59.9,11.5C-65.8,-5.6,-76.9,-23.4,-73.1,-35.8C-69.2,-48.3,-50.4,-55.4,-34.1,-62.3C-17.8,-69.1,-4.4,-75.7,3.9,-71.5C12.3,-67.4,21.4,-55.1,34.6,-47.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
    </div>
  );
}