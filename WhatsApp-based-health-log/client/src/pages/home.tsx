import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  MessageCircle, 
  FileSpreadsheet, 
  Brain, 
  Clock, 
  TrendingUp, 
  Smartphone, 
  Shield, 
  Globe, 
  Calendar, 
  Database, 
  Moon, 
  Dumbbell
} from "lucide-react";

export default function Home() {

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-primary shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-4">
            <div className="flex items-center space-x-3">
              <Heart className="h-8 w-8 text-white" />
              <h1 className="text-white text-xl font-bold">WhatsApp Health Logger</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
        {/* Background Graphics - Chat bubbles and Excel icons */}
        <div className="absolute inset-0 opacity-10">
          {/* WhatsApp chat bubbles */}
          <div className="absolute top-20 left-10 transform rotate-12">
            <div className="bg-whatsapp text-white p-4 rounded-2xl rounded-bl-none max-w-xs shadow-lg">
              <p className="text-sm">Had grilled chicken and salad for lunch 🥗</p>
            </div>
          </div>
          <div className="absolute top-32 left-16 transform rotate-6">
            <div className="bg-gray-200 text-gray-800 p-3 rounded-2xl rounded-br-none max-w-xs shadow-lg">
              <p className="text-sm">Logged! Calories: 450. Great protein choice!</p>
            </div>
          </div>
          
          {/* Excel spreadsheet elements */}
          <div className="absolute bottom-20 right-10 transform -rotate-12">
            <div className="bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="bg-excel text-white p-2 text-center font-semibold">Date</div>
                <div className="bg-excel text-white p-2 text-center font-semibold">Meal</div>
                <div className="bg-excel text-white p-2 text-center font-semibold">Calories</div>
                <div className="p-2 border">01/12</div>
                <div className="p-2 border">Lunch</div>
                <div className="p-2 border">450</div>
                <div className="p-2 border">01/12</div>
                <div className="p-2 border">Dinner</div>
                <div className="p-2 border">620</div>
              </div>
            </div>
          </div>
          
          {/* Additional chat elements */}
          <div className="absolute top-60 right-20 transform rotate-6">
            <div className="bg-whatsapp text-white p-3 rounded-2xl rounded-bl-none max-w-xs shadow-lg">
              <p className="text-sm">30min morning jog completed! 💪</p>
            </div>
          </div>
          
          {/* More Excel elements */}
          <div className="absolute bottom-60 left-20 transform rotate-12">
            <div className="flex items-center space-x-2">
              <FileSpreadsheet className="h-8 w-8 text-excel" />
              <div className="bg-white rounded border p-2 shadow">
                <div className="text-xs text-excel font-semibold">Health Report.xlsx</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Track Your Health Through{" "}
            <span className="text-whatsapp">WhatsApp</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Revolutionary health logging system that transforms your daily WhatsApp conversations into comprehensive health insights and Excel reports.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-xl text-gray-600">Simple, intuitive health tracking through familiar WhatsApp interface</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* WhatsApp Integration */}
            <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400" 
                  alt="WhatsApp messaging interface on mobile phone" 
                  className="mx-auto mb-6 rounded-xl shadow-lg" 
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-center">
                  <MessageCircle className="text-whatsapp mr-2 h-6 w-6" />
                  Chat to Log
                </h4>
                <p className="text-gray-600">Simply message your health data through WhatsApp - meals, workouts, symptoms, anything health-related.</p>
              </CardContent>
            </Card>

            {/* AI Processing */}
            <Card className="text-center p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400" 
                  alt="AI health analytics processing" 
                  className="mx-auto mb-6 rounded-xl shadow-lg" 
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-center">
                  <Brain className="text-primary mr-2 h-6 w-6" />
                  AI Analysis
                </h4>
                <p className="text-gray-600">Advanced AI processes your messages, extracts health insights, and identifies patterns in your data.</p>
              </CardContent>
            </Card>

            {/* Excel Reports */}
            <Card className="text-center p-8 bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=400" 
                  alt="Excel health report dashboard" 
                  className="mx-auto mb-6 rounded-xl shadow-lg" 
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center justify-center">
                  <FileSpreadsheet className="text-excel mr-2 h-6 w-6" />
                  Excel Reports
                </h4>
                <p className="text-gray-600">Get comprehensive Excel reports with charts, trends, and actionable insights about your health journey.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section id="demo" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See It In Action</h3>
            <p className="text-xl text-gray-600">Watch how simple health logging can be with WhatsApp</p>
          </div>
          
          {/* YouTube Video Embed */}
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/sCBIAD16lYw" 
                title="WhatsApp Health Logger Demo"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              />
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <Card className="text-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h5 className="font-semibold text-gray-900 mb-2">Save Time</h5>
                <p className="text-gray-600 text-sm">No complex apps or forms to fill</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-whatsapp mx-auto mb-4" />
                <h5 className="font-semibold text-gray-900 mb-2">Track Progress</h5>
                <p className="text-gray-600 text-sm">Visual insights and trends</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Smartphone className="h-12 w-12 text-excel mx-auto mb-4" />
                <h5 className="font-semibold text-gray-900 mb-2">Always Available</h5>
                <p className="text-gray-600 text-sm">Use WhatsApp anywhere, anytime</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h5 className="font-semibold text-gray-900 mb-2">Secure & Private</h5>
                <p className="text-gray-600 text-sm">Your health data stays protected</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section id="future" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Coming Soon</h3>
            <p className="text-xl text-gray-600">Exciting features on our roadmap</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Deploy for All Users */}
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="Global deployment and scaling" 
                  className="w-full h-48 object-cover rounded-xl mb-6" 
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Globe className="text-primary mr-2 h-6 w-6" />
                  Global Deployment
                </h4>
                <p className="text-gray-600">Deploy the health logging agent for all users worldwide with multi-language support and regional health guidelines.</p>
              </CardContent>
            </Card>

            {/* Google Calendar Integration */}
            <Card className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-green-100 rounded-xl mb-6 flex items-center justify-center">
                  <Calendar className="h-24 w-24 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Calendar className="text-whatsapp mr-2 h-6 w-6" />
                  Calendar Reminders
                </h4>
                <p className="text-gray-600">Smart Google Calendar integration for medication reminders, workout schedules, and health check-ups.</p>
              </CardContent>
            </Card>

            {/* Database Integration */}
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border border-purple-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl mb-6 flex items-center justify-center">
                  <Database className="h-24 w-24 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Database className="text-purple-600 mr-2 h-6 w-6" />
                  Advanced Database
                </h4>
                <p className="text-gray-600">Comprehensive database integration for long-term health data storage, backup, and advanced analytics.</p>
              </CardContent>
            </Card>

            {/* Mood & Sleep Tracking */}
            <Card className="p-8 bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="Sleep and mood tracking interface" 
                  className="w-full h-48 object-cover rounded-xl mb-6" 
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Moon className="text-indigo-600 mr-2 h-6 w-6" />
                  Mood & Sleep Tracking
                </h4>
                <p className="text-gray-600">Advanced mood analysis and sleep pattern tracking with personalized insights and recommendations.</p>
              </CardContent>
            </Card>

            {/* Smart Workout Recommendations */}
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border border-orange-100 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="Smart workout recommendations dashboard" 
                  className="w-full h-48 object-cover rounded-xl mb-6" 
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Dumbbell className="text-orange-600 mr-2 h-6 w-6" />
                  Smart Workouts
                </h4>
                <p className="text-gray-600">AI-powered workout recommendations based on your health data, goals, and available time.</p>
              </CardContent>
            </Card>

            {/* Integration with Wearables */}
            <Card className="p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <img 
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250" 
                  alt="Wearable fitness devices and health trackers" 
                  className="w-full h-48 object-cover rounded-xl mb-6" 
                />
                <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Smartphone className="text-gray-600 mr-2 h-6 w-6" />
                  Integration with Wearables
                </h4>
                <p className="text-gray-600">Sync data from Fitbit, Google Fit, or Apple Health for auto-logging.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
}
