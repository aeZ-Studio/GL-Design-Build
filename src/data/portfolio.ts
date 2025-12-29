export interface PortfolioItem {
    id: number;
    category: 'kitchen' | 'bath' | 'improvement';
    titleEn: string;
    titleKo: string;
    descEn: string;
    descKo: string;
    image: string; // public/projects/ 폴더 안의 파일명
    isBeforeAfter?: boolean;
}

export const portfolioData: PortfolioItem[] = [
    {
        id: 1,
        category: 'kitchen',
        titleEn: "Modern Open Kitchen",
        titleKo: "모던 오픈 주방 리모델링",
        descEn: "Removed structural walls to create a seamless flow between kitchen and living area.",
        descKo: "거실과 주방 사이의 내력벽을 철거하여 확 트인 개방형 주방을 완성했습니다.",
        image: "kitchen-1.jpg",
    },
    {
        id: 2,
        category: 'bath',
        titleEn: "Luxury Master Bath",
        titleKo: "럭셔리 마스터 욕실",
        descEn: "Premium tile work and custom vanity for a spa-like retreat.",
        descKo: "최고급 타일과 맞춤형 세면대로 완성한 힐링 욕실 공간입니다.",
        image: "bath-1.jpg",
    },
    // 여기에 미래의 사진들을 계속 추가하시면 됩니다!
];
