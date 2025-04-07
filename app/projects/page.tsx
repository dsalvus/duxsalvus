"use client"

import { useState } from "react"
import { ProjectCard } from "@/components/project-card"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const projects = [
    {
      id: "game-voucher",
      title: "Game Pulse Landing Page",
      description: "Online platform for gamers to instantly purchase and receive digital vouchers and in-game currency for popular games.",
      image: "/images/game-topup.jpeg",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
      category: "web",
    },
    {
      id: "cogniva-creative",
      title: "Cogniva Creative",
      description: "A modern, conversion-focused landing page for Cogniva Creative digital agency, featuring responsive design, interactive elements, and a clean UI.",
      image: "/images/cogniva.png",
      technologies: ["Next.js", "React", "Shadcn/UI", "Tailwind CSS"],
      category: "web",
    },
    {
      id: "persib-apps",
      title: "Persib Apps Blog",
      description: "A simple static blog platform dedicated to fans of the Persib Bandung football team.",
      image: "/images/persibapps.png",
      technologies: ["Html", "CSS", "Javascript", "JSON"],
      category: "web",
    },
    {
      id: "ind-independence-day",
      title: "Indonesia Independence Day",
      description: "Responsive Landing Page website to celebrate the 79th Indonesian Independence Day.",
      image: "/images/ind-independence.jpg",
      technologies: ["Html", "CSS", "Javascript", "Swiper.js"],
      category: "web",
    },
    {
      id: "travel-website",
      title: "Travel Website",
      description: "A visually captivating travel website showcasing destinations, and booking details.",
      image: "/images/travel.jpg",
      technologies: ["Html", "CSS", "Javascript"],
      category: "web",
    },
    {
      id: "uiux-mobile-app",
      title: "UI/UX OASIS Mobile App",
      description: "A modern and user-friendly mobile UI/UX design for an Online Academic Information System.",
      image: "/images/ui-sttb.jpg",
      technologies: ["Figma", "Canva"],
      category: "ui/ux",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & Machine Learning" },
    { id: "ui/ux", name: "UI/UX" },
    { id: "data", name: "Data Visualization" },
    { id: "ar", name: "AR/VR" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="space-y-8">
      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">projects.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-4">
            <span className="text-primary">$</span> Displaying projects directory. Select category to filter results.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveFilter(category.id)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              activeFilter === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  )
}

