import profileAnime from "../../assets/profile-anime.png";
import { Link } from "react-router-dom";
import resumeJson from "../../resume-json.json";


export default function Home(){
    return(
    <section 
        id="home" 
        className="min-h-screen flex items-center justify-center pt-16 sm:pt-0 relative">
           
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 z-10 pt-24 px-4">
                <div className="text-center md:text-left">
                    <h1 
                        className="font-tanker text-4xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent leading-tight">
                        Hi, I'm Ajay Mittapally
                    </h1>
                    <h2 className="text-lg md:text-xl text-blue-400 font-medium mb-4">
                    <span className="block md:inline">Full Stack Developer</span>
                    <span className="block md:inline md:ml-4">React | Node | MongoDB</span>
                    </h2>
                    <p className="font-gambetta text-white/80 text-lg md:text-xl mb-8 max-w-md md:max-w-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: resumeJson.HomeInfo }}>
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
                       
                    </div>
                </div>
                
                <div className="relative  p-1 mt-8 sm:mt-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-30
                        animate-[gradientAnimation_3s_ease-in-out_infinite] bg-[length:200%_200%]">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 animate-[spin_8s_linear_infinite]" />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-blue-600/20 via-transparent to-cyan-500/20 animate-[spin_12s_linear_infinite]" />
                    </div>
                    <div className="absolute inset-0 rounded-full animate-[pulse_3s_ease-in-out_infinite] bg-blue-500/5" />
                    <img 
                        src={profileAnime} 
                        alt="Profile Anime Style" 
                        className="mb-3 relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full object-cover shadow-xl 
                        transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    />
                </div>
            </div>
            
    </section>)
}