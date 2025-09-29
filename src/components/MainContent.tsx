import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Zap, Film, Heart, Gavel, Clock, Trophy, Star } from "lucide-react";
import ojSimpsonImg from "@/assets/oj-simpson.jpg";
import nicoleBrownImg from "@/assets/nicole-brown.jpg";
import coupleImg from "@/assets/couple.jpg";
import crimeSceneImg from "@/assets/crime-scene.jpg";
import evidenceImg from "@/assets/evidence.jpg";
import gloveTrialImg from "@/assets/glove-trial.jpg";

interface MainContentProps {
  searchQuery: string;
}

export function MainContent({ searchQuery }: MainContentProps) {
  // Intersection Observer for PowerPoint-style animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all animate-on-scroll elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    
    const regex = new RegExp(`(${searchQuery})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? 
        <mark key={index} className="bg-primary/20 text-primary font-medium rounded px-1">
          {part}
        </mark> : part
    );
  };

  const shouldShowSection = (content: string) => {
    if (!searchQuery) return true;
    return content.toLowerCase().includes(searchQuery.toLowerCase());
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      {shouldShowSection("O.J. Simpson Life Career Legacy") && (
        <section id="hero" className="section-container overflow-hidden text-center animate-fade-in bg-gradient-to-br from-background via-primary/5 to-secondary/10">
          <div className="space-y-6 sm:space-y-8 px-4 sm:px-6">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text leading-tight">
                {highlightText("O.J. Simpson")} ⚡
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                {highlightText("Life, Career, and Legacy")} 🏈
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                {highlightText("An educational deep-dive into one of the most controversial figures in American sports and legal history")} 📚
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4">
              <Badge variant="outline" className="text-xs sm:text-sm lg:text-lg px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3">
                🏆 Hall of Fame
              </Badge>
              <Badge variant="outline" className="text-xs sm:text-sm lg:text-lg px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3">
                🎬 Actor
              </Badge>
              <Badge variant="outline" className="text-xs sm:text-sm lg:text-lg px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3">
                ⚖️ Trial of the Century
              </Badge>
            </div>
            <Button 
              onClick={() => scrollToSection('early-life')}
              size="lg" 
              className="animate-pulse hover:scale-105 transition-transform h-10 sm:h-11 lg:h-12 px-6 sm:px-8"
            >
              Start Journey <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      )}

      {/* Early Life Section */}
      {shouldShowSection("Early Life childhood born San Francisco") && (
        <section id="early-life" className="section-container overflow-hidden p-3 sm:p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-secondary/5 to-accent/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl gradient-text flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Star className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 flex-shrink-0" />
                  <span>{highlightText("Early Life")} 👶</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                    <div className="bg-primary/5 p-4 sm:p-6 rounded-lg animate-scale-in">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Born to Run 🏃‍♂️</h3>
                      <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                        <li>📅 Born: July 9, 1947, in San Francisco, California</li>
                        <li>👨‍👩‍👧‍👦 Full name: Orenthal James Simpson</li>
                        <li>🏠 Grew up in the Potrero Hill housing projects</li>
                        <li>💪 Overcame childhood rickets with leg braces</li>
                        <li>⭐ Showed athletic promise from a young age</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center order-1 lg:order-2">
                    <img 
                      src={ojSimpsonImg} 
                      alt="Young O.J. Simpson"
                      className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto hover:scale-105 transition-transform duration-500 animate-slide-in"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Button 
                onClick={() => scrollToSection('football-career')}
                size="lg"
                className="hover-glow animate-pulse h-10 sm:h-11 lg:h-12 px-6 sm:px-8"
              >
                Next: Football Career 🏈 <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Football Career Section */}
      {shouldShowSection("Football Career NFL Buffalo Bills USC Heisman Trophy") && (
        <section id="football-career" className="section-container overflow-hidden p-3 sm:p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl gradient-text flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Zap className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 flex-shrink-0" />
                  <span>{highlightText("Football Career")} 🏈</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  <div className="flex justify-center order-2 lg:order-1">
                    <img 
                      src={ojSimpsonImg} 
                      alt="O.J. Simpson football career"
                      className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto hover:scale-105 transition-transform duration-500 animate-slide-in"
                    />
                  </div>
                  <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 sm:p-6 rounded-lg animate-scale-in">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">College Dominance 🎓</h3>
                      <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                        <li>🏆 1968 Heisman Trophy winner at USC</li>
                        <li>⚡ Nicknamed "The Juice" for his explosive speed</li>
                        <li>📊 Set multiple NCAA records</li>
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-4 sm:p-6 rounded-lg animate-scale-in">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">NFL Legend 🌟</h3>
                      <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                        <li>🦬 Buffalo Bills (1969-1977)</li>
                        <li>🏃‍♂️ First NFL player to rush 2,000 yards (1973)</li>
                        <li>🏆 NFL MVP (1973)</li>
                        <li>🥇 Pro Football Hall of Fame (1985)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Button 
                onClick={() => scrollToSection('acting-career')}
                size="lg"
                className="hover-glow animate-pulse h-10 sm:h-11 lg:h-12 px-6 sm:px-8"
              >
                Next: Acting Career 🎬 <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Acting Career Section */}
      {shouldShowSection("Acting Career movies films Naked Gun entertainment") && (
        <section id="acting-career" className="section-container overflow-hidden p-3 sm:p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-accent/5 to-primary/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl gradient-text flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Film className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 flex-shrink-0" />
                  <span>{highlightText("Acting & Entertainment")} 🎬</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                    <div className="bg-accent/10 p-4 sm:p-6 rounded-lg animate-scale-in">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Hollywood Transition 🌟</h3>
                      <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                        {highlightText("After retiring from football, O.J. seamlessly transitioned into acting and became a household name in Hollywood")} 🎭
                      </p>
                      <h4 className="font-semibold mb-2 text-sm sm:text-base">Major Films 🎥</h4>
                      <ul className="space-y-1.5 sm:space-y-2 text-muted-foreground text-sm sm:text-base">
                        <li>🔥 The Towering Inferno (1974)</li>
                        <li>📺 Roots (1977) - TV miniseries</li>
                        <li>😂 The Naked Gun trilogy (1988-1994)</li>
                        <li>📺 Various TV appearances and commercials</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center order-1 lg:order-2">
                    <img 
                      src={ojSimpsonImg} 
                      alt="O.J. Simpson acting career"
                      className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto hover:scale-105 transition-transform duration-500 animate-slide-in"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Button 
                onClick={() => scrollToSection('personal-life')}
                size="lg"
                className="hover-glow animate-pulse h-10 sm:h-11 lg:h-12 px-6 sm:px-8"
              >
                Next: Personal Life ❤️ <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Personal Life Section */}
      {shouldShowSection("Personal Life marriage Nicole Brown Simpson family") && (
        <section id="personal-life" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-destructive/5 to-primary/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <Heart className="h-8 w-8" />
                  {highlightText("Personal Life")} ❤️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="flex justify-center">
                    <img 
                      src={coupleImg} 
                      alt="O.J. and Nicole Simpson"
                      className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-500 animate-slide-in"
                    />
                  </div>
                  <div className="space-y-6">
                    <div className="bg-muted/50 p-6 rounded-lg animate-scale-in animate-stagger-1">
                      <h3 className="text-xl font-semibold mb-4">Marriages & Family 💑</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary">First Marriage</h4>
                          <p className="text-muted-foreground text-sm">Marguerite Whitley (1967-1979) - 3 children</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary">Second Marriage</h4>
                          <p className="text-muted-foreground text-sm">Nicole Brown (1985-1992) - 2 children</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20 animate-scale-in animate-stagger-2">
                      <h3 className="text-xl font-semibold mb-4 text-destructive">Troubled Relationship 💔</h3>
                      <p className="text-muted-foreground text-sm">
                        {highlightText("The marriage with Nicole was marked by reports of domestic violence and controlling behavior, leading to their divorce in 1992")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('criminal-trials')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: Criminal Trials ⚖️ <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Criminal Trials Section */}
      {shouldShowSection("Criminal Trials murder case Nicole Brown Ronald Goldman") && (
        <section id="criminal-trials" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-destructive/10 to-background">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow border-destructive/20 backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <Gavel className="h-8 w-8" />
                  {highlightText("Criminal Trials")} ⚖️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20 animate-scale-in">
                      <h3 className="text-xl font-semibold mb-4 text-destructive">The Murders 💀</h3>
                      <p className="text-muted-foreground mb-4">
                        {highlightText("June 12, 1994: Nicole Brown Simpson and Ronald Goldman were found murdered outside Nicole's Brentwood home")}
                      </p>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>🔪 Both victims suffered multiple stab wounds</li>
                        <li>🩸 Significant evidence pointed to O.J. as suspect</li>
                        <li>📺 "Trial of the Century" began January 1995</li>
                      </ul>
                    </div>
                    <div className="text-center animate-scale-in animate-stagger-1">
                      <Button 
                        asChild
                        size="lg"
                        variant="destructive"
                        className="hover:scale-105 transition-transform"
                      >
                        <Link to="/trial">🔍 View Complete Trial Analysis</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src={gloveTrialImg} 
                      alt="Famous glove trial moment"
                      className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-500 animate-slide-in"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('later-life')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: Later Life 📅 <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Later Life Section */}
      {shouldShowSection("Later Life civil trial Las Vegas robbery prison") && (
        <section id="later-life" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-muted/10 to-secondary/5">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <Clock className="h-8 w-8" />
                  {highlightText("Later Life & Death")} 📅
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="bg-muted/50 p-6 rounded-lg animate-scale-in animate-stagger-1">
                      <h3 className="text-xl font-semibold mb-4">Civil Trial (1997) 🏛️</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>⚖️ Found liable for wrongful death</li>
                        <li>💰 Ordered to pay $33.5 million in damages</li>
                        <li>🔍 Lower burden of proof than criminal trial</li>
                      </ul>
                    </div>
                    <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20 animate-scale-in animate-stagger-2">
                      <h3 className="text-xl font-semibold mb-4 text-destructive">Legal Troubles Continue 🚨</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>🎰 2008: Las Vegas robbery conviction</li>
                        <li>⛓️ Sentenced to 33 years in prison</li>
                        <li>🚪 Granted parole in 2017 after 9 years</li>
                        <li>💀 Died April 10, 2024, at age 76</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('legacy')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: Legacy & Impact 🌟 <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Legacy Section */}
      {shouldShowSection("Legacy impact society race relations cultural significance") && (
        <section id="legacy" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <Trophy className="h-8 w-8" />
                  {highlightText("Legacy & Cultural Impact")} 🌟
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    <div className="bg-primary/10 p-6 rounded-lg text-center animate-scale-in animate-stagger-1 hover-lift">
                      <h3 className="text-xl font-semibold mb-4">Sports Legacy 🏈</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>🏆 Hall of Fame Career</li>
                        <li>📊 NFL Records</li>
                        <li>⚡ "The Juice" Legend</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 p-6 rounded-lg text-center animate-scale-in animate-stagger-2 hover-lift">
                      <h3 className="text-xl font-semibold mb-4">Cultural Impact 📺</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>📚 Books & Documentaries</li>
                        <li>🎬 Movies & TV Shows</li>
                        <li>🗞️ Media Coverage</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 p-6 rounded-lg text-center animate-scale-in animate-stagger-3 hover-lift">
                      <h3 className="text-xl font-semibold mb-4">Social Discussion 🗣️</h3>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>⚖️ Justice System</li>
                        <li>🤝 Race Relations</li>
                        <li>📺 Media Influence</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg animate-fade-scale">
                    <h3 className="text-xl font-semibold mb-4 text-center">Lasting Questions 🤔</h3>
                    <p className="text-muted-foreground text-center">
                      {highlightText("O.J. Simpson's story raises important questions about celebrity, justice, race, and media in America that continue to resonate today")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('fun-facts')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: Fun Facts 🎯 <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Fun Facts Section */}
      {shouldShowSection("Fun Facts trivia interesting statistics records") && (
        <section id="fun-facts" className="section-container overflow-hidden p-3 sm:p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-accent/5 to-secondary/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl gradient-text text-center">
                  {highlightText("Fun Facts & Trivia")} 🎯
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-primary/10 p-3 sm:p-4 rounded-lg hover-lift animate-scale-in animate-stagger-1">
                      <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">🏃‍♂️ Speed Demon</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Ran a 4.4-second 40-yard dash in college</p>
                    </div>
                    <div className="bg-secondary/10 p-3 sm:p-4 rounded-lg hover-lift animate-scale-in animate-stagger-2">
                      <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">🎬 Hollywood Star</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Starred in over 20 movies and TV shows</p>
                    </div>
                    <div className="bg-accent/10 p-3 sm:p-4 rounded-lg hover-lift animate-scale-in animate-stagger-3">
                      <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">💰 Commercial Success</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Famous Hertz rental car spokesperson</p>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-muted/50 p-3 sm:p-4 rounded-lg hover-lift animate-scale-in animate-stagger-1">
                      <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">📊 Record Breaker</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">First to rush 2,000+ yards in 14-game season</p>
                    </div>
                    <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-3 sm:p-4 rounded-lg hover-lift animate-scale-in animate-stagger-2">
                      <h4 className="font-semibold text-primary mb-2 text-sm sm:text-base">📺 TV Ratings</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">Trial watched by 150 million viewers</p>
                    </div>
                    <div className="bg-destructive/10 p-3 sm:p-4 rounded-lg hover-lift animate-scale-in animate-stagger-3">
                      <h4 className="font-semibold text-destructive mb-2 text-sm sm:text-base">🚗 Chase History</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">White Bronco chase interrupted NBA Finals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Button 
                onClick={() => scrollToSection('references')}
                size="lg"
                className="hover-glow animate-pulse h-10 sm:h-11 lg:h-12 px-6 sm:px-8"
              >
                Final Section: References 📚 <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* References Section */}
      <section id="references" className="min-h-screen flex items-center justify-center p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="max-w-6xl w-full">
          <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
            <CardHeader>
              <CardTitle className="text-3xl lg:text-4xl gradient-text text-center">
                References & Sources 📚
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-muted/50 p-6 rounded-lg animate-scale-in">
                  <h3 className="text-xl font-semibold mb-4">Educational Sources 📖</h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• ESPN Sports History Archives</li>
                    <li>• Pro Football Hall of Fame Official Records</li>
                    <li>• Court Documents and Transcripts</li>
                    <li>• News Media Archives (CNN, NBC, ABC)</li>
                    <li>• Biography.com and Britannica</li>
                    <li>• FBI Case Files (Public Domain)</li>
                  </ul>
                </div>
                <div className="text-center animate-fade-scale">
                  <p className="text-muted-foreground text-sm">
                    This educational website presents factual information for learning purposes. 
                    All content has been researched from reliable sources. 📚✨
                  </p>
                </div>
                <div className="text-center">
                  <Button 
                    onClick={() => scrollToSection('hero')}
                    variant="outline"
                    size="lg"
                    className="hover-glow animate-pulse"
                  >
                    🔝 Back to Top
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}