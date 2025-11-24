"use client"

import type React from "react"

import Link from "next/link"
import { Facebook, Instagram, Music } from "lucide-react"

// Custom TikTok Icon component to match Lucide style
const TikTokIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <footer className="bg-foreground/5 border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo-fotter.svg"
                alt="Taj Events Logo"
                className="w-40 h-40"
              />
  
            </div>
            <p className="text-muted-foreground">Creating unforgettable moments with elegance and perfection.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-primary transition-colors"
                >
                  Weddings
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-primary transition-colors"
                >
                  Engagements
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-primary transition-colors"
                >
                  Henna Nights
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-primary transition-colors"
                >
                  Celebrations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#gallery"
                  onClick={(e) => handleNavClick(e, "gallery")}
                  className="hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  onClick={(e) => handleNavClick(e, "services")}
                  className="hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#booking"
                  onClick={(e) => handleNavClick(e, "booking")}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>Hamilton, ON & Kabul, AFG</p>
              <p>
                <a href="tel:+13658894928" className="hover:text-primary transition-colors">
                  +1 (365) 889-4928
                </a>
              </p>
              <p>
                <a href="mailto:tajevents.ca@gmail.com" className="hover:text-primary transition-colors">
                  tajevents.ca@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; {currentYear} Taj Events. All rights reserved. Perfect Planning.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/taj.events"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/tajevents__"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.tiktok.com/@tajevents_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <TikTokIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
