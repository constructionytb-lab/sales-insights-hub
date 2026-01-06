import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { AggregatedData } from '@/hooks/useSalesData';
import { CHANNELS } from '@/data/salesData';

interface SalesTrendChartProps {
  data: AggregatedData[];
}

const channelColors: Record<string, string> = {
  EPOS: 'hsl(220, 90%, 60%)',
  UBER: 'hsl(45, 90%, 55%)',
  QPESTO: 'hsl(160, 70%, 50%)',
  SKIP: 'hsl(280, 70%, 60%)',
  CHARGEBACK: 'hsl(0, 70%, 55%)',
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-popover p-4 shadow-xl">
      <p className="mb-2 font-semibold text-foreground">{label}</p>
      <div className="space-y-1">
        {payload.map((item: any) => (
          <div key={item.dataKey} className="flex items-center justify-between gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div 
                className="h-3 w-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">{item.dataKey}</span>
            </div>
            <span className="font-medium text-foreground">
              ${item.value.toLocaleString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SalesTrendChart = ({ data }: SalesTrendChartProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-6 text-lg font-semibold text-foreground">Sales Trend by Channel</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              {CHANNELS.map((channel) => (
                <linearGradient key={channel} id={`gradient-${channel}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={channelColors[channel]} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={channelColors[channel]} stopOpacity={0} />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
            <XAxis 
              dataKey="period" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            {CHANNELS.map((channel) => (
              <Area
                key={channel}
                type="monotone"
                dataKey={channel}
                stroke={channelColors[channel]}
                strokeWidth={2}
                fill={`url(#gradient-${channel})`}
                stackId="1"
              />
            ))}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
