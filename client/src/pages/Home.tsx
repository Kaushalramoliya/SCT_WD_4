import { useState, useEffect } from 'react';
import AnimatedBackground from '@/components/AnimatedBackground';
import TaskInput from '@/components/TaskInput';
import TaskCard from '@/components/TaskCard';
import FilterTabs from '@/components/FilterTabs';
import StatsCard from '@/components/StatsCard';
import EmptyState from '@/components/EmptyState';

interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  dueTime: string;
  completed: boolean;
  createdAt: number;
}

type FilterType = 'all' | 'active' | 'completed';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (taskData: { title: string; description: string; dueDate: string; dueTime: string }) => {
    const newTask: Task = {
      id: Date.now().toString(),
      ...taskData,
      completed: false,
      createdAt: Date.now(),
    };
    setTasks([newTask, ...tasks]);
  };

  const handleToggleComplete = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleEdit = (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (task) {
      const newTitle = prompt('Edit task title:', task.title);
      if (newTitle !== null && newTitle.trim()) {
        setTasks(tasks.map(t => 
          t.id === id ? { ...t, title: newTitle.trim() } : t
        ));
      }
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const stats = {
    all: tasks.length,
    total: tasks.length,
    active: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      
      <div className="relative z-10 px-4 py-8 max-w-4xl mx-auto">
        {/* Hero Header */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-chart-2 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
            To-Do App
          </h1>
          <p className="text-lg text-muted-foreground font-medium">
            Organize your tasks beautifully with style
          </p>
        </div>

        {/* Stats */}
        <div className="mb-8">
          <StatsCard total={stats.total} active={stats.active} completed={stats.completed} />
        </div>

        {/* Task Input */}
        <div className="mb-8">
          <TaskInput onAddTask={handleAddTask} />
        </div>

        {/* Filter Tabs */}
        <div className="mb-6">
          <FilterTabs
            activeFilter={filter}
            onFilterChange={setFilter}
            counts={stats}
          />
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.length === 0 ? (
            <EmptyState filterType={filter} />
          ) : (
            filteredTasks.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                dueDate={task.dueDate}
                dueTime={task.dueTime}
                completed={task.completed}
                onToggleComplete={handleToggleComplete}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))
          )}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>All your tasks are saved locally in your browser</p>
        </div>
      </div>
    </div>
  );
}
