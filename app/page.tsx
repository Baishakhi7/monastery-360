import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VirtualTour } from "@/components/virtual-tour"
import { History } from "@/components/history"
import { Events } from "@/components/events"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <VirtualTour />
      <History />
      <Events />
      <Contact />
      <Footer />
    </main>
  )
}
