import React, { useState, useRef } from "react";
import { TaskAdding, Button, TaskPlace } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus();
    };

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
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                required
            />
            <Button onClick={focusInput}>Dodaj zadanie</Button>
        </TaskAdding>
    );
};

export default Form;