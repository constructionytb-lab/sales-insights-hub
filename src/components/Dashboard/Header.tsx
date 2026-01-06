import { BarChart3 } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <BarChart3 className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground">Sales Analytics</h1>
            <p className="text-sm text-muted-foreground">Multi-Company Dashboard</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-foreground">January 2026</p>
          <p className="text-xs text-muted-foreground">Last updated: Just now</p>
        </div>
      </div>
    </header>
  );
};
