import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export function SearchBar({ onSearch, searchQuery }: SearchBarProps) {
  const [query, setQuery] = useState(searchQuery);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
  };

  return (
    <div className="relative max-w-md w-full">
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <Search className="h-4 w-4 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder="Search case study..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-9 pr-9 hover-glow focus:shadow-glow"
      />
      {query && (
        <Button
          variant="ghost"
          size="icon"
          onClick={clearSearch}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
}