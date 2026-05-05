import React from 'react';
import images from '../assets/images/file';

// Documents organized by category
const documentCategories = [
    {
        category: 'Proposal Reports',
        icon: images.pdf,
        items: [
            {
                id: 1,
                name: 'Proposal Report - IT22323316 (Luvinson I)',
                type: 'PDF',
                description: 'Individual proposal report submitted by Luvinson I.',
                link: '/src/assets/individualdoc/luvinson/proposal/IT22323316_Proposal_Report.pdf'
            },
            {
                id: 2,
                name: 'Proposal Report - IT22346568 (Sangeerthan S)',
                type: 'PDF',
                description: 'Individual proposal report submitted by Sangeerthan S.',
                link: '/src/assets/individualdoc/sangeerthan/proposal/IT22346568_Proposal_Report_Draft.pdf'
            },
            {
                id: 3,
                name: 'Proposal Report - IT22000576 (Fernandopulle S N)',
                type: 'PDF',
                description: 'Individual proposal report submitted by Fernandopulle S N.',
                link: '/src/assets/individualdoc/fernandopulle/proposal/IT22000576_Proposal_Report.pdf'
            },
            {
                id: 4,
                name: 'Proposal Report - IT22920218 (Krushanth A)',
                type: 'PDF',
                description: 'Individual proposal report submitted by Krushanth A.',
                link: '/src/assets/individualdoc/krushanth/proposal/IT22920218_Proposal_Report.pdf'
            }
        ]
    },

    {
        category: 'Thesis Reports',
        icon: images.pdf,
        items: [
            {
                id: 5,
                name: 'Thesis Report - IT22323316 (Luvinson I)',
                type: 'PDF',
                description: 'Final thesis report submitted by Luvinson I.',
                link: '/src/assets/individualdoc/luvinson/thesis/IT22323316_Thesis_Report_Draft.pdf'
            },
            {
                id: 6,
                name: 'Thesis Report - IT22346568 (Sangeerthan S)',
                type: 'PDF',
                description: 'Final thesis report submitted by Sangeerthan S.',
                link: '/src/assets/individualdoc/sangeerthan/thesis/IT22346568_Thesis_Report_Draft.pdf'
            },
            {
                id: 7,
                name: 'Thesis Report - IT22000576 (Fernandopulle S N)',
                type: 'PDF',
                description: 'Final thesis report submitted by Fernandopulle S N.',
                link: '/src/assets/individualdoc/fernandopulle/thesis/IT22000576_Thesis_Report_Draft.pdf'
            },
            {
                id: 8,
                name: 'Thesis Report - IT22920218 (Krushanth A)',
                type: 'PDF',
                description: 'Final thesis report submitted by Krushanth A.',
                link: '/src/assets/individualdoc/krushanth/thesis/IT22920218_Thesis_Report_Draft.pdf'
            }
        ]
    },

    {
        category: 'Documents',
        icon: images.pdf,
        items: [
             {
                id: 9,
                name: 'Project Registration Report',
                type: 'PDF',
                description: 'Project Details and Components based document for project registration.',
                link: '/src/assets/commondoc/taf/signed-TAF_25-26J-473.pdf'
            },
            {
                id: 10,
                name: 'Checklist I',
                type: 'PDF',
                description: 'First checkpoint checklist for project progress evaluation.',
                link: '/src/assets/commondoc/checklist/cc1/25-26J-473_CheckList1.pdf'
            },
             {
                id: 11,
                name: 'Checklist II',
                type: 'PDF',
                description: 'Second checkpoint checklist for project progress evaluation.',
                link: '/src/assets/commondoc/checklist/cc1/25-26J-473_CheckList2.pdf'
            },
            {
                id: 12,
                name: 'Research Paper',
                type: 'PDF',
                description: 'Research paper on traffic flow optimization using multi-agent reinforcement learning.',
                link: '#'
            },
            {
                id: 13,
                name: 'Final Report',
                type: 'PDF',
                description: 'Complete final project report with findings and conclusions.',
                link: '#'
            }
        ]
    },

    {
        category: 'Presentations (Slides)',
        icon: images.ppt,
        items: [
            {
                id: 14,
                name: 'Proposal Slides',
                type: 'PPTX',
                description: 'Initial proposal presentation slides.',
                link: '/src/assets/commondoc/ppt/proposal/Smart Traffic Flow Optimization.pptx'
            },
            {
                id: 15,
                name: 'Progress Presentation I',
                type: 'PPTX',
                description: 'First progress presentation.',
                link: '/src/assets/commondoc/ppt/pp1/PP1.pptx'
            },
            {
                id: 16,
                name: 'Progress Presentation II',
                type: 'PPTX',
                description: 'Second progress presentation.',
                link: '/src/assets/commondoc/ppt/pp2/PP2.pptx'
            },
            {
                id: 17,
                name: 'Final Presentation',
                type: 'PPTX',
                description: 'Final presentation slides.',
                link: '#'
            }
        ]
    }
];

const DocumentCard = ({ doc }) => {

    const getTypeColor = () => {
        if (doc.type === 'PDF') return 'bg-red-500/20 text-red-400';
        if (doc.type === 'PPTX') return 'bg-orange-500/20 text-orange-400';
        return 'bg-blue-500/20 text-blue-400';
    };

    const getTypeIcon = () => {
        if (doc.type === 'PDF') return images.pdf;
        if (doc.type === 'PPTX') return images.ppt;
        return images.doc;
    };

    const isAvailable = doc.link !== '#';

    return (
        <div className="glass-card group p-6 flex flex-col h-full">

            <div className="flex justify-between mb-4">
                <div className="w-12 h-12">
                    <img src={getTypeIcon()} alt="doc" />
                </div>

                <span className={`text-xs px-2 py-1 rounded ${getTypeColor()}`}>
                    {doc.type}
                </span>
            </div>

            <h3 className="text-lg font-bold mb-2">{doc.name}</h3>

            <p className="text-sm text-text-dim mb-6 flex-grow">
                {doc.description}
            </p>

            {isAvailable ? (
                <a
                    href={doc.link}
                    download
                    className="text-primary-custom font-bold flex items-center gap-2"
                >
                    <img src={images.download} className="w-5 h-5" />
                    Download
                </a>
            ) : (
                <span className="text-text-dim opacity-50 flex items-center gap-2">
                    <img src={images.comingSoon} className="w-5 h-5" />
                    Coming Soon
                </span>
            )}
        </div>
    );
};

const Documents = () => {
    return (
        <div className="section-padding min-h-screen bg-bg-custom">
            <div className="max-w-7xl mx-auto space-y-16">

                {documentCategories.map((group, idx) => (
                    <div key={idx}>

                        <div className="flex items-center gap-4 mb-8">
                            <img src={group.icon} className="w-10 h-10" />
                            <h2 className="text-2xl font-bold text-gradient">
                                {group.category}
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {group.items.map(doc => (
                                <DocumentCard key={doc.id} doc={doc} />
                            ))}
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default Documents;