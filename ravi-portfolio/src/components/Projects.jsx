import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
   {
    title: "AI Resume Screener",
    subtitle: "Automated Resume Screening System",
    desc: "Built an AI-powered system to screen and rank resumes based on job descriptions using NLP and semantic similarity techniques.",
    stack: ["Python", "NLP", "Machine Learning", "Scikit-learn"],
    category: "Artificial Intelligence",
    color: "from-purple-500 to-indigo-500"
},
{
    title: "End to End Chatbot",
    subtitle: "Full Stack Conversational AI",
    desc: "Developed a complete chatbot solution with backend APIs, LLM integration, and deployment pipeline.",
    stack: ["LLMs", "FastAPI", "React", "Deployment"],
    category: "Generative AI",
    color: "from-blue-500 to-cyan-500"
},
{
    title: "GenAI Model from Scratch",
    subtitle: "Custom Generative AI Implementation",
    desc: "Implemented a foundational Generative AI model from scratch covering embeddings, attention, and transformer concepts.",
    stack: ["Transformers", "Deep Learning", "PyTorch", "LLMs"],
    category: "Deep Learning",
    color: "from-pink-500 to-rose-500"
},
{
    title: "Mutual Fund Analysis",
    subtitle: "Financial Data Analysis Project",
    desc: "Analyzed mutual fund datasets to evaluate fund performance, risk metrics, and return trends using statistical techniques.",
    stack: ["Python", "Pandas", "EDA", "Visualization"],
    category: "Data Analysis",
    color: "from-green-500 to-emerald-500"
},
{
    title: "RAG From Scratch",
    subtitle: "Retrieval-Augmented Generation System",
    desc: "Built a Retrieval-Augmented Generation pipeline using embeddings, vector databases, and LLM integration.",
    stack: ["RAG", "FAISS", "LLMs", "Vector DB"],
    category: "Generative AI",
    color: "from-indigo-500 to-purple-500"
},
{
    title: "Real Estate Price Prediction",
    subtitle: "Regression Based ML Model",
    desc: "Developed a machine learning regression model to predict real estate prices based on location and property features.",
    stack: ["Machine Learning", "Regression", "Feature Engineering"],
    category: "Machine Learning",
    color: "from-yellow-500 to-orange-500"
},
{
    title: "Stock Price Prediction",
    subtitle: "Time Series Forecasting",
    desc: "Built a predictive model using time series analysis and LSTM networks to forecast stock price movements.",
    stack: ["LSTM", "Time Series", "Deep Learning", "Finance"],
    category: "Deep Learning",
    color: "from-red-500 to-orange-500"
},
{
    title: "Voice AI Assistant",
    subtitle: "Speech-Based Intelligent Assistant",
    desc: "Created a voice-enabled AI assistant with speech recognition, NLP processing, and text-to-speech response system.",
    stack: ["Speech Recognition", "NLP", "Python", "APIs"],
    category: "Artificial Intelligence",
    color: "from-cyan-500 to-blue-500"
},
{
    title: "Walmart Sales Data Analysis",
    subtitle: "SQL EDA Project",
    desc: "Performed SQL-based exploratory data analysis on Walmart sales data to uncover revenue trends and business insights.",
    stack: ["SQL", "Data Cleaning", "EDA", "Business Insights"],
    category: "Data Analysis",
    color: "from-emerald-500 to-green-500"
},
// {
//     title: "YouTube Analysis",
//     subtitle: "Content Performance Analytics",
//     desc: "Analyzed YouTube channel data to identify engagement patterns, growth metrics, and content optimization strategies.",
//     stack: ["Python", "SQL", "Visualization", "Analytics"],
//     category: "Data Analysis",
//     color: "from-rose-500 to-pink-500"
// }
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
    href="https://github.com/RaviSoni804426/Projects/tree/main/projects"   // 👉 your GitHub
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
