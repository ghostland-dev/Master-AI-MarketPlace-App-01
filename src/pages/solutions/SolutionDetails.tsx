import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";
import { useToast } from "@/hooks/use-toast";
import { Brain, Bot, Sparkles } from "lucide-react";

const solutionsData = {
  "text-generation": {
    title: "Text Generation AI",
    description: "Advanced language model for content creation and analysis",
    icon: <Brain className="w-12 h-12" />,
    price: "$99",
    features: [
      "Natural language processing",
      "Content generation",
      "Text analysis",
      "Sentiment analysis"
    ]
  },
  "computer-vision": {
    title: "Computer Vision Suite",
    description: "Image recognition and processing solutions",
    icon: <Bot className="w-12 h-12" />,
    price: "$149",
    features: [
      "Object detection",
      "Image classification",
      "Facial recognition",
      "Scene understanding"
    ]
  },
  "predictive-analytics": {
    title: "Predictive Analytics",
    description: "AI-powered forecasting and data analysis",
    icon: <Sparkles className="w-12 h-12" />,
    price: "$199",
    features: [
      "Data forecasting",
      "Pattern recognition",
      "Trend analysis",
      "Business intelligence"
    ]
  }
};

const SolutionDetails = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const solution = solutionsData[id as keyof typeof solutionsData];

  if (!solution) {
    return (
      <div className="container mx-auto px-4 py-12">
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
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title={solution.title}
        description={solution.description}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <Card className="p-6">
          <div className="flex justify-center mb-6 text-primary">
            {solution.icon}
          </div>
          <h3 className="text-2xl font-bold mb-4">Features</h3>
          <ul className="space-y-3">
            {solution.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {feature}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-4">{solution.price}</p>
            <p className="text-gray-600 mb-8">per month</p>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg"
              onClick={handlePurchase}
            >
              Purchase Now
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SolutionDetails;