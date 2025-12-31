import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Cpu } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="section-padding bg-dark">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">
                            Solving Complex Problems with <span className="text-primary">Data & AI</span>
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            I am a Data Scientist and Machine Learning Engineer passionate about transforming raw data into actionable business insights. My expertise lies in building scalable ML models, optimizing deep learning algorithms, and deploying AI solutions that drive real-world impact.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            With a strong freelancing mindset, I focus on delivering clean, efficient, and production-ready code. Whether it&apos;s Computer Vision for surveillance or Predictive Analytics for traffic congestion, I turn abstract challenges into concrete technical solutions.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 bg-card rounded-xl border border-white/5">
                                <h4 className="text-3xl font-bold text-white mb-1">10+</h4>
                                <p className="text-gray-400 text-sm">Projects Completed</p>
                            </div>
                            <div className="p-4 bg-card rounded-xl border border-white/5">
                                <h4 className="text-3xl font-bold text-white mb-1">01+</h4>
                                <p className="text-gray-400 text-sm">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-4"
                    >
                        {[
                            { icon: <Terminal className="text-blue-400" />, title: "Machine Learning", desc: "Regression, Classification, Clustering, Feature Engineering, Model Evaluation, Hyperparameter Tuning" },
                            { icon: <Cpu className="text-purple-400" />, title: "Deep Learning", desc: "Neural Networks, CNNs, RNNs, LSTMs, TensorFlow, PyTorch, Model Optimization" },
                            { icon: <Database className="text-green-400" />, title: "Data Science", desc: "SQL, Data Analysis, ETL Pipelines, Data Cleaning, Model Training, Model Deployment, Data Visualization" }
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4 p-6 glass-card hover:bg-white/5 transition-colors">
                                <div className="mt-1 p-3 bg-darker rounded-lg h-fit">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
