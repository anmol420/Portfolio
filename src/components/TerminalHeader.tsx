import type React from "react"

const TerminalHeader: React.FC = () => {
    return (
        <div className="bg-gray-800 text-white p-2 h-8 flex items-center">
            <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm font-semibold">Terminal - Portfolio</div>
        </div>
    )
}

export default TerminalHeader;