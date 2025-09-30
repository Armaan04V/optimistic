import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Hammer, Shield } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Led by Er. Arman Chalana, a passionate Civil Engineer building the foundations of the future"
    },
    {
      icon: Hammer,
      title: "Complete Solutions",
      description: "From visionary architectural planning to flawless construction execution"
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every project meets the highest standards of safety and quality control"
    }
  ];

  const projectTypes = [
    "Residential Buildings",
    "Commercial Complexes", 
    "Industrial Projects",
    "Renovation Works",
    "Architectural Design",
    "Project Management"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-up">
            <Badge variant="outline" className="mb-4">
              About Optimistic Innovators
            </Badge>
            <h2 className="display-md text-foreground mb-6">
              Building Excellence with 
              <span className="text-primary"> Professional Expertise</span>
            </h2>
            <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
              Under the leadership of Er. Arman Chalana, Civil Engineer, we transform visions 
              into reality through innovative construction solutions, quality materials, and 
              exceptional craftsmanship.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-in">
              <h3 className="heading-xl text-foreground mb-6">
                Why Choose Optimistic Innovators?
              </h3>
              
              <div className="space-y-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-gradient-secondary text-secondary-foreground shadow-card">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Er. Arman Chalana - Civil Engineer
                  </h4>
                  <p className="text-secondary-foreground/90">
                    "Every project is a testament to our commitment to excellence. We don't just 
                    build structures; we create lasting legacies that stand the test of time."
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Right Content */}
            <div className="animate-fade-up">
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h4 className="heading-lg text-foreground mb-6">Our Expertise</h4>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {projectTypes.map((type, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{type}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-muted rounded-2xl">
                    <h5 className="font-semibold text-foreground mb-3">Complete Project Lifecycle</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-primary rounded-full text-primary-foreground flex items-center justify-center mx-auto mb-2 text-xs font-bold">1</div>
                        <p className="text-muted-foreground">Planning & Design</p>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-primary rounded-full text-primary-foreground flex items-center justify-center mx-auto mb-2 text-xs font-bold">2</div>
                        <p className="text-muted-foreground">Construction</p>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-primary rounded-full text-primary-foreground flex items-center justify-center mx-auto mb-2 text-xs font-bold">3</div>
                        <p className="text-muted-foreground">Handover</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};