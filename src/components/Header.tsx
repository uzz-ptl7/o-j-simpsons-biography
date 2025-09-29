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
      <div className="container flex h-14 sm:h-16 items-center justify-between px-2 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-4 min-w-0 flex-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="h-8 w-8 sm:h-9 sm:w-9 hover-glow flex-shrink-0"
          >
            <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
          <h1 className="text-sm sm:text-lg lg:text-xl font-bold gradient-text truncate">
            <span className="hidden sm:inline">O.J. Simpson: Life & Legacy</span>
            <span className="sm:hidden">O.J. Simpson</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-4 flex-shrink-0">
          <div className="w-32 sm:w-auto">
            <SearchBar onSearch={onSearch} searchQuery={searchQuery} />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}