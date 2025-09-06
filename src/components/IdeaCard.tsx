import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Heart, Star, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface IdeaCardProps {
  id?: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  creator: {
    name: string;
    avatar?: string;
    verified?: boolean;
  };
  stats: {
    views: number;
    likes: number;
    rating: number;
  };
  tools: string[];
  trending?: boolean;
}

const IdeaCard = ({ 
  id,
  title, 
  description, 
  category, 
  difficulty, 
  creator, 
  stats, 
  tools, 
  trending 
}: IdeaCardProps) => {
  const navigate = useNavigate();
  
  const handleViewDetails = () => {
    if (id) {
      navigate(`/idea/${id}`);
    }
  };
  const difficultyColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700", 
    Advanced: "bg-red-100 text-red-700"
  };

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-card border-0 shadow-soft">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className="font-medium">
            {category}
          </Badge>
          {trending && (
            <div className="flex items-center gap-1 text-xs text-primary">
              <TrendingUp className="w-3 h-3" />
              <span>Trending</span>
            </div>
          )}
        </div>
        
        <div>
          <h3 className="text-xl font-semibold leading-tight mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar className="w-6 h-6">
              <AvatarImage src={creator.avatar} alt={creator.name} />
              <AvatarFallback className="text-xs bg-gradient-primary text-white">
                {creator.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm font-medium">{creator.name}</span>
            {creator.verified && (
              <div className="w-1 h-1 bg-primary rounded-full"></div>
            )}
          </div>
          
          <Badge className={`text-xs ${difficultyColors[difficulty]}`}>
            {difficulty}
          </Badge>
        </div>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-3 h-3" />
            <span>{stats.views}</span>
          </div>
          <div className="flex items-center gap-1">
            <Heart className="w-3 h-3" />
            <span>{stats.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-current text-yellow-500" />
            <span>{stats.rating}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1">
          {tools.slice(0, 3).map((tool, index) => (
            <Badge key={index} variant="outline" className="text-xs px-2 py-0.5">
              {tool}
            </Badge>
          ))}
          {tools.length > 3 && (
            <Badge variant="outline" className="text-xs px-2 py-0.5 text-muted-foreground">
              +{tools.length - 3}
            </Badge>
          )}
        </div>
      </CardContent>
      
      <CardFooter>
        <Button variant="gradient" className="w-full" onClick={handleViewDetails}>
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default IdeaCard;