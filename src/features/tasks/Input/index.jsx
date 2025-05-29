import styled from "styled-components";

const StyledInput = styled.input`
    border: 1px solid ${({ theme }) => theme.color.alto};
    padding: 10px;
`;

export default StyledInput;