import { cn } from '@/lib/utils';
import { COMPANIES } from '@/data/salesData';
import { Building2, Gem, Pizza, Beer, UtensilsCrossed } from 'lucide-react';

interface CompanySelectorProps {
  selected: string | 'all';
  onSelect: (company: string | 'all') => void;
}

const companyIcons: Record<string, React.ReactNode> = {
  'all': <Building2 className="h-4 w-4" />,
  'SHAMALIS EMERALD': <Gem className="h-4 w-4" />,
  'SHAMALIS ROMA': <Pizza className="h-4 w-4" />,
  'LONGHORN RESTAURANT': <UtensilsCrossed className="h-4 w-4" />,
  'LONGHORN PUB': <Beer className="h-4 w-4" />,
};

const companyStyles: Record<string, string> = {
  'all': 'data-[active=true]:bg-primary data-[active=true]:text-primary-foreground',
  'SHAMALIS EMERALD': 'data-[active=true]:bg-company-emerald data-[active=true]:text-white',
  'SHAMALIS ROMA': 'data-[active=true]:bg-company-roma data-[active=true]:text-white',
  'LONGHORN RESTAURANT': 'data-[active=true]:bg-company-restaurant data-[active=true]:text-white',
  'LONGHORN PUB': 'data-[active=true]:bg-company-pub data-[active=true]:text-white',
};

export const CompanySelector = ({ selected, onSelect }: CompanySelectorProps) => {
  const options = ['all', ...COMPANIES] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {options.map((company) => (
        <button
          key={company}
          data-active={selected === company}
          onClick={() => onSelect(company)}
          className={cn(
            "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-200",
            "hover:bg-accent hover:text-accent-foreground",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            companyStyles[company]
          )}
        >
          {companyIcons[company]}
          <span>{company === 'all' ? 'All Companies' : company}</span>
        </button>
      ))}
    </div>
  );
};
