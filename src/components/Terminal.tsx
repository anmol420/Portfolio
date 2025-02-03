"use client"

import type React from "react"
import { useState, useRef } from "react"
import { PortfolioData } from "../utils/PortfolioData"
import CommandLine from "./CommandLine"
import Output from "./Output"

type CommandOutput = {
    command: string
    response: string
}

const Terminal: React.FC = () => {
    const [outputs, setOutputs] = useState<CommandOutput[]>([])
    const terminalRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight
        }
    }

    const handleCommand = (cmd: string) => {
        const command = cmd.trim().toLowerCase()
        let response = ""

        switch (command) {
            case "help":
                response = "Available commands: about, skills, projects, contact, clear"
                break
            case "about":
                response = `${PortfolioData.name} - ${PortfolioData.title}\n${PortfolioData.about}`
                break
            case "skills":
                response = PortfolioData.skills.join(", ")
                break
            case "projects":
                response = PortfolioData.projects
                    .map((project) => `${project.name}:\n${project.description}\nLink: ${project.link}`)
                    .join("\n\n")
                break
            case "contact":
                response = `Email: ${PortfolioData.contact.email}\nGitHub: ${PortfolioData.contact.github}\nLinkedIn: ${PortfolioData.contact.linkedin}`
                break
            case "clear":
                setOutputs([])
                return
            default:
                response = 'Command not recognized. Type "help" for a list of commands.'
        }

        setOutputs((prev) => [...prev, { command, response }])
        setTimeout(scrollToBottom, 0)
    }

    return (
        <div ref={terminalRef} className="bg-gray-900 p-4 font-mono h-[calc(100%-2rem)] overflow-auto">
            <div className="mb-4">
                <div className="text-green-400">Welcome to {PortfolioData.name}'s Terminal Portfolio</div>
                <div className="text-green-400">Type 'help' to see available commands.</div>
            </div>

            {outputs.map((output, i) => (
                <div key={i} className="mb-4">
                    <Output content={output.command} isCommand={true} />
                    <Output content={output.response} isCommand={false} />
                </div>
            ))}

            <CommandLine onCommand={handleCommand} />
        </div>
    )
};

export default Terminal;