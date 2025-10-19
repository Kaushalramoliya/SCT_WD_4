import { useState } from 'react';
import { Check, Pencil, Trash2, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TaskCardProps {
  id: string;
  title: string;
  description?: string;
  dueDate?: string;
  dueTime?: string;
  completed: boolean;
  onToggleComplete: (id: string) => void;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskCard({
  id,
  title,
  description,
  dueDate,
  dueTime,
  completed,
  onToggleComplete,
  onEdit,
  onDelete,
}: TaskCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDate = (date: string) => {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div
      className="relative backdrop-blur-xl bg-card/40 border border-card-border rounded-lg p-5 shadow-lg hover:shadow-2xl transition-all duration-300 animate-flip-in group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transformStyle: 'preserve-3d' }}
      data-testid={`card-task-${id}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-primary/20 via-chart-2/20 to-chart-3/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm`} />
      
      <div className="flex items-start gap-4">
        <button
          onClick={() => onToggleComplete(id)}
          data-testid={`button-toggle-${id}`}
          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-300 ${
            completed
              ? 'bg-chart-3 border-chart-3 shadow-lg shadow-chart-3/50'
              : 'border-border bg-background/50 hover:border-primary'
          }`}
        >
          {completed && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
        </button>

        <div className="flex-1 min-w-0">
          <h3
            className={`text-lg font-semibold mb-1 transition-all duration-300 ${
              completed
                ? 'line-through text-muted-foreground'
                : 'text-foreground bg-gradient-to-r from-foreground to-primary bg-clip-text'
            }`}
            data-testid={`text-title-${id}`}
          >
            {title}
          </h3>
          
          {description && (
            <p
              className={`text-sm mb-3 transition-opacity duration-300 ${
                completed ? 'text-muted-foreground/70' : 'text-muted-foreground'
              }`}
              data-testid={`text-description-${id}`}
            >
              {description}
            </p>
          )}

          {(dueDate || dueTime) && (
            <div className="flex flex-wrap gap-2">
              {dueDate && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary" data-testid={`badge-date-${id}`}>
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(dueDate)}</span>
                </div>
              )}
              {dueTime && (
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-chart-2/10 border border-chart-2/20 rounded-full text-xs text-chart-2" data-testid={`badge-time-${id}`}>
                  <Clock className="w-3 h-3" />
                  <span>{dueTime}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className={`flex gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onEdit(id)}
            data-testid={`button-edit-${id}`}
            className="hover:bg-chart-4/20 hover:text-chart-4 transition-colors"
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => onDelete(id)}
            data-testid={`button-delete-${id}`}
            className="hover:bg-destructive/20 hover:text-destructive transition-colors"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
