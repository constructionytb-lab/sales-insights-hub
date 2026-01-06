import { useState } from 'react';
import { DollarSign, TrendingUp, Store, CreditCard } from 'lucide-react';
import { Header } from '@/components/Dashboard/Header';
import { MetricCard } from '@/components/Dashboard/MetricCard';
import { CompanySelector } from '@/components/Dashboard/CompanySelector';
import { TimeRangeSelector } from '@/components/Dashboard/TimeRangeSelector';
import { SalesTrendChart } from '@/components/Dashboard/SalesTrendChart';
import { ChannelPieChart } from '@/components/Dashboard/ChannelPieChart';
import { CompanyBarChart } from '@/components/Dashboard/CompanyBarChart';
import { DailyBreakdownTable } from '@/components/Dashboard/DailyBreakdownTable';
import { useSalesData, TimeRange } from '@/hooks/useSalesData';

const Index = () => {
  const [selectedCompany, setSelectedCompany] = useState<string | 'all'>('all');
  const [timeRange, setTimeRange] = useState<TimeRange>('daily');

  const {
    aggregatedData,
    channelTotals,
    totalRevenue,
    companyTotals,
    averageDaily,
    rawData,
  } = useSalesData(selectedCompany, timeRange);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Controls Section */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <CompanySelector selected={selectedCompany} onSelect={setSelectedCompany} />
            <TimeRangeSelector selected={timeRange} onSelect={setTimeRange} />
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Total Revenue"
            value={formatCurrency(totalRevenue)}
            subtitle={`${rawData.length} days of data`}
            icon={DollarSign}
            variant="default"
          />
          <MetricCard
            title="Daily Average"
            value={formatCurrency(averageDaily)}
            subtitle="Per day average"
            icon={TrendingUp}
            trend={{ value: 5.2, isPositive: true }}
            variant="default"
          />
          <MetricCard
            title="Companies"
            value={selectedCompany === 'all' ? '4' : '1'}
            subtitle={selectedCompany === 'all' ? 'All companies selected' : selectedCompany}
            icon={Store}
            variant="default"
          />
          <MetricCard
            title="Sales Channels"
            value="5"
            subtitle="EPOS, UBER, QPESTO, SKIP, CB"
            icon={CreditCard}
            variant="default"
          />
        </div>

        {/* Charts Section */}
        <div className="mb-8 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SalesTrendChart data={aggregatedData} />
          </div>
          <div>
            <ChannelPieChart data={channelTotals} />
          </div>
        </div>

        {/* Company Comparison & Table */}
        <div className="grid gap-6 lg:grid-cols-2">
          {selectedCompany === 'all' && (
            <CompanyBarChart data={companyTotals} />
          )}
          <div className={selectedCompany === 'all' ? '' : 'lg:col-span-2'}>
            <DailyBreakdownTable data={rawData} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground sm:px-6 lg:px-8">
          <p>Sales Analytics Dashboard • Built for SHAMALIS & LONGHORN Companies</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
