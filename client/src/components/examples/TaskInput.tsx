import TaskInput from '../TaskInput';

export default function TaskInputExample() {
  const handleAddTask = (task: any) => {
    console.log('Task added:', task);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <TaskInput onAddTask={handleAddTask} />
    </div>
  );
}
