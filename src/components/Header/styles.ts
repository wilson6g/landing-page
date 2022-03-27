import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 5rem;
`;

export const HeaderContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 4rem;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    align-self: center;
  }

  .nav-links {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .header-wrap-button {
    display: flex;
    justify-content: space-between;

    a {
      color: var(--black);
      font-weight: 500;
      font-size: 1.1rem;
      align-self: center;
      margin-right: 1.4rem;
    }

    button {
      & + button {
        margin-left: 1rem;
      }
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;

  a {
    color: var(--black);
    font-weight: 500;
    font-size: 1.1rem;

    & + a {
      margin-left: 2rem;
    }
  }
`;
