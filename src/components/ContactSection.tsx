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
      detail: "Shop No. 14, Pine Homes",
      subdDetail: "Dhakoli, Zirakpur, SAS Nagar - 140603",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

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
        (response) => {
          setSending(false);
          setStatusMessage("Message sent successfully! We'll get back to you shortly.");
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
          setStatusMessage("Oops! Something went wrong. Please try again later.");
          console.error("EmailJS error:", error);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h2 className="display-md text-foreground mb-6">
              Start Your Construction
              <span className="text-primary"> Journey Today</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your vision to life? Contact Er. Arman Chalana and
              our expert team to discuss your project requirements and get a
              detailed consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in">
              <h3 className="heading-xl text-foreground mb-8">
                Contact Information
              </h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => {
                  const Content = (
                    <div className="flex items-start space-x-4" key={index}>
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground font-medium">
                          {info.detail}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {info.subdDetail}
                        </p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <Card key={index} className="shadow-card border-0">
                      <CardContent className="p-6">
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block hover:opacity-90 transition-opacity"
                        >
                          {Content}
                        </a>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card key={index} className="shadow-card border-0">
                      <CardContent className="p-6">{Content}</CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Office Hours */}
              <Card className="bg-gradient-hero shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Office Hours
                      </h4>
                      <p className="text-white/90">
                        Monday - Saturday: 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-white/90">Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-up">
              <Card className="shadow-elegant border-0">
                <CardContent className="p-8">
                  <h3 className="heading-xl text-foreground mb-6">
                    Send Us a Message
                  </h3>

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="full_name"
                          className="text-sm font-medium text-foreground mb-2 block"
                        >
                          Full Name
                        </label>
                        <Input
                          id="full_name"
                          name="full_name"
                          value={formData.full_name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="h-12"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone_number"
                          className="text-sm font-medium text-foreground mb-2 block"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone_number"
                          name="phone_number"
                          value={formData.phone_number}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email_address"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email_address"
                        name="email_address"
                        value={formData.email_address}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="h-12"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="project_type"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Project Type
                      </label>
                      <Input
                        id="project_type"
                        name="project_type"
                        value={formData.project_type}
                        onChange={handleChange}
                        placeholder="e.g., Residential, Commercial, Industrial"
                        className="h-12"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="project_details"
                        className="text-sm font-medium text-foreground mb-2 block"
                      >
                        Project Details
                      </label>
                      <Textarea
                        id="project_details"
                        name="project_details"
                        value={formData.project_details}
                        onChange={handleChange}
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        className="min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    {statusMessage && (
                      <p
                        className={`${
                          statusMessage.includes("successfully")
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {statusMessage}
                      </p>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      variant="premium"
                      className="w-full text-white"
                      disabled={sending}
                    >
                      {sending ? "Sending..." : "Send Message"}
                      <Send className="ml-2 h-5 w-5 text-white" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-up">
            <Card className="bg-gradient-accent text-accent-foreground shadow-elegant">
              <CardContent className="p-8">
                <MessageSquare className="h-12 w-12 text-accent-foreground mx-auto mb-4" />
                <h3 className="heading-lg text-accent-foreground mb-3">
                  Need Immediate Assistance?
                </h3>
                <p className="text-accent-foreground/90 mb-6 max-w-xl mx-auto">
                  For urgent project inquiries or emergency construction needs,
                  call Er. Arman Chalana directly for immediate support.
                </p>
                <a href="tel:+918847589272">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 bg-black hover:bg-black hover:text-yellow-400 transform transition-transform duration-300 hover:scale-105"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now: +91-88475-89272
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 Optimistic Innovators. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};
