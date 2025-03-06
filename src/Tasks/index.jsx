import { Button, TasksList, ListItem, Content } from "./styled";

const Tasks = (props) => (
    <TasksList>
        {props.tasks.map(task => (
            <ListItem
                key={task.id}
                hidden={task.done && props.hideDone}
            >
                <Button 
                    $toggleDone
                    onClick={() => props.toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </Button>
                <Content $done={task.done}>
                    {task.content}
                </Content>
                <Button 
                    $remove
                    onClick={() => props.removeTask(task.id)}>
                    🗑
                </Button>
            </ListItem>
        ))}
    </TasksList>
);

export default Tasks;