import React from 'react';
import images from '../assets/images/file';

// Documents organized by category
const documentCategories = [
    {
        category: 'Documents',
        icon: images.pdf,
        items: [
            {
                id: 1,
                name: 'Project Proposal',
                type: 'PDF',
                description: 'Initial proposal outlining project goals, scope, and implementation strategy.',
                link: '/src/assets/individualdoc/sangs/proposalreport/IT22346568_Proposal_Report_Draft.pdf'
            },
            {
                id: 2,
                name: 'Checklist I',
                type: 'PDF',
                description: 'First checkpoint checklist for project progress evaluation.',
                link: '/src/assets/commondoc/checklist/cc1/25-26J-473_CheckList1.pdf'
            },
            {
                id: 3,
                name: 'Research Paper',
                type: 'PDF',
                description: 'Comprehensive research paper on traffic flow optimization using multi-agent reinforcement learning.',
                link: '#'
            },
            {
                id: 4,
                name: 'Final Report',
                type: 'PDF',
                description: 'Complete final project report with findings, results, and conclusions.',
                link: '#'
            }
        ]
    },
    {
        category: 'Presentations (Slides)',
        icon: images.ppt,
        items: [
            {
                id: 5,
                name: 'Proposal Slides',
                type: 'PPTX',
                description: 'Initial proposal presentation slides covering project objectives and architecture.',
                link: '/src/assets/commondoc/ppt/proposal/Smart Traffic Flow Optimization with Multi Agent Reinforcement Learning (1).pptx'
            },
            {
                id: 6,
                name: 'Progress Presentation I',
                type: 'PPTX',
                description: 'First progress presentation showing development milestones and achievements.',
                link: '/src/assets/commondoc/ppt/pp1/PP1 of Smart Traffic Flow Optimization with Multi Agent Reinforcement Learning.pptx'
            },
            {
                id: 7,
                name: 'Progress Presentation II',
                type: 'PPTX',
                description: 'Second progress presentation with updated results and implementation details.',
                link: '/src/assets/commondoc/ppt/pp2/PP2 of Smart Traffic Flow Optimization with Multi Agent Reinforcement Learning.pptx'
            },
            {
                id: 8,
                name: 'Final Presentation',
                type: 'PPTX',
                description: 'Final presentation slides with complete results and project outcomes.',
                link: '#'
            }
        ]
    }
];

const DocumentCard = ({ doc }) => {

    // Color based on type
    const getTypeColor = () => {
        if (doc.type === 'PDF') return 'bg-red-500/20 text-red-400';
        if (doc.type === 'PPTX') return 'bg-orange-500/20 text-orange-400';
        return 'bg-blue-500/20 text-blue-400';
    };

    // ICON based on type (IMAGE)
    const getTypeIcon = () => {
        if (doc.type === 'PDF') return images.pdf;
        if (doc.type === 'PPTX') return images.ppt;
        return images.doc;
    };

    const isAvailable = doc.link !== '#';

    return (
        <div className="glass-card group hover:border-primary-custom/50 transition-all duration-300 p-6 flex flex-col h-full">

            {/* ICON + TYPE */}
            <div className="flex items-start justify-between mb-4">
                
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor()} border border-white/10 p-2`}>
                    <img
                        src={getTypeIcon()}
                        alt={doc.type}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                </div>

                <span className={`text-xs font-bold px-2 py-1 rounded-full ${getTypeColor()} border border-white/10`}>
                    {doc.type}
                </span>
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-bold mb-2 group-hover:text-primary-custom transition-colors">
                {doc.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-text-dim text-sm mb-6 leading-relaxed grow">
                {doc.description}
            </p>

            {/* ACTION */}
            {isAvailable ? (
                <a
                    href={doc.link}
                    download
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary-custom hover:gap-3 transition-all duration-300"
                >
                    <img src={images.download} alt="download" className="w-5 h-5" />
                    Download
                </a>
            ) : (
                <span className="inline-flex items-center gap-2 text-sm font-bold text-text-dim opacity-50">
                    <img src={images.comingSoon} alt="coming soon" className="w-5 h-5" />
                    Coming Soon
                </span>
            )}
        </div>
    );
};

const Documents = () => {
    return (
        <div className="section-padding bg-bg-custom min-h-screen">
            <div className="max-w-7xl mx-auto">

                <div className="space-y-16">
                    {documentCategories.map((categoryGroup, idx) => (
                        <div key={idx} className="space-y-6">

                            {/* CATEGORY HEADER */}
                            <div className="flex items-center gap-3 mb-8">

                                <img
                                    src={categoryGroup.icon}
                                    alt="category icon"
                                    className="w-10 h-10"
                                />

                                <div className="flex-1 h-1 bg-gradient-to-r from-primary-custom/50 via-amber/50 to-transparent rounded-full"></div>

                                <h2 className="text-2xl font-bold text-gradient">
                                    {categoryGroup.category}
                                </h2>
                            </div>

                            {/* GRID */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                                {categoryGroup.items.map((doc) => (
                                    <DocumentCard
                                        key={doc.id}
                                        doc={doc}
                                    />
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Documents;