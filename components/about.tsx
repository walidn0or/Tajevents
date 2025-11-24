export default function About() {
  const handleLearnMore = () => {
    const element = document.getElementById("gallery")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl scroll-animate">
            <img
              src="/about.jpg"
              alt="Event decoration showcase"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
          </div>

          {/* Content */}
          <div className="scroll-animate">
            <span className="text-accent font-serif text-lg font-bold">About Taj Events</span>
            <h2 className="section-title mt-2">The Taj Signature</h2>

            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Founded in 2025, Taj Events is a premier event decoration company based in Hamilton, Ontario, with a branch in Kabul, Afghanistan.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Inspired by the concept of a crown, "Taj" symbolizes excellence and a commitment to creating unforgettable moments with elegance and heart. We blend traditional and modern styles to create bespoke, elegant designs for every celebration.
            </p>

            <button 
              onClick={handleLearnMore}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-serif font-semibold hover:shadow-lg hover:opacity-90 transition-all duration-300"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
