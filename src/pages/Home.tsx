import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, BookOpen, Camera, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Healthcare professionals providing medical care"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Kaposi Sarcoma
              <span className="block text-medical-accent-foreground">Awareness & Detection</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Early detection saves lives. Learn about Kaposi Sarcoma and use our AI-powered tool to analyze skin lesions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/learn">
                <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-medium">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Learn About KS
                </Button>
              </Link>
              <Link to="/tool">
                <Button size="lg" className="bg-gradient-medical text-primary-foreground hover:opacity-90 transition-opacity shadow-medium">
                  <Camera className="w-5 h-5 mr-2" />
                  Try AI Tool
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Early Detection Matters
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Better Outcomes</h3>
              <p className="text-muted-foreground">
                Early detection and treatment of Kaposi Sarcoma significantly improves patient outcomes and quality of life.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-shadow">
              <div className="bg-medical-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-medical-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">AI-Powered Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced AI model helps identify potential KS lesions, supporting healthcare professionals in diagnosis.
              </p>
            </Card>

            <Card className="p-8 text-center shadow-soft hover:shadow-medium transition-shadow">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Accessible Care</h3>
              <p className="text-muted-foreground">
                Democratizing access to preliminary screening tools, especially important in underserved communities.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-card py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Take Action Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Knowledge and early detection are your best defenses against Kaposi Sarcoma.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/learn">
              <Button size="lg" className="shadow-medium">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Button>
            </Link>
            <Link to="/tool">
              <Button size="lg" variant="outline" className="shadow-medium">
                <Camera className="w-5 h-5 mr-2" />
                Use Detection Tool
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;