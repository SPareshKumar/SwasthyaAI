import React from "react";
import { motion } from "framer-motion";
import SwasthyaLogo from "@/assets/svg/SwasthyaLogo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Left Section */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white">
                <SwasthyaLogo className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-white">SwasthyaAI</span>
            </div>
            
            <p className="text-gray-400 mb-6">Smarter Living, Every Day</p>
            <p className="text-gray-400">Your AI-powered partner for a healthier life</p>
          </div>
          
          {/* Center Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection("home")} 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://indian-diet-guide.onrender.com", "_blank")} 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Diet Recommendations
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://smart-health-log-via-whatsapp.onrender.com/", "_blank")} 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Health Logger
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("https://bmi-calculator-3oj5.onrender.com", "_blank")}
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  BMI Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Right Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Stay Connected</h3>
            <div className="flex space-x-4 mb-6">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition duration-300"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <form className="space-y-4">
              <div className="relative">
                <Input 
                  type="email" 
                  placeholder="Subscribe for updates" 
                  className="w-full px-4 py-3 rounded-full bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary pr-12"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1.5 top-1.5 bg-primary text-white p-1.5 rounded-full hover:bg-primary/80 transition duration-300"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SwasthyaAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
