import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Home, 
  Factory, 
  PaintBucket, 
  Ruler, 
  Wrench,
  Shield
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Office buildings, shopping centers, and commercial complexes designed for modern business needs.",
      features: ["Office Buildings", "Retail Spaces", "Shopping Centers", "Business Parks"]
    },
    {
      icon: Home,
      title: "Residential Projects",
      description: "Custom homes, apartments, and residential communities built with comfort and quality in mind.",
      features: ["Custom Homes", "Apartment Buildings", "Gated Communities", "Villas"]
    },
    {
      icon: Factory,
      title: "Industrial Construction",
      description: "Warehouses, factories, and industrial facilities designed for efficiency and functionality.",
      features: ["Warehouses", "Manufacturing Plants", "Industrial Parks", "Storage Facilities"]
    },
    {
      icon: PaintBucket,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with modern upgrades and innovative design solutions.",
      features: ["Interior Renovation", "Exterior Upgrades", "Kitchen Remodeling", "Washroom Renovation"]
    },
    {
      icon: Ruler,
      title: "Architectural Design",
      description: "Comprehensive architectural planning and design services for all types of construction projects.",
      features: ["2D/3D Planning", "Structural Design", "Interior Design", "Landscape Planning"]
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              Our Services
            </Badge>
            <h2 className="display-md text-foreground mb-6">
              Comprehensive Construction
              <span className="text-primary"> Solutions</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              From initial planning to final execution, we provide end-to-end construction 
              services for residential, commercial, and industrial projects.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-up border-0 shadow-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quality Assurance */}
          <Card className="bg-gradient-accent text-accent-foreground shadow-elegant">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-accent-foreground/10 rounded-full flex items-center justify-center">
                  <Shield className="h-10 w-10 text-accent-foreground" />
                </div>
              </div>
              <h3 className="heading-xl text-accent-foreground mb-4">
                Quality Assurance Guarantee
              </h3>
              <p className="body-lg text-accent-foreground/90 max-w-2xl mx-auto mb-6">
                Every project undergoes rigorous quality checks and meets international construction 
                standards. We stand behind our work with comprehensive warranties and ongoing support.
              </p>
              <div className="flex justify-center items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <Wrench className="h-5 w-5 text-accent-foreground" />
                  <span className="font-semibold">Expert Craftsmanship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-accent-foreground" />
                  <span className="font-semibold">Safety First</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};