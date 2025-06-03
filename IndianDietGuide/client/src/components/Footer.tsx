import { Heart } from "lucide-react";
import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Heart className="mr-2" />
              <span className="font-semibold text-lg">HealthMetrics</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering you to make informed health decisions and achieve your wellness goals.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Health Tools</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/bmi-calculator">
                  <a className="hover:text-white transition">BMI Calculator</a>
                </Link>
              </li>
              <li>
                <Link href="/bmr-calculator">
                  <a className="hover:text-white transition">BMR Calculator</a>
                </Link>
              </li>
              <li>
                <Link href="/calorie-calculator">
                  <a className="hover:text-white transition">Calorie Calculator</a>
                </Link>
              </li>
              <li>
                <Link href="/body-fat-calculator">
                  <a className="hover:text-white transition">Body Fat Calculator</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/health-articles">
                  <a className="hover:text-white transition">Health Articles</a>
                </Link>
              </li>
              <li>
                <Link href="/nutrition-guide">
                  <a className="hover:text-white transition">Nutrition Guide</a>
                </Link>
              </li>
              <li>
                <Link href="/workout-plans">
                  <a className="hover:text-white transition">Workout Plans</a>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <a className="hover:text-white transition">Community</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition">Contact Us</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-white transition">About</a>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <a className="hover:text-white transition">Privacy Policy</a>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <a className="hover:text-white transition">Terms of Service</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} HealthMetrics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
