import { X, FileText, Users, Gavel, Search as SearchIcon, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: string) => void;
}

const navigationItems = [
  { id: "hero", label: "🏠 Home", icon: FileText, external: false },
  { id: "early-life", label: "👶 Early Life", icon: Users, external: false },
  { id: "football-career", label: "🏈 Football Career", icon: SearchIcon, external: false },
  { id: "acting-career", label: "🎬 Acting Career", icon: Gavel, external: false },
  { id: "personal-life", label: "❤️ Personal Life", icon: Eye, external: false },
  { id: "criminal-trials", label: "⚖️ Criminal Trials", icon: Gavel, external: false },
  { id: "later-life", label: "📅 Later Life", icon: Eye, external: false },
  { id: "legacy", label: "🌟 Legacy", icon: Eye, external: false },
  { id: "fun-facts", label: "🎯 Fun Facts", icon: Eye, external: false },
  { id: "", label: "🔍 Trial Analysis", icon: Gavel, external: true, path: "/trial" },
];

export function Sidebar({ isOpen, onClose, onNavigate }: SidebarProps) {
  const handleNavigate = (item: any) => {
    if (item.external && item.path) {
      window.location.href = item.path;
    } else {
      onNavigate(item.id);
    }
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-80 bg-background border-r transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
          <h2 className="text-lg font-semibold gradient-text">Navigation</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <ScrollArea className="h-[calc(100vh-80px)] p-4">
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <Button
                key={item.id || index}
                variant="ghost"
                onClick={() => handleNavigate(item)}
                className="w-full justify-start gap-3 hover-glow"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </nav>
          
          <Separator className="my-6" />
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-muted-foreground">Quick Facts</h3>
            <div className="space-y-2 text-sm">
              <p>• Case Date: June 12, 1994</p>
              <p>• Trial Duration: 8 months</p>
              <p>• Verdict: Not Guilty (Criminal)</p>
              <p>• Civil Trial: Guilty (1997)</p>
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
}