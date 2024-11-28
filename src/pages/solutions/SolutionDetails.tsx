import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import { useToast } from "@/hooks/use-toast";
import { Brain, Bot, Sparkles, Star, Users, Check, ArrowLeft } from "lucide-react";

const solutionsData = {
  "text-generation": {
    title: "Text Generation AI",
    description: "Advanced language model for content creation and analysis",
    icon: <Brain className="w-12 h-12" />,
    price: "$99",
    rating: 4.8,
    users: 1200,
    features: [
      "Natural language processing",
      "Content generation",
      "Text analysis",
      "Sentiment analysis"
    ],
    benefits: [
      "Increase content production efficiency",
      "Improve content quality and consistency",
      "Automate repetitive writing tasks",
      "Generate insights from text data"
    ],
    techSpecs: {
      apiLatency: "< 100ms",
      availability: "99.9%",
      supportedLanguages: "40+",
      maxInputLength: "4096 tokens"
    }
  },
  "computer-vision": {
    title: "Computer Vision Suite",
    description: "Image recognition and processing solutions",
    icon: <Bot className="w-12 h-12" />,
    price: "$149",
    rating: 4.6,
    users: 850,
    features: [
      "Object detection",
      "Image classification",
      "Facial recognition",
      "Scene understanding"
    ],
    benefits: [
      "Automate visual inspection processes",
      "Enhance security systems",
      "Improve quality control",
      "Enable touchless interactions"
    ],
    techSpecs: {
      apiLatency: "< 200ms",
      availability: "99.9%",
      maxImageSize: "4096x4096px",
      supportedFormats: "JPG, PNG, WEBP"
    }
  },
  "predictive-analytics": {
    title: "Predictive Analytics",
    description: "AI-powered forecasting and data analysis",
    icon: <Sparkles className="w-12 h-12" />,
    price: "$199",
    rating: 4.9,
    users: 2300,
    features: [
      "Data forecasting",
      "Pattern recognition",
      "Trend analysis",
      "Business intelligence"
    ],
    benefits: [
      "Make data-driven decisions",
      "Predict market trends",
      "Optimize resource allocation",
      "Reduce operational costs"
    ],
    techSpecs: {
      apiLatency: "< 500ms",
      availability: "99.9%",
      maxDataPoints: "1M/request",
      updateFrequency: "Real-time"
    }
  }
};

const SolutionDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();
  const solution = solutionsData[id as keyof typeof solutionsData];

  if (!solution) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/solutions")}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </Button>
        <h1 className="text-2xl font-bold">Solution not found</h1>
      </div>
    );
  }

  const handlePurchase = () => {
    toast({
      title: "Purchase initiated",
      description: "You will be redirected to the payment page shortly.",
    });
  };

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <Button 
        variant="ghost" 
        onClick={() => navigate("/solutions")}
        className="mb-8 hover:bg-primary/10"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Solutions
      </Button>

      <PageHeader
        title={solution.title}
        description={solution.description}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div className="lg:col-span-2 space-y-8">
          <Card className="p-8">
            <div className="flex justify-center mb-6 text-primary">
              {solution.icon}
            </div>
            
            <div className="flex items-center gap-4 justify-center mb-8">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-yellow-400 mr-1" />
                <span className="font-semibold">{solution.rating}</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-1" />
                <span className="font-semibold">{solution.users.toLocaleString()} users</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Features</h3>
                <ul className="space-y-3">
                  {solution.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-secondary" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(solution.techSpecs).map(([key, value]) => (
                <div key={key} className="p-4 bg-secondary/5 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="font-semibold">{value}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="p-8 sticky top-24">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">{solution.price}</p>
              <p className="text-gray-600 mb-8">per month</p>
              
              <div className="space-y-4">
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
                  onClick={handlePurchase}
                >
                  Purchase Now
                </Button>
                
                <Button 
                  variant="outline"
                  className="w-full py-6 text-lg"
                  onClick={() => {
                    toast({
                      title: "Demo requested",
                      description: "Our team will contact you shortly to schedule a demo.",
                    });
                  }}
                >
                  Request Demo
                </Button>
              </div>

              <p className="text-sm text-gray-500 mt-6">
                30-day money-back guarantee
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SolutionDetails;