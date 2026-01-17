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
        share: string;
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
            about: "Our Thoughts",
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
            kakao: "KakaoTalk",
            share: "Share with Friends"
        },
        philosophy: {
            title: "Our Thoughts",
            p1: "Don't postpone the joy you deserve today for the sake of future resale value. While you hesitate, that joy ends up being a gift for the next homeowner, not you. We work together to complete your [safe, organized, comfortable, and beautiful space]. Don't fill your precious home based solely on 'price comparisons'. The sincerity GL has built since 2007 and the priceless value of becoming your 'good neighbor'—even after delivering a safe and refined finish—is something that cannot be measured.",
            p2: "Unlike many sites that use stock photos or AI-generated images, we only showcase our own authentic work through real project photos.",
            p3: "Visit our Facebook and Flickr to see our extensive gallery of real project photos. We believe in the power of 'Before and After' photos to show the true quality of our direct craftsmanship. You can also view our history and videos on YouTube.",
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
            about: "우리의 생각",
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
            kakao: "카카오톡 상담",
            share: "친구에게 공유"
        },
        philosophy: {
            title: "우리의 생각",
            p1: "미래의 주택시장에서의 경쟁력은 물론이거니와, 지금 당신이 누려야 할 기쁨을 미루지 마세요. 고민하며 미루는 사이 그 기쁨은 당신이 아닌, 다음 집주인에게 돌아갑니다. 당신의 [안전하고 정돈된, 편안하고 아름다운 공간]을 위해 함께 완성해 갑니다. 단지 '가격 비교'만으로 당신의 소중한 공간을 채우려 하지 마세요. 2007년 부터 쌓여 온 GL의 진정성과 정돈되고 안전한 마감이후에도 '함께 하는 이웃'이 되는 것은, 그 어떤것으로도 가치를 매길 수 없습니다.",
            p2: "웹사이트에서 흔히 보는 잡지 사진이나 인터넷 생성 이미지가 아닙니다. GL은 오직 우리가 직접 땀 흘리며 시공한 실제 현장의 실제 사진으로 보여드립니다.",
            p3: "우리의 페이스북과 플리커에는 수많은 실제 공사진행 사진들이 담겨있습니다. 우리는 'Before and After' 사진이야말로 실력을 증명하는 진짜라고 믿습니다. 오랜 시간 쌓아온 GL의 역사를 현장 사진과 동영상으로 직접 확인해 보세요.",
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

