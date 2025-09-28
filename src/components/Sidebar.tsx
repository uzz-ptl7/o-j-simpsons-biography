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
  { id: "overview", label: "Case Overview", icon: FileText },
  { id: "people", label: "Key People", icon: Users },
  { id: "evidence", label: "Evidence", icon: SearchIcon },
  { id: "trial", label: "The Trial", icon: Gavel },
  { id: "verdict", label: "Verdict & Analysis", icon: Eye },
];

export function Sidebar({ isOpen, onClose, onNavigate }: SidebarProps) {
  const handleNavigate = (sectionId: string) => {
    onNavigate(sectionId);
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
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold gradient-text">Navigation</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <ScrollArea className="flex-1 p-4">
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavigate(item.id)}
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