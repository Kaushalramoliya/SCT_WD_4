type FilterType = 'all' | 'active' | 'completed';

interface FilterTabsProps {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  counts: {
    all: number;
    active: number;
    completed: number;
  };
}

export default function FilterTabs({ activeFilter, onFilterChange, counts }: FilterTabsProps) {
  const filters: { id: FilterType; label: string; count: number }[] = [
    { id: 'all', label: 'All Tasks', count: counts.all },
    { id: 'active', label: 'Active', count: counts.active },
    { id: 'completed', label: 'Completed', count: counts.completed },
  ];

  return (
    <div className="flex gap-2 p-1 bg-card/30 backdrop-blur-sm border border-card-border rounded-lg" data-testid="filter-tabs">
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          data-testid={`button-filter-${filter.id}`}
          className={`flex-1 px-6 py-3 rounded-md font-semibold transition-all duration-300 relative ${
            activeFilter === filter.id
              ? 'bg-gradient-to-r from-primary to-chart-2 text-primary-foreground shadow-lg'
              : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
          }`}
        >
          <span className="relative z-10">{filter.label}</span>
          {filter.count > 0 && (
            <span
              className={`ml-2 px-2 py-0.5 text-xs rounded-full ${
                activeFilter === filter.id
                  ? 'bg-primary-foreground/20 text-primary-foreground'
                  : 'bg-muted text-muted-foreground'
              }`}
              data-testid={`badge-count-${filter.id}`}
            >
              {filter.count}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
