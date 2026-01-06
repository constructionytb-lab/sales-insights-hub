// Sales data types and sample data based on Excel template

export interface SalesRecord {
  date: string;
  EPOS: number;
  UBER: number;
  QPESTO: number;
  SKIP: number;
  CHARGEBACK: number;
  TOTAL: number;
}

export interface CompanyData {
  name: string;
  id: string;
  data: SalesRecord[];
}

export const COMPANIES = [
  'SHAMALIS EMERALD',
  'SHAMALIS ROMA', 
  'LONGHORN RESTAURANT',
  'LONGHORN PUB'
] as const;

export const CHANNELS = ['EPOS', 'UBER', 'QPESTO', 'SKIP', 'CHARGEBACK'] as const;

export type Company = typeof COMPANIES[number];
export type Channel = typeof CHANNELS[number];

// Sample data from Excel - Page 1: SHAMALIS EMERALD
const shamalisEmeraldData: SalesRecord[] = [
  { date: '2026-01-01', EPOS: 1200, UBER: 563, QPESTO: 250, SKIP: 120, CHARGEBACK: 600, TOTAL: 2733 },
  { date: '2026-01-02', EPOS: 1210, UBER: 563, QPESTO: 200, SKIP: 100, CHARGEBACK: 500, TOTAL: 2573 },
  { date: '2026-01-03', EPOS: 1220, UBER: 235, QPESTO: 150, SKIP: 80, CHARGEBACK: 400, TOTAL: 2085 },
  { date: '2026-01-04', EPOS: 1230, UBER: 651, QPESTO: 100, SKIP: 60, CHARGEBACK: 300, TOTAL: 2341 },
  { date: '2026-01-05', EPOS: 1240, UBER: 1067, QPESTO: 50, SKIP: 40, CHARGEBACK: 200, TOTAL: 2597 },
  { date: '2026-01-06', EPOS: 1250, UBER: 1483, QPESTO: 0, SKIP: 20, CHARGEBACK: 100, TOTAL: 2853 },
  // Additional generated data for weekly/monthly views
  { date: '2026-01-07', EPOS: 1280, UBER: 890, QPESTO: 180, SKIP: 95, CHARGEBACK: 250, TOTAL: 2695 },
  { date: '2026-01-08', EPOS: 1350, UBER: 720, QPESTO: 220, SKIP: 110, CHARGEBACK: 320, TOTAL: 2720 },
  { date: '2026-01-09', EPOS: 1400, UBER: 650, QPESTO: 190, SKIP: 85, CHARGEBACK: 280, TOTAL: 2605 },
  { date: '2026-01-10', EPOS: 1320, UBER: 780, QPESTO: 240, SKIP: 130, CHARGEBACK: 350, TOTAL: 2820 },
  { date: '2026-01-11', EPOS: 1450, UBER: 920, QPESTO: 210, SKIP: 105, CHARGEBACK: 290, TOTAL: 2975 },
  { date: '2026-01-12', EPOS: 1380, UBER: 850, QPESTO: 175, SKIP: 90, CHARGEBACK: 260, TOTAL: 2755 },
  { date: '2026-01-13', EPOS: 1290, UBER: 680, QPESTO: 230, SKIP: 115, CHARGEBACK: 310, TOTAL: 2625 },
  { date: '2026-01-14', EPOS: 1410, UBER: 950, QPESTO: 195, SKIP: 100, CHARGEBACK: 275, TOTAL: 2930 },
];

// Sample data from Excel - Page 2: SHAMALIS ROMA
const shamalisRomaData: SalesRecord[] = [
  { date: '2026-01-01', EPOS: 1150, UBER: 563, QPESTO: 250, SKIP: 120, CHARGEBACK: 600, TOTAL: 2683 },
  { date: '2026-01-02', EPOS: 1150, UBER: 550, QPESTO: 220, SKIP: 99, CHARGEBACK: 454, TOTAL: 2473 },
  { date: '2026-01-03', EPOS: 1150, UBER: 537, QPESTO: 190, SKIP: 78, CHARGEBACK: 308, TOTAL: 2263 },
  { date: '2026-01-04', EPOS: 1150, UBER: 524, QPESTO: 160, SKIP: 57, CHARGEBACK: 162, TOTAL: 2053 },
  { date: '2026-01-05', EPOS: 1150, UBER: 511, QPESTO: 130, SKIP: 36, CHARGEBACK: 16, TOTAL: 1843 },
  { date: '2026-01-06', EPOS: 1150, UBER: 498, QPESTO: 100, SKIP: 15, CHARGEBACK: 0, TOTAL: 1763 },
  { date: '2026-01-07', EPOS: 1180, UBER: 520, QPESTO: 185, SKIP: 70, CHARGEBACK: 180, TOTAL: 2135 },
  { date: '2026-01-08', EPOS: 1200, UBER: 540, QPESTO: 210, SKIP: 88, CHARGEBACK: 220, TOTAL: 2258 },
  { date: '2026-01-09', EPOS: 1170, UBER: 510, QPESTO: 175, SKIP: 65, CHARGEBACK: 150, TOTAL: 2070 },
  { date: '2026-01-10', EPOS: 1190, UBER: 555, QPESTO: 230, SKIP: 95, CHARGEBACK: 280, TOTAL: 2350 },
  { date: '2026-01-11', EPOS: 1220, UBER: 580, QPESTO: 200, SKIP: 82, CHARGEBACK: 190, TOTAL: 2272 },
  { date: '2026-01-12', EPOS: 1160, UBER: 495, QPESTO: 165, SKIP: 58, CHARGEBACK: 130, TOTAL: 2008 },
  { date: '2026-01-13', EPOS: 1185, UBER: 530, QPESTO: 195, SKIP: 75, CHARGEBACK: 200, TOTAL: 2185 },
  { date: '2026-01-14', EPOS: 1210, UBER: 560, QPESTO: 220, SKIP: 92, CHARGEBACK: 240, TOTAL: 2322 },
];

// Sample data from Excel - Page 3: LONGHORN RESTAURANT
const longhornRestaurantData: SalesRecord[] = [
  { date: '2026-01-01', EPOS: 5000, UBER: 563, QPESTO: 250, SKIP: 120, CHARGEBACK: 600, TOTAL: 6533 },
  { date: '2026-01-02', EPOS: 1210, UBER: 5, QPESTO: 5, SKIP: 100, CHARGEBACK: 5, TOTAL: 1325 },
  { date: '2026-01-03', EPOS: 54, UBER: 235, QPESTO: 150, SKIP: 80, CHARGEBACK: 400, TOTAL: 919 },
  { date: '2026-01-04', EPOS: 1230, UBER: 651, QPESTO: 100, SKIP: 60, CHARGEBACK: 5, TOTAL: 2046 },
  { date: '2026-01-05', EPOS: 1240, UBER: 1067, QPESTO: 5, SKIP: 5, CHARGEBACK: 200, TOTAL: 2517 },
  { date: '2026-01-06', EPOS: 5, UBER: 1483, QPESTO: 0, SKIP: 20, CHARGEBACK: 100, TOTAL: 1608 },
  { date: '2026-01-07', EPOS: 3200, UBER: 720, QPESTO: 180, SKIP: 95, CHARGEBACK: 350, TOTAL: 4545 },
  { date: '2026-01-08', EPOS: 2800, UBER: 580, QPESTO: 220, SKIP: 110, CHARGEBACK: 280, TOTAL: 3990 },
  { date: '2026-01-09', EPOS: 3500, UBER: 890, QPESTO: 150, SKIP: 75, CHARGEBACK: 420, TOTAL: 5035 },
  { date: '2026-01-10', EPOS: 2100, UBER: 450, QPESTO: 190, SKIP: 120, CHARGEBACK: 180, TOTAL: 3040 },
  { date: '2026-01-11', EPOS: 4200, UBER: 980, QPESTO: 280, SKIP: 140, CHARGEBACK: 520, TOTAL: 6120 },
  { date: '2026-01-12', EPOS: 3800, UBER: 750, QPESTO: 210, SKIP: 95, CHARGEBACK: 380, TOTAL: 5235 },
  { date: '2026-01-13', EPOS: 2600, UBER: 620, QPESTO: 175, SKIP: 85, CHARGEBACK: 290, TOTAL: 3770 },
  { date: '2026-01-14', EPOS: 3900, UBER: 870, QPESTO: 240, SKIP: 115, CHARGEBACK: 450, TOTAL: 5575 },
];

// Sample data from Excel - Page 4: LONGHORN PUB
const longhornPubData: SalesRecord[] = [
  { date: '2026-01-01', EPOS: 1200, UBER: 563, QPESTO: 250, SKIP: 120, CHARGEBACK: 600, TOTAL: 2733 },
  { date: '2026-01-02', EPOS: 1210, UBER: 563, QPESTO: 200, SKIP: 100, CHARGEBACK: 500, TOTAL: 2573 },
  { date: '2026-01-03', EPOS: 1220, UBER: 235, QPESTO: 150, SKIP: 80, CHARGEBACK: 400, TOTAL: 2085 },
  { date: '2026-01-04', EPOS: 1230, UBER: 651, QPESTO: 100, SKIP: 60, CHARGEBACK: 300, TOTAL: 2341 },
  { date: '2026-01-05', EPOS: 1240, UBER: 1067, QPESTO: 50, SKIP: 40, CHARGEBACK: 200, TOTAL: 2597 },
  { date: '2026-01-06', EPOS: 1250, UBER: 1483, QPESTO: 0, SKIP: 20, CHARGEBACK: 100, TOTAL: 2853 },
  { date: '2026-01-07', EPOS: 1300, UBER: 920, QPESTO: 175, SKIP: 90, CHARGEBACK: 280, TOTAL: 2765 },
  { date: '2026-01-08', EPOS: 1280, UBER: 780, QPESTO: 210, SKIP: 105, CHARGEBACK: 340, TOTAL: 2715 },
  { date: '2026-01-09', EPOS: 1350, UBER: 850, QPESTO: 185, SKIP: 78, CHARGEBACK: 295, TOTAL: 2758 },
  { date: '2026-01-10', EPOS: 1420, UBER: 950, QPESTO: 230, SKIP: 125, CHARGEBACK: 380, TOTAL: 3105 },
  { date: '2026-01-11', EPOS: 1380, UBER: 890, QPESTO: 195, SKIP: 95, CHARGEBACK: 310, TOTAL: 2870 },
  { date: '2026-01-12', EPOS: 1290, UBER: 720, QPESTO: 160, SKIP: 70, CHARGEBACK: 250, TOTAL: 2490 },
  { date: '2026-01-13', EPOS: 1340, UBER: 830, QPESTO: 220, SKIP: 110, CHARGEBACK: 330, TOTAL: 2830 },
  { date: '2026-01-14', EPOS: 1400, UBER: 910, QPESTO: 205, SKIP: 98, CHARGEBACK: 355, TOTAL: 2968 },
];

export const salesData: CompanyData[] = [
  { name: 'SHAMALIS EMERALD', id: 'shamalis-emerald', data: shamalisEmeraldData },
  { name: 'SHAMALIS ROMA', id: 'shamalis-roma', data: shamalisRomaData },
  { name: 'LONGHORN RESTAURANT', id: 'longhorn-restaurant', data: longhornRestaurantData },
  { name: 'LONGHORN PUB', id: 'longhorn-pub', data: longhornPubData },
];

export const getCompanyColor = (company: string): string => {
  const colors: Record<string, string> = {
    'SHAMALIS EMERALD': 'hsl(var(--company-emerald))',
    'SHAMALIS ROMA': 'hsl(var(--company-roma))',
    'LONGHORN RESTAURANT': 'hsl(var(--company-restaurant))',
    'LONGHORN PUB': 'hsl(var(--company-pub))',
  };
  return colors[company] || 'hsl(var(--primary))';
};

export const getChannelColor = (channel: string): string => {
  const colors: Record<string, string> = {
    'EPOS': 'hsl(var(--channel-epos))',
    'UBER': 'hsl(var(--channel-uber))',
    'QPESTO': 'hsl(var(--channel-qpesto))',
    'SKIP': 'hsl(var(--channel-skip))',
    'CHARGEBACK': 'hsl(var(--channel-chargeback))',
  };
  return colors[channel] || 'hsl(var(--muted))';
};
