"use client"

import { useParams, notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()

  // This would typically come from an API or database
  const projects = {
    "game-voucher": {
      title: "Game Pulse Landing Page",
      description: "Online platform for gamers to instantly purchase and receive digital vouchers and in-game currency for popular games.",
      image: "/images/game-topup.jpeg",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
      category: "web",
      github: "https://github.com/",
      demo: "https://demo.example.com",
      longDescription:
        "A Online platform for gamers to instantly purchase and receive digital vouchers and in-game currency for popular games. The website combines vibrant purple and pink gradients with a modern, responsive design",
    },
    "cogniva-creative": {
      title: "Cogniva Creative",
      description: "A modern, conversion-focused landing page for Cogniva Creative digital agency, featuring responsive design, interactive elements, and a clean UI.",
      image: "/images/cogniva.png",
      technologies: ["Next.js", "React", "Shadcn/UI", "CSS3"],
      category: "web",
      github: "https://github.com/",
      demo: "https://cogniva-creative.vercel.app",
      longDescription:
        "A comprehensive digital showcase designed to convert visitors into potential clients. The page features a thoughtfully structured layout that guides users through the agency's value proposition, services, expertise, and success stories. Showcasing services, case studies, and client testimonials with a seamless user experience.",
    },
    "persib-apps": {
      title: "Persib Apps Blog",
      description: "A simple static blog platform dedicated to fans of the Persib Bandung football team.",
      image: "/images/persibapps.png",
      technologies: ["Html", "CSS", "Javascript", "JSON"],
      category: "web",
      github: "https://github.com/",
      demo: "https://persibapps.vercel.app/",
      longDescription:
        "A front-end-only static blog application crafted to showcase blog posts, match updates, and fan articles related to Persib Bandung. Built without a backend, the app focuses on performance, simplicity, and ease of content updates.The UI is clean, mobile-friendly, and designed to highlight news articles, and Match Updates.",
    },
    "ind-independence-day": {
      title: "Indonesia Independence Day Landing Page",
      description: "Responsive Landing Page website to celebrate the 79th Indonesian Independence Day.",
      image: "/images/project-overview/prj2.png",
      technologies: ["Html", "CSS", "Javascript", "Swiper.js"],
      category: "web",
      github: "https://github.com/",
      demo: "https://indonesia-independence-day.vercel.app",
      longDescription:
        "This website is designed to provide an engaging and interactive experience for users across all devices, from desktops to smartphones. Featuring a red-and-white color scheme inspired by the national flag. A dedicated section where users can explore a wide variety of competitions that using Swiper.js. This section provides an intuitive sliding experience to browse through different contests such as panjat pinang, balap karung, makan kerupuk, and more.",
    },
    "travel-website": {
      title: "Travel Website",
      description: "A visually captivating travel website showcasing destinations, and booking details.",
      image: "/images/travel.jpg",
      technologies: ["Html", "CSS", "Javascript"],
      category: "web",
      github: "https://github.com/",
      demo: "https://travel.github.io/JelajahNusantara/",
      longDescription:
        "A fully front-end static site, designed to inspire and assist users in planning their next adventure. The website features eye-catching destination sections, animated image galleries, and informative travel guides—all presented in a responsive and intuitive layout.",
    },
    "uiux-mobile-app": {
      title: "UI/UX OASIS Mobile App",
      description: "A modern and user-friendly mobile UI/UX design for an Online Academic Information System.",
      image: "/images/ui-sttb.jpg",
      technologies: ["Figma", "Canva"],
      category: "ui/ux",
      github: "https://Figma.com/",
      demo: "https://www.figma.com/oasis",
      longDescription:
        "UI/UX Online Academic Information System, design to deliver a seamless and efficient experience for students managing their academic journey. The app features an intuitive layout, minimalist design elements, and a student-centric approach that prioritizes usability and accessibility.",
    },
  }

  const project = projects[id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <Link href="/projects" className="inline-flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="terminal-window">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">project_details.sh</div>
        </div>
        <div className="terminal-content">
          <p className="mb-2">
            <span className="text-primary">$</span> cat {id}.json
          </p>
          <div className="mb-4">
            <p>
              <span className="text-primary">title:</span> {project.title}
            </p>
            <p>
              <span className="text-primary">category:</span> {project.category}
            </p>
            <p className="flex flex-wrap gap-2 mt-2">
              <span className="text-primary">stack:</span>
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                  {tech}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>

      <div className="relative h-80 rounded-md overflow-hidden">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="flex flex-wrap gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-md transition-colors"
        >
          <Github size={16} /> View on GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-md transition-colors border border-primary/30"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground">{project.longDescription}</p>
      </div>
    </div>
  )
}

