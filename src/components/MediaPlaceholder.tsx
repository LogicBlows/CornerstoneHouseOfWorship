import { Card, CardContent } from "@/components/ui/card";
import { Play, Image, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MediaPlaceholderProps {
  type: "video" | "image";
  title: string;
  description?: string;
  className?: string;
}

const MediaPlaceholder = ({ type, title, description, className = "" }: MediaPlaceholderProps) => {
  const Icon = type === "video" ? Play : Image;
  
  return (
    <Card className={`group hover:shadow-medium transition-all duration-300 ${className}`}>
      <CardContent className="p-6">
        <div className="relative bg-muted rounded-lg aspect-video flex items-center justify-center mb-4 overflow-hidden">
          <div className="text-center">
            <Icon className="h-12 w-12 text-muted-foreground mb-2 mx-auto" />
            <p className="text-sm text-muted-foreground">
              {type === "video" ? "Video Placeholder" : "Image Placeholder"}
            </p>
          </div>
          
          {/* Overlay for admin */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Add {type === "video" ? "Video" : "Image"}
            </Button>
          </div>
        </div>
        
        <h3 className="text-lg font-semibold text-card-foreground mb-2">{title}</h3>
        {description && (
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default MediaPlaceholder;