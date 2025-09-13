import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Info, Microscope, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Learn = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Understanding Kaposi Sarcoma
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn about this important cancer, its causes, and why early detection is crucial for effective treatment.
          </p>
        </header>

        {/* Important Alert */}
        <Alert className="mb-12 border-medical-accent bg-medical-accent/5">
          <AlertTriangle className="h-4 w-4 text-medical-accent" />
          <AlertDescription className="text-medical-accent font-medium">
            This information is for educational purposes only. Always consult with healthcare professionals for medical advice, diagnosis, or treatment.
          </AlertDescription>
        </Alert>

        {/* Main Content */}
        <div className="space-y-12">
          {/* What is Kaposi Sarcoma */}
          <Card className="p-8 shadow-medium">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Microscope className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">What is Kaposi Sarcoma?</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Kaposi Sarcoma (KS) is a type of cancer that develops from the cells that line lymph or blood vessels. 
                It usually appears as painless, flat, purple or dark lesions on the skin, but can also affect internal organs.
              </p>
              
              <p className="mb-4">
                Unlike many other cancers, KS is caused by a viral infection - specifically the human herpesvirus 8 (HHV-8), 
                also known as Kaposi Sarcoma-associated herpesvirus (KSHV).
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Common Characteristics:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Purple, red, or brown lesions on the skin</li>
                <li>• Painless, flat or raised patches</li>
                <li>• May appear anywhere on the body</li>
                <li>• Can affect mucous membranes and internal organs</li>
                <li>• Lesions may be few or numerous</li>
              </ul>
            </div>
          </Card>

          {/* HHV-8 Connection */}
          <Card className="p-8 shadow-medium">
            <div className="flex items-center mb-6">
              <div className="bg-medical-accent/10 p-3 rounded-lg mr-4">
                <Info className="w-6 h-6 text-medical-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">The HHV-8 Connection</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Human herpesvirus 8 (HHV-8) is the infectious cause of all forms of Kaposi Sarcoma. 
                However, not everyone infected with HHV-8 will develop KS.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Key Facts about HHV-8:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Transmitted through saliva, sexual contact, or blood transfusions</li>
                <li>• More common in certain geographical regions (Mediterranean, Africa, Middle East)</li>
                <li>• Most people with HHV-8 never develop symptoms</li>
                <li>• KS typically only develops when the immune system is compromised</li>
                <li>• Can remain dormant for years before causing disease</li>
              </ul>

              <p className="mt-6">
                The risk of developing KS increases significantly in people with weakened immune systems, 
                including those with HIV/AIDS, organ transplant recipients, or certain genetic conditions.
              </p>
            </div>
          </Card>

          {/* Types of KS */}
          <Card className="p-8 shadow-medium">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Types of Kaposi Sarcoma</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Classic KS</h3>
                <p className="text-muted-foreground text-sm">
                  Affects older men of Mediterranean or Eastern European descent. 
                  Typically progresses slowly and mainly affects the legs and feet.
                </p>
              </div>
              
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Endemic KS</h3>
                <p className="text-muted-foreground text-sm">
                  Found in certain parts of Africa, affects people of all ages. 
                  Can be more aggressive and may involve lymph nodes.
                </p>
              </div>
              
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Epidemic KS</h3>
                <p className="text-muted-foreground text-sm">
                  Associated with HIV/AIDS. Can be aggressive and may affect 
                  multiple organs including lungs and digestive tract.
                </p>
              </div>
              
              <div className="bg-accent p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">Iatrogenic KS</h3>
                <p className="text-muted-foreground text-sm">
                  Occurs in people taking immunosuppressive medications, 
                  typically organ transplant recipients.
                </p>
              </div>
            </div>
          </Card>

          {/* Early Detection */}
          <Card className="p-8 shadow-medium border-medical-accent">
            <div className="flex items-center mb-6">
              <div className="bg-medical-accent/10 p-3 rounded-lg mr-4">
                <AlertTriangle className="w-6 h-6 text-medical-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Why Early Detection Matters</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Early detection and treatment of Kaposi Sarcoma can significantly improve outcomes and quality of life:
              </p>

              <ul className="space-y-3 mb-6">
                <li>• <strong>Better Treatment Response:</strong> Early-stage KS often responds better to treatment</li>
                <li>• <strong>Prevent Spread:</strong> Early intervention can prevent lesions from spreading to internal organs</li>
                <li>• <strong>Improved Quality of Life:</strong> Prompt treatment reduces symptoms and cosmetic concerns</li>
                <li>• <strong>Reduced Complications:</strong> Prevents serious complications like lung or digestive involvement</li>
              </ul>

              <Alert className="bg-primary/5 border-primary">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-primary">
                  If you notice any persistent, unusual skin lesions, especially if you're at higher risk, 
                  consult with a healthcare professional promptly.
                </AlertDescription>
              </Alert>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Try Our AI Detection Tool?
          </h2>
          <p className="text-muted-foreground mb-8">
            Use our advanced AI model to analyze skin lesions for potential signs of Kaposi Sarcoma.
          </p>
          <Link to="/tool">
            <Button size="lg" className="shadow-medium">
              Try AI Detection Tool
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Learn;