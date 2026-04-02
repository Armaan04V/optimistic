import { useState } from "react";
import emailjs from "emailjs-com";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Send,
} from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email_address: "",
    project_type: "",
    project_details: "",
  });

  const [sending, setSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const contactInfo = [
    {
      icon: User,
      title: "Project Lead",
      detail: "Er. Arman Chalana",
      subdDetail: "Civil Engineer",
    },
    {
      icon: Phone,
      title: "Phone",
      detail: "+91-88475-89272",
      subdDetail: "Available 24/7",
      link: "tel:+918847589272",
    },
    {
      icon: Mail,
      title: "Email",
      detail: "optimisticinnovators.arman@gmail.com",
      subdDetail: "Quick Response",
      link: "mailto:optimisticinnovators.arman@gmail.com",
    },
    {
      icon: MapPin,
      title: "Office",
      detail: (
        <>
          Address 1 - Shop No. 14, Pine Homes, Dhakoli, Zirakpur <br />
          Address 2 - 4310 E Block Aerocity, SAS Nagar Mohali
        </>
      ),
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Phone validation (Indian numbers starting 6–9, total 10 digits)
    const phoneRegex = /^[6-9][0-9]{9}$/;

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!phoneRegex.test(formData.phone_number)) {
      setStatusMessage("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!emailRegex.test(formData.email_address)) {
      setStatusMessage(
        "Please enter a valid email (example@email.xyz)."
      );
      return;
    }

    setSending(true);
    setStatusMessage(null);

    emailjs
      .send(
        "service_atvgq9e",
        "template_mhcmnk3",
        formData,
        "Wxb42jc1sYwnHqY1J"
      )
      .then(
        () => {
          setSending(false);
          setStatusMessage(
            "Message sent successfully! We'll get back to you shortly."
          );
          setFormData({
            full_name: "",
            phone_number: "",
            email_address: "",
            project_type: "",
            project_details: "",
          });
        },
        (error) => {
          setSending(false);
          setStatusMessage(
            "Oops! Something went wrong. Please try again later."
          );
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="display-md text-foreground mb-6">
              Start Your Construction
              <span className="text-primary"> Journey Today</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="heading-xl mb-8">Contact Information</h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <info.icon className="h-6 w-6 text-primary" />
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p>{info.detail}</p>
                          <p className="text-sm text-muted-foreground">
                            {info.subdDetail}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="mb-6">Send Us a Message</h3>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <Input
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      required
                    />

                    {/* ✅ Phone input restricted */}
                    <Input
                      name="phone_number"
                      value={formData.phone_number}
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        setFormData((prev) => ({
                          ...prev,
                          phone_number: value,
                        }));
                      }}
                      placeholder="Phone Number"
                      maxLength={10}
                      required
                    />

                    <Input
                      name="email_address"
                      value={formData.email_address}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                    />

                    <Input
                      name="project_type"
                      value={formData.project_type}
                      onChange={handleChange}
                      placeholder="Project Type"
                      required
                    />

                    <Textarea
                      name="project_details"
                      value={formData.project_details}
                      onChange={handleChange}
                      placeholder="Project Details"
                      required
                    />

                    {statusMessage && (
                      <p
                        className={
                          statusMessage.includes("success")
                            ? "text-green-600"
                            : "text-red-600"
                        }
                      >
                        {statusMessage}
                      </p>
                    )}

                    <Button type="submit" disabled={sending}>
                      {sending ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};