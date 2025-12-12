"use client"

export default function Hero() {
  const handleBookNow = () => {
    const element = document.getElementById("booking")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  const handleExploreGallery = () => {
    const element = document.getElementById("gallery")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40 -z-10"
        style={{
          backgroundImage: "url(/background.jpg)",
          backgroundPosition: "center",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 -z-10" />

      <div className="max-w-4xl mx-auto text-center z-10">
        
        <h1 className="hero-title mb-6">Creating Unforgettable Moments</h1>

        <p className="text-xl text-primary-foreground mb-4 max-w-2xl mx-auto font-light leading-relaxed">
          Taj Events specializes in creating elegant, bespoke event decorations that blend traditional elegance with
          modern sophistication. Every celebration becomes a regal experience.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={handleBookNow}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-serif font-semibold hover:shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Book Now
          </button>
          <button
            onClick={handleExploreGallery}
            className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground rounded-lg font-serif font-semibold hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Explore Gallery
          </button>
        </div>
      </div>
    </section>
  )
}
