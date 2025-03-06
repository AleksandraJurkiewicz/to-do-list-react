import styled from "styled-components";

export const TaskAdding = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    color: white;
    background: hsl(180, 100%, 25%);
    padding: 10px;
    border: none;
    transition: 0.3s;

    &:hover {
        background-color: hsl(180, 100%, 38%);
        transform: scale(1.03);
    }
`;

export const TaskPlace = styled.input`
    border: 1px solid #ddd;
    padding: 10px;
`;