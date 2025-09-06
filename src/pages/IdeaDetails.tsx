import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Eye, Heart, Star, TrendingUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Header from "@/components/Header";

// Sample data - in a real app this would come from an API or state management
const sampleIdeas = [
  {
    id: "1",
    title: "AI-Powered Personal Finance Assistant",
    description: "A smart budgeting app that uses AI to analyze spending patterns, predict expenses, and provide personalized financial advice. Perfect for millennials who want to take control of their finances.",
    fullDescription: "This comprehensive personal finance assistant leverages artificial intelligence to revolutionize how people manage their money. The app analyzes spending patterns across multiple accounts, predicts future expenses based on historical data and lifestyle factors, and provides personalized financial advice tailored to individual goals and circumstances. Key features include automated categorization of expenses, smart budget recommendations, investment suggestions based on risk tolerance, bill payment reminders, and integration with major banks and financial institutions.",
    category: "FinTech",
    difficulty: "Intermediate" as const,
    creator: {
      name: "Sarah Chen",
      avatar: undefined,
      verified: true
    },
    stats: {
      views: 1240,
      likes: 89,
      rating: 4.8
    },
    tools: ["React Native", "TensorFlow", "Stripe API", "PostgreSQL"],
    trending: true,
    estimatedTime: "3-6 months",
    marketSize: "$50B+",
    targetAudience: "Millennials and Gen Z users seeking financial literacy"
  },
  {
    id: "2",
    title: "Sustainable Food Delivery Network",
    description: "Connect local restaurants with eco-conscious customers through a platform that prioritizes sustainable packaging, local sourcing, and carbon-neutral delivery options.",
    fullDescription: "This innovative food delivery platform addresses the growing demand for sustainable consumption by connecting environmentally conscious customers with local restaurants that prioritize eco-friendly practices. The platform features a comprehensive sustainability scoring system, carbon footprint tracking for each order, partnerships with local farms and suppliers, biodegradable packaging requirements, and carbon-neutral delivery options including electric vehicles and bicycle couriers.",
    category: "Food & Beverage",
    difficulty: "Advanced" as const,
    creator: {
      name: "Marcus Rodriguez",
      avatar: undefined,
      verified: true
    },
    stats: {
      views: 890,
      likes: 67,
      rating: 4.6
    },
    tools: ["Next.js", "Google Maps API", "Firebase", "Tailwind CSS"],
    trending: false,
    estimatedTime: "6-12 months",
    marketSize: "$150B+",
    targetAudience: "Eco-conscious consumers and sustainable restaurants"
  },
  // Add more sample ideas as needed...
];

const IdeaDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const idea = sampleIdeas.find(idea => idea.id === id);
  
  if (!idea) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Idea Not Found</h1>
          <Button onClick={() => navigate("/")} variant="gradient">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700", 
    Advanced: "bg-red-100 text-red-700"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Ideas
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <Badge variant="secondary" className="font-medium">
                  {idea.category}
                </Badge>
                {idea.trending && (
                  <div className="flex items-center gap-1 text-sm text-primary">
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending</span>
                  </div>
                )}
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {idea.title}
              </h1>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {idea.description}
              </p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <h2 className="text-xl font-semibold">Full Description</h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {idea.fullDescription}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">Required Tools & Technologies</h2>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {idea.tools.map((tool, index) => (
                    <Badge key={index} variant="outline" className="text-sm px-3 py-1">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Creator Info */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Creator</h3>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={idea.creator.avatar} alt={idea.creator.name} />
                    <AvatarFallback className="bg-gradient-primary text-white">
                      {idea.creator.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{idea.creator.name}</span>
                      {idea.creator.verified && (
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Engagement</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    <span>Views</span>
                  </div>
                  <span className="font-medium">{idea.stats.views}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Heart className="w-4 h-4" />
                    <span>Likes</span>
                  </div>
                  <span className="font-medium">{idea.stats.likes}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Star className="w-4 h-4 fill-current text-yellow-500" />
                    <span>Rating</span>
                  </div>
                  <span className="font-medium">{idea.stats.rating}</span>
                </div>
              </CardContent>
            </Card>

            {/* Project Details */}
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Project Details</h3>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Difficulty</span>
                  <Badge className={`text-xs ${difficultyColors[idea.difficulty]}`}>
                    {idea.difficulty}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Est. Time</span>
                  <span className="font-medium">{idea.estimatedTime}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Market Size</span>
                  <span className="font-medium">{idea.marketSize}</span>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <div className="space-y-3">
              <Button variant="gradient" className="w-full">
                <Heart className="w-4 h-4 mr-2" />
                Save Idea
              </Button>
              <Button variant="outline" className="w-full">
                <ExternalLink className="w-4 h-4 mr-2" />
                Share Idea
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IdeaDetails;