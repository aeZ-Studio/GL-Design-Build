export type TranslationContent = {
    motto: string;
    license: string;
    nav: {
        services: string;
        portfolio: string;
        about: string;
        contact: string;
    };
    ecosystem: {
        title: string;
        subtitle: string;
    };
    hero: {
        title: string;
        subtitle: string;
        cta: string;
        kakao: string;
    };
    philosophy: {
        title: string;
        p1: string;
        p2: string;
        p3: string;
    };
    services: {
        kitchen: {
            title: string;
            desc: string;
        };
        bath: {
            title: string;
            desc: string;
        };
        improvement: {
            title: string;
            subtitle: string;
            desc: string;
        };
    };
    contact: {
        formTitle: string;
        name: string;
        email: string;
        phone: string;
        address: string;
        message: string;
        submit: string;
    };
};

export const translations: { en: TranslationContent; ko: TranslationContent } = {
    en: {
        motto: "God is Love, Great Living, Good Life",
        license: "Licensed & Insured | Virginia Class A Contractor (HIC, CBC, RBC)",
        nav: {
            services: "Services",
            portfolio: "Portfolio",
            about: "Philosophy",
            contact: "Contact"
        },
        ecosystem: {
            title: "Expertise & Connectivity",
            subtitle: "Decades of craftsmanship\nmeeting modern living"
        },
        hero: {
            title: "Building Excellence with Sincerity",
            subtitle: "GL Design+Build crafts spaces that define the quality of your life.",
            cta: "Request Consultation",
            kakao: "KakaoTalk"
        },
        philosophy: {
            title: "Our Philosophy",
            p1: "Don't postpone your dream home for the sake of future resale. You deserve to experience a space designed for your comfort and style today. We create timeless elegance that enhances your daily living while ensuring lasting value for years to come.",
            p2: "Unlike many sites that use stock photos or AI-generated images, we only showcase our own authentic work. These are real results from real job sites, showing the true process of transformation.",
            p3: "Visit our Facebook and Flickr to see our extensive gallery of real project photos. We believe in the power of 'Before and After' photos to show the true quality of our direct craftsmanship. You can also view our history and videos on YouTube since 2007."
        },
        services: {
            kitchen: {
                title: "Kitchen Remodeling",
                desc: "The kitchen is the heart of the home, the hub for family. Beyond cabinetry, we specialize in complex systems: plumbing, electrical, and structural wall removals for open-concept layouts, backed by decades of expertise."
            },
            bath: {
                title: "Bath Remodeling",
                desc: "Transform your bathroom into a private sanctuary. Our expertise ensures a perfect balance of aesthetics and functionality."
            },
            improvement: {
                title: "Home Improvement",
                subtitle: "We provide the most complex and rewarding remodeling services, orchestrated by decades of experience.",
                desc: "Meaningful upgrades within your budget—from flooring and deck transformations to essential repairs. Even for the smallest tasks, our expertise ensures your home's value is preserved. For quick local repairs, please click the clock link below."
            }
        },
        contact: {
            formTitle: "Request A Consultation",
            name: "Name",
            email: "Email",
            phone: "Phone",
            address: "Address",
            message: "Project Details",
            submit: "Send Request"
        }
    },
    ko: {
        motto: "God is Love, Great Living, Good Life",
        license: "Commonwealth of Virginia Class A Contractor '최상위 건축면허(HIC, CBC, RBC)' & 보험 완비",
        nav: {
            services: "서비스",
            portfolio: "포트폴리오",
            about: "우리의 철학",
            contact: "상담문의"
        },
        ecosystem: {
            title: "경험과 기술의 연결",
            subtitle: "수십 년의 시공 노하우와\n주거 편의 시스템의 만남"
        },
        hero: {
            title: "진심을 짓는\n프리미엄 건축",
            subtitle: "GL Design+Build는 당신의 삶의 가치를 높이는 공간을 설계합니다.",
            cta: "무료 상담 신청",
            kakao: "카카오톡 상담"
        },
        philosophy: {
            title: "우리의 철학",
            p1: "오직 미래의 가치만을 위해 리모델링을 미루지 마세요. 지금 이 순간, 당신의 삶에 품격을 더하는 변화를 먼저 누릴 자격이 있습니다. 10년 뒤에도 변치 않을 우아함으로 당신의 소중한 공간을 완성합니다.",
            p2: "웹사이트에서 흔히 보는 잡지 사진이나 인터넷 생성 이미지가 아닙니다. 우리는 2007년부터 지금까지 오직 우리가 직접 땀 흘리며 시공한 실제 현장의 기록만을 공개합니다.",
            p3: "우리의 페이스북과 플리커에는 수많은 실제 공사진행 사진들이 담겨있습니다. 우리는 'Before and After' 사진이야말로 실력을 증명하는 진짜라고 믿습니다. 오랜 시간 쌓아온 GL의 역사를 현장 사진과 동영상으로 직접 확인해 보세요 (Since 2007)."
        },
        services: {
            kitchen: {
                title: "키친 리모델링",
                desc: "주방은 온 식구가 모이는 집의 심장입니다. 단순한 캐비닛 교체를 넘어, 오픈형 주방을 위한 벽 철거와 복잡한 구조 변경까지 수십 년의 노하우로 완벽하게 해결합니다."
            },
            bath: {
                title: "욕실 리모델링",
                desc: "가장 개인적이고 소중한 공간을 쉼이 있는 고품격 욕실로 변화시켜 드립니다."
            },
            improvement: {
                title: "집수리(업그레이드)",
                subtitle: "우리는 수십 년간의 경험을 바탕으로 가장 복합적이고 가치 있는 리모델링 서비스를 제공합니다.",
                desc: "바닥재 교체, 데크 업그레이드 등 예산에 맞는 부분적 업그레이드만으로도 큰 만족감을 드릴 수 있습니다. 아주 작은 수리라도 망설이지 마세요. 목조 주택의 원리를 정확히 아는 전문가가 집의 가치를 지켜드립니다. 소소한 수리는 아래 시계가 그려진 링크를 눌러주세요."
            }
        },
        contact: {
            formTitle: "상담 신청하기",
            name: "성함",
            email: "이메일",
            phone: "전화번호",
            address: "주소",
            message: "공사 내용 (예: 주방 리모델링 등)",
            submit: "문의하기"
        }
    }
};

