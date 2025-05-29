import styled from "styled-components";

export default styled.button`
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    border: none;
    margin: 0 0 0 20px;
    padding: 5px 10px;
    transition: 0.3s;
    font-size: 15px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;    
    }

    &:hover {
        color: ${({ theme }) => theme.color.blue};
    } 

    &:active {
        color: ${({ theme }) => theme.color.cyan};
    }

    &:disabled {
        color: ${({ theme }) => theme.color.nobel};
        background-color: transparent;
    }
`;