import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import ojSimpsonImg from "@/assets/oj-simpson.jpg";
import nicoleBrownImg from "@/assets/nicole-brown.jpg";
import coupleImg from "@/assets/couple.jpg";
import crimeSceneImg from "@/assets/crime-scene.jpg";
import evidenceImg from "@/assets/evidence.jpg";
import gloveTrialImg from "@/assets/glove-trial.jpg";

interface CaseStudyContentProps {
  searchQuery: string;
}

export function CaseStudyContent({ searchQuery }: CaseStudyContentProps) {
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
    <div className="max-w-4xl mx-auto space-y-8 p-6">
      {/* Hero Section */}
      {shouldShowSection("OJ SIMPSON'S TRIAL CASE STUDY") && (
        <section id="overview" className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            {highlightText("OJ SIMPSON'S TRIAL")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {highlightText("A Comprehensive Case Study")}
          </p>
          <Badge variant="outline" className="text-lg px-4 py-2">
            Case Study Analysis
          </Badge>
        </section>
      )}

      {/* Key People Section */}
      <section id="people" className="animate-slide-in">
        <Card className="card-glow hover-glow">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">Key People</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {shouldShowSection("WHO IS OJ SIMPSON") && (
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    {highlightText("WHO IS OJ SIMPSON?")}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlightText("Orenthal James Simpson, also known by his nickname \"The Juice\", was an American professional football player, actor, and media personality who played in the National Football League for 11 seasons, primarily with the Buffalo Bills.")}
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={ojSimpsonImg} 
                    alt="OJ Simpson"
                    className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            )}
            
            <Separator />
            
            {shouldShowSection("WHO IS O.J. SIMPSON'S WIFE") && (
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="order-2 md:order-1 flex justify-center">
                  <img 
                    src={nicoleBrownImg} 
                    alt="Nicole Brown Simpson"
                    className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-xl font-semibold mb-3">
                    {highlightText("WHO IS O.J. SIMPSON'S WIFE?")}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlightText("Nicole Brown Simpson was a German and American woman best known for being the second wife of American professional football player, actor, and media personality O. J. Simpson.")}
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Relationship Section */}
      {shouldShowSection("HOW DID NICOLE AND OJ MEET") && (
        <section className="animate-slide-in">
          <Card className="card-glow hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">
                {highlightText("Their Relationship")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    {highlightText("How Did They Meet?")}
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      {highlightText("O.J. Simpson and Nicole Brown Simpson met in 1977 when she was working as a waitress at a nightclub in Los Angeles. They started dating soon after, even though O.J. was still married to his first wife, Marguerite Whitley at the time. He divorced Marguerite in 1979, and later married Nicole in 1985.")}
                    </p>
                    <p>
                      {highlightText("At first, it seemed glamorous: O.J. Simpson was a famous football star and actor, Nicole was young and beautiful, and they lived a wealthy lifestyle. But behind the scenes:")}
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>{highlightText("Domestic violence: Nicole told friends and even police that O.J. was abusive. There were police calls to their home because of fights.")}</li>
                      <li>{highlightText("Control & jealousy: Reports say O.J. was very controlling and jealous, which caused tension.")}</li>
                      <li>{highlightText("Divorce: In 1992, Nicole filed for divorce after about 7 years of marriage.")}</li>
                    </ul>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={coupleImg} 
                    alt="OJ and Nicole Simpson together"
                    className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* The Murder Section */}
      {shouldShowSection("HOW DID NICOLE BROWN SIMPSON DIE") && (
        <section className="animate-slide-in">
          <Card className="card-glow hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">
                {highlightText("The Murder")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">
                    {highlightText("How Did Nicole Brown Simpson Die?")}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlightText("Nicole Brown Simpson and her friend Ronald Goldman died on June 12, 1994, in a horrific murder. She was found outside her home in Brentwood, Los Angeles, along with her friend Ronald Goldman. Both had been stabbed multiple times, leading to fatal injuries. The murder was violent, and it shocked the nation because Nicole was a well-known public figure due to her marriage to O.J. Simpson.")}
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src={crimeSceneImg} 
                    alt="Crime scene area"
                    className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Evidence Section */}
      <section id="evidence" className="animate-slide-in">
        <Card className="card-glow hover-glow">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">
              {highlightText("The Evidence")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {shouldShowSection("WHY THEY HAVE OJ AS A SUSPECT") && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {highlightText("Why O.J. Simpson Was a Suspect")}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">1. History of Violence</h4>
                      <p className="text-muted-foreground text-sm">
                        {highlightText("O.J. had been violent toward Nicole while they were married. She had even called the police before because of his abuse.")}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">2. Blood Evidence</h4>
                      <p className="text-muted-foreground text-sm">
                        {highlightText("Blood from O.J., Nicole, and her friend Ronald Goldman was found in places connected to the crime: At Nicole's house and in O.J.'s car.")}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">3. Hair and Fiber Evidence</h4>
                      <p className="text-muted-foreground text-sm">
                        {highlightText("Investigators found hairs from Nicole, Ronald Goldman, and O.J. Simpson at different places. Fibers from O.J.'s clothes were found on the victims' clothing.")}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <img 
                      src={evidenceImg} 
                      alt="Evidence from the case"
                      className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>

      {/* The Trial Section */}
      <section id="trial" className="animate-slide-in">
        <Card className="card-glow hover-glow">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">
              {highlightText("The Famous Glove Trial Moment")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-primary mb-2">The Gloves</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {highlightText("Two gloves were found: One at Nicole's house (the murder scene) and one at O.J. Simpson's property. The gloves were very large and matched a style O.J. wore.")}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">The Court Moment</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    {highlightText("During the trial, the prosecutor had O.J. try on the gloves. The gloves looked too tight on his hands. Defense attorney Johnnie Cochran said: \"If it doesn't fit, you must acquit.\"")}
                  </p>
                </div>
                <div className="bg-secondary/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Video Evidence</h4>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/16KaoVmVTPE?si=1h1RaHSAcpz8KLB5" 
                      title="YouTube video player" 
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
                  alt="The glove trial moment"
                  className="rounded-lg shadow-lg max-w-full h-auto hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Car Chase Section */}
      {shouldShowSection("The car chase") && (
        <section className="animate-slide-in">
          <Card className="card-glow hover-glow">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">
                {highlightText("The Car Chase")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  {highlightText("Date: June 17, 1994 – five days after Nicole and Ronald were killed. O.J. Simpson was supposed to turn himself in to the police. Instead, he got into a white Ford Bronco with his friend Al Cowlings.")}
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{highlightText("The police followed him on the highways of Los Angeles")}</li>
                  <li>{highlightText("He was driving very slowly—around 40 mph—even though police were behind him")}</li>
                  <li>{highlightText("News helicopters broadcast the chase live, and millions of people watched")}</li>
                  <li>{highlightText("It lasted about 90 minutes")}</li>
                  <li>{highlightText("O.J. eventually stopped at his home and surrendered peacefully")}</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Verdict Section */}
      <section id="verdict" className="animate-slide-in">
        <Card className="card-glow hover-glow">
          <CardHeader>
            <CardTitle className="text-2xl gradient-text">
              {highlightText("The Jury's Decision & Analysis")}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {shouldShowSection("THE JURY'S DECISION") && (
              <div>
                <h3 className="text-xl font-semibold mb-4">
                  {highlightText("The Jury's Decision")}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>{highlightText("O.J. Simpson was charged with the murders of Nicole Brown Simpson and Ronald Goldman")}</li>
                  <li>{highlightText("The trial was highly publicized and called \"the trial of the century\"")}</li>
                  <li>{highlightText("Verdict: Acquitted (found not guilty) in criminal court")}</li>
                  <li>{highlightText("Reason: The jury wasn't convinced beyond a reasonable doubt, partly due to the defense questioning the evidence and police handling")}</li>
                </ul>
              </div>
            )}
            
            <Separator />
            
            {shouldShowSection("PERSONAL TAKE") && (
              <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20">
                <h3 className="text-xl font-semibold mb-4 text-destructive">
                  {highlightText("Personal Analysis: Guilty")}
                </h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Blood Evidence</h4>
                    <p className="text-muted-foreground">
                      {highlightText("O.J.'s blood was found at the crime scene, and the victims' blood was found in his car and on his socks. DNA testing confirmed the blood matched him and the victims.")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">History of Domestic Violence</h4>
                    <p className="text-muted-foreground">
                      {highlightText("O.J. had abused Nicole during their marriage, giving him motive. Abusive patterns often escalate, which fits with the violent nature of the murders.")}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Suspicious Behavior</h4>
                    <p className="text-muted-foreground">
                      {highlightText("He didn't cooperate fully with investigators at first and attempted to flee during the famous car chase.")}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}