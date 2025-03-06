import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;   
`;

export const ListItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: white;
    width: 30px;
    height: 30px;
    border: none;
    padding: 0;
    transition: 0.3s;

    ${({$toggleDone}) => $toggleDone && css`
        background: hsl(120, 61%, 34%);
        
        &:hover {
        background: hsl(120, 61%, 45%);
        transform: scale(1.1);
        }

        &:active {
        background: hsl(120, 100%, 50%);
        transform: scale(1.1);
        }
    `}

    ${({$remove}) => $remove && css`
        background: hsl(348, 83%, 47%);
        
        &:hover {
        background: hsl(348, 95%, 41%);
        transform: scale(1.1);
        }

        &:active {
        background: hsl(348, 100%, 50%);
        transform: scale(1.1);
        }

    `}
`;