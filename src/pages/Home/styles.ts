import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: space-between;
  height: calc(100vh - 5rem);
  max-width: 100vw;
  padding: 12rem 100px;

  .text-area {
    h1 {
      font-size: 75px;
      font-weight: 500;
      line-height: 120.5%;
      letter-spacing: 0.015em;
      color: var(--black);
      margin-bottom: 1.5rem;  

      span {
        color: var(--purple-500);
      }
    }

    p {
      font-size: 1.2rem;
      color: var(--black);
      font-weight: normal;
      align-self: center;
      text-align: justify;
      text-justify: inter-word;
      margin-bottom: 1.5rem;
    }
  }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 513px;
  max-height: 286px;

  .wrap-button-main {
    display: flex;
    align-items: center;

    button {
      & + button {
        margin-left: 1.5rem;
      }
    }

    button:last-child {
      width: 162px;
      height: 46px;
      border-radius: 0.2rem;

      border: 0;
      color: var(--black);
      background: transparent;
      text-align: center;

      display: flex;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: center;
      align-items: center; 

      > img {
        margin-right: 10px;
      }
    }
  }
`;
