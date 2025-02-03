import type React from "react"

interface OutputProps {
    content: string
    isCommand?: boolean
}

const Output: React.FC<OutputProps> = ({ content, isCommand }) => {
    if (isCommand) {
        return <div className="text-yellow-400">$ {content}</div>
    }
    return <div className="text-green-400 whitespace-pre-wrap">{content}</div>
};

export default Output;