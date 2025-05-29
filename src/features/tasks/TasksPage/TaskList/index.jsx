import { useSelector, useDispatch } from "react-redux";
import { Button, TasksList, ListItem, Content, StyledLink } from "./styled";
import { selectTasksByQuery, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { toTask } from "../../../../routes";
import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter } from "../queryParameters";

const TaskList = () => {
    const query = useQueryParameter(searchQueryParamName);
    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

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
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content $done={task.done}>
                        <StyledLink to={toTask({ id: task.id })}>
                            {task.content}
                        </StyledLink>
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