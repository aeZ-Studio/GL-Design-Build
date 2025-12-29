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
    };
    philosophy: {
        title: string;
        p1: string;
        p2: string;
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
            desc: string;
        };
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
            title: "Our Ecosystem",
            subtitle: "Connecting Technology\nwith Living Spaces"
        },
        hero: {
            title: "Building Excellence with Sincerity",
            subtitle: "GL Design+Build crafts spaces that define the quality of your life."
        },
        philosophy: {
            title: "Our Philosophy",
            p1: "Don't wait until you're ready to sell to remodel. Renovate now and enjoy it for yourself. Invest in a space that you will cherish every day, designed with trends that will stand the test of time, even 10 years later.",
            p2: "We only use our own project photos. Every image you see is a result of our direct craftsmanship—real photos from real job sites, showing the authentic process of transformation."
        },
        services: {
            kitchen: {
                title: "Kitchen Remodeling",
                desc: "The kitchen is not just for cooking—it’s the heart of the home, the hub for family gatherings and social life. It's the most rewarding investment in your house. A true kitchen remodel involves complex systems: cabinetry, plumbing, electrical, tiles, and structural changes. We specialize in creating open-concept kitchens by expertly removing walls, backed by decades of architectural and wood structure expertise."
            },
            bath: {
                title: "Bath Remodeling",
                desc: "Transform your bathroom into a private sanctuary. Our expertise ensures a perfect balance of aesthetics and functionality."
            },
            improvement: {
                title: "Home Improvement",
                desc: "From additions to full-scale upgrades, we understand the soul of American wood-structure homes."
            }
        }
    },
    ko: {
        motto: "God is Love, Great Living, Good Life",
        license: "Commonwealth of Virginia Class A Contractor 최상위 건축면허 (HIC, CBC, RBC) & 보험 완비",
        nav: {
            services: "서비스",
            portfolio: "포트폴리오",
            about: "우리의 철학",
            contact: "상담문의"
        },
        ecosystem: {
            title: "비즈니스 생태계",
            subtitle: "첨단 기술과\n주거 공간의 연결"
        },
        hero: {
            title: "진심을 짓는 프리미엄 건축",
            subtitle: "GL Design+Build는 당신의 삶의 가치를 높이는 공간을 설계합니다."
        },
        philosophy: {
            title: "우리의 철학",
            p1: "집 팔 때쯤에 고쳐서 남 좋은 일 시키지 마세요. 지금 고쳐서 당신이 먼저 누려야 합니다. 10년 뒤에 팔아도 손색없을 최신 트렌드로, 어설픈 업그레이드가 아닌 가치 있는 변화를 선물합니다.",
            p2: "우리는 우리가 직접 시공한 사진만 사용합니다. 잡지나 인터넷에서 가져온 가짜 사진이 아닌, 실제 현장에서 땀 흘리며 완성한 정직한 시공 과정을 공개합니다."
        },
        services: {
            kitchen: {
                title: "키친 리모델링",
                desc: "주방은 엄마의 조리 공간을 넘어 온 식구가 모이는 집의 심장입니다. 캐비닛 교체를 넘어 전기, 배관, 구조 변경까지 필요한 복합 전문가의 영역입니다. 우리는 오픈형 주방을 위한 벽 철거와 구조 변경 전문입니다."
            },
            bath: {
                title: "욕실 리모델링",
                desc: "가장 개인적이고 소중한 공간을 쉼이 있는 고품격 욕실로 변화시켜 드립니다."
            },
            improvement: {
                title: "집수리(업그레이드)",
                desc: "바닥공사, 데크시공, 부분적인 집 업그레이드 및 수선이 필요한 곳을 전문가의 손길로 책임집니다. 미국식 목조 주택의 구조와 원리를 정확히 이해해야 집의 가치가 유지됩니다."
            }
        }
    }
};
