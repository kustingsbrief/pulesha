import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Monitor, Settings, Headphones } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Digital Signage Solutions",
      description: "Complete digital signage systems including 4K displays, content management software, and cloud-based control platforms for any environment.",
      features: ["4K Ultra HD Displays", "Cloud Management Platform", "Content Scheduling", "Real-time Updates"],
      color: "bg-black"
    },
    {
      icon: Settings,
      title: "Professional Installation",
      description: "Expert installation services ensuring optimal placement, secure mounting, and seamless integration with your existing infrastructure.",
      features: ["Site Assessment", "Secure Mounting", "Cable Management", "System Testing"],
      color: "bg-red-600"
    },
    {
      icon: Headphones,
      title: "Remote and Ongoing Support",
      description: "24/7 remote monitoring, troubleshooting, content updates, and technical support to keep your displays running smoothly.",
      features: ["24/7 Monitoring", "Remote Troubleshooting", "Content Updates", "Preventive Maintenance"],
      color: "bg-black"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 text-white font-bold">
            Our Services
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Comprehensive digital signage solutions from initial consultation to ongoing support, designed to deliver maximum impact for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border border-white/20 bg-white/10 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg text-white font-bold">{service.title}</CardTitle>
                <CardDescription className="text-gray-300 leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}