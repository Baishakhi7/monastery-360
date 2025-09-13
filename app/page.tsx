"use client"

import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { VirtualTour } from "@/components/virtual-tour"
import { History } from "@/components/history"
import { Events } from "@/components/events"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json())

export default function HomePage() {
  const { data: monasteries, error: monasteriesError } = useSWR('/api/monasteries', fetcher)
  const { data: events, error: eventsError } = useSWR('/api/events', fetcher)
  const { data: history, error: historyError } = useSWR('/api/historical-events', fetcher)

  if (monasteriesError || eventsError || historyError) return <div>Failed to load data</div>
  if (!monasteries || !events || !history) return <div>Loading...</div>

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <VirtualTour monasteries={monasteries} />
      <History events={history} />
      <Events events={events} />
      <Contact />
      <Footer />
    </main>
  )
}
