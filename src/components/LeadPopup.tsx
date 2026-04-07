"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function LeadPopup() {
  const router = useRouter();
  const { toast } = useToast();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [popupTriggered, setPopupTriggered] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    designation: "",
    city: "",
    product: "",
    requirement: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

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
      );

      const data = await res.json();

      if (data.success) {
        toast({
          title: "Inquiry Sent Successfully",
          description: "Our engineers will contact you shortly.",
        });

        router.push("/thank-you");
      } else {
        toast({
          title: "Submission Failed",
          description: data.message,
        });
      }
    } catch (err) {
      toast({
        title: "Server Error",
        description: "Please try again later.",
      });
    }

    setLoading(false);
  };

  useEffect(() => {
    const shown = sessionStorage.getItem("popupShown");
    if (shown) return;

    const showPopup = () => {
      if (!popupTriggered) {
        setOpen(true);
        setPopupTriggered(true);
        sessionStorage.setItem("popupShown", "true");
      }
    };

    const timer = setTimeout(showPopup, 5000);

    const handleScroll = () => {
      if (window.scrollY > 800) {
        showPopup();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [popupTriggered]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Get Best Compressor Quote
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Name *</Label>
              <Input name="name" onChange={handleChange} required />
            </div>

            <div>
              <Label>Company *</Label>
              <Input name="company" onChange={handleChange} required />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Mobile *</Label>
              <Input name="mobile" type="tel" onChange={handleChange} required />
            </div>

            <div>
              <Label>Email</Label>
              <Input name="email" type="email" onChange={handleChange} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
                    <Label>Designation *</Label>
                    <Input
                      name="designation"
                      value={formData.designation}
                      onChange={handleChange}
                      required
                    />
                  </div>

            <div>
              <Label>City *</Label>
              <Input name="city" onChange={handleChange} required />
            </div>
          </div>

          <div>
            <Label>Interested Product *</Label>

            <select
              name="product"
              onChange={handleChange}
              required
              className="w-full h-10 border rounded-md px-3"
            >
              <option value="">Select Product</option>
              <option>Rotary Screw Compressor VFD Equipped</option>
              <option>Reciprocating Piston Compressors</option>
            </select>
          </div>
 
          <div>
            <Label>Requirement</Label>
            <Textarea name="requirement" onChange={handleChange} />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              "Sending..."
            ) : (
              <>
                Get Best Price
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}