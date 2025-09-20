import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Progress } from "@/components/ui/progress";
import { Upload, AlertTriangle, Info, CheckCircle, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AnalysisResult {
  confidence: number;
  prediction: string;
  recommendations: string[];
}

const Tool = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        toast({
          title: "Invalid file type",
          description: "Please select an image file (JPG, PNG, etc.)",
          variant: "destructive",
        });
        return;
      }

      // Validate file size (5MB limit)
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }

      setSelectedFile(file);
      
      // Create preview URL
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setResult(null);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setIsAnalyzing(true);
    
    try {
      // This is where you'll integrate your backend API
      // For now, we'll simulate the analysis
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock result - replace with actual API call
      const mockResult: AnalysisResult = {
        confidence: 0.75,
        prediction: "Suspicious lesion detected",
        recommendations: [
          "Consult with a dermatologist or oncologist immediately",
          "Schedule a biopsy for definitive diagnosis", 
          "Document any changes in the lesion over time",
          "Consider imaging studies if systemic involvement is suspected"
        ]
      };
      
      setResult(mockResult);
      
      toast({
        title: "Analysis complete",
        description: "Review the results below and consult with a healthcare professional.",
      });
      
    } catch (error) {
      toast({
        title: "Analysis failed",
        description: "There was an error processing your image. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetTool = () => {
    setSelectedFile(null);
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-medical p-4 rounded-full shadow-medium">
              <Camera className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            KS Detection Tool
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Upload an image of a skin lesion for AI-powered analysis. This tool supports healthcare professionals in preliminary screening.
          </p>
        </header>

        {/* Important Disclaimers */}
        <div className="space-y-4 mb-12">
          <Alert className="border-medical-accent bg-medical-accent/5">
            <AlertTriangle className="h-4 w-4 text-medical-accent" />
            <AlertDescription className="text-medical-accent font-medium">
              <strong>Medical Disclaimer:</strong> This AI tool is for educational and screening purposes only. 
              It cannot replace professional medical diagnosis. Always consult healthcare professionals for proper evaluation and treatment.
            </AlertDescription>
          </Alert>

          <Alert className="border-primary bg-primary/5">
            <Info className="h-4 w-4 text-primary" />
            <AlertDescription className="text-primary">
              <strong>Privacy:</strong> Images are processed securely and are not stored on our servers. 
              Your privacy and medical information are protected.
            </AlertDescription>
          </Alert>
        </div>

        {/* Main Tool Interface */}
        <Card className="p-8 shadow-strong">
          {!selectedFile ? (
            /* Upload Interface */
            <div className="text-center">
              <div className="border-2 border-dashed border-border rounded-lg p-12 hover:border-primary/50 transition-colors">
                <Upload className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Upload Skin Lesion Image
                </h3>
                <p className="text-muted-foreground mb-6">
                  Select a clear, well-lit photo of the skin lesion for analysis
                </p>
                
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload">
                  <Button 
                    variant="default" 
                    size="lg"
                    className="bg-gradient-medical text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Choose Image File
                  </Button>
                </label>
                
                <p className="text-sm text-muted-foreground mt-4">
                  Supported formats: JPG, PNG, WEBP • Max size: 5MB
                </p>
              </div>
            </div>
          ) : (
            /* Analysis Interface */
            <div className="space-y-8">
              {/* Image Preview */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Selected Image</h3>
                  <div className="bg-muted rounded-lg p-4">
                    {previewUrl && (
                      <img 
                        src={previewUrl} 
                        alt="Selected lesion for analysis"
                        className="w-full h-64 object-contain rounded"
                      />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {selectedFile.name} • {(selectedFile.size / 1024 / 1024).toFixed(1)}MB
                  </p>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Analysis Status</h3>
                  
                  {!isAnalyzing && !result && (
                    <div className="space-y-4">
                      <p className="text-muted-foreground">Ready to analyze the uploaded image.</p>
                      <div className="space-y-2">
                        <Button 
                          onClick={handleAnalyze} 
                          variant="default"
                          size="lg"
                          className="w-full bg-gradient-medical text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          Start AI Analysis
                        </Button>
                        <Button variant="outline" onClick={resetTool} className="w-full">
                          Upload Different Image
                        </Button>
                      </div>
                    </div>
                  )}

                  {isAnalyzing && (
                    <div className="space-y-4">
                      <p className="text-muted-foreground">Analyzing image with AI model...</p>
                      <Progress value={33} className="w-full" />
                      <p className="text-sm text-muted-foreground">This may take a few moments.</p>
                    </div>
                  )}

                  {result && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-medium">Analysis Complete</span>
                      </div>
                      
                      <Card className="p-4 bg-accent/50">
                        <h4 className="font-semibold text-foreground mb-2">Result</h4>
                        <p className="text-foreground mb-2">{result.prediction}</p>
                        <p className="text-sm text-muted-foreground">
                          Confidence: {Math.round(result.confidence * 100)}%
                        </p>
                      </Card>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Recommendations</h4>
                        <ul className="space-y-2">
                          {result.recommendations.map((rec, index) => (
                            <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary">•</span>
                              {rec}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button variant="outline" onClick={resetTool} className="w-full">
                        Analyze Another Image
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Guidelines */}
        <Card className="mt-12 p-6 bg-primary/5 border-primary">
          <h3 className="text-lg font-semibold text-foreground mb-4">Guidelines for Best Results</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
            <ul className="space-y-2">
              <li>• Use good lighting when taking the photo</li>
              <li>• Ensure the lesion is clearly visible and in focus</li>
              <li>• Include some surrounding normal skin for context</li>
            </ul>
            <ul className="space-y-2">
              <li>• Avoid shadows or reflections on the skin</li>
              <li>• Take the photo from a reasonable distance</li>
              <li>• Use a ruler or coin for size reference if possible</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Tool;