import Navbar from "./navbar/navbar"

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="relative w-full h-20 bg-black text-white flex items-center justify-center">
        <Navbar />
      </div>
      <div className="bg-gradient-to-br from-black via-gray-950 to-black text-white min-h-screen w-screen flex justify-center">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-72 h-72 opacity-10 rounded-full blur-3xl floating-animation"></div>
          <div className="absolute top-40 right-32 w-96 h-96 opacity-10 rounded-full blur-3xl floating-animation" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="w-[50%] flex flex-col items-center text-center border-2">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus facere ratione tempore eligendi recusandae consectetur assumenda quia architecto, id totam! Quo aut animi exercitationem. Cum dolores est totam suscipit libero.</h1>
        </div>
      </div>
    </div>
  )
}

export default App
