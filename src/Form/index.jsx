import React, { useState } from "react";
import "./style.css";

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
        <form className="form" onSubmit={onFormSubit}>
            <input
                value={newTaskContent}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
                required
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
};

export default Form;