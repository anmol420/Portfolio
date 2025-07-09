"use client"

import { useState } from "react"
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Head from "next/head"

export default function Portfolio() {
  const techStack = ["JavaScript", "TypeScript", "Node.js", "Bun", "NPM", "Express", "Hono", "Discord.JS", "MongoDB", "PostgreSQL", "Docker", "Redis", "RabbitMQ", "Prisma", "Drizzle", "AWS", "Flutter", "Dart", "Java", "Spring Boot", "Maven", "Spring JPA", "Spring Security", "Go", "Fiber", "gRPC", "Git", "Swagger"]

  const projects = [
    {
      title: "EcommerceBackendAPI",
      description:
        "A comprehensive e-commerce backend API with integrated payment processing, user authentication, and product management. Features secure payment handling through Stripe integration.",
      tech: ["TypeScript", "Stripe", "PostgreSQL", "Drizzle"],
      github: "https://github.com/anmol420/EcommerceBackendAPI",
      live: "https://github.com/anmol420/EcommerceBackendAPI",
    },
    {
      title: "NotebookAPI",
      description:
        "A secure REST API for note-taking application with user authentication, CRUD operations, and data persistence. Built with Spring ecosystem for scalability and security.",
      tech: ["Java", "PostgreSQL", "Spring JPA", "Spring Security"],
      github: "https://github.com/anmol420/NotebookAPI",
      live: "https://github.com/anmol420/NotebookAPI",
    },
    {
      title: "TwitterBackend",
      description:
        "High-performance backend service for a Twitter-like social media platform. Built with Go and Fiber for optimal speed and efficient request handling.",
      tech: ["Go", "Fiber"],
      github: "https://github.com/anmol420/TwitterBackend",
      live: "https://github.com/anmol420/TwitterBackend",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-center p-6">
        <div className="flex items-center justify-between border border-white/20 rounded-full px-4 md:px-8 py-3 w-full max-w-4xl">
          <Link href="/" className="text-xl font-semibold text-pink-500">
            Anmol Anand
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link href="#home" className="hover:text-pink-500 transition-colors">
              Home
            </Link>
            <Link href="#stack" className="hover:text-pink-500 transition-colors">
              Stack
            </Link>
            <Link href="#projects" className="hover:text-pink-500 transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-pink-500 transition-colors">
              Contact
            </Link>
          </div>
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="absolute top-20 left-4 right-4 md:hidden">
            <div className="border border-white/20 hover:text-pink-500 rounded-lg bg-black/95 backdrop-blur-sm p-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="#home"
                  className="hover:text-pink-500 transition-colors py-2 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="#stack"
                  className="hover:text-pink-500 transition-colors py-2 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Stack
                </Link>
                <Link
                  href="#projects"
                  className="hover:text-pink-500 transition-colors py-2 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="#contact"
                  className="hover:text-pink-500 transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <div className="w-full max-w-4xl mx-auto text-center space-y-8">
          <div className="p-8 rounded-lg">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Backend Developer</h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Passionate about building scalable backend systems that combine efficient architecture with seamless integration. I specialize in <span className="text-pink-500">JavaScript</span>, <span className="text-pink-500">Go</span>, and <span className="text-pink-500">Java</span>, with a strong focus on performance, security, and clean API design.
            </p>
          </div>
          <div className=" p-8 rounded-lg">
            <p className="text-gray-300 leading-relaxed">
              With a solid background in backend development, I've contributed to creating robust systems for real-world use cases. I'm driven by a deep interest in system design, scalability, and performance, always eager to dive into complex backend challenges.
            </p>
          </div>
        </div>
      </section>
      <section id="stack" className="py-20 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
            <p className="text-gray-300 text-lg">Technologies I work with</p>
          </div>
          <div className="border border-white/20 p-8 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="border border-white/10 p-6 rounded-lg text-center hover:bg-pink-500/10 bg-transparent hover:text-white transition-colors flex items-center justify-center"
                >
                  <span className="font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="py-20 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-300 text-lg">Some of my recent work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="bg-black border-white/20 transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-pink-500/30 flex flex-col"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-2 py-1 border border-white/20 rounded text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-white/20 hover:text-white text-white hover:bg-pink-500/10 bg-transparent"
                    >
                      <Link href={project.github}>
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-white/20 text-white hover:bg-pink-500/10 bg-transparent hover:text-white"
                    >
                      <Link href={project.live}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-300 text-lg">Let's work together on your next project</p>
          </div>

          <div className="border border-white/20 p-8 rounded-lg min-h-[200px] flex flex-col justify-center space-y-8">
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm always interested in hearing about new opportunities and exciting projects. Whether you have a
              question or just want to say hi, feel free to reach out!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 text-white hover:bg-pink-500/10 bg-transparent hover:text-white min-w-[140px]"
              >
                <Link href="mailto:anmolanand2k15@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 text-white hover:bg-pink-500/10 bg-transparent hover:text-white min-w-[140px]"
              >
                <Link href="https://linkedin.com/in/anmol420">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white/20 text-white hover:bg-pink-500/10 bg-transparent hover:text-white min-w-[140px]"
              >
                <Link href="https://github.com/anmol420">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
