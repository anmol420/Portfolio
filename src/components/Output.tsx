import type React from "react"

interface OutputProps {
    content: string
}

const Output: React.FC<OutputProps> = ({ content }) => {
    return <div className="whitespace-pre-wrap mb-2">{content}</div>
}

export default Output

