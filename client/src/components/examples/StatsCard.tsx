import StatsCard from '../StatsCard';

export default function StatsCardExample() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <StatsCard total={15} active={9} completed={6} />
    </div>
  );
}
