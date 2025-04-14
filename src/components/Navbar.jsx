import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import animeprofile from "../assets/profile-anime.png"

export default function Navbar({menuOpen,setMenuOpen}){
    const location = useLocation();
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);
    
    useEffect(()=>{
        document.body.style.overflow = menuOpen || isImageEnlarged ? "hidden" : "";
    },[menuOpen, isImageEnlarged]);

    const isActive = (path) => location.pathname === path;

    const handleImageClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsImageEnlarged(true);
    };

    return(
        <>
            {isImageEnlarged && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
                    onClick={() => setIsImageEnlarged(false)}
                >
                    <img 
                        src={animeprofile} 
                        alt="Profile" 
                        className="max-w-[80vw] max-h-[80vh] rounded-2xl shadow-2xl cursor-pointer transform transition-all duration-300 scale-100 hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
            <nav className="fixed top-0 w-full z-40 bg-gradient-to-r from-black/90 to-black/80 backdrop-blur-lg border-b border-white/10 shadow-lg">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center space-x-3 font-mono text-xl font-bold text-white group">
                            <div className="relative cursor-pointer" onClick={handleImageClick}>
                                <img 
                                    src={animeprofile} 
                                    alt="user_img" 
                                    className="w-[30px] h-[30px] rounded-full ring-2 ring-blue-500/50 group-hover:ring-blue-500 transition-all duration-300 object-cover"
                                />
                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full ring-2 ring-black"></div>
                            </div>
                            <Link to="/" className="group-hover:text-blue-500 transition-colors duration-300">
                                Ajay <span className="text-blue-500 group-hover:text-white transition-colors duration-300">Mittapally</span>
                            </Link>
                        </div>
                        <div 
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden group" 
                        onClick={()=>setMenuOpen(prev=>!prev)}>
                            <div className="w-full h-full flex items-center justify-center text-white group-hover:text-blue-500 transition-colors duration-300">
                                &#9776;
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <Link 
                                to="/" 
                                className={`relative text-gray-300 hover:text-white transition-colors duration-300 group
                                ${isActive('/') ? 'text-white' : ''}`}>
                                Home
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full
                                ${isActive('/') ? 'w-full' : ''}`}></span>
                            </Link>
                            <Link 
                                to="/about" 
                                className={`relative text-gray-300 hover:text-white transition-colors duration-300 group
                                ${isActive('/about') ? 'text-white' : ''}`}>
                                About
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full
                                ${isActive('/about') ? 'w-full' : ''}`}></span>
                            </Link>
                            <Link 
                                to="/projects" 
                                className={`relative text-gray-300 hover:text-white transition-colors duration-300 group
                                ${isActive('/projects') ? 'text-white' : ''}`}>
                                Projects
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full
                                ${isActive('/projects') ? 'w-full' : ''}`}></span>
                            </Link>
                            <Link 
                                to="/contact" 
                                className={`relative text-gray-300 hover:text-white transition-colors duration-300 group
                                ${isActive('/contact') ? 'text-white' : ''}`}>
                                Contact
                                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full
                                ${isActive('/contact') ? 'w-full' : ''}`}></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}