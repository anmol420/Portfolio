import type React from "react"
import { useState } from "react"

interface CommandLineProps {
    onCommand: (command: string) => void
}

const CommandLine: React.FC<CommandLineProps> = ({ onCommand }) => {
    const [input, setInput] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const trimmedInput = input.trim()
        if (trimmedInput) {
            onCommand(trimmedInput)
            setInput("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-yellow-400 mr-2">$</span>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="bg-transparent outline-none flex-grow text-green-400 w-full"
                autoFocus
                spellCheck="false"
            />
        </form>
    )
};

export default CommandLine;