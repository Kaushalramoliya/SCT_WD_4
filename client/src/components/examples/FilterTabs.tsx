import { useState } from 'react';
import FilterTabs from '../FilterTabs';

export default function FilterTabsExample() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'active' | 'completed'>('all');

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <FilterTabs
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        counts={{ all: 12, active: 8, completed: 4 }}
      />
    </div>
  );
}
