import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from "@/components/ui/button"

export default function Comparison() {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Reciprocating vs Screw</h2>
          <p className="text-lg text-muted-foreground">Understanding the difference helps you make the right investment for your factory.</p>
        </div>
        
        <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-border shadow-sm">
          <Table>
            <TableHeader className="bg-primary hover:bg-primary">
              <TableRow>
                <TableHead className="text-white font-bold h-14">Feature</TableHead>
                <TableHead className="text-white font-bold h-14">Reciprocating Compressor</TableHead>
                <TableHead className="text-white font-bold h-14">Screw Compressor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-bold">Best Used For</TableCell>
                <TableCell>Small to medium air demand</TableCell>
                <TableCell>Continuous industrial operation</TableCell>
              </TableRow>
              <TableRow className="bg-muted/30">
                <TableCell className="font-bold">Air Volume</TableCell>
                <TableCell>Low to Moderate</TableCell>
                <TableCell>High air volume</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Cost Structure</TableCell>
                <TableCell>Lower upfront cost</TableCell>
                <TableCell>High efficiency, lower operational cost</TableCell>
              </TableRow>
              <TableRow className="bg-muted/30">
                <TableCell className="font-bold">Ideal Segments</TableCell>
                <TableCell>Workshops and MSMEs</TableCell>
                <TableCell>Large manufacturing factories</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-bold">Noise Level</TableCell>
                <TableCell>Higher (85-90 dB)</TableCell>
                <TableCell>Lower (60-75 dB)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="text-center max-w-3xl mx-auto mb-1 mt-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-4">Not sure which one to go for?</h2>
          <Button className=" p-3 bg-red-600 text-white hover:text-accent-foreground hover:bg-accent/90" asChild>
            <a href="#inquiry">Talk to our expert now!</a>
          </Button>
        </div>
      </div>
    </section>
  );
}