function Navbar() {
    return (
        <div className='bg-[#ffffff08] text-white flex items-center justify-around h-12 w-[50%] backdrop-filter backdrop-blur-3xl   fixed top-10 rounded-3xl border-white border py-8 z-20'>
            <div className='text-2xl font-bold'>Portfolio</div>
            <div className='flex space-x-4'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About</a>
                <a href="#projects" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar