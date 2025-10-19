import { useState } from 'react';
import { Plus, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TaskInputProps {
  onAddTask: (task: { title: string; description: string; dueDate: string; dueTime: string }) => void;
}

export default function TaskInput({ onAddTask }: TaskInputProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [dueTime, setDueTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask({ title, description, dueDate, dueTime });
      setTitle('');
      setDescription('');
      setDueDate('');
      setDueTime('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative backdrop-blur-xl bg-card/40 border border-card-border rounded-lg p-6 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-chart-2/5 rounded-lg pointer-events-none" />
      
      <div className="relative space-y-4">
        <div className="relative">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title..."
            data-testid="input-task-title"
            className="w-full bg-background/50 backdrop-blur-sm border border-border rounded-md px-4 py-3 text-lg font-semibold text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
          />
        </div>

        <div className="relative">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Add a description (optional)..."
            data-testid="input-task-description"
            rows={2}
            className="w-full bg-background/50 backdrop-blur-sm border border-border rounded-md px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
          />
        </div>

        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              data-testid="input-task-date"
              className="w-full bg-background/50 backdrop-blur-sm border border-border rounded-md pl-10 pr-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
          <div className="flex-1 relative">
            <input
              type="time"
              value={dueTime}
              onChange={(e) => setDueTime(e.target.value)}
              data-testid="input-task-time"
              className="w-full bg-background/50 backdrop-blur-sm border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
          </div>
        </div>

        <Button
          type="submit"
          size="default"
          data-testid="button-add-task"
          className="w-full bg-gradient-to-r from-primary to-chart-2 text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Task
        </Button>
      </div>
    </form>
  );
}
