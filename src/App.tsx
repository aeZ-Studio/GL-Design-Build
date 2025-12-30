import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Menu, X, Globe, Droplets, Home,
    MessageCircle, Youtube, Facebook,
    Utensils, Mail, MapPin, Send, Hammer,
    ChevronLeft, ChevronRight, Maximize2
} from 'lucide-react';
import { translations, TranslationContent } from './i18n/translations';
import { portfolioData } from './data/portfolio';

const App = () => {
    const [lang, setLang] = useState<'en' | 'ko'>('en');
    const [filter, setFilter] = useState<'all' | 'kitchen' | 'bath' | 'improvement'>('all');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const t: TranslationContent = (translations as any)[lang];

    const [formState, setFormState] = useState({
        name: '', email: '', phone: '', address: '', message: ''
    });
    const [submitting, setSubmitting] = useState(false);
    const [selectedProject, setSelectedProject] = useState<typeof portfolioData[0] | null>(null);
    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    const projectImages = selectedProject ? [selectedProject.image, ...(selectedProject.additionalImages || [])] : [];

    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImgIndex((prev) => (prev + 1) % projectImages.length);
    };

    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImgIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    };

    // Lock scroll when modal is open
    useEffect(() => {
        if (selectedProject) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
    }, [selectedProject]);

    const filteredPortfolio = filter === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === filter);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xvgzbbwa", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formState,
                    to: "GLdesignBuild703@gmail.com"
                }),
            });

            if (response.ok) {
                setFormState({ name: '', email: '', phone: '', address: '', message: '' });
                alert(lang === 'ko' ? '문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다!' : 'Your request has been sent! We will contact you soon.');
            } else {
                alert(lang === 'ko' ? '오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' : 'Something went wrong. Please try again later.');
            }
        } catch (error) {
            alert(lang === 'ko' ? '서버 연결에 실패했습니다.' : 'Failed to connect to the server.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a]/95 text-white font-['Outfit'] antialiased">
            {/* Background Overlay to match aeZ-Hub style */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(245,158,11,0.05),_transparent_50%)] pointer-events-none" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/logo.png" alt="GL Design+Build" className="h-10 w-auto" />
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter leading-none">GL <span className="text-amber-500">Design+Build</span></span>
                            <span className="text-[7px] min-[375px]:text-xs font-bold tracking-[0.1em] min-[375px]:tracking-[0.2em] text-white/40 uppercase mt-1 whitespace-nowrap">{t.motto}</span>
                        </div>
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

                    <button
                        className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
                        >
                            <div className="flex flex-col p-6 gap-6">
                                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white/60 hover:text-white transition-colors">{t.nav.services}</a>
                                <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white/60 hover:text-white transition-colors">{t.nav.portfolio}</a>
                                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold text-white/60 hover:text-white transition-colors">{t.nav.about}</a>
                                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                    <button
                                        onClick={() => {
                                            setLang(lang === 'en' ? 'ko' : 'en');
                                            setMobileMenuOpen(false);
                                        }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/60"
                                    >
                                        <Globe size={18} />
                                        <span className="text-sm font-bold uppercase">{lang === 'en' ? '한국어' : 'English'}</span>
                                    </button>
                                    <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="bg-amber-500 text-black px-6 py-2.5 rounded-full font-black text-sm">
                                        {t.nav.contact}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/20 to-[#0a0a0a]/80 z-10" />
                    <img
                        src="/Project/hero.jpg"
                        alt="GL Design+Build Hero"
                        className="w-full h-full object-cover scale-105 transition-transform duration-[10s]"
                        onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
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
                        Since 2007
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
                        <a href="https://open.kakao.com/o/gQlXUX8h" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-[#FEE500] text-[#3c1e1e] px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-2">
                            <MessageCircle size={20} />
                            KakaoTalk
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section id="about" className="py-16 md:py-20 px-6 relative bg-[#0a0a0a]/50">
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
                                <a href="https://www.facebook.com/GLdesignBuildcom/photos" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-[#1877F2]/60 hover:text-[#1877F2] transition-all group">
                                    <div className="p-3 bg-[#1877F2]/5 rounded-2xl group-hover:bg-[#1877F2]/10 transition-colors"><Facebook size={24} /></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60">Facebook</span>
                                </a>
                                <a href="https://www.flickr.com/photos/90832744@N05/albums/72157700948710755/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-white/40 hover:text-[#ff0084] transition-all group">
                                    <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#ff0084]/10 transition-colors">
                                        <svg viewBox="0 0 24 24" width="24" height="24">
                                            <circle cx="7" cy="12" r="5" fill="#0063dc" />
                                            <circle cx="17" cy="12" r="5" fill="#ff0084" />
                                        </svg>
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60">Flickr</span>
                                </a>
                                <a href="https://www.youtube.com/watch?v=dzmaQedMc9s" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-[#FF0000]/60 hover:text-[#FF0000] transition-all group">
                                    <div className="p-3 bg-[#FF0000]/5 rounded-2xl group-hover:bg-[#FF0000]/10 transition-colors"><Youtube size={24} /></div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60">YouTube</span>
                                </a>
                            </div>
                        </div>
                        <div className="relative lg:mt-0 mt-12">
                            <div className="aspect-video md:aspect-[4/3] lg:aspect-square rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 shadow-2xl relative group">
                                <video
                                    src="/Project/brand-video.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6">
                                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                        <span className="text-[9px] min-[375px]:text-[10px] font-bold uppercase tracking-wider text-white/80">Process & Quality</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-16 md:py-20 px-6 bg-[#0f0f0f]/80">
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
            <section id="portfolio" className="py-16 md:py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                        <div className="space-y-4">
                            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">Masterpieces</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t.nav.portfolio}</h2>
                        </div>
                        <div className="flex p-1.5 bg-white/5 rounded-full border border-white/10 overflow-x-auto scrollbar-hide">
                            <div className="flex gap-1 px-1">
                                {(['all', 'kitchen', 'bath', 'improvement'] as const).map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        className={`px-6 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-white/40 hover:text-white'
                                            }`}
                                    >
                                        {cat === 'all' ? (lang === 'ko' ? '전체' : 'All') :
                                            cat === 'kitchen' ? (lang === 'ko' ? '키친' : 'Kitchen') :
                                                cat === 'bath' ? (lang === 'ko' ? '바스' : 'Bath') :
                                                    (lang === 'ko' ? '업그레이드' : 'Home Improvement')}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredPortfolio.map((item) => (
                            <motion.div
                                key={item.id}
                                layoutId={`project-${item.id}`}
                                onClick={() => {
                                    setSelectedProject(item);
                                    setCurrentImgIndex(0);
                                }}
                                className="group relative aspect-[16/10] bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-700 hover:border-amber-500/30 cursor-pointer"
                            >
                                <img
                                    src={`/Project/${item.image}`}
                                    alt={item.titleEn}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute top-6 left-6 z-20 flex flex-wrap gap-2">
                                    {item.isTransformation && (
                                        <div className="bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded-full shadow-xl shadow-amber-500/20 uppercase tracking-tighter">
                                            Before & After
                                        </div>
                                    )}
                                    {item.additionalImages && (
                                        <div className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/10 uppercase tracking-tighter flex items-center gap-1.5">
                                            <Maximize2 size={10} />
                                            +{item.additionalImages.length} Photos
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">{item.category}</span>
                                    <h3 className="text-2xl font-black mb-2">{lang === 'en' ? item.titleEn : item.titleKo}</h3>
                                    <p className="text-white/60 text-sm max-w-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {lang === 'en' ? item.descEn : item.descKo}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hub & Apps Section */}
            <section className="py-16 md:py-20 px-6 relative overflow-hidden bg-black/60 text-center">
                <div className="max-w-6xl mx-auto relative z-10">
                    <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em] mb-6 block font-bold">{t.ecosystem.title}</span>
                    <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-12 leading-tight whitespace-pre-line text-white/80">
                        {t.ecosystem.subtitle}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                        <a href="https://www.facebook.com/GLdesignBuildcom/photos" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#1877F2]/40 transition-all flex flex-col items-center gap-3">
                            <Facebook className="text-white/20 group-hover:text-[#1877F2] transition-colors" size={32} />
                            <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Facebook</span>
                        </a>
                        <a href="https://www.flickr.com/photos/90832744@N05/albums/72157700948710755/" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#ff0084]/40 transition-all flex flex-col items-center gap-3">
                            <div className="flex gap-1 group-hover:scale-110 transition-transform">
                                <span className="w-4 h-4 rounded-full bg-white/20 group-hover:bg-[#0063dc]" />
                                <span className="w-4 h-4 rounded-full bg-white/20 group-hover:bg-[#ff0084]" />
                            </div>
                            <span className="text-[10px] uppercase font-black tracking-widest text-white/40">Flickr Gallery</span>
                        </a>
                        <a href="https://www.youtube.com/watch?v=dzmaQedMc9s" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF0000]/40 transition-all flex flex-col items-center gap-3">
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
            <section id="contact" className="py-16 md:py-20 px-6 bg-[#050505]">
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
                                    <a href="https://open.kakao.com/o/gQlXUX8h" target="_blank" rel="noopener noreferrer" className="bg-[#FEE500] text-[#3c1e1e] px-8 py-3 rounded-2xl font-black text-sm flex items-center gap-2 hover:scale-105 transition-all">
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
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder={`${t.contact.name} *`}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        />
                                    </div>
                                    <div className="relative">
                                        <input
                                            type="email"
                                            placeholder={`${t.contact.email} *`}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder={`${t.contact.phone} *`}
                                            required
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-amber-500/50 transition-colors"
                                            value={formState.phone}
                                            onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                        />
                                    </div>
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
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className={`w-full py-5 rounded-xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${submitting ? 'bg-amber-500/50 cursor-not-allowed' : 'bg-amber-500 hover:bg-amber-600 text-black'
                                        }`}
                                >
                                    <Send size={18} className={submitting ? 'animate-pulse' : ''} />
                                    {submitting ? (lang === 'ko' ? '전송 중...' : 'Sending...') : t.contact.submit}
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="mt-32 pt-16 border-t border-white/5">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="flex flex-col items-center lg:items-start">
                                <img src="/logo.png" alt="GL Logo" className="h-10 w-auto mb-4" />
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                                    <span className="text-[9px] font-black text-amber-500 uppercase tracking-widest">{t.license}</span>
                                </div>
                                <p className="text-white/40 text-[8px] min-[375px]:text-[10px] font-bold tracking-[0.3em] min-[375px]:tracking-[0.4em] uppercase whitespace-nowrap">{t.motto}</p>
                            </div>
                            <div className="flex gap-8">
                                <a href="https://www.facebook.com/GLdesignBuildcom/photos" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:scale-110 transition-transform"><Facebook size={20} /></a>
                                <a href="https://www.youtube.com/watch?v=dzmaQedMc9s" target="_blank" rel="noopener noreferrer" className="text-[#FF0000] hover:scale-110 transition-transform"><Youtube size={20} /></a>
                                <a href="https://www.flickr.com/photos/90832744@N05/albums/72157700948710755/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                    <div className="flex gap-0.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#0063dc]" />
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff0084]" />
                                    </div>
                                </a>
                            </div>
                            <p className="text-[10px] font-bold tracking-[0.6em] text-white/10 uppercase">© 2025 GL Design+Build.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox / Detail View */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-xl"
                        onClick={() => setSelectedProject(null)}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 z-[120] p-4 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full transition-colors text-white/60 hover:text-white border border-white/10"
                            onClick={() => setSelectedProject(null)}
                        >
                            <X size={24} />
                        </button>

                        <div
                            className="relative w-full max-w-6xl h-full md:h-auto md:aspect-[16/10] bg-[#0a0a0a] rounded-3xl md:rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10 overflow-y-auto md:overflow-visible"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Image Container */}
                            <div className="relative flex-grow bg-black flex items-center justify-center group/nav overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={projectImages[currentImgIndex]}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4 }}
                                        src={`/Project/${projectImages[currentImgIndex]}`}
                                        alt={selectedProject.titleEn}
                                        className="w-full h-full object-contain md:object-cover"
                                    />
                                </AnimatePresence>

                                {/* Staging Disclaimer */}
                                {selectedProject.isStaging && (currentImgIndex === 0 || currentImgIndex === 1) && (
                                    <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 text-[9px] md:text-[10px] font-medium text-white/80 tracking-tight italic max-w-[80%] leading-snug">
                                        These are photos of the actual construction site, and after completion, some decorative items were added using AI.
                                    </div>
                                )}

                                {/* Navigation Arrows */}
                                {projectImages.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white/60 hover:text-white transition-all transform hover:scale-110 opacity-0 group-hover/nav:opacity-100"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white/60 hover:text-white transition-all transform hover:scale-110 opacity-0 group-hover/nav:opacity-100"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </>
                                )}

                                {/* Pagination Dots */}
                                <div className="absolute bottom-6 right-0 left-0 flex justify-center gap-2 z-20">
                                    {projectImages.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`h-1 rounded-full transition-all duration-300 ${idx === currentImgIndex ? 'w-8 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'w-2 bg-white/20'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Info Container */}
                            <div className="w-full md:w-96 p-6 md:p-12 flex flex-col justify-center bg-[#0a0a0a] border-t md:border-t-0 md:border-l border-white/5 shrink-0">
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-amber-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4 block">
                                            {selectedProject.category}
                                        </span>
                                        <h2 className="text-3xl font-black tracking-tight leading-tight mb-4">
                                            {lang === 'en' ? selectedProject.titleEn : selectedProject.titleKo}
                                        </h2>
                                        <div className="w-12 h-1 bg-amber-500/30 rounded-full" />
                                    </div>
                                    <p className="text-white/50 text-base leading-relaxed break-keep font-medium">
                                        {lang === 'en' ? selectedProject.descEn : selectedProject.descKo}
                                    </p>
                                    <div className="pt-8">
                                        <a href="#contact" onClick={() => setSelectedProject(null)} className="w-full bg-amber-500 hover:bg-amber-600 text-black px-6 py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 group">
                                            {t.nav.contact}
                                            <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                                <ChevronRight size={18} />
                                            </motion.div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default App;
