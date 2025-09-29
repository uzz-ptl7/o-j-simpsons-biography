import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Scale, Users, Eye, FileText, AlertTriangle, Gavel, Clock } from "lucide-react";
import ojSimpsonImg from "@/assets/oj-simpson.jpg";
import nicoleBrownImg from "@/assets/nicole-brown.jpg";
import coupleImg from "@/assets/couple.jpg";
import crimeSceneImg from "@/assets/crime-scene.jpg";
import evidenceImg from "@/assets/evidence.jpg";
import gloveTrialImg from "@/assets/glove-trial.jpg";

interface TrialContentProps {
  searchQuery: string;
}

export function TrialContent({ searchQuery }: TrialContentProps) {
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
      {shouldShowSection("Trial of the Century O.J. Simpson Murder Case") && (
        <section id="hero" className="section-container text-center animate-fade-in bg-gradient-to-br from-destructive/5 via-background to-primary/10">
          <div className="max-w-4xl px-6">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-typewriter">
                  {highlightText("Trial of the Century")} ⚖️
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground">
                  {highlightText("The O.J. Simpson Murder Case")} 🔍
                </p>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {highlightText("An in-depth analysis of the most watched criminal trial in American history")} 📺
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="destructive" className="text-lg px-6 py-3">
                  💀 Double Murder
                </Badge>
                <Badge variant="outline" className="text-lg px-6 py-3">
                  📺 150M Viewers
                </Badge>
                <Badge variant="secondary" className="text-lg px-6 py-3">
                  ⏱️ 8 Month Trial
                </Badge>
              </div>
              <Button 
                onClick={() => scrollToSection('timeline')}
                size="lg" 
                className="animate-pulse hover:scale-105 transition-transform"
              >
                Begin Analysis <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Timeline Section */}
      {shouldShowSection("Timeline Events Murder Investigation") && (
        <section id="timeline" className="section-container p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-secondary/5 to-accent/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <Clock className="h-8 w-8" />
                  {highlightText("Complete Timeline of Events")} ⏰
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-destructive animate-slide-in-up"></div>
                  
                  <div className="space-y-8">
                    {/* June 12, 1994 - The Murders */}
                    <div className="relative flex items-start space-x-6 animate-slide-in-left">
                      <div className="w-4 h-4 bg-destructive rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>
                      <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-destructive text-lg">June 12, 1994 - 10:15 PM</h4>
                          <Badge variant="destructive" className="text-xs">💀 MURDERS</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {highlightText("Nicole Brown Simpson (35) and Ronald Goldman (25) are brutally murdered outside Nicole's Brentwood condominium. Both victims suffer multiple stab wounds.")}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Nicole's throat slashed, nearly decapitated</li>
                          <li>• Goldman fought back, defensive wounds on hands</li>
                          <li>• Blood evidence suggests single killer</li>
                        </ul>
                      </div>
                    </div>

                    {/* June 13, 1994 - Discovery */}
                    <div className="relative flex items-start space-x-6 animate-slide-in-left animate-stagger-1">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>
                      <div className="bg-primary/10 p-6 rounded-lg border border-primary/20 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-primary text-lg">June 13, 1994 - 12:10 AM</h4>
                          <Badge variant="outline" className="text-xs">🔍 DISCOVERY</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {highlightText("Bodies discovered by dog walker. Police arrive at scene and begin investigation. O.J. unreachable in Chicago.")}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Crime scene contaminated by multiple officers</li>
                          <li>• Bloody glove found at Rockingham estate</li>
                          <li>• O.J. cut on left hand when questioned</li>
                        </ul>
                      </div>
                    </div>

                    {/* June 17, 1994 - Bronco Chase */}
                    <div className="relative flex items-start space-x-6 animate-slide-in-left animate-stagger-2">
                      <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>
                      <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-secondary-foreground text-lg">June 17, 1994 - 6:45 PM</h4>
                          <Badge variant="secondary" className="text-xs">🚗 CHASE</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {highlightText("Famous white Bronco chase watched by 95 million Americans. O.J. holds gun to his head while Al Cowlings drives, ending at Rockingham.")}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• $10,000 cash, passport, and disguise found in car</li>
                          <li>• Suicide note read by Robert Kardashian on TV</li>
                          <li>• Highest-rated live event in TV history</li>
                        </ul>
                      </div>
                    </div>

                    {/* January 24, 1995 - Trial Begins */}
                    <div className="relative flex items-start space-x-6 animate-slide-in-left animate-stagger-3">
                      <div className="w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>
                      <div className="bg-accent/10 p-6 rounded-lg border border-accent/20 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-accent-foreground text-lg">January 24, 1995</h4>
                          <Badge variant="outline" className="text-xs">⚖️ TRIAL BEGINS</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {highlightText("'Trial of the Century' begins with Judge Lance Ito presiding. Cameras allowed in courtroom for unprecedented live coverage.")}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Dream Team vs. Prosecution begins</li>
                          <li>• 150+ million viewers tune in daily</li>
                          <li>• Jury sequestered for 265 days</li>
                        </ul>
                      </div>
                    </div>

                    {/* October 3, 1995 - Verdict */}
                    <div className="relative flex items-start space-x-6 animate-slide-in-left animate-stagger-3">
                      <div className="w-4 h-4 bg-muted rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>
                      <div className="bg-muted/50 p-6 rounded-lg border border-muted/20 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-muted-foreground text-lg">October 3, 1995 - 10:00 AM</h4>
                          <Badge variant="outline" className="text-xs">⚖️ VERDICT</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {highlightText("After just 4 hours of deliberation, jury finds O.J. Simpson NOT GUILTY on all criminal charges. 150 million Americans watch live.")}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Racial divide in public reaction stark</li>
                          <li>• Civil trial begins in 1996</li>
                          <li>• Found liable for wrongful death in civil court</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('key-players')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: Key Players 👥 <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Key Players Section */}
      {shouldShowSection("Key Players Simpson Nicole Goldman Defense Prosecution") && (
        <section id="key-players" className="section-container p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-primary/5 to-secondary/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <Users className="h-8 w-8" />
                  {highlightText("The Main Characters")} 👥
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-6 rounded-lg text-center animate-scale-in hover-lift">
                      <img 
                        src={ojSimpsonImg} 
                        alt="O.J. Simpson"
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold text-primary mb-2">O.J. Simpson</h3>
                      <p className="text-sm text-muted-foreground">
                        {highlightText("Former NFL superstar, actor, and the defendant. Known as 'The Juice' for his explosive football career and later Hollywood success.")}
                      </p>
                    </div>
                    <div className="bg-secondary/10 p-6 rounded-lg text-center animate-scale-in animate-stagger-1 hover-lift">
                      <img 
                        src={nicoleBrownImg} 
                        alt="Nicole Brown Simpson"
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold text-secondary-foreground mb-2">Nicole Brown Simpson</h3>
                      <p className="text-sm text-muted-foreground">
                        {highlightText("O.J.'s ex-wife and mother of their two children. A victim of domestic violence who had called police multiple times.")}
                      </p>
                    </div>
                  </div>
                  <div className="bg-accent/10 p-6 rounded-lg animate-scale-in animate-stagger-2 hover-lift">
                    <h3 className="text-xl font-semibold text-center mb-4">Ronald Goldman 🕊️</h3>
                    <p className="text-sm text-muted-foreground text-center mb-4">
                      {highlightText("25-year-old waiter and aspiring actor who was returning Nicole's mother's sunglasses. Wrong place, wrong time.")}
                    </p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-primary">The Dream Team Defense:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        <li>• Johnnie Cochran - Lead attorney</li>
                        <li>• Robert Shapiro - Criminal defense expert</li>
                        <li>• Alan Dershowitz - Appeals specialist</li>
                        <li>• F. Lee Bailey - Trial lawyer</li>
                        <li>• Robert Kardashian - Friend & advisor</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-6 rounded-lg animate-scale-in animate-stagger-3 hover-lift">
                    <h3 className="text-xl font-semibold text-center mb-4">The Prosecution 🏛️</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-primary">Marcia Clark</h4>
                        <p className="text-xs text-muted-foreground">Lead prosecutor, known for her aggressive style</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Christopher Darden</h4>
                        <p className="text-xs text-muted-foreground">Co-prosecutor who made the glove demonstration mistake</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Judge Lance Ito</h4>
                        <p className="text-xs text-muted-foreground">Presiding judge who allowed cameras in the courtroom</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('evidence')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: The Evidence 🔍 <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Evidence Section */}
      {shouldShowSection("Evidence DNA Blood Gloves Hair Fibers Investigation") && (
        <section id="evidence" className="section-container p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-accent/5 to-destructive/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <Eye className="h-8 w-8" />
                  {highlightText("The Physical Evidence")} 🔬
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-destructive/10 p-6 rounded-lg animate-scale-in">
                      <h3 className="text-xl font-semibold mb-4 text-destructive">DNA & Blood Evidence 🩸</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {highlightText("O.J.'s blood found at Bundy crime scene")}</li>
                        <li>• {highlightText("Victims' blood in O.J.'s Bronco and home")}</li>
                        <li>• {highlightText("Blood on O.J.'s socks matched Nicole's DNA")}</li>
                        <li>• {highlightText("Trail of blood from Bronco to front door")}</li>
                      </ul>
                    </div>
                    <div className="bg-primary/10 p-6 rounded-lg animate-scale-in animate-stagger-1">
                      <h3 className="text-xl font-semibold mb-4 text-primary">The Infamous Gloves 🧤</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {highlightText("Matching Aris leather gloves (extra large)")}</li>
                        <li>• {highlightText("One found at Bundy, one at Rockingham")}</li>
                        <li>• {highlightText("Hair and fibers from all three people")}</li>
                        <li>• {highlightText("Shrank from blood and evidence processing")}</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 p-6 rounded-lg animate-scale-in animate-stagger-2">
                      <h3 className="text-xl font-semibold mb-4">Other Physical Evidence 🔍</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {highlightText("Hair fibers matching O.J. on victims")}</li>
                        <li>• {highlightText("Carpet fibers from Bronco on glove")}</li>
                        <li>• {highlightText("Size 12 Bruno Magli shoe prints (O.J.'s size)")}</li>
                        <li>• {highlightText("Cut on O.J.'s left hand after murders")}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src={evidenceImg} 
                      alt="Evidence from the trial"
                      className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-500 animate-slide-in-right"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('glove-moment')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: The Glove Moment 🧤 <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Famous Glove Moment Section */}
      {shouldShowSection("Glove Trial Moment If it doesn't fit you must acquit") && (
        <section id="glove-moment" className="section-container p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-primary/10 to-accent/5">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8" />
                  {highlightText("'If It Doesn't Fit, You Must Acquit'")} 🧤
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-lg animate-scale-in">
                      <h3 className="text-xl font-semibold mb-4">The Pivotal Moment ⚖️</h3>
                      <p className="text-muted-foreground mb-4">
                        {highlightText("June 15, 1995 - Prosecutor Christopher Darden made a critical error by asking O.J. to try on the bloody gloves in court.")}
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {highlightText("Gloves appeared too small for O.J.'s hands")}</li>
                        <li>• {highlightText("He was wearing latex gloves underneath")}</li>
                        <li>• {highlightText("Blood and evidence processing had shrunk them")}</li>
                        <li>• {highlightText("O.J. appeared to struggle with them dramatically")}</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 p-6 rounded-lg animate-scale-in animate-stagger-1">
                      <h3 className="text-xl font-semibold mb-4">Defense Victory 🎯</h3>
                      <p className="text-muted-foreground text-sm">
                        {highlightText("Johnnie Cochran's famous phrase became the defining moment of the trial, casting doubt on the prosecution's case in the minds of jurors.")}
                      </p>
                    </div>
                    <div className="bg-accent/10 p-6 rounded-lg animate-scale-in animate-stagger-2">
                      <h4 className="font-semibold mb-2">Watch the Historic Moment 📺</h4>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/16KaoVmVTPE?si=1h1RaHSAcpz8KLB5" 
                          title="The Glove Demonstration" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src={gloveTrialImg} 
                      alt="The famous glove demonstration"
                      className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform duration-500 animate-slide-in-right"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('verdict')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: The Verdict ⚖️ <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Verdict & Analysis Section */}
      {shouldShowSection("Verdict Not Guilty Analysis Controversial Decision") && (
        <section id="verdict" className="section-container p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-destructive/5 to-background">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <Scale className="h-8 w-8" />
                  {highlightText("The Controversial Verdict")} ⚖️
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-primary/10 p-6 rounded-lg animate-scale-in">
                      <h3 className="text-xl font-semibold mb-4 text-primary">October 3, 1995 - NOT GUILTY 📺</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {highlightText("Jury deliberated for only 4 hours")}</li>
                        <li>• {highlightText("150 million Americans watched the verdict live")}</li>
                        <li>• {highlightText("Divided reactions along racial lines")}</li>
                        <li>• {highlightText("Defense successfully planted 'reasonable doubt'")}</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 p-6 rounded-lg animate-scale-in animate-stagger-1">
                      <h3 className="text-xl font-semibold mb-4">Defense Strategy Success 🎯</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {highlightText("Attacked LAPD credibility and competence")}</li>
                        <li>• {highlightText("Raised contamination and conspiracy theories")}</li>
                        <li>• {highlightText("Played the 'race card' effectively")}</li>
                        <li>• {highlightText("Mark Fuhrman's racist tapes damaged prosecution")}</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20 animate-fade-scale">
                    <h3 className="text-2xl font-semibold mb-6 text-center text-destructive">Critical Analysis: Why Many Believe He Was Guilty 🔍</h3>
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Overwhelming Physical Evidence</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• DNA evidence statistically impossible to refute</li>
                          <li>• Multiple independent evidence sources</li>
                          <li>• No evidence of contamination or planting</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Clear Motive & History</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Documented domestic violence pattern</li>
                          <li>• Jealousy over Nicole's new relationships</li>
                          <li>• History of stalking behavior</li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-primary">Suspicious Behavior</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Bronco chase with passport and disguise</li>
                          <li>• Inconsistent alibi and timeline</li>
                          <li>• Mysterious cut on hand after murders</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-accent/10 p-6 rounded-lg animate-scale-in animate-stagger-2">
                    <h3 className="text-xl font-semibold mb-4 text-center">Civil Trial: A Different Outcome ⚖️</h3>
                    <p className="text-muted-foreground text-center mb-4">
                      {highlightText("February 1997: O.J. found liable for wrongful death in civil court with lower burden of proof ('preponderance of evidence' vs 'beyond reasonable doubt')")}
                    </p>
                    <div className="text-center">
                      <Badge variant="destructive" className="text-lg px-6 py-3">
                        💰 $33.5 Million Judgment
                      </Badge>
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
                Next: Cultural Impact 🌟 <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Legacy & Impact Section */}
      {shouldShowSection("Legacy Cultural Impact Media Race Relations Justice System") && (
        <section id="legacy" className="section-container p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-accent/10 to-primary/5">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <FileText className="h-8 w-8" />
                  {highlightText("Cultural Impact & Legacy")} 🌟
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-lg animate-scale-in hover-lift">
                      <h3 className="text-xl font-semibold mb-4 text-primary">Media Revolution 📺</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {highlightText("First fully televised criminal trial")}</li>
                        <li>• {highlightText("Birth of 24/7 news cycle coverage")}</li>
                        <li>• {highlightText("Court TV and CNN gained massive audiences")}</li>
                        <li>• {highlightText("Celebrity lawyers became household names")}</li>
                      </ul>
                    </div>
                    <div className="bg-secondary/10 p-6 rounded-lg animate-scale-in animate-stagger-1 hover-lift">
                      <h3 className="text-xl font-semibold mb-4">Racial Divide Exposed 🤝</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {highlightText("Different reactions by race to verdict")}</li>
                        <li>• {highlightText("Highlighted police-community tensions")}</li>
                        <li>• {highlightText("Sparked national conversations about justice")}</li>
                        <li>• {highlightText("Influenced jury selection nationwide")}</li>
                      </ul>
                    </div>
                    <div className="bg-accent/10 p-6 rounded-lg animate-scale-in animate-stagger-2 hover-lift">
                      <h3 className="text-xl font-semibold mb-4">Legal System Changes ⚖️</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• {highlightText("Enhanced DNA evidence protocols")}</li>
                        <li>• {highlightText("Improved domestic violence laws")}</li>
                        <li>• {highlightText("Better police evidence handling")}</li>
                        <li>• {highlightText("Cameras in courtrooms debate")}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-lg animate-fade-scale">
                      <h3 className="text-xl font-semibold mb-4 text-center">Pop Culture Phenomenon 🎬</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Multiple documentaries and series produced</li>
                        <li>• "The People v. O.J. Simpson" TV series</li>
                        <li>• Countless books and academic studies</li>
                        <li>• Referenced in movies, TV shows, and music</li>
                        <li>• Kardashian family's rise to fame connection</li>
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-6 rounded-lg animate-scale-in animate-stagger-3">
                      <h3 className="text-xl font-semibold mb-4 text-center">Lasting Questions 🤔</h3>
                      <p className="text-muted-foreground text-center text-sm">
                        {highlightText("Nearly 30 years later, the case continues to divide opinions and raise questions about celebrity justice, racial bias, media influence, and the effectiveness of the American legal system.")}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="hover-glow animate-pulse"
              >
                <Link to="/">🏠 Return to Main Story</Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}