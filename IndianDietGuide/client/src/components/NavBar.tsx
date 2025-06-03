import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SwasthyaLogo from "@/assets/svg/SwasthyaLogo";
import { 
  ChevronDown,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleExploreMenu = () => {
    setIsExploreOpen(!isExploreOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "shadow-md" : ""}`}>
      <div className="bg-gray-900 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                  <SwasthyaLogo className="h-6 w-6" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
                  SwasthyaAI
                </span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => window.open("https://swasthyaai-homepage.onrender.com/", "_blank")}
                  className="text-white hover:text-primary font-medium transition duration-300 relative group"
                >
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
                <button
                  onClick={() => window.open("https://bmi-calculator-3oj5.onrender.com", "_blank")}
                  className="text-white hover:text-primary font-medium transition duration-300 relative group"
                >
                  BMI
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
                <div className="relative group">
                  <button
                    className="text-white hover:text-primary font-medium transition duration-300 flex items-center group"
                    onClick={() => window.open("https://smart-health-log-via-whatsapp.onrender.com/", "_blank")}
                  >
                    Health Logger
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
    </button>
  </div>
</div>
</div>
</div>
</div>



                      

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-gray-900 border-t border-gray-800 shadow-md"
          >
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-white hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-800 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block text-white hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-800 w-full text-left"
              >
                BMI
              </button>
              <button
                className="flex justify-between items-center w-full text-white hover:text-primary font-medium px-3 py-2 rounded-lg hover:bg-gray-800"
                onClick={toggleExploreMenu}
              >
                Health Logger
                </button>
    </div>
  </motion.div>
)}
                
          
      
      </div>
    </nav>
  );
};

export default Navbar;