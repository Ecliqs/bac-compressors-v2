"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

import { Send, CheckCircle } from "lucide-react"

export default function LeadForm() {

  const router = useRouter()
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    designation: "", // ✅ UPDATED
    city: "",
    product: "",
    requirement: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    setLoading(true)

    try {

      const res = await fetch(
        "https://holisticmindclinic.com/landing-page/bac-form.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await res.json()

      if (data.success) {

        toast({
          title: "Inquiry Sent Successfully",
          description: "Our engineers will contact you shortly.",
        })

        router.push("/thank-you")

      } else {

        toast({
          title: "Submission Failed",
          description: data.message,
        })

      }

    } catch (error) {

      toast({
        title: "Server Error",
        description: "Please try again later.",
      })

    }

    setLoading(false)
  }

  return (
    <section id="inquiry" className="py-20 bg-background scroll-mt-16">

      <div className="container mx-auto px-4">

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border">

          <div className="grid md:grid-cols-2">

            {/* LEFT SECTION */}

            <div className="p-8 md:p-12 bg-red-600 text-primary-foreground space-y-6 flex flex-col justify-center">

              <h2 className="text-3xl md:text-4xl font-bold font-headline">
                Need the Right Air Compressor for Your Factory?
              </h2>

              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Our application engineers will help you select the most
                energy-efficient and cost-effective compressor for your
                specific industrial application.
              </p>

              <div className="space-y-4 pt-4">

                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="font-semibold">
                    Custom Requirement Analysis
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="font-semibold">
                    On-site Consultation Available
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-accent" />
                  <span className="font-semibold">
                    Fast Quote Turnaround
                  </span>
                </div>

              </div>

            </div>

            {/* FORM */}

            <div className="p-8 md:p-12 bg-white">

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name + Company */}

                <div className="grid sm:grid-cols-2 gap-4">

                  <div className="space-y-2">
                    <Label>Name *</Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Company Name *</Label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                {/* Mobile + Email */}

                <div className="grid sm:grid-cols-2 gap-4">

                  <div className="space-y-2">
                    <Label>Mobile *</Label>
                    <Input
                      name="mobile"
                      type="tel"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Email</Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                </div>

                {/* Designation + City */}

                <div className="grid sm:grid-cols-2 gap-4">

                  <div className="space-y-2">
                    <Label>Designation *</Label>
                    <Input
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>City *</Label>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>

                </div>

                {/* Product */}

                <div className="space-y-2">

                  <Label>Interested Product *</Label>

                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3"
                  >

                    <option value="">Select Product</option>
                    <option>Rotary Screw Compressor VFD Equipped</option>
                    <option>Reciprocating Piston Compressors</option>

                  </select>

                </div>

                {/* Requirement */}

                <div className="space-y-2">

                  <Label>Your Requirement</Label>

                  <Textarea
                    name="requirement"
                    rows={4}
                    value={formData.requirement}
                    onChange={handleChange}
                  />

                </div>

                {/* Submit */}

                <Button
                  type="submit"
                  className="w-full bg-red-600 text-white hover:text-accent-foreground hover:bg-accent/90 py-6 text-lg font-bold"
                  disabled={loading}
                >

                  {loading ? "Processing..." : (
                    <>
                      Get Best Price
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}

                </Button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}