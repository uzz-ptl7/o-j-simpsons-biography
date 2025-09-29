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
                  <span>{highlightText("Early Life & Family Background")} 👶</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                  <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
                    <div className="bg-primary/5 p-4 sm:p-6 rounded-lg animate-scale-in">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Birth & Family Origins �</h3>
                      <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                        <li>📅 <strong>Born:</strong> July 9, 1947, San Francisco, California</li>
                        <li>👨‍👩‍👧‍👦 <strong>Full Name:</strong> Orenthal James Simpson</li>
                        <li>👩 <strong>Mother:</strong> Eunice (née Durden) - psychiatric ward orderly</li>
                        <li>👨 <strong>Father:</strong> Jimmy Lee Simpson - custodian & cook</li>
                        <li>� <strong>Heritage:</strong> Maternal grandparents from Louisiana</li>
                        <li>🎭 <strong>Unique Name:</strong> "Orenthal" after French/Italian actor his aunt admired</li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/5 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Childhood Challenges 💪</h3>
                      <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                        <li>🏘️ Grew up in Potrero Hill housing projects (low-income)</li>
                        <li>🦴 Developed rickets as child, wore leg braces until age 5</li>
                        <li>🚶‍♂️ Leg braces gave him distinctive bowlegged stance</li>
                        <li>💔 Parents separated in 1952 when O.J. was 4 years old</li>
                        <li>👩‍👧‍👦 Raised by mother with siblings after separation</li>
                        <li>💰 Earned money scalping tickets at Kezar Stadium</li>
                      </ul>
                    </div>
                    
                    <div className="bg-destructive/10 p-4 sm:p-6 rounded-lg border border-destructive/20 animate-scale-in animate-stagger-2">
                      <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-destructive">Troubled Teen Years ⚠️</h3>
                      <ul className="space-y-2 sm:space-y-3 text-muted-foreground text-sm sm:text-base">
                        <li>🔗 Joined street gang called "Persian Warriors"</li>
                        <li>🏢 Briefly incarcerated at San Francisco Youth Guidance Center</li>
                        <li>👮‍♂️ Arrested three times as teenager</li>
                        <li>⚾ Life-changing meeting with baseball star Willie Mays</li>
                        <li>🔄 Willie Mays encouraged him to avoid trouble and reform</li>
                        <li>🏫 Attended Galileo High School, played football as tackle/fullback</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex justify-center order-1 lg:order-2">
                    <div className="space-y-4">
                      <img 
                        src={ojSimpsonImg} 
                        alt="Young O.J. Simpson"
                        className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto hover:scale-105 transition-transform duration-500 animate-slide-in"
                      />
                      <div className="bg-accent/10 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Family Structure 👨‍👩‍👧‍👦</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Brother:</strong> Melvin Leon "Truman" Simpson</li>
                          <li>• <strong>Sister:</strong> Shirley Simpson-Baker (living)</li>
                          <li>• <strong>Sister:</strong> Carmelita Simpson-Durio (deceased)</li>
                          <li>• <strong>Father's Note:</strong> Jimmy Simpson was a known drag queen in Bay Area</li>
                          <li>• <strong>Family Tragedy:</strong> Father died of AIDS in 1986</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Button 
                onClick={() => scrollToSection('college-athletics')}
                size="lg"
                className="hover-glow animate-pulse h-10 sm:h-11 lg:h-12 px-6 sm:px-8"
              >
                Next: College Athletics � <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* College Athletics Section */}
      {shouldShowSection("College Athletics USC track football Heisman Trophy") && (
        <section id="college-athletics" className="section-container overflow-hidden p-3 sm:p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-accent/5 to-primary/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl gradient-text flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Trophy className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 flex-shrink-0" />
                  <span>{highlightText("College Athletics & USC Glory")} 🎓</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-6 sm:space-y-8">
                  
                  {/* Junior College Section */}
                  <div className="bg-secondary/10 p-4 sm:p-6 rounded-lg animate-scale-in">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">City College of San Francisco (1965-1967) 🏢</h3>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Academic Journey 📚</h4>
                        <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                          <li>• Mediocre high school grades limited college recruitment</li>
                          <li>• Vietnam War influenced decision to stay out of military</li>
                          <li>• Enrolled at City College in 1965</li>
                          <li>• Played both running back and defensive back</li>
                          <li>• Named to Junior College All-American team</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Athletic Achievements 🏆</h4>
                        <ul className="space-y-1 sm:space-y-2 text-muted-foreground text-xs sm:text-sm">
                          <li>• Led team to Prune Bowl victory vs Long Beach</li>
                          <li>• Outstanding performance attracted major colleges</li>
                          <li>• Recruited by USC and University of Utah</li>
                          <li>• Transfer student success story</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* USC Track Career */}
                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-1">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">USC Track & Field Excellence 🏃‍♂️</h3>
                    <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-primary">World Record 🌍</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Date:</strong> June 17, 1967</li>
                          <li>• <strong>Event:</strong> 4 × 110-yard relay</li>
                          <li>• <strong>Time:</strong> 38.6 seconds</li>
                          <li>• <strong>Position:</strong> Third leg runner</li>
                          <li>• <strong>Location:</strong> NCAA Championships, Provo, Utah</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-primary">Sprint Times ⚡</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>100-yard dash:</strong> 9.53 seconds</li>
                          <li>• Competed against international athletes</li>
                          <li>• Raced British record holder Menzies Campbell</li>
                          <li>• Stanford University competitions</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 text-primary">Social Impact 🌍</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• Avoided 1968 Olympics boycott controversy</li>
                          <li>• Martin Luther King Jr. supported the boycott</li>
                          <li>• Chose to avoid political involvement</li>
                          <li>• Focused on athletic achievements</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* USC Football Career */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-2">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">USC Football Dominance (1967-1968) 🏈</h3>
                    <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">1967 Season Highlights 🌟</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>📈 <strong>Rushing Yards:</strong> 1,543 yards (led nation)</li>
                          <li>🏈 <strong>Touchdowns:</strong> 13 rushing TDs</li>
                          <li>🏆 <strong>Awards:</strong> Walter Camp Award winner</li>
                          <li>⭐ <strong>Recognition:</strong> Unanimous All-American</li>
                          <li>🏆 <strong>Team Success:</strong> USC won national title</li>
                          <li>🥈 <strong>Heisman Trophy:</strong> 2nd place (lost to Gary Beban)</li>
                        </ul>
                        
                        <div className="mt-4 p-3 bg-accent/20 rounded-lg">
                          <h5 className="font-semibold mb-2">Famous Victory Bell Game 🔔</h5>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {highlightText("Simpson's 64-yard touchdown run in the 4th quarter against UCLA, down by 6 points with under 11 minutes left. The run tied the score and led to a 21-20 victory in what's considered one of the greatest games of the 20th century.")}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">1968 Heisman Trophy Season 🏆</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>📈 <strong>Rushing Yards:</strong> 1,709 yards (regular season)</li>
                          <li>🏈 <strong>Touchdowns:</strong> 22 rushing TDs</li>
                          <li>🏆 <strong>Major Awards:</strong> Heisman Trophy, Maxwell Award, Walter Camp Award</li>
                          <li>📊 <strong>Heisman Margin:</strong> Record 1,750 point victory (held for 51 years)</li>
                          <li>🌹 <strong>Rose Bowl:</strong> 171 yards vs #1 Ohio State (80-yard TD run)</li>
                          <li>👔 <strong>Legacy:</strong> Jersey #32 retired by USC</li>
                        </ul>
                        
                        <div className="mt-4 p-3 bg-primary/20 rounded-lg">
                          <h5 className="font-semibold mb-2">Career Statistics 📈</h5>
                          <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
                            <div>
                              <p><strong>Rushing:</strong> 674 attempts</p>
                              <p><strong>Yards:</strong> 3,423 yards</p>
                              <p><strong>Average:</strong> 5.1 yards/carry</p>
                            </div>
                            <div>
                              <p><strong>TDs:</strong> 36 rushing</p>
                              <p><strong>Receiving:</strong> 36 catches, 320 yards</p>
                              <p><strong>Coach:</strong> John McKay</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                Next: NFL Career 🏈 <ChevronDown className="ml-2 h-4 w-4" />
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
                  <span>{highlightText("NFL Career: From Struggling Rookie to Legend")} 🏈</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-6 sm:space-y-8">
                  
                  {/* Draft and Early Struggles */}
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-destructive/10 p-4 sm:p-6 rounded-lg border border-destructive/20 animate-scale-in">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-destructive">1969 Draft & Contract Standoff 💰</h3>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>🥇 <strong>Draft Position:</strong> 1st overall by Buffalo Bills</li>
                          <li>💵 <strong>Demanded:</strong> $650,000 over 5 years (equivalent to $4.1M in 2023)</li>
                          <li>⚖️ <strong>Standoff:</strong> Threatened to become actor instead of playing football</li>
                          <li>🏢 <strong>Owner:</strong> Ralph Wilson eventually agreed to pay Simpson</li>
                          <li>📈 <strong>Impact:</strong> Largest contract in professional sports history at the time</li>
                        </ul>
                      </div>
                      
                      <div className="bg-muted/50 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Early Career Struggles (1969-1971) 😓</h3>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>📉 <strong>Average:</strong> Only 622 yards per season (first 3 years)</li>
                          <li>🚷 <strong>Coach Rauch:</strong> Used Simpson for blocking and receiving</li>
                          <li>🎯 <strong>Problem:</strong> Didn't build offense around Simpson's strengths</li>
                          <li>🔄 <strong>1971:</strong> Harvey Johnson replaced Rauch as coach</li>
                          <li>🚫 <strong>Continued Issues:</strong> Simpson still ineffective under Johnson</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-4">
                      <img 
                        src={ojSimpsonImg} 
                        alt="O.J. Simpson NFL career"
                        className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto hover:scale-105 transition-transform duration-500 animate-slide-in mx-auto"
                      />
                      <div className="bg-primary/10 p-4 rounded-lg text-center">
                        <h4 className="font-semibold mb-2">The "Electric Company" ⚡</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {highlightText("Buffalo's offensive line was nicknamed 'The Electric Company' because they turned on 'The Juice' - a play on O.J. being short for orange juice and 'juice' meaning electrical power.")}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Lou Saban Era and Breakthrough */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-2">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Lou Saban Era: The Breakthrough (1972-1977) 🚀</h3>
                    <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                      
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">1972: First 1,000-Yard Season �</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Yards:</strong> 1,251 (league-leading)</li>
                          <li>• <strong>Change:</strong> Saban made Simpson centerpiece</li>
                          <li>• <strong>Strategy:</strong> Built offense around his strengths</li>
                          <li>• <strong>Result:</strong> Career transformation began</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary/20 p-4 rounded-lg border-2 border-primary/30">
                        <h4 className="font-semibold mb-3 text-primary">1973: Historic 2,000-Yard Season 🎆</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Total Yards:</strong> 2,003 rushing yards</li>
                          <li>• <strong>Touchdowns:</strong> 12 rushing TDs</li>
                          <li>• <strong>Record:</strong> First NFL player over 2,000 yards</li>
                          <li>• <strong>Unique:</strong> Only player to do it in 14-game season</li>
                          <li>• <strong>Awards:</strong> NFL MVP & Bert Bell Award</li>
                          <li>• <strong>Breaking Point:</strong> 7-yard run vs Jets in final game</li>
                        </ul>
                      </div>
                      
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">1974-1976: Continued Excellence 🌟</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>1974:</strong> 1,125 yards (despite knee injury)</li>
                          <li>• <strong>1975:</strong> 1,817 yards, 16 TDs (rushing title)</li>
                          <li>• <strong>1976:</strong> 1,503 yards, 8 TDs (rushing title)</li>
                          <li>• <strong>Record Game:</strong> 273 yards vs Lions (Thanksgiving)</li>
                          <li>• <strong>Pro Bowls:</strong> 5 consecutive (1972-1976)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* San Francisco 49ers Era */}
                  <div className="bg-secondary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-3">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">San Francisco 49ers (1978-1979) 🌉</h3>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-secondary-foreground">Trade Details 🔄</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Date:</strong> March 28, 1978</li>
                          <li>• <strong>Trade:</strong> Simpson for 5 draft picks</li>
                          <li>• <strong>Picks:</strong> 2nd & 3rd (1978), 1st & 4th (1979), 2nd (1980)</li>
                          <li>• <strong>Reason:</strong> Wanted to play on West Coast</li>
                          <li>• <strong>Contract:</strong> Final year of 3-year, $733,000 deal</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-secondary-foreground">Final NFL Years 🏁</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>1978:</strong> 593 yards, 1 TD (10 games)</li>
                          <li>• <strong>1979:</strong> 460 yards, 3 TDs (13 games)</li>
                          <li>• <strong>Health:</strong> Knee problems influenced retirement</li>
                          <li>• <strong>Honor:</strong> "O.J. Simpson Day" at Candlestick Park</li>
                          <li>• <strong>Final Game:</strong> Dec 16, 1979 vs Atlanta Falcons</li>
                          <li>• <strong>Final Play:</strong> 10-yard run for 1st down</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Career Statistics and Records */}
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">Career Statistics & Records 📈</h3>
                    <div className="grid lg:grid-cols-4 gap-4 sm:gap-6">
                      <div className="bg-background/70 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-2xl text-primary mb-2">11,236</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">Career Rushing Yards<br/>(2nd all-time at retirement, now 22nd)</p>
                      </div>
                      <div className="bg-background/70 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-2xl text-primary mb-2">143.1</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">Yards per game (1973)<br/>NFL single-season record</p>
                      </div>
                      <div className="bg-background/70 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-2xl text-primary mb-2">6</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">Pro Bowl selections<br/>(5 consecutive 1972-1976)</p>
                      </div>
                      <div className="bg-background/70 p-4 rounded-lg text-center">
                        <h4 className="font-semibold text-2xl text-primary mb-2">1985</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">Pro Football Hall of Fame<br/>First year of eligibility</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 grid md:grid-cols-2 gap-4">
                      <div className="bg-primary/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">NFL Records Held 🏆</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• Fastest to 2,000 yards: 14 games (1973)</li>
                          <li>• Most rushing yards per game (season): 143.1 (1973)</li>
                          <li>• Six games with 200+ rushing yards (career record)</li>
                          <li>• Only 2,000-yard rusher in 14-game season</li>
                        </ul>
                      </div>
                      <div className="bg-secondary/20 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2">Career Achievements �️</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• NFL MVP (1973) & NFL Offensive Player of the Year</li>
                          <li>• Led league in rushing 4 times (1972, 1973, 1975, 1976)</li>
                          <li>• NFL 100th Anniversary All-Time Team (2019)</li>
                          <li>• Only playoff appearance: 1974 vs Pittsburgh Steelers</li>
                        </ul>
                      </div>
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
                Next: Acting & Entertainment 🎬 <ChevronDown className="ml-2 h-4 w-4" />
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
                  <span>{highlightText("Acting & Entertainment Career")} 🎬</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-6 sm:space-y-8">
                  
                  {/* Early TV and Film Beginnings */}
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-accent/10 p-4 sm:p-6 rounded-lg animate-scale-in">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Early Career Transition 🌟</h3>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>🎭 <strong>First Role:</strong> "Medical Center" TV series (1969)</li>
                          <li>📺 <strong>Early Shows:</strong> "The Mod Squad", "Ironside", "Dragnet"</li>
                          <li>🎬 <strong>Film Debut:</strong> "The Klansman" (1974) with Lee Marvin</li>
                          <li>🔥 <strong>Breakthrough:</strong> "The Towering Inferno" (1974) - disaster epic</li>
                          <li>💰 <strong>Contract:</strong> Used football fame to secure Hollywood deals</li>
                        </ul>
                      </div>
                      
                      <div className="bg-primary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Television Success 📺</h3>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>🏆 <strong>Roots (1977):</strong> Played Kunta Kinte as adult in acclaimed miniseries</li>
                          <li>👥 <strong>Impact:</strong> Reached 130 million viewers, cultural phenomenon</li>
                          <li>🎪 <strong>Variety Shows:</strong> Guest on "Saturday Night Live", talk shows</li>
                          <li>📊 <strong>Sports Commentary:</strong> NBC NFL broadcasts (1983-1994)</li>
                          <li>🎤 <strong>Monday Night Football:</strong> ABC sideline reporter (1983-1986)</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-4">
                      <img 
                        src={ojSimpsonImg} 
                        alt="O.J. Simpson acting career"
                        className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto hover:scale-105 transition-transform duration-500 animate-slide-in mx-auto"
                      />
                      <div className="bg-accent/20 p-4 rounded-lg text-center">
                        <h4 className="font-semibold mb-2">Career Highlight 🌟</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {highlightText("The Naked Gun trilogy made Simpson a comedy icon, showcasing his natural timing and self-deprecating humor alongside Leslie Nielsen.")}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* The Naked Gun Trilogy */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-2">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">The Naked Gun Trilogy: Comedy Gold 😂</h3>
                    <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                      
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">The Naked Gun (1988) 🕵️</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Character:</strong> Detective Nordberg</li>
                          <li>• <strong>Role:</strong> Frank Drebin's clumsy partner</li>
                          <li>• <strong>Box Office:</strong> $78.8 million domestic</li>
                          <li>• <strong>Director:</strong> David Zucker</li>
                          <li>• <strong>Co-star:</strong> Leslie Nielsen</li>
                          <li>• <strong>Success:</strong> Launched successful franchise</li>
                        </ul>
                      </div>
                      
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">The Naked Gun 2½ (1991) �</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Subtitle:</strong> "The Smell of Fear"</li>
                          <li>• <strong>Box Office:</strong> $86.9 million domestic</li>
                          <li>• <strong>Character Arc:</strong> Expanded Nordberg role</li>
                          <li>• <strong>Comedy Style:</strong> Physical comedy and slapstick</li>
                          <li>• <strong>Chemistry:</strong> Perfect comedic timing with Nielsen</li>
                          <li>• <strong>Reception:</strong> Critics praised Simpson's performance</li>
                        </ul>
                      </div>
                      
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">Naked Gun 33⅓ (1994) 🎭</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Subtitle:</strong> "The Final Insult"</li>
                          <li>• <strong>Box Office:</strong> $51.1 million domestic</li>
                          <li>• <strong>Release Timing:</strong> During murder trial proceedings</li>
                          <li>• <strong>Career Peak:</strong> Final major acting role</li>
                          <li>• <strong>Legacy:</strong> Trilogy totaled $216.8M+ worldwide</li>
                          <li>• <strong>Cultural Impact:</strong> Simpson became comedy icon</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hertz Commercials and Endorsements */}
                  <div className="bg-secondary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-3">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Hertz Commercials & Endorsements 🚗</h3>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-secondary-foreground">Hertz Campaign Success 📺</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Period:</strong> 1975-1979, then 1992-1994</li>
                          <li>• <strong>Famous Line:</strong> "Go, O.J., Go!" campaign</li>
                          <li>• <strong>Concept:</strong> Running through airports in business suit</li>
                          <li>• <strong>Cultural Impact:</strong> Made airport running iconic</li>
                          <li>• <strong>Success:</strong> Hertz market share increased significantly</li>
                          <li>• <strong>Contract Value:</strong> Estimated $1-2 million annually</li>
                          <li>• <strong>Termination:</strong> Dropped after 1994 murder charges</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-secondary-foreground">Other Endorsements 🏷️</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Chevrolet:</strong> Car commercials in 1970s</li>
                          <li>• <strong>Dingo Boots:</strong> Western-style footwear</li>
                          <li>• <strong>RC Cola:</strong> Soft drink advertisements</li>
                          <li>• <strong>Honey Baked Ham:</strong> Food endorsements</li>
                          <li>• <strong>Foster Grant:</strong> Sunglasses brand</li>
                          <li>• <strong>TreeSweet Orange Juice:</strong> Playing off "The Juice" nickname</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Complete Filmography */}
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">Complete Filmography & TV Work 🎥</h3>
                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-background/70 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Major Films 🎬</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• <strong>The Klansman (1974):</strong> Drama with Lee Marvin</li>
                          <li>• <strong>The Towering Inferno (1974):</strong> Disaster epic, security chief</li>
                          <li>• <strong>Killer Force (1976):</strong> Action film</li>
                          <li>• <strong>The Cassandra Crossing (1976):</strong> Disaster thriller</li>
                          <li>• <strong>Capricorn One (1977):</strong> Conspiracy thriller</li>
                          <li>• <strong>Firepower (1979):</strong> Action film</li>
                          <li>• <strong>The Naked Gun trilogy (1988-1994):</strong> Comedy classics</li>
                        </ul>
                      </div>
                      <div className="bg-background/70 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Television Work 📺</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Roots (1977):</strong> Historic miniseries as adult Kunta Kinte</li>
                          <li>• <strong>A Killing Affair (1977):</strong> TV movie</li>
                          <li>• <strong>Goldie and the Boxer (1979):</strong> TV movie</li>
                          <li>• <strong>Cocaine and Blue Eyes (1983):</strong> NBC TV movie</li>
                          <li>• <strong>Hambone and Hillie (1983):</strong> Family film</li>
                          <li>• <strong>Monday Night Football:</strong> ABC sideline reporter</li>
                          <li>• <strong>NFL on NBC:</strong> Studio analyst and game coverage</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-primary/20 p-4 rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Entertainment Legacy 🌟</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {highlightText("Simpson successfully transitioned from sports superstar to entertainment icon, becoming one of the most recognizable faces in 1980s and early 1990s American popular culture through his combination of dramatic roles, comedy performances, and ubiquitous commercial presence.")}
                      </p>
                    </div>
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
                Next: Personal Life & Relationships ❤️ <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Personal Life Section */}
      {shouldShowSection("Personal Life marriage Nicole Brown Simpson family") && (
        <section id="personal-life" className="section-container overflow-hidden p-3 sm:p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-destructive/5 to-primary/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl gradient-text flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Heart className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 flex-shrink-0" />
                  <span>{highlightText("Personal Life & Relationships")} ❤️</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-6 sm:space-y-8">
                  
                  {/* First Marriage */}
                  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
                    <div className="space-y-4 sm:space-y-6">
                      <div className="bg-muted/50 p-4 sm:p-6 rounded-lg animate-scale-in">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">First Marriage: Marguerite Whitley 💍</h3>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>💒 <strong>Wedding:</strong> June 24, 1967 (age 19)</li>
                          <li>🎓 <strong>Meeting:</strong> High school sweethearts at Galileo High</li>
                          <li>👶 <strong>Children:</strong> Arnelle (1968), Jason (1970), Aaren (1977-1979)</li>
                          <li>💔 <strong>Tragedy:</strong> Daughter Aaren drowned in family pool at age 23 months</li>
                          <li>📅 <strong>Divorce:</strong> March 1979 after 12 years of marriage</li>
                          <li>🏈 <strong>Context:</strong> Marriage during early NFL career struggles</li>
                        </ul>
                      </div>
                      
                      <div className="bg-accent/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-1">
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Early Family Life 👨‍👩‍👧‍👦</h3>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>🏠 <strong>Lifestyle:</strong> Traditional family structure during NFL career</li>
                          <li>💰 <strong>Financial Pressure:</strong> Early career struggles affected family</li>
                          <li>📍 <strong>Residence:</strong> Buffalo, NY during Bills years</li>
                          <li>👥 <strong>Social Circle:</strong> NFL players and their families</li>
                          <li>🎯 <strong>Focus:</strong> Career advancement and family stability</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-center space-y-4">
                      <img 
                        src={coupleImg} 
                        alt="O.J. Simpson personal life"
                        className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto hover:scale-105 transition-transform duration-500 animate-slide-in mx-auto"
                      />
                      <div className="bg-secondary/10 p-4 rounded-lg text-center">
                        <h4 className="font-semibold mb-2">Family Tragedy 💔</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">
                          {highlightText("The drowning death of 23-month-old Aaren in the family pool was a devastating blow that contributed to the strain on Simpson's first marriage.")}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Meeting Nicole Brown */}
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-2">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Meeting Nicole Brown Simpson 🌹</h3>
                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Initial Meeting & Courtship 💕</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>📅 <strong>First Meeting:</strong> 1977 at The Daisy nightclub, Beverly Hills</li>
                          <li>👩 <strong>Nicole's Age:</strong> 18 years old, Simpson was 30</li>
                          <li>🍸 <strong>Her Job:</strong> Waitress at the upscale nightclub</li>
                          <li>🌍 <strong>Background:</strong> German-American from Dana Point, California</li>
                          <li>👨‍👩‍👧‍👦 <strong>Family:</strong> Parents Lou and Juditha Brown, 3 sisters</li>
                          <li>⚡ <strong>Attraction:</strong> Immediate mutual attraction despite age gap</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-primary">Early Relationship 💝</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                          <li>🏖️ <strong>Lifestyle:</strong> Luxury vacations and high-end social events</li>
                          <li>💎 <strong>Gifts:</strong> Expensive jewelry, designer clothes, cars</li>
                          <li>🏠 <strong>Living:</strong> Moved in together while Simpson still married</li>
                          <li>⚠️ <strong>Red Flags:</strong> Early signs of possessive behavior</li>
                          <li>👥 <strong>Social Circle:</strong> Hollywood and sports elite</li>
                          <li>📱 <strong>Control:</strong> Simpson monitored her activities and friendships</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Second Marriage */}
                  <div className="bg-secondary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-3">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Second Marriage: Nicole Brown Simpson 💒</h3>
                    <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-secondary-foreground">Marriage Details 💍</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Wedding Date:</strong> February 2, 1985</li>
                          <li>• <strong>Location:</strong> Private ceremony in the backyard</li>
                          <li>• <strong>Children:</strong> Sydney (1985), Justin (1988)</li>
                          <li>• <strong>Duration:</strong> 7 years of marriage</li>
                          <li>• <strong>Residence:</strong> Brentwood mansion, Los Angeles</li>
                          <li>• <strong>Lifestyle:</strong> Affluent California social scene</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-secondary-foreground">Growing Problems 🚨</h4>
                        <ul className="space-y-1 text-xs sm:text-sm text-muted-foreground">
                          <li>• <strong>Control Issues:</strong> Simpson's increasingly possessive behavior</li>
                          <li>• <strong>Infidelity:</strong> Multiple extramarital affairs by Simpson</li>
                          <li>• <strong>Jealousy:</strong> Extreme reactions to Nicole's friendships</li>
                          <li>• <strong>Isolation:</strong> Attempts to cut Nicole off from family/friends</li>
                          <li>• <strong>Career Impact:</strong> Post-football identity and ego issues</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Domestic Violence History */}
                  <div className="bg-destructive/10 p-4 sm:p-6 rounded-lg border border-destructive/20 animate-scale-in animate-stagger-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-destructive">Domestic Violence & Abuse Pattern 🚨</h3>
                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-destructive">Documented Incidents 📋</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• <strong>New Year's Day 1989:</strong> Police photos of Nicole's injuries</li>
                          <li>• <strong>Plea Agreement:</strong> Simpson pleaded no contest to spousal abuse</li>
                          <li>• <strong>Sentence:</strong> 2 years probation, community service, counseling</li>
                          <li>• <strong>911 Calls:</strong> Multiple calls to police from Nicole</li>
                          <li>• <strong>Pattern:</strong> Escalating violence and control tactics</li>
                          <li>• <strong>Witnesses:</strong> Friends and family observed abuse signs</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-destructive">Impact on Relationship 💔</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Fear:</strong> Nicole lived in constant fear of Simpson</li>
                          <li>• <strong>Cycle:</strong> Abuse followed by apologies and gifts</li>
                          <li>• <strong>Children:</strong> Impact on Sydney and Justin witnessed violence</li>
                          <li>• <strong>Legal Action:</strong> Restraining orders and custody concerns</li>
                          <li>• <strong>Escape Attempts:</strong> Multiple efforts to leave the relationship</li>
                          <li>• <strong>Support System:</strong> Family and friends urged her to leave</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divorce and Post-Marriage Relationship */}
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 sm:p-6 rounded-lg animate-scale-in animate-stagger-5">
                    <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">Divorce & Continued Turmoil 📋</h3>
                    <div className="grid lg:grid-cols-3 gap-4 sm:gap-6">
                      <div className="bg-background/70 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Divorce Proceedings ⚖️</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Filed:</strong> February 25, 1992</li>
                          <li>• <strong>Finalized:</strong> October 15, 1992</li>
                          <li>• <strong>Custody:</strong> Joint custody of Sydney and Justin</li>
                          <li>• <strong>Settlement:</strong> $433,750 lump sum + $10,000/month</li>
                          <li>• <strong>Property:</strong> Nicole kept Gretna Green condo</li>
                        </ul>
                      </div>
                      <div className="bg-background/70 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Post-Divorce Period 🔄</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Reconciliation Attempts:</strong> Multiple tries to reunite</li>
                          <li>• <strong>Stalking Behavior:</strong> Simpson following and monitoring Nicole</li>
                          <li>• <strong>New Relationships:</strong> Nicole dated other men, causing rage</li>
                          <li>• <strong>Final Breakup:</strong> May 1994, Nicole ended contact for good</li>
                          <li>• <strong>Escalation:</strong> Simpson's behavior became more erratic</li>
                        </ul>
                      </div>
                      <div className="bg-background/70 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Family Legacy 👨‍👧‍👦</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                          <li>• <strong>Total Children:</strong> 5 children from both marriages</li>
                          <li>• <strong>Custody Issues:</strong> Complex arrangements post-divorce</li>
                          <li>• <strong>Impact:</strong> Children lived through public scrutiny</li>
                          <li>• <strong>Protection:</strong> Nicole's family fought for custody</li>
                          <li>• <strong>Ongoing:</strong> Relationships remain strained to this day</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-primary/20 p-4 rounded-lg text-center">
                      <h4 className="font-semibold mb-2">Pattern of Control 🚫</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">
                        {highlightText("Simpson's relationships were characterized by a pattern of charm, control, jealousy, and violence that escalated over time, culminating in the tragic events of June 1994 that would forever change all their lives.")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 sm:mt-8">
              <Button 
                onClick={() => scrollToSection('criminal-trials')}
                size="lg"
                className="hover-glow animate-pulse h-10 sm:h-11 lg:h-12 px-6 sm:px-8"
              >
                Next: Criminal Trials ⚖️ <ChevronDown className="ml-2 h-4 w-4" />
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