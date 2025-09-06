import { Button } from "@/components/ui/button";
import { Lightbulb, Menu, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
            NO IDEA
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <button 
            onClick={() => navigate("/explore-ideas")} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Explore Ideas
          </button>
          <button 
            onClick={() => navigate("/creators")} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Creators
          </button>
          <button 
            onClick={() => navigate("/categories")} 
            className="text-foreground hover:text-primary transition-colors"
          >
            Categories
          </button>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="w-5 h-5" />
          </Button>
          <Button variant="outline">
            Sign In
          </Button>
          <Button variant="gradient">
            Submit Idea
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;