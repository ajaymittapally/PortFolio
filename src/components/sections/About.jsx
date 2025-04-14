import resumeData from "../../resume-json.json";

export default function About() {
    return (
        <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-[#0A1119] via-[#111827] to-[#0A1119]">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white bg-clip-text ">
                    About Me
                </h2>
                
                
                {/* Summary Card */}
                <div className="relative overflow-hidden rounded-xl p-6 md:p-8 mb-12
                    bg-gradient-to-br from-[#1a1f2e]/80 to-[#2a2f3e]/80 backdrop-blur-sm
                    border border-white/10 hover:border-purple-500/20
                    hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]
                    transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"/>
                    <p className="text-gray-300 text-lg leading-relaxed text-gambetta">
                        I'm Ajay Mittapally, a full-stack Software Engineer with a Master's in Computer Science from Kennesaw State University and 3.5+ years of experience building scalable web applications. I specialize in React.js, Node.js, Java Spring Boot, and Python, with strong skills in AWS, microservices, and performance optimization.
                        Currently, I work at Quartet AI, where I focus on modern web architecture using Next.js and React Query. My past roles at Datics and Tata Consultancy Services involved designing REST APIs, optimizing UI performance, and deploying cloud-native solutions.
                        Outside of work, I love building side projects—from e-commerce platforms to AI-powered tools—and continuously exploring new tech.

                    </p>
                </div>

                {/* Skills Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                        <span className="bg-purple-500/20 w-2 h-8 rounded-full text-tanker"></span>
                        Technical Skills
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {Object.entries(resumeData.competencies).map(([category, skills]) => (
                            <div key={category} 
                                className="group relative overflow-hidden rounded-xl p-6
                                bg-gradient-to-br from-[#1a1f2e]/80 to-[#2a2f3e]/80 backdrop-blur-sm
                                border border-white/10 hover:border-purple-500/20
                                hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]
                                transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                <h4 className="text-xl font-semibold mb-4 text-purple-600 capitalize group-hover:text-purple-300 transition-colors">
                                    {category.replace(/([A-Z])/g, ' $1').trim()}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skills.map((skill) => (
                                        <span key={skill} 
                                            className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm
                                            hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 cursor-default">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                        <span className="bg-purple-500/20 w-2 h-8 rounded-full text-tanker"></span>
                        Work Experience
                    </h3>
                    <div className="space-y-6">
                        {resumeData.workExperience.map((exp, index) => (
                            <div key={index} 
                                className="group relative overflow-hidden rounded-xl p-8
                                bg-gradient-to-br from-[#1a1f2e]/80 to-[#2a2f3e]/80 backdrop-blur-sm
                                border border-white/10 hover:border-purple-500/20
                                hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]
                                transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                <div className="flex flex-wrap justify-between items-start mb-6">
                                    <div>
                                        <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                                            {exp.position || exp.positions?.[0].title}
                                        </h4>
                                        <p className="text-purple-400 mt-1">{exp.company}</p>
                                        <p className="text-gray-400 mt-1">{exp.location}</p>
                                    </div>
                                    <span className="text-gray-400 bg-purple-500/10 px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
                                        {exp.duration || exp.positions?.[0].duration}
                                    </span>
                                </div>
                                <ul className="list-none space-y-3 text-gray-300">
                                    {(exp.responsibilities || exp.positions?.[0].responsibilities).map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-purple-400 mt-1.5">•</span>
                                            <span className="text-gray-300">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                                {exp.positions?.slice(1).map((position, idx) => (
                                    <div key={idx} className="mt-6 pt-6 border-t border-purple-500/10">
                                        <div className="flex justify-between items-start mb-4">
                                            <h5 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                                                {position.title}
                                            </h5>
                                            <span className="text-gray-400 bg-purple-500/10 px-3 py-1 rounded-full text-sm">
                                                {position.duration}
                                            </span>
                                        </div>
                                        <ul className="list-none space-y-3">
                                            {position.responsibilities.map((resp, respIdx) => (
                                                <li key={respIdx} className="flex items-start gap-2">
                                                    <span className="text-purple-400 mt-1.5">•</span>
                                                    <span className="text-gray-300">{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education & Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                            <span className="bg-purple-500/20 w-2 h-8 rounded-full"></span>
                            Education
                        </h3>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} 
                                className="group relative overflow-hidden rounded-xl p-6 mb-6
                                bg-gradient-to-br from-[#1a1f2e]/80 to-[#2a2f3e]/80 backdrop-blur-sm
                                border border-white/10 hover:border-purple-500/20
                                hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]
                                transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                                <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                                    {edu.degree} in {edu.major}
                                </h4>
                                <p className="text-purple-400">{edu.institution}</p>
                                <p className="text-gray-400 mt-1">{edu.location}</p>
                                <p className="text-gray-400 mt-1">{edu.graduationDate}</p>
                                {edu.gpa && (
                                    <p className="text-gray-300 mt-2 bg-purple-500/10 px-3 py-1 rounded-full text-sm inline-block">
                                        GPA: {edu.gpa}
                                    </p>
                                )}
                                <div className="mt-4">
                                    <p className="text-gray-400 font-medium mb-3">Key Coursework:</p>
                                    <div className="flex flex-wrap gap-2">
                                        {edu.courseWork.map((course, idx) => (
                                            <span key={idx} 
                                                className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm
                                                hover:bg-purple-500/20 hover:text-purple-300 transition-all duration-300 cursor-default">
                                                {course}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-2">
                            <span className="bg-purple-500/20 w-2 h-8 rounded-full"></span>
                            Achievements & Certifications
                        </h3>
                        <div className="group relative overflow-hidden rounded-xl p-6
                            bg-gradient-to-br from-[#1a1f2e]/80 to-[#2a2f3e]/80 backdrop-blur-sm
                            border border-white/10 hover:border-purple-500/20
                            hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]
                            transition-all duration-300">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
                            <ul className="space-y-4">
                                {resumeData.achievementsAndCertifications.map((achievement, index) => (
                                    <li key={index} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
                                        <span className="text-purple-400 mt-1.5 group-hover/item:text-purple-300">•</span>
                                        <span className="text-gray-300 group-hover/item:text-gray-200 transition-colors">
                                            {achievement}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}