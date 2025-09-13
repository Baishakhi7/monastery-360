import { Card, CardContent } from "@/components/ui/card"

export function History({ events }: { events: any[] }) {
  const timeline = events.map((event: any) => ({
    year: event.year.toString(),
    title: event.title,
    description: event.description,
    monastery: event.monastery_id,
  }))

  return (
    <section id="history" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Four Centuries of Buddhist Heritage
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Journey through the remarkable history of Sikkim's sacred monasteries, from the founding of the kingdom in
            1642 to the establishment of these spiritual centers that preserve Tibetan Buddhist traditions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {timeline.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl font-serif font-bold text-primary">{event.year}</span>
                        <h3 className="text-xl font-semibold">{event.title}</h3>
                        {event.monastery && (
                          <span className="bg-accent/20 text-accent text-xs px-2 py-1 rounded-full font-medium">
                            {event.monastery}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
