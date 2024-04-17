import Task from "./Task";
export default interface TaskList{
    tasks: Task[];
    taskFilterText: string;
    showCompletedTasks:boolean;
    onShowCompletedTasksChange: React.Dispatch<React.SetStateAction<boolean>>;
}