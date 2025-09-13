import { Heart, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold mb-4">Sacred Valley Monastery</h3>
            <p className="text-sm leading-relaxed mb-4 max-w-md">
              For over eight centuries, we have been a sanctuary of peace, wisdom, and spiritual growth. Our doors
              remain open to all who seek solace and enlightenment.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#tour" className="hover:text-accent transition-colors">
                  Virtual Tours
                </a>
              </li>
              <li>
                <a href="#history" className="hover:text-accent transition-colors">
                  Our History
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-accent transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Prayer Times
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Retreat Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Spiritual Guidance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Library Access
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Donations
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 text-accent" /> for spiritual seekers worldwide
          </p>
          <p className="text-xs text-secondary-foreground/70 mt-2">
            © 2024 Sacred Valley Monastery. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
