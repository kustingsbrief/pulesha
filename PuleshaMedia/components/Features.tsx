import { CheckCircle, Clock, Globe, Rocket } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Instant content synchronization across all displays with zero downtime and seamless transitions.",
      color: "bg-black"
    },
    {
      icon: Globe,
      title: "Cloud Infrastructure", 
      description: "Secure, scalable cloud platform accessible from anywhere with enterprise-grade reliability.",
      color: "bg-red-600"
    },
    {
      icon: Rocket,
      title: "Rapid Deployment",
      description: "Professional installation and configuration completed within 24 hours of delivery.",
      color: "bg-black"
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Reliability",
      description: "99.9% uptime guarantee with proactive monitoring and automatic failover protection.",
      color: "bg-red-600"
    }
  ];

  return (
    <section id="features" className="py-24 px-4 bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-8 text-white font-bold">
            Why Choose
            <br />
            <span className="text-red-400">Pulesha Media</span>?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Our commitment to excellence and innovation ensures your digital signage investment delivers measurable results and lasting value.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg mb-3 text-white font-bold">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <h4 className="text-xl text-white mb-3 font-bold">Live Network Status</h4>
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-gray-300">All Systems Online</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl text-white mb-2 font-bold">15</div>
              <div className="text-sm text-gray-400">Active Displays</div>
            </div>
            <div>
              <div className="text-2xl text-red-400 mb-2 font-bold">98.7%</div>
              <div className="text-sm text-gray-400">Engagement Rate</div>
            </div>
            <div>
              <div className="text-2xl text-white mb-2 font-bold">2.5K</div>
              <div className="text-sm text-gray-400">Daily Views</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}