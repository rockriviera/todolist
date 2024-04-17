import Task from "../interfaces/Task.ts"; 
import { useState } from "react";
export default function TaskPlanner() {
  const [taskFilterText, setTaskFilterText] = useState<string>("");
  const [showCompletedTasks, setShowCompletedTasks] = useState<boolean>(false);

  const TASKS = [
    { description: "Brush teeth", finished: true },
    { description: "Polish mirror", finished: false },
    { description: "Rescue Cat", finished: true },
    { description: "Save the citizens of Metropolis", finished: true },
  ];
  return (
    <>
      <SearchBar
        searchQuery={taskFilterText}
        onSearchQueryChange={setTaskFilterText}
        showCompletedTasks={showCompletedTasks}
        onShowCompletedTasksChange={setShowCompletedTasks}
      />
      <TaskList
        tasks={TASKS}
        taskFilterText={taskFilterText}
        showCompletedTasks={showCompletedTasks}
      />
    </>
  );
}
function SearchBar({
  searchQuery,
  onSearchQueryChange,
  showCompletedTasks,
  onShowCompletedTasksChange,
}: {
  searchQuery: string;
  onSearchQueryChange: React.Dispatch<React.SetStateAction<string>>;
  showCompletedTasks: boolean;
  onShowCompletedTasksChange: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <form>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search..."
        onChange={(e) => {
          onSearchQueryChange(e.target.value);
        }}
      />
      <label>
        <input
          type="checkbox"
          checked={showCompletedTasks}
          onChange={(e) => {
            onShowCompletedTasksChange(e.target.checked);
          }}
        />
        Show completed tasks
      </label>
    </form>
  );
}
function TaskList({
  tasks,
  taskFilterText,
  showCompletedTasks,
}: {
  tasks: Task[];
  taskFilterText: string;
  showCompletedTasks:boolean;
}) {
  const filteredTasks:Task[]=[];
  tasks.forEach((task:Task) => {
    if(task.description.indexOf(taskFilterText)===-1){
      return;
    }
    if (!showCompletedTasks && !task.finished) {
      return;
    }
    filteredTasks.push(
    task
    );

  });

  const TaskRows = filteredTasks.map((task) => (
    <TaskRow task={task} key={task.description} />
  ));
  return <ul>{TaskRows}</ul>;
}
function TaskRow({ task }: { task: Task }) {
  return <li>{task.description}</li>;
}
