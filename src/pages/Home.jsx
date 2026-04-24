import React from 'react';

const Home = () => {
    return (
        <div className="pt-24 min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* Background glowing blurred circles using brand colors */}
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-green/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber/10 rounded-full blur-[150px] -z-10 opacity-70"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-7xl leading-tight">
                        Smarter signals. Faster response. Safer roads. <br />
                        <span className="text-gradient">Traffic Intelligence</span>
                    </h1>
                    <p className="text-xl text-text-dim max-w-lg leading-relaxed">
                        Building the future of smart cities with adaptive traffic intelligence that prioritizes safety, speed, and efficiency for everyone on the road.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-8">
                        <a href="#progress" className="glow-btn inline-block">View Our Progress</a>
                        <a href="#documents" className="outline-btn inline-block">
                            Read Documents
                        </a>
                    </div>
                </div>

                {/* Hero Graphic Card */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green to-amber rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative glass-card p-8 h-80 flex items-center justify-center border-l-4 border-l-green">
                        <div className="text-center space-y-4">
                            <div className="text-6xl animate-bounce drop-shadow-[0_0_20px_rgba(46,125,79,0.5)]">
                                {/* Embedded SVG representation of the traffic light from logo */}
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="mx-auto" stroke="currentColor">
                                    <rect x="7" y="2" width="10" height="20" rx="3" fill="#3D2710" stroke="none" />
                                    <circle cx="12" cy="7" r="2.5" fill="#E63946" />
                                    <circle cx="12" cy="12" r="2.5" fill="#F5A623" />
                                    <circle cx="12" cy="17" r="2.5" fill="#2E7D4F" className="animate-pulse" />
                                </svg>
                            </div>
                            <div className="text-2xl font-outfit font-bold text-brown">Traffixion Core</div>
                            <div className="flex justify-center items-center gap-2 bg-surface-alt py-1.5 px-4 rounded-full border border-surface-border inline-flex mx-auto">
                                <span className="w-2 h-2 rounded-full bg-green animate-ping"></span>
                                <span className="text-xs text-green uppercase tracking-widest font-bold">System Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-padding">
                <div className="max-w-7xl mx-auto">
                    <header className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl mb-4">
                            About <span className="text-gradient">Traffiion</span>
                        </h2>
                        <p className="text-text-dim text-lg">Traffixion is an intelligent traffic management system that uses Multi-Agent Reinforcement Learning to optimize traffic flow in real time. It monitors road conditions, detects congestion and emergency vehicles, and automatically adjusts traffic signals to reduce delays. The system aims to improve road efficiency, minimize travel time, and support faster movement for emergency services.</p>
                    </header>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: 'SUMO Environment as the Simulator',
                                content: (
                                    <div className="space-y-4">
                                        <p>

                                        </p>
                                    </div>
                                )
                            },
                            {
                                title: 'Real Time Vehicle Detection and Data Input',
                                content: (
                                    <div className="space-y-4">
                                        <p>

                                        </p>
                                    </div>
                                )
                            },
                            {
                                title: 'Emergency Vehicle Detection and Data Input',
                                content: (
                                    <div className="space-y-4">
                                        <p>
                                            Detects ambulances, fire trucks, and police vehicles, then adjusts traffic signals and alerts authorities to clear paths and reduce delays.
                                        </p>
                                    </div>
                                )
                            },
                            {
                                title: 'Pedestrian Detection and Data Input',
                                content: (
                                    <div className="space-y-4">
                                        <p>

                                        </p>
                                    </div>
                                )
                            }
                        ].map((item, i) => (
                            <div key={i} className="glass-card p-10 hover:border-primary-custom/50 transition-colors duration-500 group flex flex-col">
                                <h3 className="text-2xl mb-6 text-primary-custom group-hover:scale-105 transition-transform origin-left">{item.title}</h3>
                                <div className="text-text-dim leading-relaxed flex-grow">{item.content}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            );
        </div>
    );
};

export default Home;
