import { Button } from "./ui/button";
import { Zap, Heart, Lightbulb } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-white/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl mb-8 text-white font-bold">
            About
            <br />
            Pulesha Media
          </h2>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
            Pulesha Media is a dynamic startup dedicated to revolutionizing digital communication through innovative signage solutions.
          </p>
          <p className="text-gray-300 mb-16 leading-relaxed max-w-2xl mx-auto">
            We combine fresh perspectives with cutting-edge technology to create digital experiences that truly connect with audiences and drive meaningful results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-xl mb-3 text-white font-bold">Innovation First</h4>
              <p className="text-gray-300">Fresh ideas and modern solutions that push the boundaries of digital communication.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-xl mb-3 text-white font-bold">Passion Driven</h4>
              <p className="text-gray-300">Genuine enthusiasm for creating impactful digital experiences that make a difference.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="h-8 w-8 text-black" />
              </div>
              <h4 className="text-xl mb-3 text-white font-bold">Creative Solutions</h4>
              <p className="text-gray-300">Thinking outside the box to deliver unique solutions tailored to your specific needs.</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12 max-w-2xl mx-auto">
            <h3 className="text-xl mb-6 text-white font-bold">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed mb-8">
              "To become the go-to partner for businesses seeking innovative digital signage solutions that truly engage and inspire their audiences."
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2 text-white font-bold">
                  2023
                </div>
                <p className="text-sm text-gray-400">Founded</p>
              </div>
              <div>
                <div className="text-3xl mb-2 text-white font-bold">
                  5+
                </div>
                <p className="text-sm text-gray-400">Team Members</p>
              </div>
              <div>
                <div className="text-3xl mb-2 text-white font-bold">
                  10+
                </div>
                <p className="text-sm text-gray-400">Projects Completed</p>
              </div>
              <div>
                <div className="text-3xl mb-2 text-white font-bold">
                  100%
                </div>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="bg-white text-black hover:bg-gray-200 font-medium">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
}