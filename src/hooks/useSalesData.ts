import { useMemo } from 'react';
import { salesData, SalesRecord, CHANNELS, Channel } from '@/data/salesData';
import { startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfQuarter, endOfQuarter, parseISO, isWithinInterval, format } from 'date-fns';

export type TimeRange = 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'custom';

export interface DateRange {
  from: Date | undefined;
  to: Date | undefined;
}

export interface AggregatedData {
  period: string;
  EPOS: number;
  UBER: number;
  QPESTO: number;
  SKIP: number;
  CHARGEBACK: number;
  TOTAL: number;
}

export const useSalesData = (
  selectedCompany: string | 'all', 
  timeRange: TimeRange,
  customDateRange?: DateRange
) => {
  const filteredData = useMemo(() => {
    let data: SalesRecord[] = [];
    
    if (selectedCompany === 'all') {
      // Combine all company data
      const combined: Record<string, SalesRecord> = {};
      salesData.forEach(company => {
        company.data.forEach(record => {
          if (!combined[record.date]) {
            combined[record.date] = { ...record };
          } else {
            combined[record.date].EPOS += record.EPOS;
            combined[record.date].UBER += record.UBER;
            combined[record.date].QPESTO += record.QPESTO;
            combined[record.date].SKIP += record.SKIP;
            combined[record.date].CHARGEBACK += record.CHARGEBACK;
            combined[record.date].TOTAL += record.TOTAL;
          }
        });
      });
      data = Object.values(combined).sort((a, b) => a.date.localeCompare(b.date));
    } else {
      const company = salesData.find(c => c.name === selectedCompany);
      data = company?.data || [];
    }

    // Apply custom date range filter
    if (timeRange === 'custom' && customDateRange?.from) {
      data = data.filter(record => {
        const recordDate = parseISO(record.date);
        const from = customDateRange.from!;
        const to = customDateRange.to || customDateRange.from!;
        return isWithinInterval(recordDate, { start: from, end: to });
      });
    }

    return data;
  }, [selectedCompany, timeRange, customDateRange]);

  const aggregatedData = useMemo((): AggregatedData[] => {
    if (timeRange === 'daily') {
      return filteredData.map(record => ({
        period: format(parseISO(record.date), 'MMM d'),
        ...record,
      }));
    }

    const grouped: Record<string, AggregatedData> = {};

    filteredData.forEach(record => {
      const date = parseISO(record.date);
      let periodKey: string;
      let periodLabel: string;

      switch (timeRange) {
        case 'weekly':
          const weekStart = startOfWeek(date, { weekStartsOn: 1 });
          periodKey = format(weekStart, 'yyyy-MM-dd');
          periodLabel = `Week of ${format(weekStart, 'MMM d')}`;
          break;
        case 'monthly':
          periodKey = format(date, 'yyyy-MM');
          periodLabel = format(date, 'MMMM yyyy');
          break;
        case 'quarterly':
          const quarter = Math.floor(date.getMonth() / 3) + 1;
          periodKey = `${date.getFullYear()}-Q${quarter}`;
          periodLabel = `Q${quarter} ${date.getFullYear()}`;
          break;
        default:
          periodKey = record.date;
          periodLabel = format(date, 'MMM d');
      }

      if (!grouped[periodKey]) {
        grouped[periodKey] = {
          period: periodLabel,
          EPOS: 0,
          UBER: 0,
          QPESTO: 0,
          SKIP: 0,
          CHARGEBACK: 0,
          TOTAL: 0,
        };
      }

      grouped[periodKey].EPOS += record.EPOS;
      grouped[periodKey].UBER += record.UBER;
      grouped[periodKey].QPESTO += record.QPESTO;
      grouped[periodKey].SKIP += record.SKIP;
      grouped[periodKey].CHARGEBACK += record.CHARGEBACK;
      grouped[periodKey].TOTAL += record.TOTAL;
    });

    return Object.values(grouped);
  }, [filteredData, timeRange]);

  const channelTotals = useMemo(() => {
    return CHANNELS.map(channel => ({
      name: channel,
      value: filteredData.reduce((sum, record) => sum + record[channel], 0),
    }));
  }, [filteredData]);

  const totalRevenue = useMemo(() => {
    return filteredData.reduce((sum, record) => sum + record.TOTAL, 0);
  }, [filteredData]);

  const companyTotals = useMemo(() => {
    return salesData.map(company => ({
      name: company.name,
      total: company.data.reduce((sum, record) => sum + record.TOTAL, 0),
    }));
  }, []);

  const averageDaily = useMemo(() => {
    if (filteredData.length === 0) return 0;
    return Math.round(totalRevenue / filteredData.length);
  }, [filteredData, totalRevenue]);

  return {
    aggregatedData,
    channelTotals,
    totalRevenue,
    companyTotals,
    averageDaily,
    rawData: filteredData,
  };
};
