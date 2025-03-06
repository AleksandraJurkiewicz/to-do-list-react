import styled from "styled-components";

export const Wrapper = styled.section`
    margin: 10px 0;
    background: white;
    box-shadow: 0 0 5px #ddd;
`;

export const Header = styled.h2`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 0px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
        margin: 10px;
    }
`;

export const Content = styled.div`
    padding: 20px;
`;