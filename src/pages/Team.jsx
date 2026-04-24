import React from 'react';

const staffMembers = [
    {
        name: 'Nuwan Kodagoda',
        role: 'Project Supervisor',
        email: 'nuwan.k@sliit.lk',
        dept: 'Department of Computer Science and Software Engineering',
        inst: 'Sri Lanka Institute of Information Technology'
    },
    {
        name: 'Karthiga Rajendran',
        role: 'Project Co-supervisor',
        email: 'karthiga.r@sliit.lk',
        dept: 'Department of Computer Science and Software Engineering',
        inst: 'Sri Lanka Institute of Information Technology'
    }
];

const studentMembers = [
    {
        name: 'Sangeerthan S',
        role: 'Research Student',
        email: 'sangeesivananthan@gmail.com',
        dept: 'Department of Computer Science and Software Engineering',
        inst: 'Sri Lanka Institute of Information Technology'
    },
    {
        name: 'Fernandopulle S N',
        role: 'Research Student',
        email: 'snimashafernandopulle@gmail.com',
        dept: 'Department of Computer Science and Software Engineering',
        inst: 'Sri Lanka Institute of Information Technology'
    },
    {
        name: 'Luvinson I',
        role: 'Research Student',
        email: 'luvinson777@gmail.com',
        dept: 'Department of Computer Science and Software Engineering',
        inst: 'Sri Lanka Institute of Information Technology'
    },
    {
        name: 'Krushanth A',
        role: 'Research Student',
        email: 'krushanthamalanathan@gmail.com',
        dept: 'Department of Computer Science and Software Engineering',
        inst: 'Sri Lanka Institute of Information Technology'
    },

];

const MemberCard = ({ m }) => (
    <div className="glass-card p-6 text-center group hover:-translate-y-2 transition-all duration-500 flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-surface-border to-bg-custom border-2 border-glass-border group-hover:border-primary-custom transition-colors duration-500 overflow-hidden mb-4 flex items-center justify-center text-3xl opacity-40">
            👤
        </div>
        <h3 className="text-lg font-bold mb-1 text-brown">{m.name}</h3>
        <p className="badge-green mb-3">{m.role}</p>
        <div className="space-y-1 text-xs text-text-dim text-center">
            <p className="font-semibold text-primary-custom">{m.email}</p>
            <p className="leading-tight px-2">{m.dept}</p>
            <p className="opacity-75">{m.inst}</p>
        </div>
    </div>
);

const Team = () => {
    return (
        <div className="section-padding bg-bg-custom min-h-screen">
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl mb-4 section-title">
                        Meet Our <span className="text-gradient">Team</span>
                    </h2>
                    <p className="text-text-dim text-lg max-w-2xl mx-auto">
                        A dedicated group of researchers and supervisors from SLIIT working on advanced emergency vehicle detection and traffic optimization.
                    </p>
                </header>

                <div className="mb-20">
                    <h3 className="text-2xl font-bold mb-8 text-center text-brown tracking-wide uppercase opacity-80">Project Supervisors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {staffMembers.map((m, i) => <MemberCard key={i} m={m} />)}
                    </div>
                </div>

                <div className="mb-24">
                    <h3 className="text-2xl font-bold mb-8 text-center text-brown tracking-wide uppercase opacity-80">Research Students</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {studentMembers.map((m, i) => <MemberCard key={i} m={m} />)}
                    </div>
                </div>
            </div>

            <div className="mt-20 text-center text-xs text-text-dim opacity-50">
                <p>New Kandy Road, Malabe, Sri Lanka</p>
            </div>
        </div>
    );
};

export default Team;
