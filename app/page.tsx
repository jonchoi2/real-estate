'use client';

import { useMemo, useState } from 'react';

type Listing = {
  complex: 2 | 3 | 4;
  building: string;
  price: number;
  priceLabel: string;
  area: string;
  floor: string;
  ads: number;
  kbAds?: number;
  note: string;
  status?: 'visit' | 'paused' | 'contract' | 'active';
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

const complexLinks = {
  2: 'https://new.land.naver.com/complexes/26526?ms=2ABYns,3zlmKq,17&a=APT:ABYG:JGC&b=A1&e=RETAIL',
  3: 'https://new.land.naver.com/complexes/26527?ms=2ABYns,3zlmKq,17&a=APT:ABYG:JGC&b=A1&e=RETAIL',
  4: 'https://new.land.naver.com/complexes/26528?ms=2ABYns,3zlmKq,17&a=APT:ABYG:JGC&b=A1&e=RETAIL',
};

const kbLinks = { 2: 'https://kbland.kr/se/c/16209', 3: 'https://kbland.kr/se/c/16210', 4: 'https://kbland.kr/se/c/16211' };

const kbInventory: KbInventory[] = [
  { complex: 2, area: '161.01/134.82㎡', listings: 7, generalPrice: '9억', priceBand: '8.6억–9억 2,750' },
  { complex: 2, area: '195.01/167.89㎡', listings: 3, generalPrice: '9억 1,500', priceBand: '8.8억–9억 4,750' },
  { complex: 3, area: '111.71/84.80㎡', listings: 1, generalPrice: '8억 4,500', priceBand: '8억–8.8억' },
  { complex: 3, area: '161.82/134.82㎡', listings: 5, generalPrice: '9억 1,000', priceBand: '8억 6,500–9억 4,250' },
  { complex: 3, area: '193.99/167.89㎡', listings: 4, generalPrice: '9억 1,500', priceBand: '8.8억–9.5억' },
  { complex: 4, area: '112.33/84.96㎡', listings: 7, generalPrice: '8억 2,500', priceBand: '7억 8,500–8억 7,500' },
  { complex: 4, area: '159.21/132.66㎡', listings: 10, generalPrice: '9억 2,500', priceBand: '8억 8,500–9.5억' },
  { complex: 4, area: '193.71/165.68㎡', listings: 9, generalPrice: '9억 4,000', priceBand: '9억–9.6억' },
  { complex: 4, area: '206.83/176.38㎡', listings: 13, generalPrice: '미제공', priceBand: '미제공', note: 'KB 시세 미제공 면적' },
];

const listings: Listing[] = [
  { complex: 2, building: '203동', price: 9, priceLabel: '9억', area: '161/134㎡', floor: '저층', ads: 1, kbAds: 1, status: 'active', note: '세안고 · 숲뷰 · 2028년 9월 초 입주 협의', links: [{ label: '네이버 상세', href: `${complexLinks[2]}&articleNo=2645093851` }] },
  { complex: 2, building: '203동', price: 9.2, priceLabel: '9억 2,000', area: '161/134㎡', floor: '저층', ads: 2, kbAds: 2, status: 'visit', note: '남향·남동향 광고 2건 · 즉시입주 표기 광고 있음 · 401호 여부 확인 필요', links: [{ label: '남향 광고', href: `${complexLinks[2]}&articleNo=2646003506` }, { label: '남동향 광고', href: `${complexLinks[2]}&articleNo=2644198592` }] },
  { complex: 2, building: '201동', price: 9.5, priceLabel: '9억 5,000', area: '161/134㎡', floor: '2층·저층', ads: 5, kbAds: 4, note: '풀옵션·산뷰·즉시입주 광고 다수 · KB는 9.5~9.6억 한 후보군으로 묶음', links: [{ label: '2층 상세', href: `${complexLinks[2]}&articleNo=2646463963` }, { label: '대표 광고', href: `${complexLinks[2]}&articleNo=2647624989` }] },
  { complex: 2, building: '201동', price: 9.6, priceLabel: '9억 6,000', area: '161/134㎡', floor: '저층', ads: 1, note: '시스템에어컨 · 2026년 11월 18일 입주 협의', links: [{ label: '네이버 상세', href: `${complexLinks[2]}&articleNo=2647391863` }] },
  { complex: 2, building: '205동', price: 9.8, priceLabel: '9억 8,000', area: '195/167㎡', floor: '중층', ads: 1, kbAds: 1, status: 'paused', note: '남향 · 화장실 3개 · 기존 9.5억 매물은 현재 미노출', links: [{ label: '단지 매물', href: complexLinks[2] }] },
  { complex: 2, building: '205동', price: 12.5, priceLabel: '12억 5,000', area: '195/167㎡', floor: '중층', ads: 2, kbAds: 2, note: '확장 · 주인거주 · 즉시입주 협의', links: [{ label: '대표 광고', href: `${complexLinks[2]}&articleNo=2647049308` }] },
  { complex: 3, building: '309동', price: 8.8, priceLabel: '8억 8,000', area: '111/84㎡', floor: '저층', ads: 1, kbAds: 1, note: '남향 · 즉시입주 협의', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2644797281` }] },
  { complex: 3, building: '306동', price: 9.35, priceLabel: '9억 3,500', area: '161/134㎡', floor: '고층', ads: 1, kbAds: 1, status: 'paused', note: '확장 · 남향 · 포털상 즉시입주, 전화 확인상 진행 중단', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2644596914` }] },
  { complex: 3, building: '301동', price: 9.5, priceLabel: '9억 5,000', area: '161/134㎡', floor: '7층', ads: 1, kbAds: 1, status: 'active', note: '세안고 · 보증금 6.5억 · 2028년 12월 30일 입주', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2646410482` }] },
  { complex: 3, building: '311동', price: 9.5, priceLabel: '9억 5,000', area: '193/167㎡', floor: '저층', ads: 1, kbAds: 1, note: '수리·확장 · 2028년 1월 하순 입주', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2643167664` }] },
  { complex: 3, building: '307동', price: 9.6, priceLabel: '9억 6,000', area: '161/134㎡', floor: '저층', ads: 1, kbAds: 1, note: '확장 · 막힘없는 뷰 · 2027년 4월 중순 입주', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2644740379` }] },
  { complex: 3, building: '310동', price: 10.5, priceLabel: '10억 5,000', area: '161/134㎡', floor: '15/15층', ads: 1, kbAds: 1, status: 'visit', note: '탑층 · 남향 · 수리 · 즉시입주 협의 · 금요일 14:30 임장', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2643363800` }] },
  { complex: 3, building: '310동', price: 10.5, priceLabel: '10억 5,000', area: '161/134㎡', floor: '저층', ads: 1, kbAds: 1, note: '남서향 · 방 4 · 즉시입주 협의', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2644365018` }] },
  { complex: 3, building: '312동', price: 11, priceLabel: '11억', area: '193/167㎡', floor: '저층', ads: 2, kbAds: 2, note: '산·숲뷰 · 확장 · 즉시입주 협의', links: [{ label: '광고 1', href: `${complexLinks[3]}&articleNo=2645169642` }, { label: '광고 2', href: `${complexLinks[3]}&articleNo=2644236556` }] },
  { complex: 3, building: '312동', price: 11.5, priceLabel: '11억 5,000', area: '193/167㎡', floor: '저층', ads: 1, kbAds: 1, note: '산조망 · 확장 · 즉시입주 협의', links: [{ label: '네이버 상세', href: `${complexLinks[3]}&articleNo=2644019182` }] },
  { complex: 4, building: '409동', price: 9.3, priceLabel: '9억 3,000', area: '112/84㎡', floor: '중층', ads: 1, kbAds: 1, status: 'contract', note: '확장 · 포털상 2026년 12월 하순 입주 · 전화 확인상 계약 진행', links: [{ label: '네이버 상세', href: `${complexLinks[4]}&articleNo=2644291197` }] },
  { complex: 4, building: '402동', price: 9.8, priceLabel: '9억 8,000', area: '193/165㎡', floor: '3층·저층·고층', ads: 4, kbAds: 4, status: 'active', note: '저층 광고는 2027년 4월 하순 입주 · 고층은 세안고·올수리 광고 포함', links: [{ label: '저층 상세', href: `${complexLinks[4]}&articleNo=2647258424` }, { label: '전체 광고', href: complexLinks[4] }] },
  { complex: 4, building: '409동', price: 10, priceLabel: '10억', area: '112/84㎡', floor: '3층·저층', ads: 4, kbAds: 5, note: '화이트톤 올수리·실링팬 광고 · 일부 2027년 1~2월 입주', links: [{ label: '3층 상세', href: `${complexLinks[4]}&articleNo=2646584926` }, { label: '저층 상세', href: `${complexLinks[4]}&articleNo=2645709293` }] },
  { complex: 4, building: '410동', price: 10, priceLabel: '10억', area: '112/84㎡', floor: '22층', ads: 1, kbAds: 1, note: '로얄층 · 전망 · 풀옵션', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '408동', price: 10, priceLabel: '10억', area: '159/132㎡', floor: '중층', ads: 2, kbAds: 2, note: '남향 · 숲세권 · 2027년 1월 입주 광고', links: [{ label: '대표 광고', href: `${complexLinks[4]}&articleNo=2646470138` }] },
  { complex: 4, building: '404동', price: 10.5, priceLabel: '10억 5,000', area: '159/132㎡', floor: '저층', ads: 2, kbAds: 2, note: '최근 리모델링 · 시스템에어컨 5대 · 즉시입주', links: [{ label: '대표 광고', href: `${complexLinks[4]}&articleNo=2647588923` }] },
  { complex: 4, building: '407동', price: 10.5, priceLabel: '10억 5,000', area: '159/132㎡', floor: '저층', ads: 1, kbAds: 1, note: '리모델링 · 시스템에어컨 · 자동 중문 · 확장', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '402동', price: 10.5, priceLabel: '10억 5,000', area: '193/165㎡', floor: '중층·고층', ads: 3, kbAds: 3, note: '확장 · 조망 · 정남향 광고', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '413동', price: 11, priceLabel: '11억', area: '159/132㎡', floor: '중층', ads: 1, kbAds: 1, note: '로얄동·로얄층 · 넓은 주차장', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '401동', price: 11, priceLabel: '11억', area: '206/176㎡', floor: '중층', ads: 1, kbAds: 1, note: '확장 · 화장실 3개', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '402동', price: 11.2, priceLabel: '11억 2,000', area: '193/165㎡', floor: '고층', ads: 2, kbAds: 2, note: '최근 수리 · 탁 트인 뷰 · 즉시입주', links: [{ label: '대표 광고', href: `${complexLinks[4]}&articleNo=2647039123` }] },
  { complex: 4, building: '406동', price: 11.5, priceLabel: '11억 5,000', area: '159/132㎡', floor: '저층·고층', ads: 2, kbAds: 2, note: '확장 · 녹지 또는 트인 조망 · 저층은 2027년 2월 입주', links: [{ label: '저층 상세', href: `${complexLinks[4]}&articleNo=2647484084` }] },
  { complex: 4, building: '401동', price: 12.5, priceLabel: '12억 5,000', area: '206/176㎡', floor: '16층·중층', ads: 6, kbAds: 7, note: '확장 · 시스템에어컨 · 주인거주 · 즉시입주 광고 다수', links: [{ label: '16층 광고', href: `${complexLinks[4]}&articleNo=2646510454` }] },
  { complex: 4, building: '413동', price: 12.5, priceLabel: '12억 5,000', area: '159/132㎡', floor: '저층', ads: 1, kbAds: 1, note: '확장 · 트인 조망', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '401동', price: 13, priceLabel: '13억', area: '206/176㎡', floor: '고층', ads: 2, kbAds: 2, note: '풀옵션·확장 · 시스템에어컨 · 조망', links: [{ label: '단지 매물', href: complexLinks[4] }] },
  { complex: 4, building: '401동', price: 13.5, priceLabel: '13억 5,000', area: '206/176㎡', floor: '8층·저층', ads: 2, kbAds: 3, note: '올인테리어 · 에어컨 7대 광고', links: [{ label: '8층 상세', href: `${complexLinks[4]}&articleNo=2644718536` }] },
  { complex: 4, building: '413동', price: 13.5, priceLabel: '13억 5,000', area: '159/132㎡', floor: '저층', ads: 1, kbAds: 1, note: '확장 · 트인 조망', links: [{ label: '단지 매물', href: complexLinks[4] }] },
];

const stats = [
  { complex: 2 as const, naverAds: 12, kbAds: 10, groups: 6, kbGroups: 5, range: '9억–12.5억', kb: '9억 3,167만' },
  { complex: 3 as const, naverAds: 10, kbAds: 10, groups: 9, kbGroups: 9, range: '8.8억–11.5억', kb: '9억 8,900만' },
  { complex: 4 as const, naverAds: 36, kbAds: 39, groups: 17, kbGroups: 21, range: '9.3억–13.5억', kb: '11억 1,111만' },
];
const statusText = { visit: '임장 예정', paused: '진행 중단', contract: '계약 진행', active: '확인 필요' };

export default function Home() {
  const [complex, setComplex] = useState<0 | 2 | 3 | 4>(0);
  const [sort, setSort] = useState<'price' | 'building'>('price');
  const visible = useMemo(() => listings.filter((item) => complex === 0 || item.complex === complex).sort((a, b) => sort === 'price' ? a.price - b.price : a.building.localeCompare(b.building, 'ko')), [complex, sort]);

  return <main>
    <header className="masthead"><div className="eyebrow">신봉동 동일하이빌 · 매매 후보 리포트</div><div className="titleRow"><h1>광고보다 먼저 봐야 할<br/><span>통합 후보 32개</span></h1><div className="stamp"><b>2026.09.03</b><span>포털 확인 기준</span></div></div><p className="lede">네이버 매매 광고 58건과 KB부동산 매매 59건을 동·가격·면적·층 기준으로 대조했습니다. KB의 ‘같은 매물 합치기’ 결과도 각 후보에 함께 표시하며, 두 포털의 건수는 중복을 포함하므로 서로 더하지 않습니다.</p></header>
    <section className="stats" aria-label="단지별 요약">{stats.map((s) => <article key={s.complex} className={`statCard c${s.complex}`}><div className="statTop"><span>{s.complex}단지</span><strong>{s.range}</strong></div><div className="portalCounts"><div><b>{s.naverAds}</b><span>네이버 광고</span></div><div><b>{s.kbAds}</b><span>KB 매물</span></div></div><p>후보군 네이버 {s.groups}개 · KB {s.kbGroups}개<br/>KB 매물평균 {s.kb} <small>면적 혼합</small></p><div className="sourceLinks"><a href={complexLinks[s.complex]} target="_blank" rel="noreferrer">네이버 전체 ↗</a><a href={kbLinks[s.complex]} target="_blank" rel="noreferrer">KB부동산 ↗</a></div></article>)}</section>
    <section className="kbInventory"><div className="sectionHeading"><div><span className="kicker">KB부동산 추가 확인</span><h2>면적별 KB 매물 59건</h2></div><p>KB 매물 수·일반가·상하한가 기준입니다.</p></div><div className="tableWrap"><table className="kbTable"><thead><tr><th scope="col">단지</th><th scope="col">공급/전용면적</th><th scope="col">KB 매물</th><th scope="col">KB 일반가</th><th scope="col">KB 시세 범위</th><th scope="col">원문</th></tr></thead><tbody>{kbInventory.map((item) => <tr key={`${item.complex}-${item.area}`}><td><span className={`complexDot c${item.complex}`}>{item.complex}</span><b>{item.complex}단지</b></td><td>{item.area}</td><td><b>{item.listings}건</b></td><td className="price">{item.generalPrice}</td><td>{item.priceBand}{item.note && <small className="inlineNote">{item.note}</small>}</td><td><div className="tableLinks"><a aria-label={`${item.complex}단지 KB부동산 상세`} href={kbLinks[item.complex]} target="_blank" rel="noreferrer">KB 상세</a></div></td></tr>)}</tbody></table></div><p className="sourceNote">KB 로그인 화면의 ‘같은 매물 합치기’ 결과는 2단지 5개, 3단지 9개, 4단지 21개 후보군입니다. 면적별 매물 수 59건은 중개업소 광고 기준이며 실제 집 수와 다를 수 있습니다.</p></section>
    <section className="watchlist"><div className="sectionHeading"><div><span className="kicker">현장 확인 메모</span><h2>지금 추적 중인 8개 매물</h2></div><p>포털은 계약·매도 중단을 늦게 반영할 수 있습니다.</p></div><div className="watchGrid">{[listings[0],listings[1],listings[4],listings[7],listings[8],listings[11],listings[15],listings[16]].map((item) => <article className={`watchCard ${item.status || ''}`} key={`${item.complex}-${item.building}-${item.price}`}><div className="watchTop"><span>{item.complex}단지 · {item.building}</span>{item.status && <em>{statusText[item.status]}</em>}</div><strong>{item.priceLabel}</strong><p>{item.floor} · {item.area}</p><small>{item.note}</small><div className="sourceLinks">{item.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div></article>)}</div></section>
    <section className="inventory"><div className="sectionHeading"><div><span className="kicker">전체 후보군</span><h2>단지별 매물 비교</h2></div><div className="controls" aria-label="매물 필터">{[0,2,3,4].map((n) => <button key={n} className={complex === n ? 'selected' : ''} onClick={() => setComplex(n as 0|2|3|4)}>{n === 0 ? '전체' : `${n}단지`}</button>)}<select aria-label="정렬" value={sort} onChange={(e) => setSort(e.target.value as 'price'|'building')}><option value="price">낮은 가격순</option><option value="building">동 순서</option></select></div></div>
      <div className="tableWrap"><table><thead><tr><th scope="col">단지·동</th><th scope="col">매매가</th><th scope="col">면적</th><th scope="col">층</th><th scope="col">포털 광고</th><th scope="col">광고 정보 합산</th><th scope="col">원문</th></tr></thead><tbody>{visible.map((item,index) => <tr key={`${item.complex}-${item.building}-${item.price}-${item.floor}-${index}`}><td><span className={`complexDot c${item.complex}`}>{item.complex}</span><b>{item.building}</b>{item.status && <em className={`miniStatus ${item.status}`}>{statusText[item.status]}</em>}</td><td className="price">{item.priceLabel}</td><td>{item.area}</td><td>{item.floor}</td><td><div className="portalBadges"><b>네이버 {item.ads}</b>{item.kbAds !== undefined && <b>KB {item.kbAds}</b>}</div></td><td className="note">{item.note}</td><td><div className="tableLinks">{item.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>)}<a href={kbLinks[item.complex]} target="_blank" rel="noreferrer">KB 목록</a></div></td></tr>)}</tbody></table></div>
    </section>
    <aside className="caution"><b>읽는 법</b><p>‘광고·매물 수’는 포털에 노출된 중개업소 광고 수이며 실제 집 수와 다를 수 있습니다. KB 면적별 집계와 네이버 후보군에는 같은 집이 중복될 수 있고, 가격 변경이나 층 표기 차이로 한 집이 둘 이상의 후보군에 남을 수도 있습니다. 계약 전에는 등기·임대차·근저당 및 정확한 동호수를 반드시 다시 확인하세요.</p></aside>
    <footer><span>신봉마을 동일하이빌 2·3·4단지</span><span>주소 기준: 경기 용인시 수지구 신봉동</span></footer>
  </main>;
}
