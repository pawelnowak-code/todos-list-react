import "./style.css";

const Tasks = (props) => (
    <ul className="tasksList">
        {props.tasks.map(task => (
            <li
                key={task.id}
                className={`tasksList__taskItem${props.hideDoneTasks && task.done ? " tasksList__taskItem--hidden" : ""}`}
            >
                <button className={`tasksList__taskButton${task.done ? " tasksList__taskButton--done" : ""}`}>
                    {task.done ? "✓" : ""}
                </button>
                <span className={`tasksList__taskContent${task.done ? " tasksList__taskContent--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasksList__taskButton">🗑️</button>
            </li>
        ))}
    </ul >
);

export default Tasks;