import logo from "../assets/Tarun_logo.png";
import { FaLinkedin,FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 mx-3 items-center">
            <img className="mx-2 w-10" src={logo} alt="Logo" />
        </div>
        <div className="m-8 flex items-start justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/tarunkumar-k-703931231/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
    </a>
    <a href="https://github.com/Tarun290604" target="_blank" rel="noopener noreferrer">
        <FaGithub />
    </a>
        </div>
    </nav>
  )
}

export default Navbar