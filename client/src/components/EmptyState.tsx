import { ListTodo } from 'lucide-react';

interface EmptyStateProps {
  filterType: 'all' | 'active' | 'completed';
}

export default function EmptyState({ filterType }: EmptyStateProps) {
  const messages = {
    all: {
      title: "No tasks yet!",
      description: "Start organizing your life by adding your first task above.",
    },
    active: {
      title: "All caught up!",
      description: "You have no active tasks. Time to relax or add something new.",
    },
    completed: {
      title: "Nothing completed yet",
      description: "Complete tasks to see them here.",
    },
  };

  const message = messages[filterType];

  return (
    <div className="flex flex-col items-center justify-center py-20 animate-slide-up" data-testid="empty-state">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-chart-2/20 rounded-full blur-2xl animate-pulse-glow" />
        <div className="relative p-8 bg-card/40 backdrop-blur-xl border border-card-border rounded-full">
          <ListTodo className="w-16 h-16 text-muted-foreground" />
        </div>
      </div>
      
      <h3 className="mt-8 text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
        {message.title}
      </h3>
      <p className="mt-2 text-muted-foreground text-center max-w-md">
        {message.description}
      </p>
    </div>
  );
}
