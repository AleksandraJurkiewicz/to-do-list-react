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
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
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
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    border: none;
    padding: 0;
    transition: 0.3s;

    ${({$toggleDone}) => $toggleDone && css`
        background: ${({ theme }) => theme.color.forestGreen};
        
        &:hover {
        background: ${({ theme }) => theme.color.limeGreen};
        transform: scale(1.1);
        }

        &:active {
        background: ${({ theme }) => theme.color.green};
        transform: scale(1.1);
        }
    `}

    ${({$remove}) => $remove && css`
        background: ${({ theme }) => theme.color.crimson};
        
        &:hover {
        background: ${({ theme }) => theme.color.monza};
        transform: scale(1.1);
        }

        &:active {
        background: ${({ theme }) => theme.color.torchRed};
        transform: scale(1.1);
        }

    `}
`;