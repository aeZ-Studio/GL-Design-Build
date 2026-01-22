import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Globe, Droplets, Home,
    MessageCircle, Youtube, Facebook,
    Utensils, Mail, MapPin, Send, Clock,
    ChevronLeft, ChevronRight, Maximize2, X
} from 'lucide-react';
import { translations, TranslationContent } from './i18n/translations';
import { portfolioData } from './data/portfolio';

// Kakao SDK Type Declaration
declare global {
    interface Window {
        Kakao: any;
    }
}

const App = () => {
    const [lang, setLang] = useState<'en' | 'ko'>('en');
    const [filter, setFilter] = useState<'all' | 'kitchen' | 'bath' | 'improvement'>('all');

    const handleHardRefresh = () => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (const registration of registrations) {
                    registration.unregister();
                }
                window.location.reload();
            });
        } else {
            window.location.reload();
        }
    };

    const handleKakaoShare = () => {
        try {
            if (!window.Kakao) {
                alert(lang === 'ko' ? '카카오 SDK를 불러오지 못했습니다.' : 'Kakao SDK not loaded.');
                return;
            }

            // 만약 초기화가 안 되어 있다면 즉시 재초기화 시도
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init('ae953bc09e6d628c5f9a5a3b8487c10e');
            }

            window.Kakao.Share.sendCustom({
                templateId: 128038,
            });
        } catch (error) {
            console.error('Kakao Share Error:', error);
            alert(lang === 'ko' ? '공유하기를 실행하는 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.' : 'Error opening Kakao Share.');
        }
    };

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

    // Unified Modal Close Logic with History support
    const closeModal = () => {
        if (selectedProject) {
            setSelectedProject(null);
            if (window.history.state?.modal) {
                window.history.back();
            }
        }
    };

    // Handle back button and scroll lock
    useEffect(() => {
        const handlePopState = () => {
            if (selectedProject) {
                setSelectedProject(null); // Just close the state, we are already back in history
            }
        };

        if (selectedProject) {
            document.body.style.overflow = 'hidden';
            // Push state only if it's not already there (to avoid multiple states on rapid clicks)
            if (!window.history.state?.modal) {
                window.history.pushState({ modal: true }, '');
            }
            window.addEventListener('popstate', handlePopState);
        } else {
            document.body.style.overflow = 'unset';
            // Cleanup: If modal is closed manually and hash/state remains, we'd handle it.
        }

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [selectedProject]);

    const filteredPortfolio = filter === 'all'
        ? portfolioData
        : portfolioData.filter(item => item.category === filter);

    const handleServiceClick = (category: 'kitchen' | 'bath' | 'improvement') => {
        setFilter(category);
        document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // Updated to Web3Forms - More reliable and zero-config
            // To activate: Replace the access_key with your own from web3forms.com (Instant & Free)
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    access_key: "ad70cc8b-f1de-4b91-a9be-384c9da267c7", // Please get one from web3forms.com
                    ...formState,
                    from_name: "GL Website Inquiry",
                    subject: `New Inquiry from ${formState.name}`
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormState({ name: '', email: '', phone: '', address: '', message: '' });
                alert(lang === 'ko' ? '문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다!' : 'Your request has been sent! We will contact you soon.');
            } else {
                alert(lang === 'ko' ? `전송 실패: ${result.message || '다시 시도해 주세요.'}` : `Failed: ${result.message || 'Please try again later.'}`);
            }
        } catch (error) {
            alert(lang === 'ko' ? '서버 연결에 실패했습니다. 카카오톡 상담을 이용해 주세요.' : 'Failed to connect. Please use KakaoTalk OpenChat.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a]/95 text-white font-['Outfit',_'Noto_Sans_KR',_sans-serif] antialiased">
            {/* Background Overlay to match aeZ-Hub style */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(245,158,11,0.05),_transparent_50%)] pointer-events-none" />

            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img src="/logo.png" alt="GL Design+Build" className="h-10 w-auto" />
                        <div className="flex flex-col">
                            <span className="text-xl font-black tracking-tighter leading-none">GL <span className="text-amber-500">Design+Build</span></span>
                            <span className="text-[7px] min-[375px]:text-xs font-bold tracking-[0.1em] min-[375px]:tracking-[0.2em] text-white/40 uppercase mt-1 break-keep">{t.motto}</span>
                        </div>
                    </div>

                    <button
                        onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
                        className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-all text-white/60"
                    >
                        <Globe size={16} />
                        <span className="text-xs font-bold uppercase">{lang === 'en' ? '한국어' : 'English'}</span>
                    </button>
                </div>
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
                        className={`text-4xl min-[375px]:text-5xl md:text-8xl font-black tracking-tighter mb-8 break-keep whitespace-pre-line ${lang === 'ko' ? 'leading-[1.15]' : 'leading-[0.9]'}`}
                    >
                        {t.hero.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-base md:text-2xl text-white/60 max-w-2xl mx-auto font-medium mb-12 break-keep leading-relaxed whitespace-pre-line"
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
                            {t.hero.cta}
                        </a>
                        <a href="https://open.kakao.com/o/gQlXUX8h" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto bg-[#FEE500] text-[#3c1e1e] px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 shadow-xl shadow-yellow-500/10 flex items-center justify-center gap-2">
                            <MessageCircle size={20} />
                            {t.hero.kakao}
                        </a>
                        <button
                            onClick={handleKakaoShare}
                            className="w-full md:w-auto bg-white/10 text-white px-10 py-4 rounded-full font-black text-lg transition-all hover:scale-105 hover:bg-white/20 shadow-xl border border-white/20 flex items-center justify-center gap-2"
                        >
                            <Send size={20} />
                            {t.hero.share}
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section id="about" className="py-12 md:py-16 px-6 relative bg-[#0a0a0a]/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">{t.philosophy.title}</span>
                            <h2 className="text-xl md:text-2xl font-medium tracking-tight leading-relaxed break-keep text-white/95 font-['Stylish'] opacity-90 italic">
                                "{t.philosophy.p1}"
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
            <section id="services" className="py-12 md:py-16 px-6 bg-[#0f0f0f]/80">
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
                        <div
                            onClick={() => handleServiceClick('kitchen')}
                            className="group bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/20 transition-all duration-500 cursor-pointer hover:bg-white/10"
                        >
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

                        <div
                            onClick={() => handleServiceClick('bath')}
                            className="group bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/20 transition-all duration-500 cursor-pointer hover:bg-white/10"
                        >
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

                        <div
                            onClick={() => handleServiceClick('improvement')}
                            className="group bg-white/5 p-10 rounded-[2.5rem] border border-white/5 hover:border-amber-500/20 transition-all duration-500 cursor-pointer hover:bg-white/10"
                        >
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

            {/* Hub & Apps Section - Moved Here */}
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
                            <Clock className="text-[#10b981]/40 group-hover:text-[#10b981] transition-colors" size={32} />
                            <span className="text-[10px] font-black tracking-widest text-[#10b981]/60">aeZ-HomeSolution</span>
                        </a>
                    </div>


                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-12 md:py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
                        <div className="space-y-4">
                            <span className="text-amber-500 text-xs font-black uppercase tracking-[0.3em]">Masterpieces</span>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t.nav.portfolio}</h2>
                        </div>
                        <div className="flex p-1.5 bg-white/5 rounded-full border border-white/10 overflow-x-auto scrollbar-hide">
                            <div className="flex gap-1 px-4 md:px-1">
                                {(['all', 'kitchen', 'bath', 'improvement'] as const).map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilter(cat)}
                                        className={`px-6 py-2 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${filter === cat ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/20' : 'text-white/40 hover:text-white'
                                            }`}
                                    >
                                        {cat === 'all' ? (lang === 'ko' ? '전체' : 'All') :
                                            cat === 'kitchen' ? (lang === 'ko' ? '주방' : 'Kitchen') :
                                                cat === 'bath' ? (lang === 'ko' ? '욕실' : 'Bath') :
                                                    (lang === 'ko' ? '집수리' : 'Home Improvement')}
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
                                <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">
                                    {item.isTransformation && (
                                        <div className="bg-amber-500 text-black text-[10px] font-black px-3 py-1 rounded-full shadow-xl shadow-amber-500/20 uppercase tracking-tighter">
                                            B&A
                                        </div>
                                    )}
                                    {item.additionalImages && (
                                        <div className="bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/10 uppercase tracking-tighter flex items-center gap-1.5">
                                            <Maximize2 size={10} />
                                            {item.additionalImages.length + 1} Photos
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-amber-400 text-[10px] font-black uppercase tracking-[0.4em] mb-2">{item.category}</span>
                                    <h3 className="text-2xl font-black mb-2">{lang === 'en' ? item.titleEn : item.titleKo}</h3>
                                    <p className="text-white/60 text-sm max-w-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {(() => {
                                            const text = lang === 'en' ? item.descEn : item.descKo;
                                            return text.split(/(\*[^*]+\*)/g).map((part, index) =>
                                                part.startsWith('*') && part.endsWith('*')
                                                    ? <strong key={index} className="text-white font-bold">{part.slice(1, -1)}</strong>
                                                    : <span key={index}>{part}</span>
                                            );
                                        })()}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hub & Apps Section */}


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

                    <div className="mt-20 pt-12 border-t border-white/5">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                            <div className="flex flex-col items-center lg:items-start">
                                <img src="/logo.png" alt="GL Logo" className="h-10 w-auto mb-6 brightness-110 mix-blend-screen opacity-80" />
                                <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-6 group hover:bg-amber-500/20 transition-all duration-300">
                                    <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)] animate-pulse" />
                                    <span className="text-xs md:text-sm font-black text-amber-500 uppercase tracking-wider">{t.license}</span>
                                </div>
                                <p className="text-white/40 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase whitespace-nowrap">{t.motto}</p>
                            </div>
                            <div className="flex gap-10">
                                <a href="https://www.facebook.com/GLdesignBuildcom/photos" target="_blank" rel="noopener noreferrer" className="text-[#1877F2]/60 hover:text-[#1877F2] hover:scale-110 transition-all"><Facebook size={24} /></a>
                                <a href="https://www.youtube.com/watch?v=dzmaQedMc9s" target="_blank" rel="noopener noreferrer" className="text-[#FF0000]/60 hover:text-[#FF0000] hover:scale-110 transition-all"><Youtube size={24} /></a>
                                <button
                                    onClick={handleKakaoShare}
                                    className="text-[#FEE500]/60 hover:text-[#FEE500] hover:scale-110 transition-all cursor-pointer"
                                >
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                        <path d="M12 3C6.477 3 2 6.477 2 10.75c0 2.76 1.845 5.187 4.636 6.556-.204.704-.738 2.541-.845 2.924-.131.472.164.466.345.345.14-.093 2.24-1.52 3.134-2.126.907.213 1.84.327 2.729.327 5.523 0 10-3.477 10-7.75S17.523 3 12 3z" />
                                    </svg>
                                </button>
                                <a href="https://www.flickr.com/photos/90832744@N05/albums/72157700948710755/" target="_blank" rel="noopener noreferrer" className="opacity-40 hover:opacity-100 hover:scale-110 transition-all">
                                    <div className="flex gap-0.5">
                                        <span className="w-3 h-3 rounded-full bg-[#0063dc]" />
                                        <span className="w-3 h-3 rounded-full bg-[#ff0084]" />
                                    </div>
                                </a>
                            </div>
                            <div className="flex flex-col items-center gap-6 mt-12 lg:mt-0">
                                {/* Refresh Button */}
                                <button
                                    onClick={handleHardRefresh}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 text-blue-400 transition-all active:scale-95 group shadow-lg shadow-blue-500/5"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" className="group-hover:rotate-180 transition-transform duration-500"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
                                    <span className="text-[11px] font-black tracking-tight flex items-center gap-1.5 leading-none">
                                        <svg viewBox="0 0 384 512" width="10" height="10" fill="currentColor"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-126.7-10.5-126.7-10.5h.1zM315.1 84.7c18.5-22.3 31.1-53.3 27.7-84.7-26.9 1.1-59.5 17.9-78.8 40.5-17.3 19.9-32.5 51.7-28.4 82.3 29.8 2.3 60.1-15.8 79.5-38.1z" /></svg>
                                        새로운 기능 및 환경 업데이트
                                    </span>
                                </button>

                                {/* Small Privacy & Copyright */}
                                <div className="flex flex-col items-center gap-1 opacity-20">
                                    <p className="text-[7px] font-thin text-white leading-none tracking-tighter uppercase">
                                        Certified Private Analytics: 100% On-Device / No Cloud Sync.
                                    </p>
                                    <p className="text-[8px] text-white/60 mb-1 tracking-tight uppercase font-medium">
                                        © 2026 All Rights Reserved. <span className="text-white font-bold">aeZ Studio</span>
                                    </p>
                                </div>

                                {/* Studio Hub Link (Gray Capsule) */}
                                <a
                                    href="https://aez-hub.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-[10px] font-black text-zinc-500 hover:text-amber-500 transition-colors gap-1.5 px-4 py-1.5 rounded-full hover:bg-white/5 border border-white/5 uppercase tracking-widest italic"
                                >
                                    <span>aeZ Studio Hub</span>
                                    <ChevronRight size={10} />
                                </a>
                            </div>
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
                        onClick={closeModal}
                    >
                        <button
                            className="absolute top-4 right-4 md:top-8 md:right-8 z-[120] p-4 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full transition-colors text-white/60 hover:text-white border border-white/10"
                            onClick={closeModal}
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
                                        className="w-full h-full object-contain md:object-cover cursor-pointer"
                                        onClick={nextImage}
                                    />
                                </AnimatePresence>

                                {/* Staging Disclaimer */}
                                {selectedProject.isStaging && (currentImgIndex === 0 || currentImgIndex === 1) && (
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-auto max-w-[95%]">
                                        <div className="px-3 py-1 bg-black/30 backdrop-blur-md rounded-lg border border-white/5 text-[8px] font-medium text-white/30 tracking-tight italic text-center leading-none">
                                            AI-enhanced staging: Decorative items added to actual site photos.
                                        </div>
                                    </div>
                                )}

                                {/* Navigation Arrows */}
                                {projectImages.length > 1 && (
                                    <>
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white/60 hover:text-white transition-all transform hover:scale-110"
                                        >
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white/60 hover:text-white transition-all transform hover:scale-110"
                                        >
                                            <ChevronRight size={24} />
                                        </button>
                                    </>
                                )}

                                {/* Thumbnails & Pagination UI */}
                                <div className="absolute bottom-4 md:bottom-8 right-0 left-0 flex flex-col items-center gap-3 md:gap-4 z-20">
                                    {projectImages.length > 1 && (
                                        <div className="flex gap-1 md:gap-2 p-1 md:p-2 bg-black/40 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/5 mx-auto overflow-x-auto max-w-[90vw] scrollbar-hide">
                                            {projectImages.map((img, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setCurrentImgIndex(idx);
                                                    }}
                                                    className={`w-8 h-8 md:w-12 md:h-12 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${idx === currentImgIndex ? 'border-amber-500 scale-110' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105'
                                                        }`}
                                                >
                                                    <img src={`/Project/${img}`} className="w-full h-full object-cover" alt="thumbnail" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    <div className="flex justify-center gap-2">
                                        {projectImages.map((_, idx) => (
                                            <div
                                                key={idx}
                                                className={`h-1 rounded-full transition-all duration-300 ${idx === currentImgIndex ? 'w-8 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]' : 'w-2 bg-white/20'}`}
                                            />
                                        ))}
                                    </div>
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
                                        <a href="#contact" onClick={closeModal} className="w-full bg-amber-500 hover:bg-amber-600 text-black px-6 py-4 rounded-2xl font-black text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 group">
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
