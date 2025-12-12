"use client"

import type React from "react"

import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"
import { Clock, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react"

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

export default function Booking() {
  const [state, handleSubmit] = useForm("mwpjezdd")

  return (
    <section id="booking" className="py-24 px-4 bg-primary text-primary-foreground">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Book your <span className="text-accent">free consultation</span>
          </h2>
          <p className="text-xl text-primary-foreground/80">
            Choose your preferred booking time and let us create magic for your celebration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="flex gap-4 items-start">
            <Clock className="text-accent flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-serif font-bold mb-1">Book Your Time</h3>
              <p className="text-primary-foreground/80">Select your preferred consultation time</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Mail className="text-accent flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-serif font-bold mb-1">Get Confirmation</h3>
              <p className="text-primary-foreground/80">Receive instant email confirmation</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Phone className="text-accent flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-serif font-bold mb-1">We'll Connect</h3>
              <p className="text-primary-foreground/80">Our team will reach out to finalize within 24 hours</p>
            </div>
          </div>
        </div>

        {state.succeeded ? (
          <div className="bg-card text-foreground p-8 rounded-lg shadow-xl text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-accent">Booking Confirmed!</h3>
            <p className="text-lg mb-6">Thank you for your booking request. We'll contact you shortly to finalize the details.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-serif font-semibold hover:shadow-lg transition-all duration-300"
            >
              Make Another Booking
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-card text-foreground p-8 rounded-lg shadow-xl">
            {/* Hidden field for CC emails */}
            <input type="hidden" name="_cc" value="tajevents.ca@gmail.com,info@taj.events" />
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <select
                name="eventType"
                required
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select Event Type</option>
                <option value="Wedding">Wedding</option>
                <option value="Engagement">Engagement</option>
                <option value="Henna Night">Henna Night</option>
                <option value="Baby Shower">Baby Shower</option>
                <option value="Bridal Shower">Bridal Shower</option>
                <option value="Birthday">Birthday</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Event Date</label>
                <input
                  type="date"
                  name="eventDate"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Preferred Time</label>
                <input
                  type="time"
                  name="bookingTime"
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Booking time"
                />
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your vision..."
              rows={4}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary mb-6 resize-none"
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-serif font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {state.submitting ? "Booking..." : "send inquiry"}
            </button>

            {state.errors && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                × Booking failed. Please try again or call us directly.
              </div>
            )}
          </form>
        )}

        <div className="text-center mt-12">
          <p className="text-primary-foreground/80 mb-6 font-serif font-semibold">Follow Us On Social Media</p>
          <div className="flex gap-6 justify-center mb-8">
            <a
              href="https://www.facebook.com/taj.events"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent/20 text-accent transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/tajevents__"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent/20 text-accent transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          <a
              href="https://www.tiktok.com/@tajevents_"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-accent/20 text-accent transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <TikTokIcon size={24} />
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-primary-foreground/80 mb-4">Or reach out directly:</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://wa.me/12897009451" className="text-accent font-serif font-bold hover:underline">
              WhatsApp: +1 (289) 700-9451
            </a>
            <a href="mailto:tajevents.ca@gmail.com" className="text-accent font-serif font-bold hover:underline">
              info@taj.events
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
