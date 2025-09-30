import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MapPin } from "lucide-react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";

// Image Imports
import sunshine1 from "@/assets/sunshine1.jpg";
import sunshine2 from "@/assets/sunshine2.jpg";
import sunshine3 from "@/assets/sunshine3.png";
import sunshine4 from "@/assets/sunshine4.jpg";

import mamta1 from "@/assets/mamta1.jpg";
import mamta2 from "@/assets/mamta2.jpg";
import mamta3 from "@/assets/mamta3.jpg";

import swami1 from "@/assets/swami1.jpg";
import swami2 from "@/assets/swami2.jpg";
import swami3 from "@/assets/swami3.jpg";

import mes1 from "@/assets/mes1.jpg";
import mes2 from "@/assets/mes2.jpg";
import mes3 from "@/assets/mes3.jpg";
import mes4 from "@/assets/mes4.jpg";

import project2103_1 from "@/assets/2103-1.jpg";
import project2103_2 from "@/assets/2103-2.jpg";
import project2103_3 from "@/assets/2103-3.jpg";
import project2103_4 from "@/assets/2103-4.png";

import project3049_1 from "@/assets/3049-1.jpg";
import project3049_2 from "@/assets/3049-2.jpg";
import project3049_3 from "@/assets/3049-3.jpg";

// Types
interface Project {
  id: number;
  title: string;
  type: string;
  location: string;
  description: string;
  image: string;
  images: string[];
  features: string[];
  status: string;
  modalDescription: React.ReactNode;
}

export const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Sunshine Enclave",
      type: "Residential Complex",
      location: "VIP Road, Singhpura, Zirakpur",
      description:
        "A premium gated community with modern amenities, featuring 35 ft internal roads, clubhouse, and children's play area.",
      image: sunshine1,
      images: [sunshine1, sunshine2, sunshine3, sunshine4],
      features: ["Spacious 3 BHK", "Dedicated Parking", "Clubhouse", "Quality Construction"],
      status: "Completed",
      modalDescription: (
        <div>
          <h3 className="heading-md mb-3">Project Overview</h3>
          <p className="mb-4">
            This S+3 residential complex offers thoughtfully designed 3 BHK flats with a perfect blend of comfort, convenience, and modern amenities. Ideal for families seeking a premium lifestyle, the project combines functional living spaces with recreational facilities.
          </p>
          <h4 className="font-semibold mb-2">Key Highlights</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Spacious 3 BHK flats with optimized layouts for comfort and privacy</li>
            <li>Dedicated parking space for residents</li>
            <li>In-house gym and clubhouse fostering a healthy and social lifestyle</li>
            <li>Modern construction with quality materials and finishes</li>
            <li>Well-planned interiors and common areas for a premium living experience</li>
          </ul>
          <p>
            This project exemplifies our commitment to creating residences that enhance lifestyle, convenience, and well-being within a secure and vibrant community.
          </p>
        </div>
      ),
    },
    {
      id: 2,
      title: "Mamta Enclave",
      type: "Residential Flats & Houses",
      location: "Dhakoli, Zirakpur",
      description:
        "Beautifully designed houses and flats offering modern living with spacious rooms, well-ventilated interiors, and secure community surroundings.",
      image: mamta1,
      images: [mamta1, mamta2, mamta3],
      features: [
        "Spacious Layout",
        "Ample Parking",
        "Strong Foundation",
        "Premium Finishing",
      ],
      status: "Completed",
      modalDescription: (
        <div>
          <h3 className="heading-md mb-3">Project Overview</h3>
          <p className="mb-4">
            This residential flat spans 200 gaj and has been designed with a perfect balance of functionality and modern aesthetics. The construction showcases high-quality workmanship, durable materials, and thoughtful architectural planning.
          </p>
          <h4 className="font-semibold mb-2">Key Highlights</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Spacious flat layout with optimized room proportions</li>
            <li>Ample parking space ensuring convenience for residents and visitors</li>
            <li>Strong structural foundation with premium finishing work</li>
            <li>Attention to detail in design for comfort and long-term durability</li>
          </ul>
          <p>
            This project reflects our commitment to delivering well-planned, high-quality living spaces that enhance lifestyle while ensuring practicality and value.
          </p>
        </div>
      ),
    },
    {
      id: 3,
      title: "Swami Enclave",
      type: "Residential Villas",
      location: "Dhakoli, Zirakpur",
      description:
        "Exclusive villas designed with luxurious finishes, private gardens, and premium amenities for an elite lifestyle.",
      image: swami1,
      images: [swami1, swami2, swami3],
      features: [
        "Modular Design",
        "Luxury Amenities",
        "Premium Finishes",
        "Spacious Interiors",
      ],
      status: "Completed",
      modalDescription: (
        <div>
          <h3 className="heading-md mb-3">Project Overview</h3>
          <p className="mb-4">
            This 200 gaj villa has been meticulously constructed to combine luxury, comfort, and modern design. Every aspect of the villa reflects high-quality craftsmanship and thoughtful planning, creating a residence that is both elegant and functional.
          </p>
          <h4 className="font-semibold mb-2">Key Highlights</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Modular design for efficient space utilization and seamless flow</li>
            <li>Luxury amenities enhancing lifestyle and comfort</li>
            <li>Premium materials and finishes ensuring durability and sophistication</li>
            <li>Spacious interiors with well-planned rooms and living areas</li>
            <li>Beautifully designed exteriors complementing the overall aesthetics</li>
          </ul>
          <p>
            This villa represents our commitment to delivering high-end, contemporary living spaces that cater to modern lifestyles while maintaining timeless elegance.
          </p>
        </div>
      ),
    },
    {
      id: 4,
      title: "MES (Renovational Work)",
      type: "Renovation Project",
      location: "Chandi Mandir Cantt.",
      description:
        "Comprehensive renovation work to enhance functionality and aesthetics of MES buildings.",
      image: mes1,
      images: [mes1, mes2, mes3, mes4],
      features: [
        "Modular Interiors",
        "Sleek Design",
        "Optimized Layout",
        "Smart Solutions",
      ],
      status: "Completed",
      modalDescription: (
        <div>
          <h3 className="heading-md mb-3">Project Overview</h3>
          <p className="mb-4">
            This project involved the transformation of an existing space into a modern conference room with a modular design, combining functionality with contemporary aesthetics.
          </p>
          <h4 className="font-semibold mb-2">Key Highlights</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Modular interiors for flexible and efficient use of space</li>
            <li>Sleek, professional design enhancing corporate ambiance</li>
            <li>Optimized layout for meetings, presentations, and collaborative work</li>
            <li>Use of high-quality materials and finishes for durability and elegance</li>
            <li>Integration of smart lighting and furniture solutions for comfort and productivity</li>
          </ul>
          <p>
            This renovation exemplifies our expertise in creating tailored, professional workspaces that align with modern corporate needs.
          </p>
        </div>
      ),
    },
    {
      id: 5,
      title: "E Block, Aerocity, Mohali",
      type: "Residential Villas",
      location: "E Block, Aerocity, Mohali",
      description:
        "Premium villas crafted for modern living, featuring spacious layouts, private terraces, and luxurious amenities.",
      image: project2103_1,
      images: [project2103_1, project2103_2, project2103_3, project2103_4],
      features: [
        "Modern Duplex",
        "Stylish Interiors",
        "Premium Finishes",
        "Smart Layouts",
      ],
      status: "Completed",
      modalDescription: (
        <div>
          <h3 className="heading-md mb-3">Project Overview</h3>
          <p className="mb-4">
            This 150 gaj duplex house was transformed through a comprehensive renovation, giving it a modern, elegant, and functional look. The redesign focuses on aesthetics, comfort, and contemporary living.
          </p>
          <h4 className="font-semibold mb-2">Key Highlights</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Complete modernization of interiors and exteriors for a fresh, stylish appearance</li>
            <li>Thoughtfully designed layouts enhancing space utilization and flow</li>
            <li>Use of high-quality materials and finishes for durability and luxury</li>
            <li>Integration of modern lighting, fixtures, and smart design elements</li>
            <li>Creation of a cohesive and inviting atmosphere, combining functionality with elegance</li>
          </ul>
          <p>
            This renovation showcases our expertise in revitalizing residential spaces, turning them into modern, beautiful homes that reflect the lifestyle and taste of their occupants.
          </p>
        </div>
      ),
    },
    {
      id: 6,
      title: "Sector 66-B, IT City, Mohali",
      type: "Residential Villas",
      location: "Sector 66-B, Mohali",
      description:
        "Elegant villas offering comfort and style, designed with lush green surroundings and top-notch facilities.",
      image: project3049_1,
      images: [project3049_1, project3049_2, project3049_3],
      features: [
        "Modern Villa",
        "Smart Appliances",
        "Luxury Finishes",
        "Spacious Layout",
      ],
      status: "Completed",
      modalDescription: (
        <div>
          <h3 className="heading-md mb-3">Project Overview</h3>
          <p className="mb-4">
            This 200 gaj villa underwent a complete renovation, transforming it into a luxurious and modern living space equipped with state-of-the-art appliances. Every detail has been carefully curated to combine elegance, comfort, and functionality.
          </p>
          <h4 className="font-semibold mb-2">Key Highlights</h4>
          <ul className="list-disc pl-6 mb-4 space-y-1">
            <li>Comprehensive modernization of interiors and exteriors for a high-end look</li>
            <li>Integration of modern appliances for convenience and efficiency</li>
            <li>Use of premium materials and finishes reflecting luxury and durability</li>
            <li>Thoughtfully designed layouts enhancing space utilization and flow</li>
            <li>Creation of a sophisticated ambiance that blends comfort with style</li>
          </ul>
          <p>
            This renovation exemplifies our commitment to turning residential spaces into luxurious, contemporary homes that meet the highest standards of lifestyle and functionality.
          </p>
        </div>
      ),
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-up">
              <Badge variant="outline" className="mb-4">
                Our Portfolio
              </Badge>
              <h2 className="display-md text-foreground mb-6">
                Featured <span className="text-primary"> Projects</span>
              </h2>
              <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
                Explore our completed projects showcasing quality construction,
                innovative design, and attention to detail across residential and
                commercial sectors.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {projects.map((project, index) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 animate-fade-up overflow-hidden border-0 shadow-card"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-primary text-primary-foreground shadow-lg"
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="outline"
                        className="bg-background/90 backdrop-blur-sm"
                      >
                        {project.type}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="heading-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <div className="flex items-center text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="text-sm">{project.location}</span>
                    </div>

                    <p className="text-muted-foreground mb-4">{project.description}</p>

                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                      onClick={() => openModal(project)}
                    >
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
          tabIndex={-1}
        >
          <div
            className="bg-background rounded-lg shadow-xl max-w-5xl w-full p-6 relative overflow-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-foreground hover:text-primary text-2xl font-bold"
              aria-label="Close modal"
            >
              &times;
            </button>

            <KeenImageSlider images={selectedProject.images} />

            <h2 className="heading-lg text-foreground mb-4">{selectedProject.title}</h2>

            <div className="text-muted-foreground">{selectedProject.modalDescription}</div>

            <Button variant="premium" onClick={closeModal} className="w-full text-white mt-6">
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

// Slider Component
const KeenImageSlider: React.FC<{ images: string[] }> = ({ images }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
    },
    [Autoplay]
  );

  return (
    <div className="relative mb-6">
      <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
        {images.map((src, idx) => (
          <div key={idx} className="keen-slider__slide flex items-center justify-center">
            <img
              src={src}
              alt={`slide-${idx}`}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => instanceRef.current?.prev()}
        className="absolute top-1/2 -translate-y-1/2 left-4 md:left-6 bg-gradient-to-r from-blue-950 to-yellow-600 text-white shadow-lg hover:opacity-90 transition-all duration-300 p-3 md:p-4 rounded-full z-10"
        aria-label="Previous Slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => instanceRef.current?.next()}
        className="absolute top-1/2 -translate-y-1/2 right-4 md:right-6 bg-gradient-to-r from-blue-950 to-yellow-600 text-white shadow-lg hover:opacity-90 transition-all duration-300 p-3 md:p-4 rounded-full z-10"
        aria-label="Next Slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

// Autoplay plugin for Keen Slider
function Autoplay(slider: any) {
  let timeout: any;
  let mouseOver = false;
  function clearNextTimeout() {
    clearTimeout(timeout);
  }
  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 3000);
  }
  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });
  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
}


