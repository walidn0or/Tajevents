"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function Gallery() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const [selectedImage, setSelectedImage] = useState<{ title: string; image: string } | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  const galleryCategories = [
    {
      category: "Weddings",
      items: [
        { title: "Grand Ballroom Wedding", image: "/gallary/elegant-wedding-ceremony-with-gold-and-burgundy-de.jpg" },
        { title: "Intimate Garden Wedding", image: "/gallary/luxury-garden-wedding-setup-with-elegant-floral-ar.jpg" },
        { title: "Royal Celebration", image: "/gallary/premium-wedding-reception-with-burgundy-and-gold-t.jpg" },
      ],
    },
    {
      category: "Engagements",
      items: [
        { title: "Elegant Engagement", image: "/gallary/sophisticated-engagement-party-with-luxury-decorat.jpg" },
        { title: "Romantic Setup", image: "/gallary/romantic-engagement-celebration-with-burgundy-flow.jpg" },
        { title: "Modern Glamour", image: "/gallary/contemporary-engagement-event-with-gold-accents.jpg" },
      ],
    },
    {
      category: "Henna Nights",
      items: [
        { title: "Traditional Henna", image: "/gallary/traditional-henna-night-celebration-with-ornate-de.jpg" },
        { title: "Festive Henna", image: "/gallary/vibrant-henna-night-party-setup-with-burgundy-and-.jpg" },
        { title: "Elegant Mehendi", image: "/gallary/luxury-mehendi-ceremony-with-floral-arrangements.jpg" },
      ],
    },
    {
      category: "Bridal Showers",
      items: [
        { title: "Chic Bridal", image: "/gallary/sophisticated-bridal-shower-with-elegant-table-set.jpg" },
        { title: "Luxury Gathering", image: "/gallary/premium-bridal-shower-event-with-gold-decor.jpg" },
        { title: "Modern Celebration", image: "/gallary/contemporary-bridal-shower-party-design.jpg" },
      ],
    },
  ]

  const allImages = galleryCategories.flatMap((section) => section.items)

  const handleImageClick = (image: { title: string; image: string }) => {
    setSelectedImage(image)
    const index = allImages.findIndex((img) => img.image === image.image)
    setCurrentImageIndex(index)
    document.body.style.overflow = "hidden"
  }

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const nextIndex = (currentImageIndex + 1) % allImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(allImages[nextIndex])
  }

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    const prevIndex = (currentImageIndex - 1 + allImages.length) % allImages.length
    setCurrentImageIndex(prevIndex)
    setSelectedImage(allImages[prevIndex])
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!selectedImage) return
    if (e.key === "ArrowRight") handleNextImage(e as any)
    if (e.key === "ArrowLeft") handlePrevImage(e as any)
    if (e.key === "Escape") setSelectedImage(null)
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedImage, currentImageIndex])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemsRef.current.indexOf(entry.target as HTMLDivElement)
            setVisibleItems((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2 },
    )

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item)
    })

    return () => observer.disconnect()
  }, [])

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "unset"
  }

  return (
    <>
      <section id="gallery" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="section-title">
              Gallery <span className="accent-text">Showcase</span>
            </h2>
            <p className="text-lg text-muted-foreground">Click any image to view in full detail</p>
          </div>

          <div className="space-y-20">
            {galleryCategories.map((section, sectionIndex) => (
              <div key={sectionIndex} className="scroll-animate">
                <div className="flex items-center gap-4 mb-12">
                  <h3 className="text-3xl font-serif font-semibold text-primary">{section.category}</h3>
                  <div className="flex-1 h-1 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {section.items.map((item, itemIndex) => {
                    const globalIndex = sectionIndex * 3 + itemIndex
                    return (
                      <div
                        key={itemIndex}
                        ref={(el) => {
                          if (el) itemsRef.current[globalIndex] = el
                        }}
                        className={`group relative h-80 rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${
                          visibleItems.has(globalIndex) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                        }`}
                        onClick={() => handleImageClick(item)}
                      >
                        <div className="absolute inset-0 rounded-xl border-2 border-accent/20 group-hover:border-accent/60 transition-all duration-300 pointer-events-none z-10"></div>

                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-end justify-end p-6">
                          <div>
                            <div className="text-lg font-serif text-accent mb-2 font-semibold">{item.title}</div>
                          </div>
                        </div>

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <div
            className="relative w-full max-w-5xl max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-300 justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-accent hover:text-white transition-colors z-10"
            >
              <X size={32} />
            </button>

            {/* Image container */}
            <div className="flex items-center justify-center bg-black/50 rounded-lg overflow-hidden border border-accent/30 min-h-96">
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain w-full"
              />
            </div>

            {/* Image info and navigation */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-2xl font-serif text-accent mb-2">{selectedImage.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {currentImageIndex + 1} / {allImages.length}
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrevImage}
                  className="p-3 rounded-full border border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:border-accent"
                >
                  <ChevronLeft size={24} className="text-accent" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="p-3 rounded-full border border-accent/30 hover:bg-accent/10 transition-all duration-300 hover:border-accent"
                >
                  <ChevronRight size={24} className="text-accent" />
                </button>
              </div>
            </div>

            {/* Keyboard hint */}
            <p className="text-xs text-muted-foreground/60 mt-4">Use arrow keys to navigate, ESC to close</p>
          </div>
        </div>
      )}
    </>
  )
}
