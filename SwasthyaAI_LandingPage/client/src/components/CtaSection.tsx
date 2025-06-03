import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const CtaSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/subscribe", { name, email });
      toast({
        title: "Success!",
        description: "You've been signed up for updates.",
      });
      setName("");
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl opacity-30 translate-y-1/2 -translate-x-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden shadow-lg glassmorphism relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div 
              className="p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-scroll
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your wellness journey?</h2>
              <p className="text-lg text-gray-600 mb-8">Make every meal and move count with SwasthyaAI — your AI-powered health companion.</p>
              
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" 
                    placeholder="john@example.com"
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-6 rounded-xl hover:shadow-lg transition duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? "Processing..." : "Get Started Now"}
                </Button>
                
                <p className="text-sm text-gray-500 text-center">By signing up, you agree to our Terms and Privacy Policy</p>
              </form>
            </motion.div>
            
            <motion.div 
              className="relative h-64 lg:h-auto"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              data-scroll
            >
              <img 
                src="https://pixabay.com/get/g1efb44b3a2b14dad1b0e311e171d20dd6da8dbab48aaee22294afbadef7649e40fd9a877cdc8ed1f31cb9d1fd264dff6113c28bb1481f132e2735b970e1d1ee9_1280.jpg" 
                alt="Person in peaceful yoga pose" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
                <div className="text-white">
                  <p className="text-xl font-bold mb-2">Personalized wellness at your fingertips</p>
                  <p className="text-sm opacity-80">Join thousands of users transforming their lives with SwasthyaAI</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
