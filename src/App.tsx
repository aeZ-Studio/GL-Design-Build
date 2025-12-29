import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Menu, X, Globe, Hammer, Droplets, Home,
    MessageCircle, Youtube, Facebook, LayoutGrid, ArrowRight
} from 'lucide-react';
import { translations, TranslationContent } from './i18n/translations';

const App = () => {
    const [lang, setLang] = useState<'en' | 'ko'>('en');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t: TranslationContent = translations[lang];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white font-['Outfit'] antialiased">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-xl font-black tracking-tighter leading-none">GL <span className="text-amber-500">Design+Build</span></span>
                        <span className="text-[9px] font-bold tracking-[0.2em] text-white/40 uppercase mt-1">{t.motto}</span>
                    </div>

                    <div className="hidden md:flex items-center gap-10">
                        <a href="#services" className="text-sm font-bold text-white/60 hover:text-white transition-colors">{t.nav.services}</a>
                        <a href="#portfolio" className="text-sm font-bold text-white/60 hover:text-white transition-colors">{t.nav.portfolio}</a>
                        <a href="#about" className="text-sm font-bold text-white/60 hover:text-white transition-colors">{t.nav.about}</a>
                        <button
                            onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
                            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all"
                        >
                            <Globe size={16} />
                            <span className="text-xs font-bold uppercase">{lang === 'en' ? '한국어' : 'English'}</span>
                        </button>
                        <a href="https://open.kakao.com/o/sXXXXXXXX" target="_blank" rel="noopener noreferrer" className="bg-amber-500 hover:bg-amber-600 text-black px-6 py-2.5 rounded-full font-black text-sm transition-all shadow-lg shadow-amber-500/20">
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
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center scale-105 active:scale-100 transition-transform duration-[10s]" />
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
                        <a href="https://open.kakao.com/o/sXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-[#FEE500] text-[#3c1e1e] px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-2">
                            <MessageCircle size={20} />
                            KakaoTalk Consultation
                        </a>
                        <a href="#portfolio" className="w-full md:w-auto px-10 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all font-bold">
                            View Our Work
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section id="about" className="py-24 px-6 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">{t.philosophy.title}</span>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight break-keep">
                            {t.philosophy.p1}
                        </h2>
                        <p className="text-white/60 text-lg leading-relaxed italic font-medium">
                            {t.philosophy.p2}
                        </p>
                        <div className="pt-8 flex items-center gap-6 opacity-40">
                            <a href="https://www.youtube.com/@VA_Cornerstone" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Youtube size={32} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Facebook size={32} /></a>
                            <div className="h-8 w-[1px] bg-white" />
                            <span className="text-[10px] font-bold tracking-[0.4em] uppercase whitespace-nowrap">Digital Presence</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden mt-12 bg-white/5 border border-white/5">
                            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-[10px] text-white/20 uppercase font-black">Process Image</div>
                        </div>
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-white/5 border border-white/5">
                            <div className="w-full h-full bg-slate-700 flex items-center justify-center text-[10px] text-white/20 uppercase font-black tracking-widest text-center px-4">Direct Craftsmanship</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 px-6 bg-[#0f0f0f]">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="space-y-4">
                            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">Expertise</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t.nav.services}</h2>
                        </div>
                        <p className="max-w-md text-white/40 text-sm font-medium border-l border-amber-500/30 pl-6 leading-relaxed">
                            We provide the most complex and rewarding remodeling services, orchestrated by decades of experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="group bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/20 transition-all duration-500">
                            <div className="w-16 h-16 bg-amber-500 text-black rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                                <Hammer size={32} />
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

            {/* Hub & Apps Section */}
            <section className="py-24 px-6 relative overflow-hidden bg-black text-center">
                <div className="absolute inset-0 bg-amber-500/5 blur-[120px] rounded-full translate-x-1/2" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-6 block">{t.ecosystem.title}</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-10 leading-tight whitespace-pre-line">
                        {t.ecosystem.subtitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <a href="https://aez-homesolution.vercel.app" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                                    <Hammer size={24} />
                                </div>
                                <div className="text-left">
                                    <span className="block font-black text-lg">aeZ-Home-Solution</span>
                                    <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Local Repair App</span>
                                </div>
                            </div>
                            <ArrowRight className="text-white/20 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                        </a>
                        <a href="https://aez-hub.vercel.app" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition-all flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-rose-500 rounded-xl flex items-center justify-center shadow-lg shadow-rose-500/20 group-hover:scale-110 transition-transform">
                                    <LayoutGrid size={24} />
                                </div>
                                <div className="text-left">
                                    <span className="block font-black text-lg">aeZ-Hub</span>
                                    <span className="text-[10px] text-white/40 uppercase font-black tracking-widest">Digital Solutions</span>
                                </div>
                            </div>
                            <ArrowRight className="text-white/20 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 bg-[#050505] border-t border-white/5">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black tracking-tighter leading-none">GL <span className="text-amber-500">Design+Build</span></span>
                            <span className="text-[10px] font-bold tracking-[0.4em] text-white/40 uppercase mt-2">{t.motto}</span>
                        </div>
                        <p className="text-white/40 text-xs leading-[2] break-keep max-w-sm">
                            Commonwealth of Virginia Class A Contractor | Licensed & Insured<br />
                            {t.license}
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="https://www.youtube.com/@VA_Cornerstone" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors"><Youtube size={24} /></a>
                            <a href="#" className="text-white/40 hover:text-white transition-colors"><Facebook size={24} /></a>
                        </div>
                    </div>
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="space-y-6">
                            <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Links</span>
                            <ul className="space-y-4 text-xs font-bold text-white/60">
                                <li className="hover:text-white cursor-pointer transition-colors">Services</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Portfolio</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                            </ul>
                        </div>
                        <div className="space-y-6 lg:col-span-2">
                            <span className="block text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Contact</span>
                            <div className="space-y-2">
                                <p className="text-lg font-black tracking-tight text-white/80">Northern Virginia, USA</p>
                                <div className="pt-4 flex flex-col gap-3">
                                    <a href="https://open.kakao.com/o/sXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-500 font-black text-sm hover:underline underline-offset-4">
                                        <MessageCircle size={16} />
                                        KakaoTalk Open Chat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-10 border-t border-white/5 text-center">
                    <p className="text-[10px] font-bold tracking-[0.6em] text-white/20 uppercase">© 2025 GL Design+Build. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
