export type Listing = {
  complex: 2 | 3 | 4;
  building: string;
  price: number;
  priceLabel: string;
  area: string;
  floor: string;
  ads: number;
  kbAds?: number;
  note: string;
  asilAds?: number;
  links: { label: string; href: string }[];
};

type KbInventory = {
  complex: 2 | 3 | 4;
  area: string;
  listings: number;
  generalPrice: string;
  priceBand: string;
  note?: string;
};

export const complexLinks = {
  2: 'https://new.land.naver.com/complexes/26526?ms=2ABYns,3zlmKq,17&a=APT:ABYG:JGC&b=A1&e=RETAIL',
  3: 'https://new.land.naver.com/complexes/26527?ms=2ABYns,3zlmKq,17&a=APT:ABYG:JGC&b=A1&e=RETAIL',
  4: 'https://new.land.naver.com/complexes/26528?ms=2ABYns,3zlmKq,17&a=APT:ABYG:JGC&b=A1&e=RETAIL',
};

export const kbLinks = { 2: 'https://kbland.kr/se/c/16209', 3: 'https://kbland.kr/se/c/16210', 4: 'https://kbland.kr/se/c/16211' };


export const kbInventory: KbInventory[] = [
  {
    "complex": 2,
    "area": "112.13/84.89㎡",
    "listings": 0,
    "generalPrice": "8억 5,000",
    "priceBand": "8억 1,000–8억 9,000"
  },
  {
    "complex": 2,
    "area": "161.01/134.82㎡",
    "listings": 8,
    "generalPrice": "9억",
    "priceBand": "8억 6,500–9억 2,750"
  },
  {
    "complex": 2,
    "area": "195.01/167.89㎡",
    "listings": 3,
    "generalPrice": "9억 1,500",
    "priceBand": "8억 8,000–9억 4,750"
  },
  {
    "complex": 3,
    "area": "111.71/84.80㎡",
    "listings": 1,
    "generalPrice": "8억 5,000",
    "priceBand": "8억 1,000–8억 9,000"
  },
  {
    "complex": 3,
    "area": "112.16/84.89㎡",
    "listings": 0,
    "generalPrice": "8억 5,000",
    "priceBand": "8억 1,000–8억 9,000"
  },
  {
    "complex": 3,
    "area": "161.82/134.82㎡",
    "listings": 5,
    "generalPrice": "9억 3,500",
    "priceBand": "9억–9억 5,500"
  },
  {
    "complex": 3,
    "area": "193.99/167.89㎡",
    "listings": 5,
    "generalPrice": "9억 3,500",
    "priceBand": "9억–9억 5,500"
  },
  {
    "complex": 4,
    "area": "112.33/84.96㎡",
    "listings": 7,
    "generalPrice": "8억 2,500",
    "priceBand": "7억 8,500–8억 7,500"
  },
  {
    "complex": 4,
    "area": "159.21/132.66㎡",
    "listings": 10,
    "generalPrice": "9억 3,500",
    "priceBand": "9억–9억 5,500"
  },
  {
    "complex": 4,
    "area": "193.71/165.68㎡",
    "listings": 7,
    "generalPrice": "9억 4,000",
    "priceBand": "9억 500–9억 6,000"
  },
  {
    "complex": 4,
    "area": "206.83/176.38㎡",
    "listings": 13,
    "generalPrice": "미제공",
    "priceBand": "미제공"
  }
];

export const asilLinks = {2:'https://asil.kr/app/apt_info.jsp?os=pc&apt=20130070',3:'https://asil.kr/app/apt_info.jsp?os=pc&apt=20130741',4:'https://asil.kr/app/apt_info.jsp?os=pc&apt=20132494'};

export const listings: Listing[] = [
  { complex: 2, building: '201동', price: 9.5, priceLabel: '9억 5,000', area: '161/134㎡', floor: '2층·저층', ads: 5, kbAds: 4, note: '풀옵션·산뷰·즉시입주 광고 다수 · KB는 9.5~9.6억 한 후보군으로 묶음', links: [{ label: '2층 상세', href: `${complexLinks[2]}&articleNo=2646463963` }, { label: '대표 광고', href: `${complexLinks[2]}&articleNo=2647624989` }] },
  { complex: 2, building: '201동', price: 9.6, priceLabel: '9억 6,000', area: '161/134㎡', floor: '저층', ads: 1, note: '시스템에어컨 · 2026년 11월 18일 입주 협의', links: [{ label: '네이버 상세', href: `${complexLinks[2]}&articleNo=2647391863` }] },
  { complex: 2, building: '205동', price: 12.5, priceLabel: '12억 5,000', area: '195/167㎡', floor: '중층', ads: 2, kbAds: 2, note: '확장 · 주인거주 · 즉시입주 협의', links: [{ label: '대표 광고', href: `${complexLinks[2]}&articleNo=2647049308` }] },
  { complex: 3, building: '309동', price: 8.8, priceLabel: '8억 8,000', area: '111/84㎡', floor: '저층', ads: 1, kbAds: 1, note: '남향 · 즉시입주 협의', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2644797281` }] },
  { complex: 3, building: '311동', price: 9.5, priceLabel: '9억 5,000', area: '193/167㎡', floor: '저층', ads: 1, kbAds: 1, note: '수리·확장 · 2028년 1월 하순 입주', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2643167664` }] },
  { complex: 3, building: '307동', price: 9.6, priceLabel: '9억 6,000', area: '161/134㎡', floor: '저층', ads: 1, kbAds: 1, note: '확장 · 막힘없는 뷰 · 2027년 4월 중순 입주', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2644740379` }] },
  { complex: 3, building: '310동', price: 10.5, priceLabel: '10억 5,000', area: '161/134㎡', floor: '저층', ads: 1, kbAds: 1, note: '남서향 · 방 4 · 즉시입주 협의', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2644365018` }] },
  { complex: 3, building: '312동', price: 11, priceLabel: '11억', area: '193/167㎡', floor: '저층', ads: 3, kbAds: 3, note: '산·숲뷰 · 확장 · 입주 협의 · 광고 3건은 동일 호수 확정 아님', links: [{ label: '광고 1', href: `${complexLinks[3]}&articleNo=2645169642` }, { label: '광고 2', href: `${complexLinks[3]}&articleNo=2644236556` }] },
  { complex: 4, building: '409동', price: 10, priceLabel: '10억', area: '112/84㎡', floor: '3층·저층', ads: 4, kbAds: 5, asilAds: 1, note: '화이트톤 올수리·실링팬 광고 · 일부 2027년 1~2월 입주', links: [{ label: '아실 광고', href: 'https://asil.kr/app/sale_of_apt.jsp?os=pc&user=0&apt=20132494' }, { label: '3층 상세', href: `${complexLinks[4]}&articleNo=2646584926` }, { label: '저층 상세', href: `${complexLinks[4]}&articleNo=2645709293` }] },
  { complex: 4, building: '410동', price: 10, priceLabel: '10억', area: '112/84㎡', floor: '22층', ads: 1, kbAds: 1, note: '로얄층 · 전망 · 풀옵션', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '408동', price: 10, priceLabel: '10억', area: '159/132㎡', floor: '중층', ads: 1, kbAds: 1, note: '남향 · 숲세권 · 2027년 1월 입주 광고', links: [{ label: '대표 광고', href: `${complexLinks[4]}&articleNo=2646470138` }] },
  { complex: 4, building: '404동', price: 10.5, priceLabel: '10억 5,000', area: '159/132㎡', floor: '저층', ads: 2, kbAds: 2, note: '최근 리모델링 · 시스템에어컨 5대 · 즉시입주', links: [{ label: '대표 광고', href: `${complexLinks[4]}&articleNo=2647588923` }] },
  { complex: 4, building: '407동', price: 10.5, priceLabel: '10억 5,000', area: '159/132㎡', floor: '저층', ads: 1, kbAds: 1, note: '리모델링 · 시스템에어컨 · 자동 중문 · 확장', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '402동', price: 10.5, priceLabel: '10억 5,000', area: '193/165㎡', floor: '중층·고층', ads: 2, kbAds: 2, note: '확장 · 조망 · 정남향 광고', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '413동', price: 11, priceLabel: '11억', area: '159/132㎡', floor: '중층', ads: 1, kbAds: 1, note: '로얄동·로얄층 · 넓은 주차장', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '401동', price: 11, priceLabel: '11억', area: '206/176㎡', floor: '중층', ads: 1, kbAds: 1, note: '확장 · 화장실 3개', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '402동', price: 11.2, priceLabel: '11억 2,000', area: '193/165㎡', floor: '고층', ads: 2, kbAds: 2, note: '최근 수리 · 탁 트인 뷰 · 즉시입주', links: [{ label: '대표 광고', href: `${complexLinks[4]}&articleNo=2647039123` }] },
  { complex: 4, building: '406동', price: 11.5, priceLabel: '11억 5,000', area: '159/132㎡', floor: '저층·고층', ads: 2, kbAds: 2, note: '확장 · 녹지 또는 트인 조망 · 저층은 2027년 2월 입주', links: [{ label: '저층 상세', href: `${complexLinks[4]}&articleNo=2647484084` }] },
  { complex: 4, building: '401동', price: 12.5, priceLabel: '12억 5,000', area: '206/176㎡', floor: '16층·중층', ads: 6, kbAds: 7, asilAds: 1, note: '확장 · 시스템에어컨 · 주인거주 · 즉시입주 광고 다수', links: [{ label: '아실 광고', href: 'https://asil.kr/app/sale_of_apt.jsp?os=pc&user=0&apt=20132494' }, { label: '16층 광고', href: `${complexLinks[4]}&articleNo=2646510454` }] },
  { complex: 4, building: '413동', price: 12.5, priceLabel: '12억 5,000', area: '159/132㎡', floor: '저층', ads: 1, kbAds: 1, note: '확장 · 트인 조망', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '401동', price: 13, priceLabel: '13억', area: '206/176㎡', floor: '고층', ads: 2, kbAds: 2, note: '풀옵션·확장 · 시스템에어컨 · 조망', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '401동', price: 13.5, priceLabel: '13억 5,000', area: '206/176㎡', floor: '8층·저층', ads: 2, kbAds: 3, asilAds: 1, note: '올인테리어 · 에어컨 7대 광고', links: [{ label: '아실 광고', href: 'https://asil.kr/app/sale_of_apt.jsp?os=pc&user=0&apt=20132494' }, { label: '8층 상세', href: `${complexLinks[4]}&articleNo=2644718536` }] },
  { complex: 4, building: '413동', price: 13.5, priceLabel: '13억 5,000', area: '159/132㎡', floor: '저층', ads: 1, kbAds: 1, note: '확장 · 트인 조망', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 2, building: '202동', price: 9.3, priceLabel: '9억 3,000', area: '161.01/134.82㎡', floor: '저층/15층', ads: 1, kbAds: 1, note: '9/4 등록 · 남향 · 확장·산조망·풀옵션 · 2027년 4월 초순 이후 입주 협의', links: [{ label: 'KB 상세', href: 'https://kbland.kr/p/252278019' }, { label: '네이버 목록', href: complexLinks[2] }] },
  { complex: 3, building: '312동', price: 12, priceLabel: '12억', area: '193.99/167.89㎡', floor: '고층/15층', ads: 1, kbAds: 1, note: '9/4 등록 · 남향 · 확장 · 방4·욕실3 · 즉시입주 협의', links: [{ label: 'KB 상세', href: 'https://kbland.kr/p/252285888' }, { label: '네이버 목록', href: complexLinks[3] }] },
  { complex: 4, building: '406동', price: 9.8, priceLabel: '9억 8,000', area: '159.21/132.66㎡', floor: '저층/28층', ads: 1, kbAds: 1, note: '9/5 등록 · 남향 · 정원뷰 · 방4·욕실2 · 2026년 12월 초순 이후 입주 협의', links: [{ label: 'KB 상세', href: 'https://kbland.kr/p/252476616' }, { label: '네이버 목록', href: complexLinks[4] }] },
];

