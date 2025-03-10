import styled from "styled-components";

export const TaskAdding = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.teal};
    padding: 10px;
    border: none;
    transition: 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.color.blue};
        transform: scale(1.03);
    }

    &:active {
        background-color: ${({ theme }) => theme.color.cyan};
    }
`;

export const TaskPlace = styled.input`
    border: 1px solid ${({ theme }) => theme.color.alto};
    padding: 10px;
`;