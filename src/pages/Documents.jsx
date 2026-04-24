import React from 'react';

const documents = [
    { id: 1, name: 'Project Proposal', type: 'PDF', size: '1.2 MB', link: '#', category: 'Planning', description: 'Initial proposal outlining project goals and scope.' },
    { id: 2, name: 'Technical Architecture', type: 'PPT', size: '2.5 MB', link: '#', category: 'Design', description: 'Presentation on system architecture and component interactions.' },
    { id: 3, name: 'Research Paper Baseline', type: 'PDF', size: '4.8 MB', link: '#', category: 'Research', description: 'Literature review of existing traffic management solutions.' },
    { id: 4, name: 'Interim Progress Report', type: 'PDF', size: '0.9 MB', link: '#', category: 'Progress', description: 'Status update on development and data acquisition phases.' },
];

const Documents = () => {
    return (
        <div className="section-padding">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4">
                        Project <span className="text-gradient">Documents</span>
                    </h2>
                    <p className="text-text-dim text-lg">Access all technical presentations, research papers, and reports.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {documents.map((doc) => (
                        <div key={doc.id} className="glass-card group hover:border-primary-custom/50 transition-all duration-300 p-8 flex gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center relative">
                                <span className="text-3xl">{doc.type === 'PDF' ? '📄' : '📊'}</span>
                                <span className="absolute -bottom-1 -right-1 bg-surface-border text-[9px] font-black px-1.5 py-0.5 rounded border border-glass-border">
                                    {doc.type}
                                </span>
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary-custom">{doc.category}</span>
                                    <span className="text-[10px] text-text-dim font-bold">{doc.size}</span>
                                </div>
                                <h3 className="text-xl mb-3 group-hover:text-primary-custom transition-colors">{doc.name}</h3>
                                <p className="text-text-dim text-sm mb-6 leading-relaxed line-clamp-2">{doc.description}</p>
                                <a href={doc.link} className="inline-flex items-center gap-2 text-sm font-bold text-primary-custom hover:gap-3 transition-all duration-300">
                                    Download <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

               
            </div>
        </div>
    );
};

export default Documents;
