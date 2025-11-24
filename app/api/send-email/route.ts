import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, eventType, eventDate, bookingTime, message } = body

    const emailContent = `
New Booking Request from Taj Events

Client Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Event Details:
- Event Type: ${eventType}
- Event Date: ${eventDate}
- Preferred Booking Time: ${bookingTime}

Message:
${message}

---
This booking request was submitted via the Taj Events website.
Please contact the client at ${email} or ${phone} to confirm.
    `

    const clientEmailContent = `
Dear ${name},

Thank you for your booking request! We're excited to help create an unforgettable event for you.

Your Booking Details:
- Event Type: ${eventType}
- Event Date: ${eventDate}
- Preferred Booking Time: ${bookingTime}

Our team will review your request and contact you within 24 hours at:
📞 ${phone}
📧 ${email}

If you have any urgent questions, feel free to reach out:
- Phone: +1 (365) 889-4928
- WhatsApp: +1 (289) 700-9451
- Email: tajevents.ca@gmail.com

We look forward to bringing your vision to life with elegance and perfection!

Best regards,
Taj Events Team
    `

    // For now, log the emails (in production, use a service like Resend, SendGrid, etc.)
    console.log("[v0] Admin Email:", emailContent)
    console.log("[v0] Client Email:", clientEmailContent)

    // Simulate email sending success
    return NextResponse.json({ message: "Booking request submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("[v0] Email error:", error)
    return NextResponse.json({ error: "Failed to submit booking" }, { status: 500 })
  }
}
