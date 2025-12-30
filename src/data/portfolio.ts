export interface PortfolioItem {
    id: number;
    category: 'kitchen' | 'bath' | 'improvement';
    titleEn: string;
    titleKo: string;
    descEn: string;
    descKo: string;
    image: string;
    isTransformation?: boolean;
}

export const portfolioData: PortfolioItem[] = [
    // KITCHEN
    {
        id: 101,
        category: 'kitchen',
        titleEn: "Modern Open Kitchen",
        titleKo: "모던 오픈 주방 리모델링",
        descEn: "Removed structural walls for an open-concept living experience.",
        descKo: "벽을 철거하여 확 트인 개방형 주방과 거실을 구현했습니다.",
        image: "kitchen-1.jpg",
    },
    {
        id: 104,
        category: 'kitchen',
        titleEn: "Chef's Dream Kitchen",
        titleKo: "셰프의 꿈, 고메 키친",
        descEn: "High-end appliances and spacious island for cooking enthusiasts.",
        descKo: "고급 가전과 넓은 아일랜드로 완성된 조리 공간입니다.",
        image: "kitchen-4.jpg",
    },
    {
        id: 107,
        category: 'kitchen',
        titleEn: "Minimalist Modern Kitchen",
        titleKo: "미니멀 모던 주방",
        descEn: "Sleek lines and hidden storage for a clean look.",
        descKo: "절제된 선과 숨겨진 수납으로 완성된 모던 주방입니다.",
        image: "kitchen-7.jpg",
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
    },
    {
        id: 203,
        category: 'bath',
        titleEn: "Elegant Marble Master Bath",
        titleKo: "엘레강스 마블 마스터 욕실",
        descEn: "Luxurious marble tiling for a timeless look.",
        descKo: "대리석 스타일의 타일로 완성한 고품격 마스터 욕실입니다.",
        image: "bath-3.jpg",
    },
    {
        id: 205,
        category: 'bath',
        titleEn: "Contemporary Master Bath",
        titleKo: "컨템포러리 마스터 욕실",
        descEn: "Modern fixtures and sophisticated design.",
        descKo: "현대적인 수전과 세련된 디자인의 마스터 욕실입니다.",
        image: "bath-5.jpg",
    },
    {
        id: 207,
        category: 'bath',
        titleEn: "Premium Master Bath Reno",
        titleKo: "프리미엄 마스터 욕실 리모델링",
        descEn: "High-end hardware and custom glass shower suite.",
        descKo: "고급 부속과 맞춤형 유리 샤워실로 완성된 공간입니다.",
        image: "bath-7.jpg",
    },

    // IMPROVEMENT - 15 Photos grouped as requested
    // Group 1: Deck (1, 11, 12)
    {
        id: 1,
        category: 'improvement',
        titleEn: "Deck Construction & Upgrade",
        titleKo: "데크 신축 및 업그레이드",
        descEn: "Premium outdoor living spaces.",
        descKo: "야외 생활의 가치를 더하는 고품격 데크 시공입니다.",
        image: "home-1.jpg",
        isTransformation: true,
    },
    {
        id: 11,
        category: 'improvement',
        titleEn: "Deck Construction & Upgrade",
        titleKo: "데크 신축 및 업그레이드",
        descEn: "Premium outdoor living spaces.",
        descKo: "단단한 구조와 세련된 마감의 데크 업그레이드입니다.",
        image: "home-11.jpg",
        isTransformation: true,
    },
    {
        id: 12,
        category: 'improvement',
        titleEn: "Deck Construction & Upgrade",
        titleKo: "데크 신축 및 업그레이드",
        descEn: "Premium outdoor living spaces.",
        descKo: "공간의 효율성을 높인 데크 확장 시공 사례입니다.",
        image: "home-12.jpg",
        isTransformation: true,
    },

    // Group 2: Floor Upgrade (2, 3, 7)
    {
        id: 2,
        category: 'improvement',
        titleEn: "Floor Material Upgrade",
        titleKo: "바닥재 교체 및 업그레이드",
        descEn: "Modern flooring solutions.",
        descKo: "집안의 분위기를 결정하는 고급 바닥재 시공입니다.",
        image: "home-2.jpg",
        isTransformation: true,
    },
    {
        id: 3,
        category: 'improvement',
        titleEn: "Floor Material Upgrade",
        titleKo: "바닥재 교체 및 업그레이드",
        descEn: "Modern flooring solutions.",
        descKo: "깔끔하고 정교한 마감이 돋보이는 바닥 공사입니다.",
        image: "home-3.jpg",
        isTransformation: true,
    },
    {
        id: 7,
        category: 'improvement',
        titleEn: "Floor Material Upgrade",
        titleKo: "바닥재 교체 및 업그레이드",
        descEn: "Modern flooring solutions.",
        descKo: "내구성과 심미성을 동시에 잡은 프리미엄 바닥재입니다.",
        image: "home-7.jpg",
        isTransformation: true,
    },

    // Group 3: Bathroom Upgrade (4, 5, 9)
    {
        id: 4,
        category: 'improvement',
        titleEn: "Bathroom Room Upgrade",
        titleKo: "부분 욕실 업그레이드",
        descEn: "Targeted bathroom improvements.",
        descKo: "부분적인 개선으로 완성한 쾌적한 욕실 공간입니다.",
        image: "home-4.jpg",
        isTransformation: true,
    },
    {
        id: 5,
        category: 'improvement',
        titleEn: "Bathroom Room Upgrade",
        titleKo: "부분 욕실 업그레이드",
        descEn: "Targeted bathroom improvements.",
        descKo: "기능성과 디자인을 모두 고려한 욕실 리뉴얼입니다.",
        image: "home-5.jpg",
        isTransformation: true,
    },
    {
        id: 9,
        category: 'improvement',
        titleEn: "Bathroom Room Upgrade",
        titleKo: "부분 욕실 업그레이드",
        descEn: "Targeted bathroom improvements.",
        descKo: "노후된 욕실을 현대적인 감각으로 탈바꿈했습니다.",
        image: "home-9.jpg",
        isTransformation: true,
    },

    // Group 4: Move-in upgrade (8, 10)
    {
        id: 8,
        category: 'improvement',
        titleEn: "Move-in Readiness Upgrade",
        titleKo: "입주 전 전체 업그레이드",
        descEn: "Comprehensive upgrades for new homeowners.",
        descKo: "새집처럼 쾌적한 출발을 위한 입주 전 필수 시공입니다.",
        image: "home-8.jpg",
        isTransformation: true,
    },
    {
        id: 10,
        category: 'improvement',
        titleEn: "Move-in Readiness Upgrade",
        titleKo: "입주 전 전체 업그레이드",
        descEn: "Comprehensive upgrades for new homeowners.",
        descKo: "꼼꼼한 디테일로 완성된 입주 전 인테리어 업그레이드입니다.",
        image: "home-10.jpg",
        isTransformation: true,
    },

    // Group 5: Partial transformation (6, 15)
    {
        id: 6,
        category: 'improvement',
        titleEn: "Partial Home Transformation",
        titleKo: "부분 공간 변신",
        descEn: "Refreshing specific interior areas.",
        descKo: "단조로운 공간에 새로운 생명력을 불어넣는 부분 시공입니다.",
        image: "home-6.jpg",
        isTransformation: true,
    },
    {
        id: 15,
        category: 'improvement',
        titleEn: "Partial Home Transformation",
        titleKo: "부분 공간 변신",
        descEn: "Refreshing specific interior areas.",
        descKo: "거주 중에도 부담 없이 진행 가능한 스마트한 변신입니다.",
        image: "home-15.jpg",
        isTransformation: true,
    },

    // Group 6: Fire Damage Restoration (13, 14)
    {
        id: 13,
        category: 'improvement',
        titleEn: "Fire Damage Restoration",
        titleKo: "화재 피해 복구 및 리모델링",
        descEn: "Expert restoration after fire damage.",
        descKo: "갑작스러운 화재의 흔적을 지우고 더 안전하고 정교하게 복구했습니다.",
        image: "home-13.jpg",
        isTransformation: true,
    },
    {
        id: 14,
        category: 'improvement',
        titleEn: "Fire Damage Restoration",
        titleKo: "화재 피해 복구 및 리모델링",
        descEn: "Expert restoration after fire damage.",
        descKo: "구조적 안전 정밀 점검과 함께 진행된 완벽한 복구 사례입니다.",
        image: "home-14.jpg",
        isTransformation: true,
    },
];
