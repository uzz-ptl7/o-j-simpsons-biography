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
import bookCoverImg from "@/assets/bookcover.jpg";

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
        <section id="hero" className="section-container overflow-hidden text-center animate-fade-in bg-gradient-to-br from-destructive/5 via-background to-primary/10">
          <div className="max-w-4xl px-4 sm:px-6">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold gradient-text animate-typewriter leading-tight">
                  {highlightText("Trial of the Century")} ⚖️
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                  {highlightText("The O.J. Simpson Murder Case")} 🔍
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-xl lg:max-w-2xl mx-auto px-4">
                  {highlightText("An in-depth analysis of the most watched criminal trial in American history")} 📺
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 px-4">
                <Badge variant="destructive" className="text-xs sm:text-sm lg:text-lg px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3">
                  💀 Double Murder
                </Badge>
                <Badge variant="outline" className="text-xs sm:text-sm lg:text-lg px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3">
                  📺 150M Viewers
                </Badge>
                <Badge variant="secondary" className="text-xs sm:text-sm lg:text-lg px-3 py-1.5 sm:px-4 sm:py-2 lg:px-6 lg:py-3">
                  ⏱️ 8 Month Trial
                </Badge>
              </div>
              <Button 
                onClick={() => scrollToSection('key-players')}
                size="lg" 
                className="animate-pulse hover:scale-105 transition-transform h-10 sm:h-11 lg:h-12 px-6 sm:px-8"
              >
                Begin Analysis <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Key Players Section */}
      {shouldShowSection("Key Players Simpson Nicole Goldman Defense Prosecution") && (
        <section id="key-players" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-primary/5 to-secondary/10">
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
        <section id="evidence" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-accent/5 to-destructive/10">
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
        <section id="glove-moment" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-primary/10 to-accent/5">
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
        <section id="verdict" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-destructive/5 to-background">
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
        <section id="legacy" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-accent/10 to-primary/5">
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
                onClick={() => scrollToSection('controversial-book')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: The Controversial Book 📖 <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* The Controversial Book Section */}
      {shouldShowSection("Controversial Book If I Did It hypothetical confession Goldman family") && (
        <section id="controversial-book" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-destructive/5 to-accent/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow border-destructive/20 backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <FileText className="h-8 w-8" />
                  <span className="text-destructive">{highlightText("'If I Did It' - The Controversial Book")} 📖</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  
                  {/* Book Overview */}
                  <div className="bg-gradient-to-br from-destructive/10 to-primary/10 p-6 rounded-lg border border-destructive/20 animate-scale-in">
                    <h3 className="text-2xl font-semibold mb-6 text-destructive text-center">A Publishing Scandal That Shocked the World 📚</h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-destructive text-lg">The Original Deal (2006) 💰</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>📖 <strong>Title:</strong> "If I Did It: Confessions of the Killer"</li>
                          <li>💵 <strong>Advance:</strong> $600,000 from ReganBooks/HarperCollins</li>
                          <li>📺 <strong>TV Deal:</strong> Fox interview special planned</li>
                          <li>🎭 <strong>Format:</strong> Simpson's "hypothetical" account of murders</li>
                          <li>⚠️ <strong>Reality:</strong> Widely seen as thinly veiled confession</li>
                          <li>🚫 <strong>Fate:</strong> Cancelled after massive public outcry</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-4 text-destructive text-lg">Goldman Family Takeover (2007) ⚖️</h4>
                        <ul className="space-y-2 text-muted-foreground text-sm">
                          <li>👨‍⚖️ <strong>Legal Action:</strong> Court awarded rights to Goldman family</li>
                          <li>📖 <strong>Published Version:</strong> Modified title emphasizing confession</li>
                          <li>✏️ <strong>Added Content:</strong> Goldman family commentary and analysis</li>
                          <li>📈 <strong>Sales:</strong> Became bestseller despite controversy</li>
                          <li>🎯 <strong>Purpose:</strong> Expose Simpson's guilt and collect damages</li>
                          <li>💡 <strong>Impact:</strong> Renewed focus on evidence and trial</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Book Cover, Reading Link & Simpson's Purpose */}
                  <div className="grid lg:grid-cols-2 gap-8 items-start animate-scale-in animate-stagger-1">
                    <div className="flex justify-center order-2 lg:order-1">
                      <div className="space-y-4">
                        <img 
                          src={bookCoverImg} 
                          alt="If I Did It book cover"
                          className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto hover:scale-105 transition-transform duration-500 animate-slide-in"
                        />
                        <div className="bg-destructive/20 p-4 rounded-lg text-center">
                          <h4 className="font-semibold mb-2 text-destructive">New York Times Bestseller 📚</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                            {highlightText("Over 325,000 copies sold! The Ron Goldman Foundation for Justice Authorized Version")}
                          </p>
                          <Button 
                            asChild
                            className="w-full bg-destructive hover:bg-destructive/90 text-white"
                            size="lg"
                          >
                            <a 
                              href="https://www.oocities.org/garrettwilke/ojsiidi.pdf" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2"
                            >
                              📖 Read the Book Online (PDF)
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6 order-1 lg:order-2">
                      <div className="bg-primary/10 p-6 rounded-lg">
                        <h4 className="font-semibold mb-4 text-primary text-xl">Simpson's Stated Purpose for Writing 📝</h4>
                        <div className="space-y-3">
                          <p className="text-muted-foreground text-sm">
                            {highlightText("According to Simpson and his representatives, he wrote the book for several reasons:")}
                          </p>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>💰 <strong>Financial Motivation:</strong> Simpson faced mounting legal debts and the $33.5 million civil judgment</li>
                            <li>🗣️ <strong>Public Response:</strong> Claimed he wanted to address ongoing speculation about his guilt</li>
                            <li>🎭 <strong>Hypothetical Exercise:</strong> Insisted it was purely fictional speculation, not a confession</li>
                            <li>⚖️ <strong>Legal Strategy:</strong> Maintained innocence while exploring "what if" scenarios</li>
                            <li>📺 <strong>Media Attention:</strong> Sought to capitalize on continued public fascination with the case</li>
                            <li>💔 <strong>Personal Vindication:</strong> Attempted to control narrative around his involvement</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20">
                        <h4 className="font-semibold mb-4 text-destructive text-xl">The Real Purpose: Expert Analysis 🔍</h4>
                        <div className="space-y-3">
                          <p className="text-muted-foreground text-sm">
                            {highlightText("Legal and psychological experts believe Simpson's true motivations were:")}
                          </p>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>🧠 <strong>Psychological Relief:</strong> Narcissistic need to confess while maintaining plausible deniability</li>
                            <li>🎯 <strong>Control Narrative:</strong> Shape public perception of events before his death</li>
                            <li>💸 <strong>Profit from Notoriety:</strong> Monetize his infamy one final time</li>
                            <li>😏 <strong>Ego Gratification:</strong> Boast about "perfect crime" without legal consequences</li>
                            <li>🔥 <strong>Attention Seeking:</strong> Return to center of media spotlight</li>
                            <li>⚡ <strong>Power Play:</strong> Demonstrate control over victims' families and justice system</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-secondary/10 p-6 rounded-lg">
                        <h4 className="font-semibold mb-4 text-secondary-foreground text-xl">Book Content Summary 📚</h4>
                        <div className="space-y-3">
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>📄 <strong>256 Pages:</strong> Simpson's "hypothetical" account + Goldman family commentary</li>
                            <li>🕰️ <strong>Timeline:</strong> Detailed recreation of June 12, 1994 murder night</li>
                            <li>👤 <strong>"Charlie" Character:</strong> Mysterious accomplice who supposedly did the killing</li>
                            <li>🏠 <strong>Crime Scene Details:</strong> Information only the killer could possess</li>
                            <li>🧬 <strong>Forensic Elements:</strong> Blood patterns, weapon descriptions, escape routes</li>
                            <li>💬 <strong>Goldman Commentary:</strong> Family's analysis exposing contradictions and lies</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Key Revelations */}
                  <div className="bg-muted/50 p-6 rounded-lg animate-scale-in animate-stagger-1">
                    <h3 className="text-xl font-semibold mb-6 text-center">Shocking "Hypothetical" Details 🔍</h3>
                    <div className="grid lg:grid-cols-3 gap-6">
                      <div className="bg-background/70 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-destructive">Crime Scene Knowledge 🏠</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Detailed layout of Nicole's condo</li>
                          <li>• Exact positions where bodies found</li>
                          <li>• Knowledge of security and lighting</li>
                          <li>• Timing and escape route details</li>
                        </ul>
                      </div>
                      <div className="bg-background/70 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-destructive">The Mysterious "Charlie" 👤</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Claimed accomplice never identified</li>
                          <li>• Convenient scapegoat for violence</li>
                          <li>• No evidence such person existed</li>
                          <li>• Allowed Simpson to minimize culpability</li>
                        </ul>
                      </div>
                      <div className="bg-background/70 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-destructive">Forensic Accuracy 🧬</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Blood spatter patterns described</li>
                          <li>• Weapon details matching evidence</li>
                          <li>• Timeline matching prosecution theory</li>
                          <li>• Details not public during trial</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Expert Analysis */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg animate-scale-in animate-stagger-2">
                    <h3 className="text-xl font-semibold mb-6 text-center">Legal Expert Analysis 👨‍⚖️</h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">Why Experts Consider It a Confession 📋</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• <strong>Impossible Knowledge:</strong> Details only killer could know</li>
                          <li>• <strong>Forensic Accuracy:</strong> Matched crime scene evidence exactly</li>
                          <li>• <strong>Timeline Precision:</strong> Fit prosecution's murder timeline</li>
                          <li>• <strong>Psychological Patterns:</strong> Classic guilty behavior</li>
                          <li>• <strong>Legal Opinion:</strong> Prosecutors called it "confession disguised as fiction"</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">Publishing Ethics Debate 📚</h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          <li>• <strong>Blood Money:</strong> Profiting from murder victims</li>
                          <li>• <strong>Public Interest:</strong> Truth vs. exploitation</li>
                          <li>• <strong>Victim Rights:</strong> Families' suffering vs. information</li>
                          <li>• <strong>Legal Precedent:</strong> Can victims' families control narrative?</li>
                          <li>• <strong>Media Responsibility:</strong> Where to draw ethical lines</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cultural Impact */}
                  <div className="bg-accent/10 p-6 rounded-lg animate-scale-in animate-stagger-3">
                    <h3 className="text-xl font-semibold mb-4 text-center">Lasting Cultural Impact 🌍</h3>
                    <div className="bg-primary/20 p-4 rounded-lg text-center">
                      <p className="text-muted-foreground text-sm mb-4">
                        {highlightText("The book became a cultural phenomenon, providing what many considered the closest thing to a confession the public would ever receive. Legal scholars use it in courses on evidence and ethics, while it remains a symbol of how celebrity, media, and justice intersect in modern America.")}
                      </p>
                      <Badge variant="destructive" className="text-lg px-6 py-3">
                        💀 "The Confession That Wasn't a Confession"
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-8">
              <Button 
                onClick={() => scrollToSection('timeline')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: Timeline of Events ⏰ <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Timeline Section - Moved to End */}
      {shouldShowSection("Timeline Events Murder Investigation") && (
        <section id="timeline" className="section-container overflow-hidden p-3 sm:p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-secondary/5 to-accent/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow backdrop-blur-sm bg-background/95">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl lg:text-4xl gradient-text flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3">
                  <Clock className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 flex-shrink-0" />
                  <span>{highlightText("Complete Timeline of Events")} ⏰</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-destructive animate-slide-in-up"></div>
                  
                  <div className="space-y-6 sm:space-y-8">
                    {/* June 12, 1994 - The Murders */}
                    <div className="relative flex items-start space-x-4 sm:space-x-6 animate-slide-in-left">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 bg-destructive rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>
                      <div className="bg-destructive/10 p-4 sm:p-6 rounded-lg border border-destructive/20 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
                          <h4 className="font-bold text-destructive text-sm sm:text-base lg:text-lg">June 12, 1994 - 10:15 PM</h4>
                          <Badge variant="destructive" className="text-xs w-fit">💀 MURDERS</Badge>
                        </div>
                        <p className="text-muted-foreground text-xs sm:text-sm mb-2">
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
                          <li>• Trail of blood leads to front door</li>
                        </ul>
                      </div>
                    </div>

                    {/* June 17, 1994 - Bronco Chase */}
                    <div className="relative flex items-start space-x-6 animate-slide-in-left animate-stagger-2">
                      <div className="w-4 h-4 bg-destructive rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>
                      <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-destructive text-lg">June 17, 1994 - 6:45 PM</h4>
                          <Badge variant="destructive" className="text-xs">🚗 BRONCO CHASE</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {highlightText("The infamous white Bronco chase watched by 95 million Americans. O.J. holds gun to his head while Al Cowlings drives.")}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• $8,000 cash, passport, and disguise found</li>
                          <li>• Suicide note discovered at his home</li>
                          <li>• Surrenders at 8:00 PM at Rockingham</li>
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
                          {highlightText("Trial of the century begins with opening statements. Media circus reaches fever pitch.")}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Judge Lance Ito presiding</li>
                          <li>• Jury selection took 11 weeks</li>
                          <li>• Trial broadcast live on TV</li>
                        </ul>
                      </div>
                    </div>

                    {/* June 15, 1995 - Glove Demonstration */}
                    <div className="relative flex items-start space-x-6 animate-slide-in-left animate-stagger-4">
                      <div className="w-4 h-4 bg-secondary rounded-full border-4 border-background shadow-lg flex-shrink-0 z-10"></div>
                      <div className="bg-secondary/10 p-6 rounded-lg border border-secondary/20 flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="font-bold text-secondary-foreground text-lg">June 15, 1995</h4>
                          <Badge variant="secondary" className="text-xs">🧤 GLOVE MOMENT</Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-2">
                          {highlightText("The infamous \"If it doesn't fit, you must acquit\" moment that changed everything.")}
                        </p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          <li>• Gloves appeared too small</li>
                          <li>• Prosecution's biggest mistake</li>
                          <li>• Defense strategy masterpiece</li>
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
                onClick={() => scrollToSection('personal-analysis')}
                size="lg"
                className="hover-glow animate-pulse"
              >
                Next: Personal Analysis 🤔 <ChevronDown className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Personal Analysis Section */}
      {shouldShowSection("Personal Analysis O.J. Simpson guilt evidence opinion") && (
        <section id="personal-analysis" className="section-container overflow-hidden p-4 lg:p-8 animate-on-scroll bg-gradient-to-br from-destructive/5 to-muted/10">
          <div className="max-w-6xl w-full">
            <Card className="card-glow hover-glow border-destructive/20 backdrop-blur-sm bg-background/95">
              <CardHeader>
                <CardTitle className="text-3xl lg:text-4xl gradient-text flex items-center gap-3">
                  <FileText className="h-8 w-8" />
                  <span className="text-destructive">{highlightText("Personal Analysis: Did O.J. Simpson Commit the Murders?")} 🤔</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  
                  <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20 animate-scale-in">
                    <h3 className="text-2xl font-semibold mb-6 text-destructive text-center">The Evidence Points to Guilt �</h3>
                    <div className="space-y-6">
                      <p className="text-muted-foreground text-center mb-6">
                        {highlightText("After examining all evidence, the conclusion is clear: O.J. Simpson almost certainly committed these murders.")}
                      </p>
                      
                      <div className="grid lg:grid-cols-2 gap-6">
                        <div className="bg-background/50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-4 text-destructive text-xl">Physical Evidence 🧬</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• <strong>DNA:</strong> His blood at crime scene (1 in 170M chance not his)</li>
                            <li>• <strong>Victims' Blood:</strong> In his car, home, on socks</li>
                            <li>• <strong>Hair & Fibers:</strong> Matching Simpson on victims</li>
                            <li>• <strong>Shoe Prints:</strong> Rare Bruno Magli, his size</li>
                            <li>• <strong>Fresh Cut:</strong> Unexplained hand injury</li>
                          </ul>
                        </div>
                        
                        <div className="bg-background/50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-4 text-destructive text-xl">Behavioral Evidence 🎭</h4>
                          <ul className="space-y-2 text-muted-foreground text-sm">
                            <li>• <strong>Violence History:</strong> Documented domestic abuse</li>
                            <li>• <strong>Stalking:</strong> Following Nicole before murder</li>
                            <li>• <strong>Flight Attempt:</strong> Cash, passport, disguise</li>
                            <li>• <strong>"If I Did It":</strong> Details only killer knew</li>
                            <li>• <strong>No Alibi:</strong> Can't account for murder time</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-6 rounded-lg animate-scale-in animate-stagger-1">
                    <h3 className="text-xl font-semibold mb-6 text-center">Why Criminal Jury Got It Wrong vs Civil Got It Right ⚖️</h3>
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-destructive">Criminal Trial Issues 📉</h4>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          <li>• Racial context (post-Rodney King)</li>
                          <li>• LAPD credibility destroyed</li>
                          <li>• "Race card" defense strategy</li>
                          <li>• Glove demonstration theatrics</li>
                          <li>• 99% certainty standard too high</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3 text-primary">Civil Trial Success ✅</h4>
                        <ul className="space-y-1 text-muted-foreground text-sm">
                          <li>• 51% evidence standard</li>
                          <li>• More diverse, educated jury</li>
                          <li>• No cameras = focus on evidence</li>
                          <li>• Simpson forced to testify</li>
                          <li>• Bruno Magli photos admitted</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-accent/10 p-6 rounded-lg animate-scale-in animate-stagger-2">
                    <h3 className="text-xl font-semibold mb-4 text-center">Final Conclusion 🎯</h3>
                    <div className="bg-destructive/20 p-6 rounded-lg text-center">
                      <p className="text-muted-foreground text-lg mb-4">
                        {highlightText("Based on physical evidence, behavioral patterns, and his own 'hypothetical' confession, there is no reasonable doubt O.J. Simpson committed these murders.")}
                      </p>
                      <Badge variant="destructive" className="text-lg px-6 py-3">
                        💀 Guilty Beyond Reasonable Doubt
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-4">
                        The criminal trial was a miscarriage of justice, but the civil trial and evidence tell the truth.
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