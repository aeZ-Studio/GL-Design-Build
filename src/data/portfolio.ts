export interface PortfolioItem {
    id: number;
    category: 'kitchen' | 'bath' | 'improvement';
    titleEn: string;
    titleKo: string;
    descEn: string;
    descKo: string;
    image: string; // public/Project/ 폴더 안의 파일명
}

export const portfolioData: PortfolioItem[] = [
    {
        id: 1,
        category: 'kitchen',
        titleEn: "Modern Open Kitchen",
        titleKo: "모던 오픈 주방 리모델링",
        descEn: "Removed structural walls for an open-concept living experience.",
        descKo: "벽을 철거하여 확 트인 개방형 주방과 거실을 구현했습니다.",
        image: "kitchen-1.jpg",
    },
    {
        id: 2,
        category: 'kitchen',
        titleEn: "Classic White Kitchen",
        titleKo: "클래식 화이트 키친",
        descEn: "Timeless design with premium cabinetry and quartz countertops.",
        descKo: "유행을 타지 않는 화이트 캐비닛과 쿼츠 상판의 조화입니다.",
        image: "kitchen-2.jpg",
    },
    {
        id: 3,
        category: 'kitchen',
        titleEn: "Contemporary Wood Tone",
        titleKo: "컨템포러리 우드 톤 주방",
        descEn: "Warm textures meet modern functionality.",
        descKo: "따뜻한 질감과 현대적인 기능성이 만난 주방입니다.",
        image: "kitchen-3.jpg",
    },
    {
        id: 4,
        category: 'kitchen',
        titleEn: "Chef's Dream Kitchen",
        titleKo: "셰프의 꿈, 고메 키친",
        descEn: "High-end appliances and spacious island for cooking enthusiasts.",
        descKo: "고급 가전과 넓은 아일랜드로 완성된 조리 공간입니다.",
        image: "kitchen-4.jpg",
    },
    {
        id: 5,
        category: 'bath',
        titleEn: "Spa-like Master Bath",
        titleKo: "스파 스타일 마스터 욕실",
        descEn: "Custom tile work and luxury finishes for a private retreat.",
        descKo: "정교한 타일 시공과 고급 마감재로 완성한 힐링 공간입니다.",
        image: "bath-1.jpg",
    },
    {
        id: 6,
        category: 'bath',
        titleEn: "Modern Minimalist Bath",
        titleKo: "모던 미니멀 욕실",
        descEn: "Clean lines and sophisticated fixture selection.",
        descKo: "깔끔한 선과 세련된 수전이 돋보이는 모던 욕실입니다.",
        image: "bath-2.jpg",
    },
    {
        id: 7,
        category: 'bath',
        titleEn: "Elegant Marble Bath",
        titleKo: "엘레강스 마블 욕실",
        descEn: "Luxurious marble tiling for a timeless look.",
        descKo: "대리석 스타일의 타일로 완성한 럭셔리 욕실입니다.",
        image: "bath-3.jpg",
    },
    {
        id: 8,
        category: 'bath',
        titleEn: "Cozy Guest Bath",
        titleKo: "아늑한 게스트 욕실",
        descEn: "Small space optimized for comfort and style.",
        descKo: "좁은 공간을 효율적이고 세련되게 꾸민 욕실입니다.",
        image: "bath-4.jpg",
    },
    {
        id: 9,
        category: 'improvement',
        titleEn: "Premium Composite Deck",
        titleKo: "프리미엄 합성 데크 시공",
        descEn: "Durable and beautiful outdoor living space built for longevity.",
        descKo: "반영구적인 내구성과 미관을 모두 잡은 고품격 데크 시공입니다.",
        image: "kitchen-5.jpg", // Placeholder until real improvement images are added
    },
    {
        id: 10,
        category: 'improvement',
        titleEn: "Hardwood Flooring Upgrade",
        titleKo: "고급 원목 마루 시공",
        descEn: "Modernizing the entire home interior with premium hardwood textures.",
        descKo: "집 전체의 분위기를 최고급 원목 마루로 고급스럽게 바꿨습니다.",
        image: "kitchen-6.jpg", // Placeholder until real improvement images are added
    },
    {
        id: 11,
        category: 'improvement',
        titleEn: "Custom Structural Improvement",
        titleKo: "집 구조 개선 및 수리",
        descEn: "Expert structural repairs ensuring home safety and value.",
        descKo: "전문적인 구조 진단과 시공으로 집의 수명을 연장했습니다.",
        image: "kitchen-7.jpg", // Placeholder until real improvement images are added
    },
];
