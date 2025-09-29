import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect, useRef } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

interface SearchResult {
  section: string;
  text: string;
  type: 'main' | 'trial';
}

export function SearchBar({ onSearch, searchQuery }: SearchBarProps) {
  const [query, setQuery] = useState(searchQuery);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchContent = [
    // Main page content
    { section: "Hero", text: "O.J. Simpson Life Career Legacy Educational Football Actor", type: "main" as const },
    { section: "Early Life", text: "Born July 9 1947 San Francisco California Orenthal James Simpson childhood family", type: "main" as const },
    { section: "Football Career", text: "NFL Buffalo Bills USC Trojans running back Heisman Trophy Hall of Fame", type: "main" as const },
    { section: "Acting Career", text: "Movies films Naked Gun Towering Inferno Roots acting entertainment", type: "main" as const },
    { section: "Personal Life", text: "Marriage Nicole Brown Simpson Marguerite Whitley children family relationships", type: "main" as const },
    { section: "Criminal Trials", text: "Murder trial case study Nicole Brown Ronald Goldman verdict acquitted", type: "main" as const },
    { section: "Later Life", text: "Civil trial guilty verdict Las Vegas robbery prison sentence", type: "main" as const },
    { section: "Legacy", text: "Impact society race relations media coverage cultural significance", type: "main" as const },
    { section: "Fun Facts", text: "Nickname The Juice trivia interesting facts statistics records", type: "main" as const },
    // Trial page content
    { section: "Trial Overview", text: "OJ Simpson trial case study analysis murder Nicole Brown Ronald Goldman", type: "trial" as const },
    { section: "Key People", text: "Nicole Brown Simpson Ronald Goldman victims relationship domestic violence", type: "trial" as const },
    { section: "Evidence", text: "Blood DNA hair fiber gloves Bruno Magli shoes timeline investigation", type: "trial" as const },
    { section: "Court Proceedings", text: "Glove trial moment if it doesn't fit must acquit Johnnie Cochran", type: "trial" as const },
    { section: "Car Chase", text: "White Ford Bronco Al Cowlings police chase June 17 1994 surrender", type: "trial" as const },
    { section: "Verdict", text: "Not guilty acquitted criminal trial civil trial guilty wrongful death", type: "trial" as const }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    onSearch(value);
    
    if (value.trim()) {
      const filtered = searchContent.filter(item =>
        item.section.toLowerCase().includes(value.toLowerCase()) ||
        item.text.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      setShowResults(true);
    } else {
      setResults([]);
      setShowResults(false);
    }
  };

  const clearSearch = () => {
    setQuery("");
    onSearch("");
    setResults([]);
    setShowResults(false);
  };

  const handleResultClick = (result: SearchResult) => {
    if (result.type === 'trial') {
      window.location.href = '/trial';
    } else {
      const element = document.getElementById(result.section.toLowerCase().replace(/\s+/g, '-'));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setShowResults(false);
  };

  return (
    <div ref={searchRef} className="relative w-full max-w-xs sm:max-w-md">
      <div className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10">
        <Search className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
      </div>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        onFocus={() => query.trim() && setShowResults(true)}
        className="pl-8 sm:pl-9 pr-8 sm:pr-9 text-sm hover-glow focus:shadow-glow h-8 sm:h-10"
      />
      {query && (
        <Button
          variant="ghost"
          size="icon"
          onClick={clearSearch}
          className="absolute right-0.5 sm:right-1 top-1/2 -translate-y-1/2 h-6 w-6 sm:h-7 sm:w-7 z-10"
        >
          <X className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
        </Button>
      )}
      
      {/* Search Results Dropdown */}
      {showResults && results.length > 0 && (
        <Card className="absolute top-full left-0 right-0 mt-1 z-50 max-h-60 sm:max-h-80 overflow-y-auto">
          <div className="p-1 sm:p-2">
            {results.map((result, index) => (
              <div
                key={index}
                onClick={() => handleResultClick(result)}
                className="p-2 sm:p-3 hover:bg-accent rounded-md cursor-pointer transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="font-medium text-xs sm:text-sm truncate">{result.section}</div>
                    <div className="text-xs text-muted-foreground mt-1 line-clamp-2 sm:line-clamp-1">
                      {result.text.substring(0, 40)}...
                    </div>
                  </div>
                  <div className="text-xs text-primary font-medium ml-2 flex-shrink-0">
                    {result.type === 'trial' ? 'Trial' : 'Main'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}