import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PageHeader from "@/components/PageHeader";
import { Brain, Bot, Sparkles, Search, ChevronRight } from "lucide-react";

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

const categories = [
  { id: "all", name: "All Solutions" },
  { id: "nlp", name: "Natural Language Processing" },
  { id: "vision", name: "Computer Vision" },
  { id: "analytics", name: "Analytics" }
];

const SolutionsList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const filteredSolutions = solutions.filter((solution) => {
    const matchesSearch = solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || solution.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      <PageHeader
        title="AI Solutions"
        description="Browse our collection of cutting-edge AI solutions"
      />

      <div className="max-w-xl mx-auto mb-12">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="search"
            placeholder="Search AI solutions..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredSolutions.map((solution) => (
          <Card key={solution.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="mb-4 text-primary">{solution.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
            <p className="text-gray-600 mb-4">{solution.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-primary">{solution.price}</span>
              <Button 
                variant="outline" 
                className="hover:bg-primary hover:text-white"
                onClick={() => navigate(`/solutions/${solution.id}`)}
              >
                Learn More <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SolutionsList;