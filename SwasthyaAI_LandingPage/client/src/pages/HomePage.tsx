import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import PathwaysSection from "@/components/PathwaysSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const HomePage: React.FC = () => {
  useEffect(() => {
    // Set page title and meta description for SEO
    document.title = "SwasthyaAI - Your Personalized Health Companion";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "SwasthyaAI offers personalized health plans, diet recommendations, fitness tracking, and more to help you achieve your wellness goals.");
    } else {
      const newMetaDescription = document.createElement('meta');
      newMetaDescription.name = 'description';
      newMetaDescription.content = "SwasthyaAI offers personalized health plans, diet recommendations, fitness tracking, and more to help you achieve your wellness goals.";
      document.head.appendChild(newMetaDescription);
    }

    // Add Open Graph tags for better social sharing
    const ogTags = [
      { property: "og:title", content: "SwasthyaAI - Your Personalized Health Companion" },
      { property: "og:description", content: "SwasthyaAI offers personalized health plans, diet recommendations, fitness tracking, and more to help you achieve your wellness goals." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: window.location.href },
    ];

    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (ogTag) {
        ogTag.setAttribute("content", tag.content);
      } else {
        ogTag = document.createElement('meta');
        ogTag.setAttribute("property", tag.property);
        ogTag.setAttribute("content", tag.content);
        document.head.appendChild(ogTag);
      }
    });

    // Add scroll animation functionality
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight - 100;
        
        if (isInViewport) {
          el.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', animateOnScroll);
    // Initial check for elements in viewport
    setTimeout(animateOnScroll, 100);

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="bg-gray-50">
      <Navbar />
      <HeroSection />
      <FeatureCards />
      <PathwaysSection />
      <Footer />
    </div>
  );
};

export default HomePage;
