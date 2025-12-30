export interface PortfolioItem {
    id: number;
    category: 'kitchen' | 'bath' | 'improvement';
    titleEn: string;
    titleKo: string;
    descEn: string;
    descKo: string;
    image: string;
    additionalImages?: string[];
    isTransformation?: boolean;
    isStaging?: boolean;
}

export const portfolioData: PortfolioItem[] = [
    // KITCHEN
    {
        id: 101,
        category: 'kitchen',
        titleEn: "Luxury Kitchen Transformation",
        titleKo: "럭셔리 키친 공간 혁신",
        descEn: "Upgraded awkward layout and structural pillars into a luxury kitchen flow.",
        descKo: "어색한 기둥으로 불편한 동선을 럭셔리 키친으로 대폭 업그레이드했습니다.",
        image: "kitchen-1.jpg",
        additionalImages: ["kitchen-2.jpg", "kitchen-3.jpg"],
    },
    {
        id: 104,
        category: 'kitchen',
        titleEn: "Chef's Dream Kitchen",
        titleKo: "셰프의 꿈, 고메 키친",
        descEn: "High-end appliances and spacious island for cooking enthusiasts.",
        descKo: "고급 가전과 넓은 아일랜드로 완성된 조리 공간입니다.",
        image: "kitchen-4.jpg",
        additionalImages: ["kitchen-5.jpg", "kitchen-6.jpg"],
    },
    {
        id: 107,
        category: 'kitchen',
        titleEn: "Elegant & Noble Kitchen",
        titleKo: "품격 있는 프리미엄 주방",
        descEn: "High-end kitchen design that maintains elegance and timeless sophistication.",
        descKo: "모던하면서도 기품을 잃지 않은 품격이 높은 주방입니다.",
        image: "kitchen-7.jpg",
        additionalImages: ["kitchen-8.jpg", "kitchen-9.jpg"],
    },
    {
        id: 110,
        category: 'kitchen',
        titleEn: "Trend-setting Open Kitchen",
        titleKo: "GL 최신 트렌드 오픈 주방",
        descEn: "Major structural change with wall removal for a modern open-concept masterpiece.",
        descKo: "벽철거로 엄청난 변화를 가져다 준 최신 오픈주방, GL의 최신 트렌드 작품입니다.",
        image: "Kitchen-10.jpg",
        additionalImages: ["Kitchen-11.jpg", "Kitchen-12.jpg"],
        isStaging: true, // Mark for AI staging disclaimer
    },

    // BATH
    {
        id: 201,
        category: 'bath',
        titleEn: "Luxury Master Suite Bath",
        titleKo: "럭셔리 마스터 스위트 욕실",
        descEn: "Custom tile work and luxury finishes for a private retreat.",
        descKo: "정교한 타일 시공과 고급 마감재로 완성한 마스터 욕실입니다.",
        image: "bath-1.jpg",
        additionalImages: ["bath-2.jpg"],
    },
    {
        id: 203,
        category: 'bath',
        titleEn: "Elegant Marble Master Bath",
        titleKo: "엘레강스 마블 마스터 욕실",
        descEn: "Luxurious marble tiling for a timeless look.",
        descKo: "대리석 스타일의 타일로 완성한 고품격 마스터 욕실입니다.",
        image: "bath-3.jpg",
        additionalImages: ["bath-4.jpg"],
    },
    {
        id: 205,
        category: 'bath',
        titleEn: "Contemporary Master Bath",
        titleKo: "컨템포러리 마스터 욕실",
        descEn: "Modern fixtures and sophisticated design.",
        descKo: "현대적인 수전과 세련된 디자인의 마스터 욕실입니다.",
        image: "bath-5.jpg",
        additionalImages: ["bath-6.jpg"],
    },
    {
        id: 207,
        category: 'bath',
        titleEn: "Premium Master Bath Reno",
        titleKo: "프리미엄 마스터 욕실 리모델링",
        descEn: "High-end hardware and custom glass shower suite.",
        descKo: "고급 부속과 맞춤형 유리 샤워실로 완성된 공간입니다.",
        image: "bath-7.jpg",
        additionalImages: ["bath-8.jpg"],
    },

    // IMPROVEMENT
    {
        id: 1,
        category: 'improvement',
        titleEn: "Deck Construction & Upgrade",
        titleKo: "데크 신축 및 업그레이드",
        descEn: "Premium outdoor living spaces.",
        descKo: "야외 생활의 가치를 더하는 고품격 데크 시공입니다.",
        image: "home-1.jpg",
        additionalImages: ["home-11.jpg", "home-12.jpg"],
        isTransformation: true,
    },
    {
        id: 2,
        category: 'improvement',
        titleEn: "Floor Material Upgrade",
        titleKo: "바닥재 교체 및 업그레이드",
        descEn: "Modern flooring solutions.",
        descKo: "집안의 분위기를 결정하는 고급 바닥재 시공입니다.",
        image: "home-2.jpg",
        additionalImages: ["home-3.jpg", "home-7.jpg"],
        isTransformation: true,
    },
    {
        id: 4,
        category: 'improvement',
        titleEn: "Bathroom Room Upgrade",
        titleKo: "부분 욕실 업그레이드",
        descEn: "Targeted bathroom improvements.",
        descKo: "부분적인 개선으로 완성한 쾌적한 욕실 공간입니다.",
        image: "home-4.jpg",
        additionalImages: ["home-5.jpg", "home-9.jpg"],
        isTransformation: true,
    },
    {
        id: 8,
        category: 'improvement',
        titleEn: "Move-in Readiness Upgrade",
        titleKo: "입주 전 전체 업그레이드",
        descEn: "Comprehensive upgrades for new homeowners.",
        descKo: "새집처럼 쾌적한 출발을 위한 입주 전 필수 시공입니다.",
        image: "home-8.jpg",
        additionalImages: ["home-10.jpg"],
        isTransformation: true,
    },
    {
        id: 6,
        category: 'improvement',
        titleEn: "Partial Home Transformation",
        titleKo: "부분 공간 변신",
        descEn: "Refreshing specific interior areas.",
        descKo: "단조로운 공간에 새로운 생명력을 불어넣는 부분 시공입니다.",
        image: "home-6.jpg",
        additionalImages: ["home-15.jpg"],
        isTransformation: true,
    },
    {
        id: 13,
        category: 'improvement',
        titleEn: "Fire Damage Restoration",
        titleKo: "화재 피해 복구 및 리모델링",
        descEn: "Expert restoration after fire damage.",
        descKo: "갑작스러운 화재의 흔적을 지우고 더 안전하고 정교하게 복구했습니다.",
        image: "home-13.jpg",
        additionalImages: ["home-14.jpg"],
        isTransformation: true,
    },
];
