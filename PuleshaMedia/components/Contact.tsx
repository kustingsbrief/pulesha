import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Mail, Phone, Globe, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 text-white font-bold">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to transform your communication strategy? Let's discuss how Pulesha Media can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h3 className="text-2xl mb-8 text-white font-bold">Start a Conversation</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-3 text-white font-medium">
                    First Name
                  </label>
                  <Input id="firstName" placeholder="John" className="border-white/20 bg-white/10 text-white placeholder:text-gray-400" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-3 text-white font-medium">
                    Last Name
                  </label>
                  <Input id="lastName" placeholder="Doe" className="border-white/20 bg-white/10 text-white placeholder:text-gray-400" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm mb-3 text-white font-medium">
                  Email Address
                </label>
                <Input id="email" type="email" placeholder="john@company.com" className="border-white/20 bg-white/10 text-white placeholder:text-gray-400" />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm mb-3 text-white font-medium">
                  Company
                </label>
                <Input id="company" placeholder="Your Company" className="border-white/20 bg-white/10 text-white placeholder:text-gray-400" />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-3 text-white font-medium">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your digital signage requirements..."
                  rows={6}
                  className="border-white/20 bg-white/10 text-white placeholder:text-gray-400"
                />
              </div>
              
              <Button size="lg" className="w-full bg-white text-black hover:bg-gray-200 font-medium">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Mail className="h-5 w-5 mr-3 text-white" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3">Get in touch via email</p>
                <p className="text-white">pulesha@media.co.za</p>
              </CardContent>
            </Card>

            <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Phone className="h-5 w-5 mr-3 text-white" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3">Speak with our team</p>
                <p className="text-white">068 647 6222</p>
              </CardContent>
            </Card>

            <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Globe className="h-5 w-5 mr-3 text-white" />
                  Website
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3">Visit our website</p>
                <p className="text-white">www.puleshamedia.co.za</p>
              </CardContent>
            </Card>

            <Card className="border-white/20 bg-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Clock className="h-5 w-5 mr-3 text-white" />
                  Service Area
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-3">We serve clients across</p>
                <p className="text-white">Middelburg, Mpumalanga 1050<br />and surrounding areas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}