"use client"

import { useState } from "react"
import {
  Syringe as Ring,
  Heart,
  Flower2,
  Baby,
  Sparkles,
  Cake,
  Briefcase,
  GraduationCap,
  X,
  Sparkle,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const packageData = {
  Weddings: {
    packages: [
      {
        name: "SILVER PACKAGE",
        features: [
          "Simple backdrop",
          "Minimal stage décor",
          "Centerpieces included",
          "Florals included",
          "Sweetheart table décor",
          "Cake table décor",
          "Family table for 12 (bride & groom sides)",
          "Welcome sign",
          "Setup & teardown",
        ],
      },
      {
        name: "GOLD PACKAGE",
        features: [
          "Upgraded backdrop (1–2 styles)",
          "Enhanced stage flowers",
          "Premium centerpieces",
          "Florals included",
          "Sweetheart table décor",
          "Cake table décor",
          "Family table for 12",
          "Enhanced aisle décor",
          "Welcome sign",
          "Setup & teardown",
        ],
      },
      {
        name: "PLATINUM PACKAGE",
        features: [
          "Fully customizable backdrop",
          "Luxury stage décor + chandelier",
          "Luxury centerpieces",
          "Full floral installations",
          "Sweetheart table deluxe décor",
          "Luxury cake table décor",
          "Family table for 12",
          "Premium aisle entrance décor",
          "Custom welcome sign",
          "Setup & teardown",
        ],
      },
    ],
  },
  Engagements: {
    packages: [
      {
        name: "SIMPLE ENGAGEMENT PACKAGE",
        features: [
          "Simple backdrop (any color)",
          "Small floral arrangement",
          "Centerpieces included",
          "Sweetheart table",
          "Basic lighting",
          "Setup & teardown",
        ],
      },
      {
        name: "DELUXE ENGAGEMENT PACKAGE",
        features: [
          "Upgraded backdrop (any color)",
          "Floral arch/arrangement",
          "Centerpieces included",
          "Sweetheart table décor",
          "Cake table décor",
          "Welcome sign",
          "Setup & teardown",
        ],
      },
      {
        name: "LUXURY ENGAGEMENT PACKAGE",
        features: [
          "Fully customizable luxury backdrop",
          "Premium floral designs",
          "Centerpieces included",
          "Luxury sweetheart table",
          "Deluxe cake table",
          "Premium lighting",
          "Setup & teardown",
        ],
      },
    ],
  },
  "Henna Nights": {
    packages: [
      {
        name: "HENNA NIGHT PACKAGE",
        subtitle: "(Kuchi Style)",
        features: [
          "Colorful Kuchi-style backdrop (green, red, purple, orange, yellow)",
          "Red carpet on stage",
          "Traditional toshak seating with round pillows + chairs",
          "Centerpieces included",
          "Floral arrangements",
          "Family table for 12 (both sides)",
          "Custom backdrop color option",
          "Setup & teardown",
        ],
      },
    ],
  },
  "Baby Showers": {
    packages: [
      {
        name: "SILVER BABY SHOWER PACKAGE",
        features: [
          "Simple baby shower backdrop (any color theme)",
          "Small balloon garland",
          "Light florals",
          "Minimal themed props ('Baby Shower' sign)",
          "Small centerpieces (floral or candle-based)",
          "LED candles or soft accents",
        ],
      },
      {
        name: "GOLD BABY SHOWER PACKAGE",
        features: [
          "Upgraded baby shower backdrop (2–3 style options)",
          "Medium balloon garland",
          "Floral arrangements",
          "Themed props (name sign, baby blocks, teddy décor)",
          "Centerpieces for guest tables",
          "Matching table décor",
          "Soft LED lighting",
          "Decorated entrance (balloons or florals)",
          "Custom welcome sign",
        ],
      },
      {
        name: "PLATINUM BABY SHOWER PACKAGE",
        features: [
          "Fully customizable luxury baby shower backdrop",
          "Large premium balloon display",
          "Full floral décor (backdrop + table florals)",
          "Luxury props (Baby Shower sign, baby blocks, teddy bear setup)",
          "Centerpieces for all guest tables",
          "Premium table décor (florals, candles, runners)",
          "Professional lighting",
          "Luxury decorated entrance (floral stands or balloon arch)",
          "Large custom welcome sign",
        ],
      },
    ],
  },
  "Bridal Showers": {
    packages: [
      {
        name: "SILVER BRIDAL SHOWER PACKAGE",
        features: [
          "Simple bridal shower backdrop",
          "Small balloon garland (any color theme)",
          "Light florals",
          "Minimal themed props ('Bride to Be', ring sign)",
          "Small centerpieces (floral or candle-based)",
          "LED candles or soft accents",
        ],
      },
      {
        name: "GOLD BRIDAL SHOWER PACKAGE",
        features: [
          "Upgraded bridal backdrop (2–3 style choices)",
          "Medium balloon garland",
          "Floral arrangements",
          "Themed props (Bride to Be sign, ring props, name sign)",
          "Centerpieces for guest tables",
          "Matching table décor",
          "Soft LED lighting",
          "Decorated entrance (balloons or florals)",
          "Custom welcome sign",
        ],
      },
      {
        name: "PLATINUM BRIDAL SHOWER PACKAGE",
        features: [
          "Fully customizable luxury backdrop",
          "Large premium balloon display",
          "Full floral décor",
          "Luxury props (Bride to Be signs, ring arch, seating props)",
          "Centerpieces for all guest tables",
          "Premium table décor (florals, candles, runners)",
          "Professional lighting",
          "Luxury decorated entrance (floral stands or balloon arch)",
          "Large custom welcome sign",
        ],
      },
    ],
  },
  Birthdays: {
    packages: [
      {
        name: "SILVER BIRTHDAY PACKAGE",
        features: [
          "Simple birthday backdrop",
          "Balloon garland (1 color + white)",
          "Small themed props (age number, crown, etc.)",
          "Cake table with table cover",
          "Small floral/balloon centerpieces",
          "Basic LED candles/lights",
          "Standard welcome sign",
          "Basic setup & teardown",
          "Color theme of your choice",
        ],
      },
      {
        name: "GOLD BIRTHDAY PACKAGE",
        features: [
          "Upgraded birthday backdrop (2–3 style choices)",
          "Medium balloon garland",
          "Floral arrangements",
          "Themed props (age numbers, name sign, etc.)",
          "Decorated cake table",
          "Dessert table décor",
          "Centerpieces included",
          "Soft LED lighting",
          "Decorated entrance",
          "Theme welcome sign",
          "Custom theme colors",
          "Setup & teardown",
        ],
      },
      {
        name: "PLATINUM BIRTHDAY PACKAGE",
        features: [
          "Fully customizable luxury backdrop",
          "Large balloon display (multi-color)",
          "Full floral arrangements",
          "Premium props (name sign, age number, shimmer wall option)",
          "Luxury cake table setup",
          "Full dessert table styling",
          "Centerpieces on all guest tables",
          "Premium table décor",
          "Professional lighting effects",
          "Luxury entrance with floral stands or balloons",
          "Large custom welcome sign",
          "Any theme & colors",
          "Premium accessories",
          "Full setup & teardown",
        ],
      },
    ],
  },
  "Corporate Events": {
    packages: [
      {
        name: "CORPORATE EVENTS PACKAGE",
        features: [
          "Elegant, customizable corporate backdrop (company colors or neutral themes)",
          "Balloon garland or floral arrangement",
          "Company logo or branding elements if desired",
          "Centerpieces for corporate tables (floral or modern décor)",
          "Elegant table runners if needed",
          "Soft lighting or candle accents",
          "Professional welcome sign",
          "Decorated entrance matching company colors",
          "Full setup & teardown",
        ],
      },
    ],
  },
  Prom: {
    packages: [
      {
        name: "PROM DECORATION PACKAGE",
        features: [
          "Themed prom backdrop (school colors or elegant themes)",
          "Balloon arch or garland",
          "Prom props (year signs, school logos, elegant touches)",
          "Centerpieces matching the prom theme",
          "Special table for diplomas or awards",
          "Soft lighting or LED accents",
          "Themed welcome sign",
          "Decorated entrance matching the theme",
          "Full setup & teardown",
        ],
      },
    ],
  },
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      number: "01",
      title: "Weddings",
      description: "Exquisite planning and design to bring your dream wedding to life with elegance and precision.",
      url: "/icon/wedding-couple-01.svg",
    },
    {
      number: "02",
      title: "Engagements",
      description: "Celebrate love and new beginnings in style with our sophisticated engagement decorations.",
      url: "/icon/Engagements-01.svg",
    },
    {
      number: "03",
      title: "Henna Nights",
      description: "Traditional elegance meets modern creativity in our stunning Henna night celebrations.",
      url: "/icon/Henna Nights-01.svg",
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
      url: "/icon/Bridal Showers-01.svg",
    },
    {
      number: "06",
      title: "Birthdays",
      description: "Personalized and festive experiences for every milestone celebration.",
      icon: Cake,
    },
    {
      number: "07",
      title: "Corporate Events",
      description: "Professional and elegant event setups tailored to your business needs and brand identity.",
      icon: Briefcase,
    },
    {
      number: "08",
      title: "Prom",
      description: "Memorable prom nights with stunning decorations that create unforgettable experiences.",
      icon: GraduationCap,
    },
  ]

  return (
    <>
      <section id="services" className="py-16 md:py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16 scroll-animate">
            <h2 className="section-title">
              Our <span className="accent-text">Services</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We craft elegant experiences for every celebration, from intimate gatherings to grand affairs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setSelectedService(service.title)}
                  className="luxury-card p-6 md:p-8 hover:shadow-2xl transition-all duration-500 scroll-animate group relative overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#930038]/40 to-[#630826]/40 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                      <div className="relative bg-gradient-to-br from-[#930038] to-[#630826] p-4 rounded-xl group-hover:shadow-xl transition-all duration-500">
                        {service.icon ? (
                          <>
                            <service.icon size={56} strokeWidth={1.5} className="text-white md:hidden" />
                            <service.icon size={64} strokeWidth={1.5} className="text-white hidden md:block" />
                          </>
                        ) : (
                          <img 
                            src={service.url} 
                            alt={service.title}
                            className="w-14 h-14 md:w-16 md:h-16 object-contain"
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="text-accent font-serif text-sm md:text-base font-bold mb-2">{service.number}</div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-primary mb-3">{service.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.description}</p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="flex items-start justify-center min-h-full p-4 pt-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-background rounded-2xl shadow-2xl max-w-7xl w-full max-h-[calc(100vh-2rem)] overflow-hidden flex flex-col">
              <div className="bg-gradient-to-br from-[#930038] to-[#630826] text-white p-4 md:p-6 flex items-center justify-between flex-shrink-0 rounded-t-2xl">
                <h2 className="text-xl md:text-3xl font-serif font-bold pr-4">{selectedService} Decoration Packages</h2>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors flex-shrink-0"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {packageData[selectedService as keyof typeof packageData]?.packages.map((pkg, index) => (
                      <div
                        key={index}
                        className="relative luxury-card p-4 md:p-6 hover:shadow-2xl transition-all duration-500 group overflow-hidden animate-slide-in-up border-2 border-accent/20 hover:border-[#930038] rounded-xl"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#930038]/5 to-[#630826]/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-[#930038]/30 transition-all duration-500" />

                        <div className="relative z-10">
                          <h3 className="text-lg md:text-xl font-serif font-bold text-primary mb-2 group-hover:text-[#930038] transition-colors duration-300">
                            {pkg.name}
                            {pkg.subtitle && <span className="text-accent ml-2 text-xs md:text-sm">{pkg.subtitle}</span>}
                          </h3>
                          <ul className="space-y-2 md:space-y-3 mt-3 md:mt-4">
                            {pkg.features.map((feature, featureIndex) => (
                              <li
                                key={featureIndex}
                                className="flex items-start gap-2 md:gap-3 group/item hover:translate-x-1 transition-transform duration-300"
                              >
                                <span className="text-[#930038] mt-0.5 group-hover/item:scale-125 transition-transform duration-300 flex-shrink-0">
                                  <Sparkle size={12} fill="#930038" className="md:hidden" />
                                  <Sparkle size={14} fill="#930038" className="hidden md:block" />
                                </span>
                                <span className="text-muted-foreground text-xs md:text-sm leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center gap-3 md:gap-4 pt-6 md:pt-8 pb-4">
                    <Button
                      onClick={() => {
                        setSelectedService(null)
                        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="bg-gradient-to-r from-[#930038] to-[#630826] hover:opacity-90 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg transition-opacity"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
