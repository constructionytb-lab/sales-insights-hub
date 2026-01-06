import { SalesRecord } from '@/data/salesData';
import { format, parseISO } from 'date-fns';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';

interface DailyBreakdownTableProps {
  data: SalesRecord[];
}

export const DailyBreakdownTable = ({ data }: DailyBreakdownTableProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-6 text-lg font-semibold text-foreground">Daily Breakdown</h3>
      <div className="max-h-96 overflow-auto rounded-lg border border-border">
        <Table>
          <TableHeader className="sticky top-0 bg-muted">
            <TableRow>
              <TableHead className="font-semibold">Date</TableHead>
              <TableHead className="text-right font-semibold text-channel-epos">EPOS</TableHead>
              <TableHead className="text-right font-semibold text-channel-uber">UBER</TableHead>
              <TableHead className="text-right font-semibold text-channel-qpesto">QPESTO</TableHead>
              <TableHead className="text-right font-semibold text-channel-skip">SKIP</TableHead>
              <TableHead className="text-right font-semibold text-channel-chargeback">CB</TableHead>
              <TableHead className="text-right font-semibold">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.slice().reverse().map((record, index) => (
              <TableRow 
                key={record.date}
                className={cn(
                  "transition-colors hover:bg-muted/50",
                  index % 2 === 0 && "bg-muted/20"
                )}
              >
                <TableCell className="font-medium">
                  {format(parseISO(record.date), 'MMM d, yyyy')}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  ${record.EPOS.toLocaleString()}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  ${record.UBER.toLocaleString()}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  ${record.QPESTO.toLocaleString()}
                </TableCell>
                <TableCell className="text-right tabular-nums">
                  ${record.SKIP.toLocaleString()}
                </TableCell>
                <TableCell className={cn(
                  "text-right tabular-nums",
                  record.CHARGEBACK > 0 && "text-channel-chargeback"
                )}>
                  ${record.CHARGEBACK.toLocaleString()}
                </TableCell>
                <TableCell className="text-right font-bold tabular-nums">
                  ${record.TOTAL.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
