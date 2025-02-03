import type React from "react"
import { useState, type KeyboardEvent } from "react"

interface CommandLineProps {
    onCommand: (command: string) => void
}

const CommandLine: React.FC<CommandLineProps> = ({ onCommand }) => {
    const [input, setInput] = useState("")

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault()
            const trimmedInput = input.trim()
            if (trimmedInput) {
                onCommand(trimmedInput)
                setInput("")
            }
        }
    }

    return (
        <div className="flex items-center">
            <span className="mr-2 text-green-400">$</span>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent outline-none flex-grow text-green-400 w-full"
                autoFocus
                spellCheck="false"
                aria-label="Terminal input"
            />
        </div>
    )
}

export default CommandLine

