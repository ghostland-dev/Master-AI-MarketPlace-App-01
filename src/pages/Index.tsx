import { Brain, Robot, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const solutions = [
  {
    title: "Text Generation AI",
    description: "Advanced language model for content creation and analysis",
    icon: <Brain className="w-6 h-6" />,
    price: "$99",
  },
  {
    title: "Computer Vision Suite",
    description: "Image recognition and processing solutions",
    icon: <Robot className="w-6 h-6" />,
    price: "$149",
  },
  {
    title: "Predictive Analytics",
    description: "AI-powered forecasting and data analysis",
    icon: <Sparkles className="w-6 h-6" />,
    price: "$199",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          AI Solutions Marketplace
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover and integrate cutting-edge AI solutions to transform your business. Access pre-trained models, APIs, and custom solutions.
        </p>
        <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full">
          Explore Solutions
        </Button>
      </section>

      {/* Featured Solutions */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-primary">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">{solution.price}</span>
                <Button variant="outline" className="hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-24 text-center">
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-lg opacity-90">
            Join thousands of businesses leveraging AI solutions for growth
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full">
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;