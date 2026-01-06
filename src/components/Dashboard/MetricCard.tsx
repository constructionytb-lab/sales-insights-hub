import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'emerald' | 'roma' | 'restaurant' | 'pub';
}

const variantStyles = {
  default: 'bg-card border-border',
  emerald: 'bg-gradient-to-br from-company-emerald/10 to-company-emerald/5 border-company-emerald/20',
  roma: 'bg-gradient-to-br from-company-roma/10 to-company-roma/5 border-company-roma/20',
  restaurant: 'bg-gradient-to-br from-company-restaurant/10 to-company-restaurant/5 border-company-restaurant/20',
  pub: 'bg-gradient-to-br from-company-pub/10 to-company-pub/5 border-company-pub/20',
};

const iconStyles = {
  default: 'text-primary bg-primary/10',
  emerald: 'text-company-emerald bg-company-emerald/20',
  roma: 'text-company-roma bg-company-roma/20',
  restaurant: 'text-company-restaurant bg-company-restaurant/20',
  pub: 'text-company-pub bg-company-pub/20',
};

export const MetricCard = ({ 
  title, 
  value, 
  subtitle, 
  icon: Icon, 
  trend,
  variant = 'default' 
}: MetricCardProps) => {
  return (
    <div className={cn(
      "relative overflow-hidden rounded-xl border p-6 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5",
      variantStyles[variant]
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight text-foreground">{value}</p>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
          {trend && (
            <div className={cn(
              "inline-flex items-center gap-1 text-xs font-medium",
              trend.isPositive ? "text-green-500" : "text-red-500"
            )}>
              <span>{trend.isPositive ? '↑' : '↓'}</span>
              <span>{Math.abs(trend.value)}%</span>
              <span className="text-muted-foreground">vs last period</span>
            </div>
          )}
        </div>
        <div className={cn(
          "flex h-12 w-12 items-center justify-center rounded-lg",
          iconStyles[variant]
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
      
      {/* Decorative gradient */}
      <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl" />
    </div>
  );
};
