import { useState, useRef } from 'react';
import resumeData from "../../resume-json.json";

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const cardRefs = useRef({});

    // Handle mouse enter with a more stable approach
    const handleMouseEnter = (index) => {
        setHoveredProject(index);
    };

    // Handle mouse leave with a more stable approach
    const handleMouseLeave = (index) => {
        setHoveredProject(null);
    };

    return (
        <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-[#0A1119] via-[#111827] to-[#0A1119]">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white bg-clip-text">
                    Featured Projects
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="h-full">
                            {/* Wrapper div with fixed height to prevent layout shifts */}
                            <div 
                                ref={el => cardRefs.current[index] = el}
                                className={`group h-full relative overflow-hidden rounded-xl
                                    md:col-span-1 md:row-span-1
                                    cursor-pointer transition-all duration-300 ease-in-out
                                    bg-gradient-to-br from-[#1a1f2e]/80 to-[#2a2f3e]/80 backdrop-blur-sm
                                    border border-white/10
                                    ${hoveredProject === index ? 
                                        'shadow-lg shadow-purple-500/20 border-purple-500/30' : 
                                        'hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]'}`}
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={() => handleMouseLeave(index)}
                                style={{
                                    transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                                    zIndex: hoveredProject === index ? 30 : 10,
                                    transformOrigin: 'center center'
                                }}
                            >
                                {/* Content Container */}
                                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                                    <div>
                                        <h3 className={`text-xl font-semibold mb-3 transition-colors duration-300
                                            ${hoveredProject === index ? 'text-purple-400' : 'text-white group-hover:text-purple-400'}`}>
                                            {project.name}
                                        </h3>
                                        
                                        <div className="relative">
                                            {/* Static container for content to prevent layout shifts */}
                                            <div className="min-h-[4.5rem]">
                                                {/* Preview Content - only shown when not hovered */}
                                                {hoveredProject !== index && (
                                                    <div className="transition-opacity duration-300">
                                                        {Array.isArray(project.description) ? (
                                                            <p className="text-gray-300 text-sm line-clamp-2">
                                                                {project.description[0]}
                                                            </p>
                                                        ) : (
                                                            <p className="text-gray-300 text-sm line-clamp-2">
                                                                {project.description}
                                                            </p>
                                                        )}
                                                    </div>
                                                )}

                                                {/* Full Content - only shown when hovered */}
                                                {hoveredProject === index && (
                                                    <div className="transition-opacity duration-300 overflow-y-auto max-h-32">
                                                        {Array.isArray(project.description) ? (
                                                            <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm">
                                                                {project.description.map((desc, idx) => (
                                                                    <ul>
                                                                    <li key={idx} className="line-clamp-2">{desc}</li>
                                                                    </ul>
                                                                ))}
                                                            </ul>
                                                        ) : (
                                                            <p className="text-gray-200 text-sm">{project.description}</p>
                                                        )}
                                                        
                                                        {project.components && (
                                                            <ul className="list-disc list-inside space-y-1 mt-2 text-gray-200 text-sm">
                                                                {project.components.map((component, idx) => (
                                                                    <li key={idx} className="line-clamp-2">{component}</li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technologies Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-4">
                                        {getProjectTechnologies(project.name).map((tech, idx) => (
                                            <span key={idx} 
                                                className={`px-2 py-0.5 rounded text-xs transition-all duration-300
                                                    ${hoveredProject === index ? 
                                                        'bg-purple-500/15 text-purple-300' : 
                                                        'bg-purple-500/5 text-purple-400 hover:bg-purple-500/10'}`}>
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Enhanced Hover Effect Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent
                                    transition-opacity duration-300
                                    ${hoveredProject === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}/>
                                    
                                {/* Additional overlay to improve text visibility when expanded */}
                                {hoveredProject === index && (
                                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] -z-10"></div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Helper function to determine technologies based on project name
function getProjectTechnologies(projectName) {
    const techMap = {
        'GERRNCART E-commerce Shopping site': ['MongoDB', 'Express.js', 'React', 'Node.js', 'TailwindCSS', 'Stripe'],
        'YouTube Clone': ['React', 'Redux', 'YouTube API', 'CSS Grid', 'Flexbox'],
        'Personal Portfolio Website': ['React', 'Node.js', 'MongoDB', 'Express.js', 'CSS Grid'],
        'Reusable React Components': ['React', 'CSS', 'LocalStorage'],
        'Chef Claude AI': ['React', 'Express.js', 'Node.js', 'TailwindCSS', 'Claude AI'],
        'Deep Learning Model for CIFAR-100 Image Classification': ['Python', 'TensorFlow', 'Deep Learning', 'VGG16', 'ResNet'],
        'AWS S3 Automation Using Bash': ['AWS', 'S3', 'Bash', 'CLI', 'Automation']
    };
    
    return techMap[projectName] || [];
}