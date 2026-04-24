import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Research', href: '#research-domain' },
        { name: 'Progress', href: '#progress' },
        { name: 'Documents', href: '#documents' },
        { name: 'About Us', href: '#team' },
        { name: 'Contact us', href: '#contact-us' }
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'bg-bg-custom/90 backdrop-blur-md shadow-md py-3 border-b border-surface-border'
            : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">

                {/* Logo + Name */}
                <a href="#home" className="flex items-center gap-3 group">
                    <img
                        src="/logo.png"
                        alt="Traffixion Logo"
                        className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <span className="text-xl sm:text-2xl font-outfit font-black tracking-widest text-brown">
                        TRAFF<span className="text-green">IX</span>ION
                    </span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-sm font-semibold text-text-dim hover:text-green transition-colors duration-300 relative group/link"
                            >
                                {link.name}
                                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-green rounded-full group-hover/link:w-full transition-all duration-300" />
                            </a>
                        </li>
                    ))}
                    <li>
                        <a href="#progress" className="glow-btn text-sm py-2 px-5">
                            View Progress →
                        </a>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <button
                    id="mobile-menu-btn"
                    className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-surface-alt transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-0.5 w-6 bg-brown transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-brown transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block h-0.5 w-6 bg-brown transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Dropdown */}
            <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <ul className="bg-bg-custom/95 backdrop-blur-md border-t border-surface-border px-6 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="block text-sm font-semibold text-text-dim hover:text-green transition-colors py-2 border-b border-surface-border last:border-0"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2">
                        <a href="#progress" className="glow-btn inline-block text-sm text-center w-full text-center" onClick={() => setMenuOpen(false)}>
                            View Progress →
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
