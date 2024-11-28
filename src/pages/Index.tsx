import { Brain, Bot, Sparkles, Search, ChevronRight, ArrowRight, Star, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
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
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const solutions = [
  {
    id: "text-generation",
    title: "Text Generation AI",
    description: "Advanced language model for content creation and analysis",
    icon: <Brain className="w-6 h-6" />,
    price: "$99",
    category: "nlp",
    rating: 4.8,
    users: 1200
  },
  {
    id: "computer-vision",
    title: "Computer Vision Suite",
    description: "Image recognition and processing solutions",
    icon: <Bot className="w-6 h-6" />,
    price: "$149",
    category: "vision",
    rating: 4.6,
    users: 850
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "AI-powered forecasting and data analysis",
    icon: <Sparkles className="w-6 h-6" />,
    price: "$199",
    category: "analytics",
    rating: 4.9,
    users: 2300
  }
];

const Index = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState("");

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
                <NavigationMenuTrigger 
                  onClick={() => navigate("/solutions")}
                  className="bg-transparent hover:bg-primary/10"
                >
                  Solutions
                </NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-primary/10">
                  Developers
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] bg-white rounded-lg shadow-lg">
                    <NavigationMenuLink className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Documentation</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Learn how to integrate our AI solutions
                      </p>
                    </NavigationMenuLink>
                    <NavigationMenuLink className="cursor-pointer block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">API Reference</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Detailed API documentation and examples
                      </p>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6 animate-fade-in">
            AI Solutions Marketplace
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in delay-100">
            Discover and integrate cutting-edge AI solutions to transform your business. Access pre-trained models, APIs, and custom solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-200">
            <Button 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full group transition-all duration-300 hover:scale-105"
              onClick={handleGetStarted}
            >
              Explore Solutions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline"
              className="px-8 py-6 text-lg rounded-full hover:bg-secondary/10"
              onClick={() => navigate("/solutions")}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Featured Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <Card key={solution.id} className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in">
              <CardHeader>
                <div className="mb-4 text-primary p-3 bg-primary/5 rounded-full w-fit">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    {solution.rating}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {solution.users.toLocaleString()} users
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-2xl font-bold text-primary">{solution.price}</span>
                <Button 
                  variant="outline" 
                  className="group-hover:bg-primary group-hover:text-white transition-colors"
                  onClick={() => handleLearnMore(solution.id)}
                >
                  Learn More 
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-primary to-secondary p-12 rounded-2xl text-white transform hover:scale-[1.02] transition-transform duration-300">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="mb-8 text-lg opacity-90">
              Join thousands of businesses leveraging AI solutions for growth
            </p>
            <Button 
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg rounded-full group transition-all duration-300"
              onClick={handleGetStarted}
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-white/50 backdrop-blur-sm border-t mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2">
                <li><a href="/solutions" className="text-gray-600 hover:text-primary transition-colors">All Solutions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Featured</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Developers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">API Reference</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Privacy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">Security</a></li>
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
