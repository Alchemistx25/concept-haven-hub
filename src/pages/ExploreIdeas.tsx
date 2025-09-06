import { useState } from "react";
import Header from "@/components/Header";
import IdeaCard from "@/components/IdeaCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

const ExploreIdeas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const allIdeas = [
    {
      id: "1",
      title: "AI-Powered Personal Finance Assistant",
      description: "A smart budgeting app that uses AI to analyze spending patterns, predict expenses, and provide personalized financial advice. Perfect for millennials who want to take control of their finances.",
      category: "FinTech",
      difficulty: "Intermediate" as const,
      creator: { name: "Sarah Chen", verified: true },
      stats: { views: 1240, likes: 89, rating: 4.8 },
      tools: ["React Native", "TensorFlow", "Stripe API", "PostgreSQL"],
      trending: true
    },
    {
      id: "2",
      title: "Sustainable Food Delivery Network",
      description: "Connect local restaurants with eco-conscious customers through a platform that prioritizes sustainable packaging, local sourcing, and carbon-neutral delivery options.",
      category: "Food & Beverage",
      difficulty: "Advanced" as const,
      creator: { name: "Marcus Rodriguez", verified: true },
      stats: { views: 890, likes: 67, rating: 4.6 },
      tools: ["Next.js", "Google Maps API", "Firebase", "Tailwind CSS"],
      trending: false
    },
    {
      id: "3",
      title: "Remote Team Collaboration Hub",
      description: "A unified workspace that combines video calling, project management, and real-time collaboration tools specifically designed for distributed teams.",
      category: "Productivity",
      difficulty: "Intermediate" as const,
      creator: { name: "Alex Thompson", verified: false },
      stats: { views: 756, likes: 45, rating: 4.4 },
      tools: ["WebRTC", "Socket.io", "MongoDB", "Docker"],
      trending: false
    },
    {
      id: "4",
      title: "Micro-Learning Language App",
      description: "Learn new languages through 3-minute daily sessions using spaced repetition, gamification, and AI-generated conversations tailored to your interests.",
      category: "Education",
      difficulty: "Beginner" as const,
      creator: { name: "Emma Wilson", verified: true },
      stats: { views: 1450, likes: 102, rating: 4.9 },
      tools: ["Flutter", "OpenAI API", "Supabase", "Redux"],
      trending: true
    },
    {
      id: "5",
      title: "AR Interior Design Marketplace",
      description: "Allow users to visualize furniture and decor in their space using AR, then purchase items directly from partnered retailers with one-click ordering.",
      category: "E-commerce",
      difficulty: "Advanced" as const,
      creator: { name: "David Kim", verified: true },
      stats: { views: 934, likes: 71, rating: 4.7 },
      tools: ["ARKit", "Unity", "Shopify API", "AWS"],
      trending: false
    },
    {
      id: "6",
      title: "Community Garden Management",
      description: "Digital platform to help neighborhoods organize community gardens, track plant growth, share resources, and coordinate maintenance schedules.",
      category: "Community",
      difficulty: "Beginner" as const,
      creator: { name: "Lisa Park", verified: false },
      stats: { views: 623, likes: 38, rating: 4.3 },
      tools: ["React", "Node.js", "MySQL", "Chart.js"],
      trending: false
    },
    {
      id: "7",
      title: "Smart Home Energy Optimizer",
      description: "IoT-based system that learns household patterns and automatically optimizes energy consumption to reduce bills and environmental impact.",
      category: "IoT",
      difficulty: "Advanced" as const,
      creator: { name: "Jennifer Walsh", verified: true },
      stats: { views: 812, likes: 55, rating: 4.5 },
      tools: ["Arduino", "React", "Python", "AWS IoT"],
      trending: false
    },
    {
      id: "8",
      title: "Virtual Reality Fitness Studio",
      description: "Immersive VR fitness experience with real-time coaching, multiplayer workouts, and gamified progress tracking.",
      category: "Health & Fitness",
      difficulty: "Advanced" as const,
      creator: { name: "Mike Johnson", verified: true },
      stats: { views: 1180, likes: 94, rating: 4.7 },
      tools: ["Unity", "Oculus SDK", "Firebase", "C#"],
      trending: true
    }
  ];

  const categories = ["all", "FinTech", "Food & Beverage", "Productivity", "Education", "E-commerce", "Community", "IoT", "Health & Fitness"];
  const difficulties = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredIdeas = allIdeas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || idea.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "all" || idea.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Explore Ideas</h1>
          <p className="text-lg text-muted-foreground">
            Discover innovative startup and project ideas from our creator community
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4 md:space-y-0 md:flex md:items-center md:gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search ideas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty}>
                    {difficulty === "all" ? "All Difficulties" : difficulty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredIdeas.length} of {allIdeas.length} ideas
          </p>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Sort by: Popular</span>
          </div>
        </div>

        {/* Ideas Grid */}
        {filteredIdeas.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map((idea) => (
              <IdeaCard key={idea.id} {...idea} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No ideas found matching your criteria</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedDifficulty("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default ExploreIdeas;