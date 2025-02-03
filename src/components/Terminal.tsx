"use client"

import type React from "react"
import { useState, useRef } from "react"
import { PortfolioData } from "../utils/PortfolioData"
import CommandLine from "./CommandLine"
import Output from "./Output"

interface HistoryItem {
    command: string
    output: string
}

const Terminal: React.FC = () => {
    const [history, setHistory] = useState<HistoryItem[]>([])
    const terminalRef = useRef<HTMLDivElement>(null)

    const handleCommand = (command: string) => {
        let output = ""
        const cleanCommand = command.trim().toLowerCase()

        switch (cleanCommand) {
            case "help":
                output = "Available commands: about, skills, projects, contact, clear"
                break
            case "about":
                output = `${PortfolioData.name} - ${PortfolioData.title}\n${PortfolioData.about}`
                break
            case "skills":
                output = PortfolioData.skills.join(", ")
                break
            case "projects":
                output = PortfolioData.projects
                    .map((project) => `${project.name}: ${project.description}\nLink: ${project.link}`)
                    .join("\n\n")
                break
            case "contact":
                output = `Email: ${PortfolioData.contact.email}\nGitHub: ${PortfolioData.contact.github}\nLinkedIn: ${PortfolioData.contact.linkedin}`
                break
            case "clear":
                setHistory([])
                return
            default:
                output = 'Command not recognized. Type "help" for a list of commands.'
        }

        setHistory((prev) => [...prev, { command: cleanCommand, output }])

        // Scroll to bottom after new command
        if (terminalRef.current) {
            setTimeout(() => {
                terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight)
            }, 0)
        }
    }

    return (
        <div className="bg-black text-green-400 p-4 font-mono h-[calc(100%-2rem)] overflow-auto" ref={terminalRef}>
            <div className="mb-4">
                <p>Welcome to {PortfolioData.name}'s Terminal Portfolio</p>
                <p>Type 'help' to see available commands.</p>
            </div>
            {history.map((item, index) => (
                <div key={index} className="mb-4">
                    <Output content={`$ ${item.command}`} />
                    <Output content={item.output} />
                </div>
            ))}
            <CommandLine onCommand={handleCommand} />
        </div>
    )
}

export default Terminal

