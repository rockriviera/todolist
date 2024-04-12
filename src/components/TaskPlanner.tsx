import {Task} from "../interfaces/Task.ts";

export default function TaskPlanner() {
    const TASKS = [
        {description: "Brush teeth"},
        {description: "Polish mirror"},
        {description: "Rescue Cat"},
        {description: "Save the citizens of Metropolis"},
    ];

    function TaskRow({task}: { task: Task }) {
        return (
            <li>{task.description}</li>
        )
    }

    function TaskList({tasks}: { tasks: Task[] }) {
        const taskList = tasks.map((task => <TaskRow task={task} key={task.description}/>))
        return (<ul className='list-style: none;'>{taskList}</ul>)
    }

    return (
        <>
            <TaskList tasks={TASKS}/>
        </>
    )
}