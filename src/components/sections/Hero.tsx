"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

import { CheckCircle2, ShieldCheck, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function Hero() {

  const router = useRouter()
  const { toast } = useToast()

  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    zip: "",
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
          description: "Our engineers will contact you within 24 hours.",
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
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-background overflow-hidden">

      <div className="container mx-auto px-4">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}

          <div className="space-y-8">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>45+ Years of Manufacturing Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary">
              Industrial Air Compressors Built for Reliable Factory Operations
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              High-performance reciprocating and screw air compressors designed
              for durability, energy efficiency, and continuous industrial use since 1980.
            </p>

            <div className="grid gap-4">

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                <span className="font-medium text-primary">
                  Trusted by 8000+ factories across India
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                <span className="font-medium text-primary">
                  ISO 9001:2015 Certified Manufacturing Facility
                </span>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent mt-0.5" />
                <span className="font-medium text-primary">
                  ASME Certified Pressure Vessels
                </span>
              </div>

            </div>

          </div>



          {/* FORM */}

          <div className="relative">

            <Card className="border-accent/20 shadow-2xl relative z-10 overflow-hidden">

              <CardHeader className="bg-primary text-primary-foreground pb-8">

                <CardTitle className="text-2xl font-bold">
                  Get a Fast Quote
                </CardTitle>

                <CardDescription className="text-primary-foreground/70">
                  Request customized pricing and technical consultation for your unit.
                </CardDescription>

              </CardHeader>

              <CardContent className="p-8">

                <form onSubmit={handleSubmit} className="space-y-5">


                  {/* Row 1 */}

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



                  {/* Row 2 */}

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
                      <Label>Email *</Label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                  </div>



                  {/* Row 3 */}

                  <div className="grid sm:grid-cols-2 gap-4">

                    <div className="space-y-2">
                      <Label>Zip Code *</Label>
                      <Input
                        name="zip"
                        value={formData.zip}
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

                      <option>EG Rotary Screw Compressor - 11-250 kW</option>
                      <option>SP Rotary Screw Compressor - 90-110 kW</option>
                      <option>PM Rotary Screw Compressor - 11-45 kW</option>
                      <option>Rotary Screw Compressor - 2.2-37 kW</option>

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
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-6 text-lg font-bold"
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

              </CardContent>

            </Card>

          </div>

        </div>

      </div>

    </section>
  )
}