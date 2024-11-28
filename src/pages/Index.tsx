import { Brain, Bot, Sparkles, Search, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState, type ChangeEvent } from "react";
import { useToast } from "@/hooks/use-toast";

const solutions = [
  {
    id: "text-generation",
    title: "Text Generation AI",
    description: "Advanced language model for content creation and analysis",
    icon: <Brain className="w-6 h-6" />,
    price: "$99",
    category: "nlp"
  },
  {
    id: "computer-vision",
    title: "Computer Vision Suite",
    description: "Image recognition and processing solutions",
    icon: <Bot className="w-6 h-6" />,
    price: "$149",
    category: "vision"
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "AI-powered forecasting and data analysis",
    icon: <Sparkles className="w-6 h-6" />,
    price: "$199",
    category: "analytics"
  }
];

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleGetStarted = () => {
    navigate("/solutions");
    toast({
      title: "Welcome!",
      description: "Browse our collection of AI solutions.",
    });
  };

  const handleLearnMore = (id: string) => {
    navigate(`/solutions/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <nav className="border-b bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger onClick={() => navigate("/solutions")}>
                  Solutions
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Developers</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <NavigationMenuLink className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Documentation</div>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">API Reference</div>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6">
          AI Solutions Marketplace
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover and integrate cutting-edge AI solutions to transform your business. Access pre-trained models, APIs, and custom solutions.
        </p>
        <Button 
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full"
          onClick={handleGetStarted}
        >
          Explore Solutions
        </Button>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.id} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 text-primary">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">{solution.price}</span>
                <Button 
                  variant="outline" 
                  className="hover:bg-primary hover:text-white"
                  onClick={() => handleLearnMore(solution.id)}
                >
                  Learn More <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24 text-center">
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-lg opacity-90">
            Join thousands of businesses leveraging AI solutions for growth
          </p>
          <Button 
            className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full"
            onClick={handleGetStarted}
          >
            Get Started Today
          </Button>
        </div>
      </section>

      <footer className="bg-white/50 backdrop-blur-sm border-t mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="/solutions" className="text-gray-600 hover:text-primary">All Solutions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Featured</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">API Reference</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 AI Solutions Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;