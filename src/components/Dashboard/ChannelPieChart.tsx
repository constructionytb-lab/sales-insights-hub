import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ChannelData {
  name: string;
  value: number;
}

interface ChannelPieChartProps {
  data: ChannelData[];
}

const channelColors: Record<string, string> = {
  EPOS: 'hsl(220, 90%, 60%)',
  UBER: 'hsl(45, 90%, 55%)',
  QPESTO: 'hsl(160, 70%, 50%)',
  SKIP: 'hsl(280, 70%, 60%)',
  CHARGEBACK: 'hsl(0, 70%, 55%)',
};

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;

  const data = payload[0];
  return (
    <div className="rounded-lg border border-border bg-popover px-4 py-3 shadow-xl">
      <div className="flex items-center gap-2">
        <div 
          className="h-3 w-3 rounded-full" 
          style={{ backgroundColor: data.payload.fill }}
        />
        <span className="font-medium text-foreground">{data.name}</span>
      </div>
      <p className="mt-1 text-lg font-bold text-foreground">
        ${data.value.toLocaleString()}
      </p>
      <p className="text-sm text-muted-foreground">
        {((data.value / data.payload.total) * 100).toFixed(1)}% of total
      </p>
    </div>
  );
};

const CustomLegend = ({ payload }: any) => {
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-4">
      {payload?.map((entry: any) => (
        <div key={entry.value} className="flex items-center gap-2">
          <div 
            className="h-3 w-3 rounded-full" 
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-sm text-muted-foreground">{entry.value}</span>
        </div>
      ))}
    </div>
  );
};

export const ChannelPieChart = ({ data }: ChannelPieChartProps) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  const dataWithTotal = data.map(item => ({ ...item, total }));

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-6 text-lg font-semibold text-foreground">Channel Distribution</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={dataWithTotal}
              cx="50%"
              cy="45%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {dataWithTotal.map((entry) => (
                <Cell 
                  key={entry.name} 
                  fill={channelColors[entry.name]}
                  stroke="hsl(var(--background))"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
