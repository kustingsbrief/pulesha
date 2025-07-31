import image_d501d7bd3fad5badcf00cef0d55aa289286bbaeb from 'figma:asset/d501d7bd3fad5badcf00cef0d55aa289286bbaeb.png';
import image_9f30942fd840c92b30adac67b42a905b0e141d81 from 'figma:asset/9f30942fd840c92b30adac67b42a905b0e141d81.png';
import image_6c693a87a9d9c81253260c9b5994183abadae835 from 'figma:asset/6c693a87a9d9c81253260c9b5994183abadae835.png';
import image_80c9cfe636b0cdbf8ebd3212d7205d128a7b1d57 from 'figma:asset/80c9cfe636b0cdbf8ebd3212d7205d128a7b1d57.png';
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const portfolioItems = [
    {
      title: "Local Restaurant Menu System",
      category: "Hospitality",
      description: "Dynamic digital menu boards with easy content updates for a growing restaurant chain",
      highlights: ["3 Locations", "Daily Menu Updates", "Increased Orders by 25%"],
      image: image_80c9cfe636b0cdbf8ebd3212d7205d128a7b1d57
    },
    {
      title: "Startup Office Communication",
      category: "Corporate",
      description: "Internal communication displays for a tech startup's modern office space",
      highlights: ["2 Floors", "Team Updates", "Company Announcements"],
      image: image_6c693a87a9d9c81253260c9b5994183abadae835
    },
    {
      title: "Retail Store Promotions",
      category: "Retail",
      description: "Promotional displays for a local retail store to showcase products and offers",
      highlights: ["1 Store", "Weekly Promotions", "Customer Engagement"],
      image: image_9f30942fd840c92b30adac67b42a905b0e141d81
    },
    {
      title: "School Timetable Announcements",
      category: "Education",
      description: "Digital displays for school timetables, announcements, and daily schedules",
      highlights: ["Multiple Classrooms", "Real-time Updates", "Schedule Changes"],
      image: image_d501d7bd3fad5badcf00cef0d55aa289286bbaeb
    },
    {
      title: "Small Clinic Information System",
      category: "Healthcare",
      description: "Patient information displays for a local medical clinic",
      highlights: ["1 Clinic", "Appointment Info", "Health Tips"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop"
    },
    {
      title: "Co-working Space Network",
      category: "Business",
      description: "Information displays for a modern co-working space and meeting rooms",
      highlights: ["1 Location", "Room Booking", "Community Board"],
      image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white/5">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl mb-6 text-white font-bold">
            Our Work
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our growing portfolio of digital signage projects that showcase our commitment to quality and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-white text-black text-xs rounded-full mb-4 font-medium">
                    {item.category}
                  </div>
                  <h3 className="text-xl text-white mb-4 font-bold">{item.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="space-y-2">
                    {item.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20">
            <span className="text-gray-300 mr-2">Ready to start your project?</span>
            <button className="text-white hover:underline font-medium">Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}