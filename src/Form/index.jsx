import React, { useState } from "react";
import { TaskAdding, Button, TaskPlace } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (trimmedNewTaskContent === "") {
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };
    
    return (
        <TaskAdding onSubmit={onFormSubit}>
            <TaskPlace
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                required
            />
            <Button>Dodaj zadanie</Button>
        </TaskAdding>
    );
};

export default Form;