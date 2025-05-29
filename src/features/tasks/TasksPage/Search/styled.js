import styled from "styled-components"; 

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;

  @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
  }
`;
