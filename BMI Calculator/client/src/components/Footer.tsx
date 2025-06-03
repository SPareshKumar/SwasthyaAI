import { Heart } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-primary-400" />
              <h2 className="text-xl font-semibold">HealthMetrics</h2>
            </div>
            <p className="text-gray-400">Empowering you to make informed health decisions and achieve your wellness goals.</p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Health Tools</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-primary-300 transition-colors">BMI Calculator</Link></li>
              <li><Link href="/bmr" className="hover:text-primary-300 transition-colors">BMR Calculator</Link></li>
              <li><Link href="/calorie" className="hover:text-primary-300 transition-colors">Calorie Calculator</Link></li>
              <li><Link href="/body-fat" className="hover:text-primary-300 transition-colors">Body Fat Calculator</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/articles" className="hover:text-primary-300 transition-colors">Health Articles</Link></li>
              <li><Link href="/nutrition" className="hover:text-primary-300 transition-colors">Nutrition Guide</Link></li>
              <li><Link href="/workouts" className="hover:text-primary-300 transition-colors">Workout Plans</Link></li>
              <li><Link href="/community" className="hover:text-primary-300 transition-colors">Community</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/contact" className="hover:text-primary-300 transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-primary-300 transition-colors">About</Link></li>
              <li><Link href="/privacy" className="hover:text-primary-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary-300 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} HealthMetrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
