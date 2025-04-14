import { Link } from 'react-router-dom';
import linkdin_logo from '../assets/linkdin.png'; 
import github_logo from '../assets/github.png';

export default function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#111827] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent opacity-50"></div>
            {/* Main Footer */}
            <div className="relative max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Ajay Mittapally</h3>
                        <p className="text-gray-400 max-w-xs">
                            A passionate full-stack developer focused on creating interactive and user-friendly applications.
                        </p>
                        <div className="flex space-x-4 items-center">
                            <a 
                                href="https://github.com/ajaymittapally/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <img 
                                    src={github_logo} 
                                    alt="GitHub" 
                                    className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/ajay-mittapally/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="group"
                            >
                                <img 
                                    src={linkdin_logo} 
                                    alt="LinkedIn" 
                                    className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Home</Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Resume</Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Contact</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400">
                                <span className="text-blue-500">Email:</span> ajaymittapally70@gmail.com
                            </li>
                            <li className="text-gray-400">
                                <span className="text-blue-500">Location:</span> United States
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {currentYear} Ajay Mittapally.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 text-sm transition-colors duration-300">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}