"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Eye, Clock, Users } from "lucide-react"
import { monasteries } from "@/lib/monastery-data"

export function VirtualTour() {
  const [selectedTour, setSelectedTour] = useState(0)

  const tours = [
    {
      title: "Rumtek Monastery",
      description:
        "Explore the Dharmachakra Centre, seat of the 17th Karmapa, with its golden stupa and traditional Tibetan architecture.",
      duration: "12 minutes",
      highlights: "Golden Stupa, Karmapa relics, Traditional architecture, Sacred artifacts",
      image: "/rumtek-monastery-interior-with-golden-stupa-and-ti.jpg",
      monastery: monasteries[0],
    },
    {
      title: "Pemayangtse Monastery",
      description:
        "Visit the 'Perfect Sublime Lotus' monastery, one of Sikkim's oldest and most important Nyingma monasteries.",
      duration: "10 minutes",
      highlights: "Three-story structure, Ancient manuscripts, Guru Padmasambhava statue, Himalayan views",
      image: "/pemayangtse-monastery-three-story-traditional-arch.jpg",
      monastery: monasteries[1],
    },
    {
      title: "Dubdi Monastery",
      description:
        "Experience Sikkim's oldest monastery, the 'Hermit's Cell' where the kingdom's spiritual foundation was laid.",
      duration: "8 minutes",
      highlights: "Original meditation caves, Historic coronation site, Ancient prayer wheels, Forest setting",
      image: "/dubdi-monastery-ancient-meditation-caves-in-forest.jpg",
      monastery: monasteries[2],
    },
    {
      title: "Enchey Monastery",
      description: "Discover the unique Chinese Pagoda-style monastery above Gangtok, blessed by protective deities.",
      duration: "7 minutes",
      highlights: "Chinese Pagoda architecture, Cham dance performances, City views, Protective deity shrines",
      image: "/enchey-monastery-chinese-pagoda-style-architecture.jpg",
      monastery: monasteries[3],
    },
  ]

  return (
    <section id="tour" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            360° Virtual Monastery Tours
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Journey through Sikkim's most sacred Buddhist monasteries from anywhere in the world. Each immersive tour
            reveals centuries of spiritual heritage, architectural beauty, and living Buddhist traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tour Selection */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Choose Your Monastery</h3>
            <div className="space-y-3">
              {tours.map((tour, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedTour === index ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedTour(index)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Eye className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm text-black dark:text-white">{tour.title}</h4>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                          <Clock className="h-3 w-3" />
                          {tour.duration}
                          <span className="ml-2 px-2 py-0.5 bg-muted rounded text-xs">{tour.monastery.order}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Tour Preview */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <div className="relative">
                <img
                  src={tours[selectedTour].image || "/placeholder.svg"}
                  alt={tours[selectedTour].title}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <Button size="lg" className="bg-white/90 text-foreground hover:bg-white">
                    <Play className="mr-2 h-5 w-5" />
                    Start 360° Tour
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {tours[selectedTour].title}
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {tours[selectedTour].duration}
                  </div>
                </CardTitle>
                <CardDescription className="leading-relaxed">{tours[selectedTour].description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm mb-1 text-black dark:text-white">Tour Highlights</h4>
                    <p className="text-sm text-muted-foreground">{tours[selectedTour].highlights}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-1 text-black dark:text-white">Monastery Details</h4>
                    <p className="text-sm text-muted-foreground">
                      Founded: {tours[selectedTour].monastery.established} • Order:{" "}
                      {tours[selectedTour].monastery.order} • Location: {tours[selectedTour].monastery.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      Self-guided
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      360° Interactive
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
