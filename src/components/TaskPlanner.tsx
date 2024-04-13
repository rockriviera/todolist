import { Task } from "../interfaces/Task.ts";
import { useState } from "react";

export default function TaskPlanner() {
  const [taskFilter, setTaskFilter] = useState("");
  const TASKS = [
    { description: "Brush teeth" },
    { description: "Polish mirror" },
    { description: "Rescue Cat" },
    { description: "Save the citizens of Metropolis" },
  ];
  return (
    <>
      <SearchBar searchQuery={taskFilter} onSearchQueryChange={setTaskFilter} />
      <TaskList tasks={TASKS} taskFilter={taskFilter} />
    </>
  );
}
function SearchBar({
  searchQuery,
  onSearchQueryChange,
}: {
  searchQuery: string;
  onSearchQueryChange: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <input
      type="text"
      value={searchQuery}
      placeholder="Search..."
      onChange={(e) => {
        onSearchQueryChange(e.target.value);
      }}
    />
  );
}
function TaskList({
  tasks,
  taskFilter,
}: {
  tasks: Task[];
  taskFilter: string;
}) {
  const filteredTasks = tasks.filter(
    (task) => task.description.indexOf(taskFilter) !== -1
  );
  const filteredTaskList = filteredTasks.map((task) => (
    <TaskRow task={task} key={task.description} />
  ));
  return <ul>{filteredTaskList}</ul>;
}
function TaskRow({ task }: { task: Task }) {
  return <li>{task.description}</li>;
}
