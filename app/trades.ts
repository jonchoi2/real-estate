type Trade = { complex: 2 | 3 | 4; date: string; building: number; area: number; floor: number; price: number; note: string };
// Asil visible transaction tables, observed 2026-09-06. Prices: KRW 10,000.
export const trades: Trade[] = [
  {complex:3,date:'2026-08-19',building:313,area:167,floor:4,price:91000,note:''},
  {complex:3,date:'2026-08-18',building:309,area:84,floor:12,price:90000,note:''},
  {complex:3,date:'2026-08-16',building:313,area:167,floor:13,price:93000,note:''},
  {complex:3,date:'2026-08-02',building:301,area:134,floor:13,price:93800,note:''},
  {complex:3,date:'2026-07-31',building:308,area:134,floor:12,price:96000,note:''},
  {complex:3,date:'2026-07-25',building:303,area:84,floor:2,price:84500,note:''},
  {complex:4,date:'2026-07-25',building:403,area:132,floor:3,price:95500,note:''},
  {complex:3,date:'2026-07-17',building:302,area:84,floor:10,price:84500,note:''},
  {complex:2,date:'2026-06-27',building:204,area:167,floor:4,price:89000,note:''},
  {complex:3,date:'2026-06-18',building:302,area:84,floor:13,price:80000,note:'등기 표기'},
  {complex:4,date:'2026-06-16',building:402,area:165,floor:19,price:93500,note:''},
  {complex:4,date:'2026-06-11',building:402,area:165,floor:14,price:95700,note:''},
  {complex:4,date:'2026-06-03',building:412,area:84,floor:16,price:83500,note:'등기 표기'},
  {complex:2,date:'2026-03-23',building:203,area:134,floor:12,price:81000,note:'직거래 · 등기 표기'},
  {complex:4,date:'2026-03-18',building:412,area:84,floor:23,price:85000,note:'등기 표기'},
  {complex:2,date:'2026-02-28',building:203,area:134,floor:14,price:90000,note:'등기 표기'},
  {complex:2,date:'2025-10-15',building:208,area:84,floor:2,price:70000,note:'등기 표기'},
  {complex:4,date:'2024-10-08',building:401,area:176,floor:5,price:90000,note:'직거래 · 등기 표기'},
];
