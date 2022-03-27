import styled from "styled-components";

export const ButtonStyled = styled.button`
  width: 162px;
  height: 46px;  
  border-radius: 0.2rem;
  border: 0;
  color: var(--white);
  background: var(--purple-500);

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
`;