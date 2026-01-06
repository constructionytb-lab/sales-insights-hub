import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Cell } from 'recharts';

interface CompanyData {
  name: string;
  total: number;
}

interface CompanyBarChartProps {
  data: CompanyData[];
}

const companyColors: Record<string, string> = {
  'SHAMALIS EMERALD': 'hsl(152, 76%, 45%)',
  'SHAMALIS ROMA': 'hsl(38, 92%, 55%)',
  'LONGHORN RESTAURANT': 'hsl(25, 85%, 55%)',
  'LONGHORN PUB': 'hsl(15, 75%, 50%)',
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg border border-border bg-popover px-4 py-3 shadow-xl">
      <p className="font-medium text-foreground">{label}</p>
      <p className="mt-1 text-2xl font-bold text-foreground">
        ${payload[0].value.toLocaleString()}
      </p>
      <p className="text-sm text-muted-foreground">Total Sales</p>
    </div>
  );
};

export const CompanyBarChart = ({ data }: CompanyBarChartProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-6 text-lg font-semibold text-foreground">Revenue by Company</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 0, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={true} vertical={false} />
            <XAxis 
              type="number" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
            />
            <YAxis 
              type="category"
              dataKey="name" 
              stroke="hsl(var(--muted-foreground))" 
              fontSize={11}
              tickLine={false}
              axisLine={false}
              width={140}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsl(var(--muted) / 0.3)' }} />
            <Bar dataKey="total" radius={[0, 6, 6, 0]} barSize={32}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={companyColors[entry.name]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
