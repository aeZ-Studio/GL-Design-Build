import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Menu, X, Globe, Droplets, Home,
    MessageCircle, Youtube, Facebook, LayoutGrid, ArrowRight,
    Utensils, Image, Mail, Phone, MapPin, Send, Hammer
} from 'lucide-react';
import { translations, TranslationContent } from './i18n/translations';
import { portfolioData } from './data/portfolio';

const App = () => {
    const [lang, setLang] = useState<'en' | 'ko'>('en');
    const [filter, setFilter] = useState<'all' | 'kitchen' | 'bath' | 'improvement'>('all');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t: TranslationContent = translations[lang];

    const [formState, setFormState] = useState({
        name: '', email: '', phone: '', address: '', message: ''
    });

    const filteredPortfolio = filter === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === filter);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here we would normally implement the email sending logic
        alert('Thank you! Your request has been sent to GLdesignBuild703@gmail.com');
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a]/95 text-white font-['Outfit'] antialiased">
            {/* Background Overlay to match aeZ-Hub style */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(245,158,11,0.05),_transparent_50%)] pointer-events-none" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/logo.png" alt="GL Design+Build Logo" className="h-10 w-auto" />
                    </div>

                    <div className="hidden md:flex items-center gap-10">
                        <a href="#services" className="text-sm font-bold text-white/60 hover:text-white transition-colors">{t.nav.services}</a>
                        <a href="#portfolio" className="text-sm font-bold text-white/60 hover:text-white transition-colors">{t.nav.portfolio}</a>
                        <a href="#about" className="text-sm font-bold text-white/60 hover:text-white transition-colors">{t.nav.about}</a>
                        <button
                            onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/60"
                        >
                            <Globe size={16} />
                            <span className="text-xs font-bold uppercase">{lang === 'en' ? '한국어' : 'English'}</span>
                        </button>
                        <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2.5 rounded-full font-black text-sm transition-all shadow-lg shadow-amber-500/20">
                            {t.nav.contact}
                        </a>
                    </div>

                    <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-[#0a0a0a] z-10" />
                    <img
                        src="/Project/hero.jpg"
                        alt="GL Design+Build Hero"
                        className="w-full h-full object-cover scale-105 transition-transform duration-[10s]"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop';
                        }}
                    />
                </div>

                <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-6"
                    >
                        Since 1999
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
                    >
                        {t.hero.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-2xl text-white/60 max-w-2xl mx-auto font-medium mb-12"
                    >
                        {t.hero.subtitle}
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
                    >
                        <a href="#contact" className="w-full md:w-auto bg-amber-500 text-black px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2">
                            Request Consultation
                        </a>
                        <a href="https://open.kakao.com/o/sXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-[#FEE500] text-[#3c1e1e] px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-2">
                            <MessageCircle size={20} />
                            KakaoTalk
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section id="about" className="py-24 px-6 relative bg-[#0a0a0a]/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">{t.philosophy.title}</span>
                            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight leading-snug break-keep text-white/90">
                                {t.philosophy.p1}
                            </h2>
                            <p className="text-white/60 text-base md:text-lg leading-relaxed font-medium">
                                {t.philosophy.p2}
                            </p>
                            <p className="text-white/50 text-sm md:text-base leading-relaxed break-keep">
                                {t.philosophy.p3}
                            </p>
                            <div className="pt-8 flex items-center gap-8">
                                <a href="https://www.facebook.com/GLdesignBuildcom/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-white/40 hover:text-[#1877F2] transition-all group">
                                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#1877F2]/10 transition-colors"><Facebook size={24} /></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Facebook</span>
                                </a>
                                <a href="https://www.flickr.com/photos/90832744@N05/albums" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-white/40 hover:text-[#ff0084] transition-all group">
                                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#ff0084]/10 transition-colors"><Image size={24} /></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">Flickr</span>
                                </a>
                                <a href="https://www.youtube.com/@GLdesignBuild" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-white/40 hover:text-[#FF0000] transition-all group">
                                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#FF0000]/10 transition-colors"><Youtube size={24} /></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest">YouTube</span>
                                </a>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden mt-12 bg-white/5 border border-white/5">
                                <img src="/Project/kitchen-3.jpg" alt="Worksite Process" className="w-full h-full object-cover opacity-60" />
                            </div>
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-white/5 border border-white/5">
                                <img src="/Project/bath-3.jpg" alt="Direct Craftsmanship" className="w-full h-full object-cover opacity-60" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-6 bg-[#0f0f0f]/80">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="space-y-4">
                            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">Expertise</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t.nav.services}</h2>
                        </div>
                        <p className="max-w-md text-white/40 text-sm font-medium border-l border-amber-500/30 pl-6 leading-relaxed">
                            {t.services.improvement.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/20 transition-all duration-500">
                            <div className="w-16 h-16 bg-amber-500 text-black rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                                <Utensils size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-6 tracking-tight group-hover:text-amber-500 transition-colors uppercase italic underline underline-offset-8 decoration-amber-500/20">
                                {t.services.kitchen.title}
                            </h3>
                            <p className="text-white/50 text-base leading-[1.7] break-keep">
                                {t.services.kitchen.desc}
                            </p>
                        </div>

                        <div className="group bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/20 transition-all duration-500">
                            <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all">
                                <Droplets size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-6 tracking-tight group-hover:text-amber-500 transition-colors uppercase italic underline underline-offset-8 decoration-white/10">
                                {t.services.bath.title}
                            </h3>
                            <p className="text-white/50 text-base leading-[1.7] break-keep">
                                {t.services.bath.desc}
                            </p>
                        </div>

                        <div className="group bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/20 transition-all duration-500">
                            <div className="w-16 h-16 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-500 group-hover:text-black transition-all">
                                <Home size={32} />
                            </div>
                            <h3 className="text-2xl font-black mb-6 tracking-tight group-hover:text-amber-500 transition-colors uppercase italic underline underline-offset-8 decoration-white/10">
                                {t.services.improvement.title}
                            </h3>
                            <p className="text-white/50 text-base leading-[1.7] break-keep">
                                {t.services.improvement.desc}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                        <div className="space-y-4">
                            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">Masterpieces</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t.nav.portfolio}</h2>
                        </div>
                        <div className="flex p-1 bg-white/5 rounded-full border border-white/10">
                            {(['all', 'kitchen', 'bath'] as const).map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilter(cat)}
                                    className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${filter === cat ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-white/40 hover:text-white'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredPortfolio.map((item) => (
                            <div key={item.id} className="group relative aspect-[16/10] bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-700 hover:border-amber-500/30">
                                <img
                                    src={`/Project/${item.image}`}
                                    alt={item.titleEn}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">{item.category}</span>
                                    <h3 className="text-2xl font-black mb-2">{lang === 'en' ? item.titleEn : item.titleKo}</h3>
                                    <p className="text-white/60 text-sm max-w-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {lang === 'en' ? item.descEn : item.descKo}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hub & Apps Section */}
            <section className="py-24 px-6 relative overflow-hidden bg-black/60 text-center">
                <div className="max-w-6xl mx-auto relative z-10">
                    <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-6 block font-bold">{t.ecosystem.title}</span>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-12 leading-tight whitespace-pre-line text-white/80">
                        {t.ecosystem.subtitle}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        <a href="https://www.facebook.com/GLdesignBuildcom/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1877F2]/40 transition-all flex flex-col items-center gap-3">
                            <Facebook className="text-white/20 group-hover:text-[#1877F2] transition-colors" size={32} />
                            <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Facebook</span>
                        </a>
                        <a href="https://www.flickr.com/photos/90832744@N05/albums" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff0084]/40 transition-all flex flex-col items-center gap-3">
                            <Image className="text-white/20 group-hover:text-[#ff0084] transition-colors" size={32} />
                            <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Flickr Gallery</span>
                        </a>
                        <a href="https://www.youtube.com/@GLdesignBuild" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF0000]/40 transition-all flex flex-col items-center gap-3">
                            <Youtube className="text-white/20 group-hover:text-[#FF0000] transition-colors" size={32} />
                            <span className="text-[10px] uppercase font-black tracking-widest text-white/40">YouTube</span>
                        </a>
                        <a href="https://aez-homesolution.vercel.app" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-[#10b981]/5 border border-[#10b981]/10 hover:border-[#10b981]/40 transition-all flex flex-col items-center gap-3">
                            <Hammer className="text-[#10b981]/40 group-hover:text-[#10b981] transition-colors" size={32} />
                            <span className="text-[10px] uppercase font-black tracking-widest text-[#10b981]/60">Home Solution</span>
                        </a>
                    </div>

                    <div className="mt-12">
                        <a href="https://aez-hub.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/5 hover:border-amber-500/20 text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-all">
                            Digital Ecosystem by <span className="text-amber-500/60">aeZ-Hub</span>
                        </a>
                    </div>
                </div>
            </section>

            {/* Contact Form & Footer */}
            <section id="contact" className="py-24 px-6 bg-[#050505]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Contact Info */}
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <span className="text-amber-500 text-xs font-black uppercase tracking-[0.4em]">Get In Touch</span>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Let's build your<br />dream together</h2>
                                <p className="text-white/40 max-w-md font-medium leading-relaxed">
                                    Whether you're planning a complete overhaul or a subtle upgrade, we're here to provide professional guidance.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-amber-500">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Email Us</span>
                                        <a href="mailto:GLdesignBuild703@gmail.com" className="text-lg font-bold hover:text-amber-500 transition-colors">GLdesignBuild703@gmail.com</a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-amber-500">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-black uppercase tracking-widest text-white/20 mb-1">Service Area</span>
                                        <span className="text-lg font-bold">Northern Virginia, USA</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 pt-4">
                                    <a href="https://open.kakao.com/o/sXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-[#FEE500] text-[#3c1e1e] px-8 py-3 rounded-2xl font-black text-sm flex items-center gap-2 hover:scale-105 transition-all">
                                        <MessageCircle size={18} />
                                        KakaoTalk OpenChat
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] border border-white/5 relative">
                            <h3 className="text-2xl font-black mb-8 tracking-tight">{t.contact.formTitle}</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder={t.contact.name}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    />
                                    <input
                                        type="email"
                                        placeholder={t.contact.email}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder={t.contact.phone}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                                        value={formState.phone}
                                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                    />
                                    <input
                                        type="text"
                                        placeholder={t.contact.address}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                                        value={formState.address}
                                        onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                                    />
                                </div>
                                <textarea
                                    placeholder={t.contact.message}
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-500/50 transition-colors resize-none"
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                />
                                <button type="submit" className="w-full bg-amber-500 text-black py-5 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-amber-600 transition-all">
                                    <Send size={18} />
                                    {t.contact.submit}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-32 pt-16 border-t border-white/5">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="flex flex-col items-center lg:items-start">
                                <img src="/logo.png" alt="GL Logo" className="h-10 w-auto mb-4" />
                                <p className="text-white/40 text-[10px] font-bold tracking-[0.4em] uppercase mb-4">{t.motto}</p>
                                <p className="text-white/30 text-[10px] leading-relaxed text-center lg:text-left">
                                    Virginia Class A Contractor (HIC, CBC, RBC) | Licensed & Insured
                                </p>
                            </div>
                            <div className="flex gap-8">
                                <a href="https://www.facebook.com/GLdesignBuildcom/" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#1877F2] transition-colors"><Facebook size={20} /></a>
                                <a href="https://www.youtube.com/@GLdesignBuild" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-[#FF0000] transition-colors"><Youtube size={20} /></a>
                                <a href="https://www.flickr.com/photos/90832744@N05/albums" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-colors"><Image size={20} /></a>
                            </div>
                            <p className="text-[10px] font-bold tracking-[0.6em] text-white/10 uppercase">© 2025 GL Design+Build.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default App;
