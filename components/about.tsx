import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Mountain } from "lucide-react"

export function About() {
  const features = [
    {
      icon: Heart,
      title: "Buddhist Heritage",
      description:
        "Experience authentic Tibetan Buddhism in the sacred monasteries of Sikkim, preserving centuries-old traditions.",
    },
    {
      icon: Users,
      title: "Monastic Community",
      description:
        "Meet devoted monks and lamas who maintain the spiritual practices of the Nyingma and Kagyu lineages.",
    },
    {
      icon: BookOpen,
      title: "Ancient Teachings",
      description:
        "Discover precious manuscripts, thangkas, and sacred texts that preserve Buddhist wisdom and philosophy.",
    },
    {
      icon: Mountain,
      title: "Himalayan Setting",
      description: "Nestled in the Eastern Himalayas with views of Kanchenjunga, the world's third-highest peak.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Sikkim's Sacred Monasteries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            For over 375 years, since the founding of Sikkim in 1642, these sacred monasteries have been centers of
            Tibetan Buddhist learning and practice, welcoming pilgrims and seekers to experience the profound peace of
            the Himalayas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6">Our Heritage</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              We preserve the living tradition of Sikkim's Buddhist monasteries, from the ancient Dubdi Monastery (1701)
              to the magnificent Rumtek Monastery, seat of the Karmapa. Through immersive virtual tours, we share the
              spiritual heritage of these sacred sites with the world.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you seek to understand Buddhist philosophy, explore Himalayan culture, or find moments of peace
              and reflection, these monastery doors—both physical and virtual—welcome all sincere seekers.
            </p>
          </div>
          <div className="relative">
            <img
              src="/peaceful-monastery-garden-with-prayer-flags-in-sik.jpg"
              alt="Sikkim Monastery Garden with Prayer Flags"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
