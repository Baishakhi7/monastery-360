import { Button } from "@/components/ui/button"
import { Play, MapPin } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/rumtek-monastery-sikkim-with-prayer-flags-and-moun.jpg" alt="Rumtek Monastery, Sikkim" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance">
          Discover Sikkim's Sacred Monasteries
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
          Journey through centuries of Buddhist heritage in the Himalayas. Experience the spiritual legacy of Rumtek,
          Pemayangtse, Dubdi, and other sacred monasteries through immersive virtual tours.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Play className="mr-2 h-5 w-5" />
            Start Virtual Tour
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Visit Us
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
