import { ITask } from "../../../task";
import Task from "./Task";

interface todoListProps {
  tasks: ITask[];
}

const ToDoList: React.FC<todoListProps> = ({ tasks }) => {
  console.log(tasks);
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key={task.id} tasks={tasks} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ToDoList;
