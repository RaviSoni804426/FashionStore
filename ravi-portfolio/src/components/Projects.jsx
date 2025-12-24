import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
    {
        title: "AstroBot",
        subtitle: "AI-Powered Space & Weather Assistant",
        desc: "Developed an AI chatbot providing real-time space and weather insights using ISRO MOSDAC data. Implemented RAG with FAISS and web crawling.",
        stack: ["LLMs", "RAG", "FAISS", "Web AI"],
        category: "Generative AI",
        color: "from-purple-500 to-indigo-500"
    },
    {
        title: "Traffic Prediction",
        subtitle: "PoC using LSTM/RNN",
        desc: "Designed a proof-of-concept deep learning model to forecast real-time traffic patterns using sequential data for congestion analysis.",
        stack: ["Deep Learning", "LSTM", "RNN", "Time Series"],
        category: "Deep Learning",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Person Presence Analysis",
        subtitle: "Computer Vision System",
        desc: "Built a model to detect and count people in video frames. Used for surveillance analytics and attendance systems.",
        stack: ["Computer Vision", "Video Analytics", "OpenCV"],
        category: "Computer Vision",
        color: "from-red-500 to-orange-500"
    },
    {
        title: "Google Play Store Analysis",
        subtitle: "EDA & Feature Engineering",
        desc: "Performed extensive data cleaning and exploratory analysis to identify key factors influencing app ratings and installs.",
        stack: ["Python", "SQL", "EDA", "Visualization"],
        category: "Data Analysis",
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "D2C E-commerce Plan",
        subtitle: "Business Strategy",
        desc: "Created a complete business strategy and website prototype for an ethnic wear brand using competitor data analysis.",
        stack: ["Market Analysis", "Strategy", "Web Dev"],
        category: "Business",
        color: "from-yellow-500 to-orange-500"
    },
    {
        title: "Spaceship Titanic",
        subtitle: "Kaggle Competition",
        desc: "Built and optimized classification models using feature transformation and hyperparameter tuning techniques.",
        stack: ["Machine Learning", "Classification", "Kaggle"],
        category: "Machine Learning",
        color: "from-pink-500 to-rose-500"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding bg-dark">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of my technical expertise in solving real-world problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-card rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors group flex flex-col h-full"
                        >
                            <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
                            <div className="p-6 flex flex-col h-full">
                                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">{project.category}</span>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-primary text-sm font-medium mb-4">{project.subtitle}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.stack.map((tech, idx) => (
                                        <span key={idx} className="text-xs font-mono px-2 py-1 bg-darker rounded text-gray-300 border border-white/5">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 mt-auto">
  {/* View Code */}
  <a
    href="https://github.com/ravisoni804426"   // 👉 your GitHub
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
  >
    View Code <Github className="w-4 h-4" />
  </a>

  {/* Live Demo */}
  <a
    href=" "
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors"
  >
    Live Demo <ExternalLink className="w-4 h-4" />
  </a>
</div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
