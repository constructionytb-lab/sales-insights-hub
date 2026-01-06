import { cn } from '@/lib/utils';
import { TimeRange } from '@/hooks/useSalesData';
import { Calendar, CalendarDays, CalendarRange, BarChart3 } from 'lucide-react';

interface TimeRangeSelectorProps {
  selected: TimeRange;
  onSelect: (range: TimeRange) => void;
}

const timeRanges: { value: TimeRange; label: string; icon: React.ReactNode }[] = [
  { value: 'daily', label: 'Daily', icon: <Calendar className="h-4 w-4" /> },
  { value: 'weekly', label: 'Weekly', icon: <CalendarDays className="h-4 w-4" /> },
  { value: 'monthly', label: 'Monthly', icon: <CalendarRange className="h-4 w-4" /> },
  { value: 'quarterly', label: 'Quarterly', icon: <BarChart3 className="h-4 w-4" /> },
];

export const TimeRangeSelector = ({ selected, onSelect }: TimeRangeSelectorProps) => {
  return (
    <div className="inline-flex rounded-lg border border-border bg-muted/50 p-1">
      {timeRanges.map((range) => (
        <button
          key={range.value}
          onClick={() => onSelect(range.value)}
          className={cn(
            "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200",
            selected === range.value
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {range.icon}
          <span className="hidden sm:inline">{range.label}</span>
        </button>
      ))}
    </div>
  );
};
