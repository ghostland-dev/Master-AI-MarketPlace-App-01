import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import PageHeader from "@/components/PageHeader";
import { Brain, Bot, Sparkles, Search, ChevronRight, Star, Users, Filter } from "lucide-react";

const solutions = [
  {
    id: "text-generation",
    title: "Text Generation AI",
    description: "Advanced language model for content creation and analysis",
    icon: <Brain className="w-6 h-6" />,
    price: "$99",
    category: "nlp",
    rating: 4.8,
    users: 1200,
    tags: ["NLP", "Content Generation", "Analysis"]
  },
  {
    id: "computer-vision",
    title: "Computer Vision Suite",
    description: "Image recognition and processing solutions",
    icon: <Bot className="w-6 h-6" />,
    price: "$149",
    category: "vision",
    rating: 4.6,
    users: 850,
    tags: ["Computer Vision", "Image Processing", "Recognition"]
  },
  {
    id: "predictive-analytics",
    title: "Predictive Analytics",
    description: "AI-powered forecasting and data analysis",
    icon: <Sparkles className="w-6 h-6" />,
    price: "$199",
    category: "analytics",
    rating: 4.9,
    users: 2300,
    tags: ["Analytics", "Forecasting", "Business Intelligence"]
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
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const navigate = useNavigate();

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredSolutions = solutions.filter((solution) => {
    const matchesSearch = 
      solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      solution.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "all" || solution.category === selectedCategory;
    const matchesTags = 
      selectedTags.length === 0 || 
      selectedTags.some(tag => solution.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  // Get all unique tags
  const allTags = Array.from(
    new Set(solutions.flatMap(solution => solution.tags))
  );

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
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

      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <div className="w-full flex flex-wrap gap-2 justify-center mb-4">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="transition-all duration-300"
            >
              {category.name}
            </Button>
          ))}
        </div>
        
        <div className="w-full flex flex-wrap gap-2 justify-center">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTags.includes(tag) ? "secondary" : "outline"}
              size="sm"
              onClick={() => handleTagToggle(tag)}
              className="transition-all duration-300"
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredSolutions.map((solution) => (
          <Card key={solution.id} className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 text-primary p-3 bg-primary/5 rounded-full w-fit">
              {solution.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
            <p className="text-gray-600 mb-4">{solution.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {solution.tags.map((tag) => (
                <span 
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

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

            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl font-bold text-primary">{solution.price}</span>
              <Button 
                variant="outline" 
                className="group-hover:bg-primary group-hover:text-white transition-colors"
                onClick={() => navigate(`/solutions/${solution.id}`)}
              >
                Learn More 
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SolutionsList;