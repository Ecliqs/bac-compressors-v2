"use client"
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BrainCircuit, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { compressorRecommendation, type CompressorRecommendationOutput } from '@/ai/flows/compressor-recommendation';

export default function AIAdvisor() {
  const [industry, setIndustry] = useState('');
  const [airDemand, setAirDemand] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CompressorRecommendationOutput | null>(null);

  const handleAdvisor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !airDemand) return;
    setLoading(true);
    try {
      const recommendation = await compressorRecommendation({ industry, airDemand });
      setResult(recommendation);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="advisor" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                <BrainCircuit className="w-4 h-4" />
                <span>AI-Powered Tool</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary leading-tight">
                Not Sure Which Compressor Fits Your Needs?
              </h2>
              <p className="text-lg text-muted-foreground">
                Use our Intelligent Compressor Advisor to get an instant recommendation based on your specific industrial requirements.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center font-bold shrink-0">1</div>
                  <p className="text-sm font-medium pt-1">Provide your industry and usage pattern</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center font-bold shrink-0">2</div>
                  <p className="text-sm font-medium pt-1">AI analyzes operational requirements</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/5 text-primary flex items-center justify-center font-bold shrink-0">3</div>
                  <p className="text-sm font-medium pt-1">Get instant professional recommendation</p>
                </div>
              </div>
            </div>

            <Card className="border-accent/20 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <Sparkles className="w-6 h-6 text-accent/20" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Intelligent Advisor</CardTitle>
                <CardDescription>Enter details to see our recommendation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {!result ? (
                  <form onSubmit={handleAdvisor} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="industry">Your Industry</Label>
                      <Input 
                        id="industry" 
                        placeholder="e.g. Textile, Automotive, Food Processing" 
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="demand">Air Demand / Usage Pattern</Label>
                      <Select value={airDemand} onValueChange={setAirDemand}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select usage pattern" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small to medium air demand">Small to Medium Demand (Intermittent)</SelectItem>
                          <SelectItem value="high air volume">High Volume (Regular Shift)</SelectItem>
                          <SelectItem value="continuous industrial operations">Continuous 24/7 Industrial Operation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 font-bold text-lg"
                      disabled={loading || !industry || !airDemand}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Analyzing Requirements...
                        </>
                      ) : (
                        "Get Recommendation"
                      )}
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500">
                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                      <div className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-1">Recommended Type</div>
                      <div className="text-3xl font-bold text-primary flex items-center gap-3">
                        {result.recommendedCompressor} Compressor
                        <div className="px-2 py-1 rounded bg-accent text-accent-foreground text-xs font-bold uppercase">Best Choice</div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="text-sm font-bold text-primary flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-accent" />
                        Why we recommend this:
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground bg-muted/30 p-4 rounded-lg italic">
                        "{result.reason}"
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 font-bold" asChild>
                        <a href="#inquiry">Get Pricing for {result.recommendedCompressor}</a>
                      </Button>
                      <Button variant="outline" className="flex-1 border-primary text-primary font-bold" onClick={() => setResult(null)}>
                        Restart Advisor
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}