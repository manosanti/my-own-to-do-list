import { ITask } from "../../../task";

interface TaskProps {
    tasks: ITask[]
}

const Task: React.FC<TaskProps> = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (
                <tr key={task.id}>
                    <td>{task.text}</td>
                </tr>
            ))}
        </>
    );
};

export default Task;