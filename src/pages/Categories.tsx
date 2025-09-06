import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  DollarSign, 
  Utensils, 
  Users, 
  GraduationCap, 
  ShoppingCart, 
  Leaf, 
  Zap, 
  Dumbbell,
  TrendingUp,
  Eye
} from "lucide-react";

const Categories = () => {
  const navigate = useNavigate();
  
  const categories = [
    {
      id: "fintech",
      name: "FinTech",
      description: "Financial technology solutions revolutionizing banking, payments, and investment",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      stats: {
        ideas: 24,
        creators: 18,
        avgViews: 1250
      },
      trending: true,
      topIdeas: [
        "AI-Powered Personal Finance Assistant",
        "Cryptocurrency Portfolio Tracker",
        "Micro-Investment Platform"
      ]
    },
    {
      id: "food-beverage",
      name: "Food & Beverage",
      description: "Innovative solutions for food delivery, dining experiences, and culinary technology",
      icon: Utensils,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      stats: {
        ideas: 18,
        creators: 15,
        avgViews: 890
      },
      trending: false,
      topIdeas: [
        "Sustainable Food Delivery Network",
        "Farm-to-Table Marketplace",
        "Smart Kitchen Assistant"
      ]
    },
    {
      id: "productivity",
      name: "Productivity",
      description: "Tools and platforms to enhance workflow, collaboration, and personal efficiency",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      stats: {
        ideas: 32,
        creators: 25,
        avgViews: 756
      },
      trending: true,
      topIdeas: [
        "Remote Team Collaboration Hub",
        "AI Task Prioritization Tool",
        "Meeting Analytics Platform"
      ]
    },
    {
      id: "education",
      name: "Education",
      description: "EdTech innovations transforming learning experiences and educational accessibility",
      icon: GraduationCap,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      stats: {
        ideas: 29,
        creators: 22,
        avgViews: 1450
      },
      trending: true,
      topIdeas: [
        "Micro-Learning Language App",
        "Virtual Science Laboratory",
        "Adaptive Learning Platform"
      ]
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      description: "Next-generation shopping experiences and marketplace innovations",
      icon: ShoppingCart,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      stats: {
        ideas: 21,
        creators: 16,
        avgViews: 934
      },
      trending: false,
      topIdeas: [
        "AR Interior Design Marketplace",
        "Social Commerce Platform",
        "Subscription Box Curator"
      ]
    },
    {
      id: "community",
      name: "Community",
      description: "Platforms fostering local connections, neighborhood engagement, and social impact",
      icon: Leaf,
      color: "text-green-600",
      bgColor: "bg-green-50",
      stats: {
        ideas: 15,
        creators: 12,
        avgViews: 623
      },
      trending: false,
      topIdeas: [
        "Community Garden Management",
        "Local Event Coordinator",
        "Neighborhood Watch App"
      ]
    },
    {
      id: "iot",
      name: "IoT & Smart Devices",
      description: "Internet of Things solutions for smart homes, cities, and connected experiences",
      icon: Zap,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      stats: {
        ideas: 12,
        creators: 9,
        avgViews: 812
      },
      trending: true,
      topIdeas: [
        "Smart Home Energy Optimizer",
        "IoT Plant Care System",
        "Connected Car Dashboard"
      ]
    },
    {
      id: "health-fitness",
      name: "Health & Fitness",
      description: "Digital health solutions, fitness apps, and wellness technology innovations",
      icon: Dumbbell,
      color: "text-red-600",
      bgColor: "bg-red-50",
      stats: {
        ideas: 19,
        creators: 14,
        avgViews: 1180
      },
      trending: true,
      topIdeas: [
        "Virtual Reality Fitness Studio",
        "Mental Health Tracker",
        "Nutrition AI Assistant"
      ]
    }
  ];

  const handleCategoryClick = (categoryName: string) => {
    // Navigate to explore ideas with category filter
    navigate(`/explore-ideas?category=${encodeURIComponent(categoryName)}`);
  };

  const totalIdeas = categories.reduce((sum, cat) => sum + cat.stats.ideas, 0);
  const totalCreators = categories.reduce((sum, cat) => sum + cat.stats.creators, 0);
  const trendingCategories = categories.filter(cat => cat.trending);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Idea Categories</h1>
          <p className="text-lg text-muted-foreground">
            Explore innovative ideas organized by industry and domain
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{categories.length}</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{totalIdeas}</div>
              <div className="text-sm text-muted-foreground">Total Ideas</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{totalCreators}</div>
              <div className="text-sm text-muted-foreground">Active Creators</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">{trendingCategories.length}</div>
              <div className="text-sm text-muted-foreground">Trending Now</div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                onClick={() => handleCategoryClick(category.name)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${category.color}`} />
                    </div>
                    {category.trending && (
                      <Badge variant="secondary" className="text-xs flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold">{category.stats.ideas}</div>
                      <div className="text-xs text-muted-foreground">Ideas</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{category.stats.creators}</div>
                      <div className="text-xs text-muted-foreground">Creators</div>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Eye className="w-3 h-3 text-muted-foreground" />
                      <div className="text-xs text-muted-foreground">{category.stats.avgViews}</div>
                    </div>
                  </div>

                  {/* Top Ideas */}
                  <div>
                    <h4 className="text-sm font-medium mb-2">Popular Ideas</h4>
                    <div className="space-y-1">
                      {category.topIdeas.slice(0, 3).map((idea, index) => (
                        <div key={index} className="text-xs text-muted-foreground">
                          • {idea}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Explore {category.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-secondary/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Don't see your category?</h2>
          <p className="text-muted-foreground mb-6">
            We're always expanding our categories. Submit your idea and help us create new ones!
          </p>
          <Button variant="gradient">
            Submit Your Idea
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Categories;