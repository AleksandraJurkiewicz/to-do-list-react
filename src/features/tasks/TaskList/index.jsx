import { useSelector, useDispatch } from "react-redux";
import { Button, TasksList, ListItem, Content } from "./styled";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <TasksList>
            {tasks.map(task => (
                <ListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        $toggleDone
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content $done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        $remove
                        onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </ListItem>
            ))}
        </TasksList>
    )
};

export default TaskList;