"use client"

import { Syringe as Ring, Heart, Flower2, Baby, Sparkles, Cake } from "lucide-react"

export default function Services() {
  const services = [
    {
      number: "01",
      title: "Weddings",
      description: "Exquisite planning and design to bring your dream wedding to life with elegance and precision.",
      icon: Ring,
    },
    {
      number: "02",
      title: "Engagements",
      description: "Celebrate love and new beginnings in style with our sophisticated engagement decorations.",
      icon: Heart,
    },
    {
      number: "03",
      title: "Henna Nights",
      description: "Traditional elegance meets modern creativity in our stunning Henna night celebrations.",
      icon: Flower2,
    },
    {
      number: "04",
      title: "Baby Showers",
      description: "Joyful and heartwarming celebrations for parents-to-be with delightful designs.",
      icon: Baby,
    },
    {
      number: "05",
      title: "Bridal Showers",
      description: "Chic and memorable pre-wedding moments crafted with attention to every detail.",
      icon: Sparkles,
    },
    {
      number: "06",
      title: "Birthdays",
      description: "Personalized and festive experiences for every milestone celebration.",
      icon: Cake,
    },
  ]

  return (
    <section id="services" className="py-24 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="section-title">
            Our <span className="accent-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We craft elegant experiences for every celebration, from intimate gatherings to grand affairs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="luxury-card p-8 hover:shadow-2xl transition-all duration-500 scroll-animate group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative mb-6">
                  <div className="flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                    <div className="relative bg-gradient-to-br from-accent to-primary/50 p-4 rounded-xl group-hover:shadow-xl transition-all duration-500">
                      <IconComponent size={48} strokeWidth={1.5} className="text-white" />
                    </div>
                  </div>
                </div>

                <div className="text-accent font-serif text-sm font-bold mb-2">{service.number}</div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
