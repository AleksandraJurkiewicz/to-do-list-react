import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { TaskAdding, Button, TaskPlace } from "./styled";
import { addTask } from "../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();
        if (trimmedNewTaskContent === "") {
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
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
            <Button>Dodaj zadanie</Button>
        </TaskAdding>
    );
};

export default Form;