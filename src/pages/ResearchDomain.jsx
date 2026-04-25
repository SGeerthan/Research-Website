import React, { useState } from 'react';

const ResearchDomain = () => {
    const [activeTab, setActiveTab] = useState('Background');

    const researchData = [
        {
            title: 'Background',
            content: 'Traditional traffic signal control systems rely on pre-timed or fixed-cycle schedules, which fail to account for the dynamic nature of urban traffic. This leads to increased congestion, particularly during peak hours, and poses significant challenges for emergency services that require immediate right-of-way.'
        }, {
            title: 'Literature survey',
            content: 'Existing literature primarily focuses on single-intersection control and simulation-only reinforcement learning using isolated vehicle counts. Current studies lack real-world computer vision integration and fail to address coordinated multi-agent networks capable of simultaneously managing emergency preemption, transit priority, and pedestrian safety.'
        },
        {
            title: 'Research Gap',
            content: 'Current research lacks a unified framework integrating real-time computer vision with decentralized MARL. Crucially, existing methods fail to simultaneously optimize emergency vehicle preemption, public transit priority, and adaptive pedestrian safety across coordinated multi-intersection urban traffic networks.'
        },
        {
            title: 'Research Problem',
            content: (
                <div className="space-y-6">
                    <p>Emergency vehicles frequently face delays at congested urban intersections, leading to critical time loss during life-saving missions. This stems from four major issues:</p>
                    <div className="grid sm:grid-cols-2 gap-6 mt-4">
                        {[
                            { t: 'Traffic Congestion', d: 'Current traffic systems cannot adapt in real time, causing long delays and inefficient vehicle movement.' },
                            { t: 'Lack of Intelligent Signal Control', d: 'Traditional traffic lights use fixed timers and do not respond to actual road conditions.' },
                            { t: 'Emergency Vehicle Delays', d: 'Ambulances and fire trucks get stuck in traffic, increasing response time and risk to lives.' },
                            { t: 'Poor Traffic Coordination', d: 'Nearby intersections do not communicate effectively, leading to unbalanced traffic flow and bottlenecks.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-surface-custom/50 p-4 rounded-xl border border-surface-border">
                                <h4 className="text-secondary-custom font-bold mb-1 text-base">{item.t}</h4>
                                <p className="text-text-dim text-sm leading-snug">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        },
        {
            title: 'Research Objectives',
            content:'The primary goal of this research is to create an intelligent traffic signal control system that uses Multi-Agent Reinforcement Learning (MARL) to dynamically optimize traffic flow depending on current conditions while maintaining efficiency and safety. By modeling each junction as an independent agent, the study especially aims to use a decentralized MARL framework to promote coordinated decision making. A priority-based traffic system that considers public transportation and provides guaranteeing effective and secure traveling for pedestrians. '
        },
        {
            title: 'Methodology',
            content: (
                <div className="space-y-6">
                    <p>Current research lacks a unified framework integrating real-time computer vision with decentralized MARL.This stems from four major issues:</p>
                    <div className="grid sm:grid-cols-2 gap-6 mt-4">
                        {[
{ t: 'Centralized Training and Decentralized Execution through VDN', d: 'Using a CTDE paradigm in SUMO, DQN-based agents process multimodal inputs. Value Decomposition Networks (VDN) factorize global Q-values, enabling independent junctions to learn cooperative signal policies balancing throughput and safety.' },
{ t: 'Vehicle and Accident Detection Methodology', d: 'YOLOv11 processes camera frames for real-time vehicle classification. Detections are spatially aggregated at lane and junction levels to compute congestion metrics, which map directly into the MARL state vector.' },
{ t: 'Emergency Vehicle Detection Methodology', d: 'Multimodal fusion combines YOLOv8 vision, HSV siren light detection, YAMNet audio classification, and EasyOCR. This redundant cross-modal validation ensures reliable emergency identification for autonomous signal preemption under adverse conditions.' },
{ t: 'Pedestrian Detection Methodology', d: 'Pedestrians are classified by vulnerability (e.g., Elder, Mobility-Impaired). A change-detection persistence mechanism filters redundant static detections, injecting only dynamic crossing demands into the MARL state to adapt signal phases.' }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-surface-custom/50 p-4 rounded-xl border border-surface-border">
                                <h4 className="text-secondary-custom font-bold mb-1 text-base">{item.t}</h4>
                                <p className="text-text-dim text-sm leading-snug">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )
        }
    ];

    const technologies = [
        { logo: 'https://react.dev/favicon.ico', name: 'React', desc: 'Frontend UI development' },
        { logo: 'https://tailwindcss.com/favicons/favicon-32x32.png', name: 'Tailwind CSS', desc: 'Modern utility-first CSS' },
        { logo: 'https://www.eclipse.dev/sumo/images/sumo_twitter.jpg', name: 'SUMO', desc: 'Simulation of Urban Mobility - microscopic traffic simulation' },
        { logo: 'https://www.python.org/static/favicon.ico', name: 'Python', desc: 'AI/ML backend services' },
        { logo: 'https://vectorseek.com/wp-content/uploads/2023/02/Tensorflow-Logo-Vector.jpg', name: 'TensorFlow', desc: 'Model training & evaluation' },
        { logo: 'https://www.mongodb.com/favicon.ico', name: 'MongoDB', desc: 'NoSQL database for analytics' },
        { logo: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg', name: 'FastAPI', desc: 'Lightweight Python backend' },
        { logo: 'https://vitejs.dev/logo.svg', name: 'Vite', desc: 'Blazing fast dev server for React' },
        { logo: 'https://www.microsoft.com/favicon.ico', name: 'Azure', desc: 'Cloud hosting and deployment (CI/CD)' },
        { logo: 'https://github.githubassets.com/pinned-octocat.svg', name: 'GitHub Actions', desc: 'Automation workflows for building, testing, deploying' },
        { logo: 'https://static.vecteezy.com/system/resources/previews/048/312/672/original/ocr-icon-black-line-art-logo-vector.jpg', name: 'Paddle OCR', desc: 'Text extraction from scanned content & images' },
        { logo: 'https://tse4.mm.bing.net/th/id/OIP.-OXpqRQ0N9q-Mjvv847n5wAAAA?rs=1&pid=ImgDetMain&o=7&rm=3', name: 'Arduino Mega', desc: 'Detected inputs to Arduino board for signal control via pyfirmata' },
    ];

    return (
        <div className="section-padding">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 section-title">
                        Research <span className="text-gradient">Domain</span>
                    </h2>
                    <p className="text-text-dim text-lg">Exploring the foundations and objectives of our intelligent traffic management research.</p>
                </header>

                <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
                    {/* Sidebar / Tabs */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        {researchData.map((item) => (
                            <button
                                key={item.title}
                                onClick={() => setActiveTab(item.title)}
                                className={`text-left px-8 py-5 rounded-2xl transition-all duration-300 font-outfit font-bold text-lg border-2 ${activeTab === item.title
                                    ? 'bg-green text-white border-green shadow-glow-green -translate-x-2'
                                    : 'bg-surface-custom text-text-dim border-surface-border hover:border-green/30 hover:bg-surface-alt'
                                    }`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-8">
                        <div className="glass-card p-10 md:p-12 min-h-[420px] flex flex-col justify-center animate-in fade-in slide-in-from-right-8 duration-700">
                            <h3 className="text-3xl mb-8 text-primary-custom flex items-center gap-4">
                                <span className="w-8 h-1 bg-amber rounded-full"></span>
                                {activeTab}
                            </h3>
                            <div className="text-text-main text-lg leading-relaxed">
                                {researchData.find(d => d.title === activeTab)?.content}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technologies Section */}
                <div className="mt-24">
                    <header className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl mb-4">
                            Technologies <span className="text-gradient">Used</span>
                        </h3>
                        <p className="text-text-dim text-lg">The robust stack powering our intelligent traffic ecosystem.</p>
                    </header>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {technologies.map((tech, idx) => (
                            <div key={idx} className="glass-card p-6 border-none bg-surface-custom/30 hover:bg-surface-custom/50 hover:-translate-y-1 transition-all duration-300 group">
                                <div className="h-16 w-16 mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                                    <img 
                                        src={tech.logo} 
                                        alt={tech.name}
                                        className="w-full h-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div className="text-4xl">📦</div>';
                                        }}
                                    />
                                </div>
                                <h4 className="text-xl font-bold mb-2 text-secondary-custom">{tech.name}</h4>
                                <p className="text-text-dim text-sm">{tech.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchDomain;
