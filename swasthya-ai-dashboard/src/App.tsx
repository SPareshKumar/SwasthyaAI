import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Activity, Calculator, MessageSquare, ShoppingCart, Music } from 'lucide-react';
import healthLogo from './health3.svg';
// Import the WebGL MetallicPaint component
import MetallicPaint, { parseLogoImage } from './MetallicPaint/MetallicPaint';
// Import new components
import FeaturesSection from './components/FeaturesSection';
import ScrollTransition from './components/ScrollTransition';

// Custom hook for sidebar state
const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);
  
  return { isOpen, toggleSidebar, closeSidebar };
};

// Sidebar Component
const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadLogoImage() {
      try {
        setIsLoading(true);
        const response = await fetch(healthLogo);
        const blob = await response.blob();
        const file = new File([blob], "health.svg", { type: blob.type });
        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Error loading logo image:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadLogoImage();
  }, []);

  const tools = [
    { name: 'Mood.fm', icon: Music, href: 'https://mood-fm-bsx0.onrender.com/', external: true },
    { name: 'VitalCart', icon: ShoppingCart, href: 'https://prescription-based-vitalcart.onrender.com/', external: true },
    { name: 'WiseBites', icon: Heart, href: 'https://indian-diet-guide.onrender.com/', external: true },
    { name: 'WhatsApp Health Journal', icon: MessageSquare, href: 'https://smart-health-log-via-whatsapp.onrender.com/', external: true },
    { name: 'BMI Calculator', icon: Calculator, href: 'https://bmi-calculator-mvpj.onrender.com/', external: true },
  ];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-gray-900/95 backdrop-blur-xl border-r border-gray-700/50 z-50 transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 relative">
                {isLoading ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-emerald-400" />
                  </div>
                ) : imageData ? (
                  <MetallicPaint 
                    imageData={imageData} 
                    params={{ 
                      patternScale: 2,
                      refraction: 0.015,
                      edge: 1,
                      patternBlur: 0.005,
                      liquid: 0.07,
                      speed: 0.3
                    }} 
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Activity className="w-5 h-5 text-emerald-400" />
                  </div>
                )}
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Swasthya AI
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 p-6">
            <div className="space-y-2">
              {tools.map((tool, index) => (
                <a
                  key={index}
                  href={tool.href}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-700/30 transition-all duration-200 group"
                  onClick={(e) => {
                    if (!tool.external) {
                      e.preventDefault(); // Prevent navigation for demo
                      console.log(`Navigate to ${tool.name}`);
                    }
                  }}
                  target={tool.external ? "_blank" : undefined}
                  rel={tool.external ? "noopener noreferrer" : undefined}
                >
                  <div className="p-2 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-lg group-hover:from-emerald-400/30 group-hover:to-cyan-400/30 transition-all">
                    <tool.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                    {tool.name}
                  </span>
                </a>
              ))}
            </div>
          </nav>
          
          {/* Footer */}
          <div className="p-6 border-t border-gray-700/50">
            <div className="text-sm text-gray-500 text-center">
              AI That Understands Indian Wellness
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Header Component
const Header: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  return (
    <div className="fixed top-0 left-0 z-30 p-4">
      <button
        onClick={onMenuClick}
        className="p-3 hover:bg-gray-800/50 rounded-xl transition-all duration-200 group"
      >
        <Menu className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
      </button>
    </div>
  );
};

// Hero Component
const Hero: React.FC = () => {
  const [imageData, setImageData] = useState<ImageData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadLogoImage() {
      try {
        setIsLoading(true);
        const response = await fetch(healthLogo);
        const blob = await response.blob();
        const file = new File([blob], "health.svg", { type: blob.type });
        const parsedData = await parseLogoImage(file);
        setImageData(parsedData?.imageData ?? null);
      } catch (err) {
        console.error("Error loading logo image:", err);
      } finally {
        setIsLoading(false);
      }
    }
    loadLogoImage();
  }, []);

  useEffect(() => {
    // Add keyframe animation to document head
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shine {
        0% {
          background-position: -200% 0, 0 0;
        }
        100% {
          background-position: 200% 0, 0 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black" />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        {/* Logo and Title */}
        <div className="flex flex-col items-center space-y-8 mb-8">
          {/* Metallic SVG Logo with WebGL Effect */}
          <div className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-8 relative">
            {isLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-emerald-400" />
              </div>
            ) : imageData ? (
              <MetallicPaint 
                imageData={imageData} 
                params={{ 
                  patternScale: 2,
                  refraction: 0.015,
                  edge: 1,
                  patternBlur: 0.005,
                  liquid: 0.07,
                  speed: 0.3
                }} 
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-red-400">Failed to load logo</div>
              </div>
            )}
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-tight">
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.9) 50%, transparent 70%), linear-gradient(to right, #ffffff, #9ca3af)',
                backgroundSize: '200% 100%, 100% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: 'shine 3s ease-in-out infinite'
              }}
            >
              SWASTHYA
            </span>
            <br />
            <span 
              className="inline-block"
              style={{
                background: 'linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.9) 50%, transparent 70%), linear-gradient(to right, #10b981, #06b6d4)',
                backgroundSize: '200% 100%, 100% 100%',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                animation: 'shine 3s ease-in-out infinite'
              }}
            >
              AI
            </span>
          </h1>
        </div>
        
        {/* Tagline with Shiny Effect */}
        <div className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 relative">
          <span 
            className="inline-block"
            style={{
              background: 'linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%), linear-gradient(to right, #9ca3af, #9ca3af)',
              backgroundSize: '200% 100%, 100% 100%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'shine 3s ease-in-out infinite'
            }}
          >
            AI That Understands{' '}
          </span>
          <span 
            className="font-medium inline-block"
            style={{
              background: 'linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.8) 50%, transparent 70%), linear-gradient(to right, #10b981, #06b6d4)',
              backgroundSize: '200% 100%, 100% 100%',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              animation: 'shine 3s ease-in-out infinite'
            }}
          >
            Indian Wellness
          </span>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App: React.FC = () => {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onMenuClick={toggleSidebar} />
      <Sidebar isOpen={isOpen} onClose={closeSidebar} />
      <main className="relative">
        <Hero />
        <ScrollTransition />
        <FeaturesSection />
      </main>
    </div>
  );
};

export default App;