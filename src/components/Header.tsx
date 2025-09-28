import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  onMenuClick: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function Header({ onMenuClick, onSearch, searchQuery }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="h-9 w-9 hover-glow"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <h1 className="text-xl font-bold gradient-text">
            OJ Simpson Case Study
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <SearchBar onSearch={onSearch} searchQuery={searchQuery} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}