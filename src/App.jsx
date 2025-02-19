import React, { useRef } from 'react'
import { HiHome, HiBriefcase, HiLightBulb, HiUserCircle, HiMail, HiCode } from "react-icons/hi";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'


const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const technologiesRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <>

      <div className='overflow-x-hidden  text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
        <div className='fixed top-0 -z-10 h-full w-full'>
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
          </div> </div>
          <nav className="fixed top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-70 text-white py-4 px-2 rounded-full flex flex-col space-y-4 items-center shadow-lg z-50 md:space-y-6 md:bg-opacity-100 md:left-8">
  <button onClick={() => scrollToSection(heroRef)} className="text-white hover:text-orange-400">
    <HiHome size={24} />
  </button>
  <button onClick={() => scrollToSection(aboutRef)} className="text-white hover:text-gray-400">
    <HiUserCircle size={24} />
  </button>
  <button onClick={() => scrollToSection(technologiesRef)} className="text-white hover:text-gray-400">
    <HiCode size={24} />
  </button>
  <button onClick={() => scrollToSection(experienceRef)} className="text-white hover:text-gray-400">
    <HiBriefcase size={24} />
  </button>
  <button onClick={() => scrollToSection(projectsRef)} className="text-white hover:text-gray-400">
    <HiLightBulb size={24} />
  </button>
  <button onClick={() => scrollToSection(contactRef)} className="text-white hover:text-gray-400">
    <HiMail size={24} />
  </button>
</nav>


        <div className='container mx-auto px-8'>
          <Navbar />
          <div ref={heroRef}>
            <Hero />
          </div>
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={technologiesRef}>
            <Technologies />
          </div>
          <div ref={experienceRef}>
            <Experience />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </>
  )
}

export default App