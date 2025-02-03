import Terminal from "../components/Terminal"
import TerminalHeader from "../components/TerminalHeader"

export default function Home() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
            <div className="w-full max-w-[800px] h-[600px] bg-black rounded-lg shadow-2xl overflow-hidden border-4 border-gray-700">
                <TerminalHeader />
                <Terminal />
            </div>
        </main>
    )
}