import Navbar from "./navbar/navbar"

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-950 to-black text-white min-h-screen w-screen flex flex-col items-center z-10">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-32 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="fixed top-0 left-0 w-screen h-40 flex items-center  justify-center z-20">

        <Navbar />
        </div>
      <div className=" mt-40 h-screen w-screen  flex  justify-center ">
        
        <div className="w-[50%] flex flex-col items-center  text-center ">
          <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus facere ratione tempore eligendi recusandae consectetur assumenda quia architecto, id totam! Quo aut animi exercitationem. Cum dolores est totam suscipit libero.</h1>
        </div>
      </div>
    </div>
  )
}

export default App
