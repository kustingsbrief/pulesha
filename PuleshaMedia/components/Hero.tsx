import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-sm mb-12">
            <span className="w-2 h-2 bg-foreground rounded-full mr-3"></span>
            Digital Signage Solutions
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl mb-8 text-foreground leading-tight">
            Future-Ready, <span className="text-accent-foreground">Smart Media</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Great content isn't just seen, it's remembered. Our digital signage solutions do more than just display. They engage, inform, and inspire. Be it for brands, communities or a cause that seeks real impact.
          </p>
        </div>
      </div>
    </section>
  );
}