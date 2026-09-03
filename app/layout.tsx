import type { Metadata } from 'next';
import { Noto_Sans_KR, Space_Mono } from 'next/font/google';
import './globals.css';

const sans = Noto_Sans_KR({ variable: '--font-sans', subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] });
const mono = Space_Mono({ variable: '--font-mono', subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: '신봉동 동일하이빌 매물 리포트',
  description: '신봉마을 동일하이빌 2·3·4단지 매매 광고 통합 비교',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={`${sans.variable} ${mono.variable}`}>{children}</body></html>;
}
