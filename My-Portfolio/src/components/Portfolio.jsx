import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: "AstroBot", category: "AI Assistant", desc: "AI-Powered Space & Weather Assistant using LLMs, RAG, and ISRO MOSDAC data." },
    { title: "Traffic Prediction", category: "Deep Learning", desc: "LSTM/RNN model to forecast real-time traffic patterns and congestion." },
    { title: "Person Presence", category: "Computer Vision", desc: "System to detect and count people in video frames for surveillance." },
    { title: "Play Store Analysis", category: "EDA", desc: "EDA & Feature Engineering on app data to identify key factors influencing ratings." },
    { title: "D2C E-commerce Plan", category: "Business Strategy", desc: "Business strategy and website prototype for an ethnic wear brand." },
    { title: "Spaceship Titanic", category: "Kaggle", desc: "Classification model using feature transformation and tuning." }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="section-padding bg-white">
            <div className="container">
                <motion.div
                    className="text-center mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <small className="text-uppercase text-primary-custom fw-bold">Creative Work</small>
                    <h3 className="fw-bold mt-2 display-6">Recent Projects</h3>
                </motion.div>

                <div className="row justify-content-center g-4">
                    {projects.map((project, index) => (
                        <div className="col-md-4 col-sm-6" key={index}>
                            <motion.div
                                className="glass-card h-100 p-4 bg-light text-center d-flex flex-column justify-content-center"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <span className="badge bg-primary-custom mb-3 align-self-center">{project.category}</span>
                                <h4 className="fw-bold mb-3">{project.title}</h4>
                                <p className="text-muted small">{project.desc}</p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
