import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    color: teal;
    background-color: transparent;
    border: none;
    margin: 0 0 0 20px;
    padding: 5px 10px;
    transition: 0.3s;
    font-size: 15px;

    @media(max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        color: hsl(180, 100%, 38%);
    } 

    &:active {
        color: hsl(180, 100%, 50%);
    }

    &:disabled {
        color: hsl(0, 0%, 70%);
        background-color: transparent;
    }
`;