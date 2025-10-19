import { CheckCircle2, Circle, ListTodo } from 'lucide-react';

interface StatsCardProps {
  total: number;
  active: number;
  completed: number;
}

export default function StatsCard({ total, active, completed }: StatsCardProps) {
  const stats = [
    { icon: ListTodo, label: 'Total Tasks', value: total, color: 'from-primary to-chart-2' },
    { icon: Circle, label: 'Active', value: active, color: 'from-chart-4 to-chart-5' },
    { icon: CheckCircle2, label: 'Completed', value: completed, color: 'from-chart-3 to-primary' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="relative backdrop-blur-xl bg-card/40 border border-card-border rounded-lg p-5 shadow-lg hover:shadow-xl transition-all duration-300 group animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
          data-testid={`stat-${stat.label.toLowerCase().replace(' ', '-')}`}
        >
          {/* Gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300`} />
          
          <div className="relative flex items-center gap-4">
            <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} shadow-lg`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
              <p className="text-3xl font-bold text-foreground mt-1" data-testid={`value-${stat.label.toLowerCase().replace(' ', '-')}`}>
                {stat.value}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
