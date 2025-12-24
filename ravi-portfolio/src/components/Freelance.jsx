import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Clock, Shield } from 'lucide-react';
import { Link } from 'react-scroll';

const Freelance = () => {
    return (
        <section id="freelance" className="section-padding bg-darker relative overflow-hidden">
            <div className="container mx-auto relative z-10">
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                                Available for <br /><span className="text-primary">Freelance Projects</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-8">
                                Need a custom AI solution, a data analysis dashboard, or a predictive model?
                                I help startups and businesses turn data into a competitive advantage.
                            </p>

                            <div className="space-y-4 mb-8">
                                {[
                                    { icon: <Zap className="text-yellow-400" />, text: "Fast & Efficient Delivery" },
                                    { icon: <Shield className="text-green-400" />, text: "Production-Ready Clean Code" },
                                    { icon: <Clock className="text-blue-400" />, text: "Timely Communication" }
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="p-2 bg-darker rounded-lg border border-white/5">
                                            {item.icon}
                                        </div>
                                        <span className="font-medium text-gray-200">{item.text}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="contact" smooth={true} className="btn-primary inline-flex cursor-pointer">
                                Start a Project
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 gap-4"
                        >
                            <div className="glass-card p-6">
                                <h3 className="text-lg font-bold text-white mb-2">Services Accepted</h3>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> AI Model Development</li>
                                     <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Machine Learning & Data Science</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Data Analysis & Visualization</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Computer Vision Systems</li>
                                    <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Web Scraping & Automation</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Freelance;
