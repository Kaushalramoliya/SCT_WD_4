import { useState } from 'react';
import TaskCard from '../TaskCard';

export default function TaskCardExample() {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="p-8 max-w-2xl mx-auto space-y-4">
      <TaskCard
        id="1"
        title="Complete project documentation"
        description="Write comprehensive docs for the new feature including API references and examples"
        dueDate="2025-10-25"
        dueTime="14:30"
        completed={completed}
        onToggleComplete={() => setCompleted(!completed)}
        onEdit={(id) => console.log('Edit task:', id)}
        onDelete={(id) => console.log('Delete task:', id)}
      />
      
      <TaskCard
        id="2"
        title="Review pull requests"
        completed={true}
        onToggleComplete={() => {}}
        onEdit={(id) => console.log('Edit task:', id)}
        onDelete={(id) => console.log('Delete task:', id)}
      />
    </div>
  );
}
