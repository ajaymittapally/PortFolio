
import profileAnime from "../../assets/profile-anime.png";
import { Link } from "react-router-dom";
import DownloadIcon from '@mui/icons-material/Download';
import resume from "../../assets/resume.pdf";

export default function Home(){
    return(
    <section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative">
           
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 z-10 px-4">
                <div className="text-center md:text-left">
                    <h1 
                        className="font-tanker text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Ajay Mittapally
                    </h1>
                    <p className="font-gambetta text-gray-400 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
                    With 3.5+ years of slingin’ code and building cool stuff using the MERN stack, I turn caffeine and ideas into sleek, high-performing web apps. From crafting pixel-perfect React UIs to wrangling backend logic with Node.js, I do it all — clean, fast, and with style. Whether it’s frontend flair or backend brains, I’m all about bringing awesome experiences to life on the web. Let’s build something epic!
                    </p>
                    
                    <div className="flex justify-center md:justify-start space-x-4">
                        <Link 
                            to="/projects" 
                            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                        >
                            View Projects
                        </Link>
                        <Link
                            to="/contact"
                            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                        >
                            Contact Me
                        </Link>
                       <a href={resume} download='resume'>
                        <button  className=" flex items-center border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
                            hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                            Resume <span className="text-white text-[8px] ml-2 w-1.5"><DownloadIcon/></span>
                        </button>
                       </a>
                    </div>
                </div>
                
                <div className="relative p-1">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-30
                        animate-[gradientAnimation_3s_ease-in-out_infinite] bg-[length:200%_200%]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 animate-[spin_8s_linear_infinite]" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-blue-600/20 via-transparent to-cyan-500/20 animate-[spin_12s_linear_infinite]" />
                    </div>
                    <div className="absolute inset-0 rounded-full animate-[pulse_3s_ease-in-out_infinite] bg-blue-500/5" />
                    <img 
                        src={profileAnime} 
                        alt="Profile Anime Style" 
                        className="relative w-[300px] h-[300px] rounded-full object-cover shadow-xl 
                        transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    />
                </div>
            </div>
            
    </section>)
}