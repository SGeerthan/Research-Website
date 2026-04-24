import React from 'react';

const progressEvents = [
    { date: '25 Mar 2025', title: 'Brainstorming workshop', status: 'completed' },
    { date: '26 May 2025', title: 'Group registration', status: 'completed' },
    { date: 'June - July 2025', title: 'Topic Assessment Form (TAF)', status: 'completed' },
    { date: '23 July 2025', title: 'Project charter', status: 'completed' },
    { date: '15 Aug 2025', title: 'Proposal reports (draft)', status: 'completed' },
    { date: 'Sep 2025', title: 'Proposal presentation', status: 'completed' },
    { date: 'Sep 2025', title: 'Proposal reports (final)', status: 'completed' },
    { date: 'Dec 2025', title: 'Progress Presentation - I', status: 'completed' },
    { date: 'Dec 2025', title: 'Check List I', status: 'completed' },
    { date: 'Mar 2026', title: 'Research paper', status: 'completed' },
    { date: 'Apr 2026', title: 'Final reports', status: 'in-progress' },
    { date: 'Mar 2026', title: 'Progress Presentation - II', status: 'completed' },
    { date: 'Mar 2026', title: 'Check List II', status: 'completed' },
    { date: 'June 2026', title: 'Submission of RP- Acceptance', status: 'upcoming' },
    { date: 'May 2026', title: 'Final presentation & VIVA', status: 'upcoming' },
    { date: 'June 2026', title: 'Project website', status: 'upcoming' },
    { date: 'June 2026', title: 'Research logbook', status: 'upcoming' },
];

const Progress = () => {
    return (
        <div className="section-padding bg-bg-custom min-h-screen">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 section-title">
                        Project <span className="text-gradient">Progress</span>
                    </h2>
                    <p className="text-text-dim text-lg max-w-2xl mx-auto">
                        A comprehensive timeline of our research journey, tracking every milestone from conceptualization to final submission.
                    </p>
                </header>

                <div className="relative pl-8 md:pl-0">
                    {/* Vertical line with gradient */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-custom via-amber to-secondary-custom opacity-20 -translate-x-1/2 rounded-full"></div>

                    <div className="space-y-10">
                        {progressEvents.map((m, i) => (
                            <div key={i} className="relative group">
                                {/* Timeline Dot */}
                                <div className={`absolute left-[-20px] md:left-1/2 md:-ml-4 top-1 w-8 h-8 rounded-full border-4 border-bg-custom z-10 transition-all duration-300 group-hover:scale-125
                                    ${m.status === 'completed' ? 'bg-primary-custom shadow-glow-green' :
                                      m.status === 'in-progress' ? 'bg-amber animate-pulse shadow-[0_0_15px_rgba(245,166,35,0.6)]' : 
                                      'bg-surface-border'}`}>
                                </div>

                                <div className={`flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
                                    <div className="w-full md:w-[45%]">
                                        <div className="glass-card p-5 hover:translate-y-[-4px] transition-all duration-300 border-l-4 border-l-primary-custom/30 md:border-l-0 md:group-odd:border-r-4 md:group-odd:border-r-primary-custom/30 md:group-even:border-l-4 md:group-even:border-l-primary-custom/30">
                                            <div className="text-[10px] font-bold text-primary-custom tracking-widest uppercase mb-1 opacity-70">{m.date}</div>
                                            <h3 className="text-lg font-bold mb-2 text-brown group-hover:text-primary-custom transition-colors">{m.title}</h3>
                                            
                                            <div className="flex items-center gap-2 mt-2 md:justify-end md:group-even:justify-start">
                                                <span className={`badge text-[9px] min-w-max 
                                                    ${m.status === 'completed' ? 'badge-green' :
                                                      m.status === 'in-progress' ? 'badge-amber' : 
                                                      'badge-brown opacity-50'}`}>
                                                    {m.status}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:w-[10%]"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Progress;
