import React, { useState } from 'react';

const ContactUs = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = form;
        const mailtoLink = `mailto:sangeesivananthan@gmail.com?subject=${encodeURIComponent(subject || 'Traffixion Inquiry')}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\n${message}`
        )}`;
        window.location.href = mailtoLink;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section
            id="contact"
            className="section-padding bg-surface-custom border-t border-surface-border"
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <header className="text-center mb-16">
                    <span className="badge-green mb-4">Get In Touch</span>
                    <h2 className="text-4xl md:text-5xl mt-3 mb-4 section-title">
                        Contact <span className="text-gradient">Us</span>
                    </h2>
                    <p className="text-text-dim text-lg max-w-2xl mx-auto">
                        Have questions about our research? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>
                </header>

                <div className=" grid-cols-1 lg:grid-cols-5 gap-10 items-start">

                    {/* Right: Email Form */}
                    <div className="lg:col-span-3">
                        <div className="glass-card p-8 md:p-10">
                            <h3 className="text-2xl font-bold text-brown mb-2">Send a Message</h3>
                            <p className="text-text-dim text-sm mb-8">
                                Fill out the form below and your default email client will open with a pre-filled message.
                            </p>

                            {submitted && (
                                <div className="mb-6 px-5 py-4 rounded-xl bg-green/10 border border-green/20 text-green text-sm font-semibold flex items-center gap-2">
                                    ✅ Email client opened! Your message is ready to send.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="contact-name" className="block text-xs font-bold text-brown uppercase tracking-widest mb-2">
                                            Full Name <span className="text-red-signal">*</span>
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full px-4 py-3 rounded-xl bg-bg-custom border border-surface-border text-text-main placeholder-text-light text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="contact-email" className="block text-xs font-bold text-brown uppercase tracking-widest mb-2">
                                            Email Address <span className="text-red-signal">*</span>
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            name="email"
                                            required
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full px-4 py-3 rounded-xl bg-bg-custom border border-surface-border text-text-main placeholder-text-light text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all duration-300"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="contact-subject" className="block text-xs font-bold text-brown uppercase tracking-widest mb-2">
                                        Subject
                                    </label>
                                    <input
                                        id="contact-subject"
                                        type="text"
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="What is your inquiry about?"
                                        className="w-full px-4 py-3 rounded-xl bg-bg-custom border border-surface-border text-text-main placeholder-text-light text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all duration-300"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block text-xs font-bold text-brown uppercase tracking-widest mb-2">
                                        Message <span className="text-red-signal">*</span>
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Write your message here..."
                                        className="w-full px-4 py-3 rounded-xl bg-bg-custom border border-surface-border text-text-main placeholder-text-light text-sm focus:outline-none focus:border-green focus:ring-2 focus:ring-green/20 transition-all duration-300 resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    id="contact-submit-btn"
                                    className="glow-btn w-full flex items-center justify-center gap-2 text-base"
                                >
                                    <span>📨</span>
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
