"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleContactClick = () => {
    setIsOpen(false)
    const element = document.getElementById("booking")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/30 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-background/95 backdrop-blur-sm border-b border-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-02-01.svg"
              alt="Taj Events Logo"
              className="w-40 h-40 transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <Link
              href="#services"
              className={`transition-colors duration-300 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-accent" : "text-foreground hover:text-primary"
              }`}
            >
              Services
            </Link>
            <Link
              href="#about"
              className={`transition-colors duration-300 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-accent" : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              href="#gallery"
              className={`transition-colors duration-300 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-accent" : "text-foreground hover:text-primary"
              }`}
            >
              Gallery
            </Link>
            <Link
              href="#booking"
              className={`transition-colors duration-300 font-medium ${
                isScrolled ? "text-foreground/70 hover:text-accent" : "text-foreground hover:text-primary"
              }`}
            >
              Booking
            </Link>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleContactClick}
            className={`hidden md:block px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              isScrolled
                ? "bg-accent/60 backdrop-blur-md text-accent-foreground hover:bg-accent/80"
                : "bg-accent text-accent-foreground hover:opacity-90"
            }`}
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4 backdrop-blur-lg">
            <Link href="#services" className="block text-foreground hover:text-primary">
              Services
            </Link>
            <Link href="#about" className="block text-foreground hover:text-primary">
              About
            </Link>
            <Link href="#gallery" className="block text-foreground hover:text-primary">
              Gallery
            </Link>
            <Link href="#booking" className="block text-foreground hover:text-primary">
              Booking
            </Link>
            <button
              onClick={handleContactClick}
              className="w-full px-6 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
