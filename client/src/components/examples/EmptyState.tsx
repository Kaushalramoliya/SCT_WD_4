import EmptyState from '../EmptyState';

export default function EmptyStateExample() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="space-y-12">
        <EmptyState filterType="all" />
      </div>
    </div>
  );
}
