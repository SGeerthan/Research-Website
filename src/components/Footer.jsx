import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-surface-custom border-t border-surface-border pt-20 pb-10 px-6 mt-12">
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                <div className="text-center">
                    <a href="#home" className="flex items-center justify-center gap-3 group">
                        <img
                            src="/logo.png"
                            alt="Traffixion Logo"
                            className="h-12 w-12 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                        <span className="text-3xl font-outfit font-black tracking-widest text-brown">
                            TRAFF<span className="text-green">IX</span>ION
                        </span>
                    </a>
                    <p className="text-text-dim mt-4 max-w-sm mx-auto text-sm leading-relaxed">
                        Revolutionizing urban transit with cutting-edge artificial intelligence and real-time data insights.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8">
                    {['Home', 'Progress', 'Documents', 'About us', 'Contact us'].map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-xs font-bold text-text-dim hover:text-green uppercase tracking-widest transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <div className="w-full pt-8 border-t border-surface-border flex flex-col md:flex-row justify-center items-center gap-4 text-xs font-medium text-text-dim">
                    <p>&copy; {new Date().getFullYear()} Traffixion . All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
