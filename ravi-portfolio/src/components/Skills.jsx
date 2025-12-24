import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Activity, Globe, Eye } from 'lucide-react';

const skillCategories = [
    {
        title: "Programming & Tools",
        icon: <Code className="w-6 h-6 text-blue-400" />,
        skills: ["Python", "SQL", "C++", "Git", "GitHub", "VS Code", "Jupyter"]
    },
    {
        title: "Machine Learning",
        icon: <Brain className="w-6 h-6 text-purple-400" />,
        skills: ["Regression", "Classification", "Clustering", "Model Evaluation", "Scikit-Learn"]
    },
    {
        title: "Deep Learning",
        icon: <Activity className="w-6 h-6 text-pink-400" />,
        skills: ["Neural Networks", "RNN", "LSTM", "Time Series", "TensorFlow/Keras"]
    },
    {
        title: "Computer Vision",
        icon: <Eye className="w-6 h-6 text-cyan-400" />,
        skills: ["Object Detection", "Person Counting", "Video Analytics", "OpenCV"]
    },
    {
        title: "Data Analysis",
        icon: <Database className="w-6 h-6 text-green-400" />,
        skills: ["Pandas", "NumPy", "EDA", "Feature Engineering", "Power BI", "Matplotlib"]
    },
    {
        title: "Web for ML",
        icon: <Globe className="w-6 h-6 text-orange-400" />,
        skills: ["HTML", "CSS", "JavaScript", "FastAPI", "Streamlit", "React"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section-padding bg-darker relative">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit for building end-to-end data science and AI solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-6 hover:border-primary/50 transition-colors group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-darker rounded-lg border border-white/5 group-hover:border-primary/50 transition-colors">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm font-medium border border-white/5 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
