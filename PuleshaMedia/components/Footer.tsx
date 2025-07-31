import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-background rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-foreground rounded-[2px]"></div>
              </div>
              <span className="text-xl">Pulesha Media</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming business communication through innovative digital signage solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-background">Products</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-background transition-colors">Digital Displays</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Interactive Kiosks</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Video Walls</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Mobile Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-background">Solutions</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-background transition-colors">Retail</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Corporate</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Healthcare</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Education</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-background">Support</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-background transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-muted pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 Pulesha Media. All rights reserved.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-background transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}