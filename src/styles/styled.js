import styled, { css } from "styled-components";

export const Panel = styled.div`
  ${css`
    background: rgba(20, 29, 40, 0.94);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 8px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
    color: #fff;
    padding: 1rem;
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
  `}
`;

export const Btn = styled.button`
  ${css`
    background: #b56b38;
    border: 1px solid #d08a55;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    font: inherit;
    padding: 0.65rem 1rem;
    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
      background: #c47b46;
    }

    &:focus-visible {
      outline: 2px solid #d9a074;
      outline-offset: 2px;
    }

    &:active,
    &.active {
      background: #315f5b;
    }

    &:active {
      transform: translateY(1px);
    }
  `}
`;

export const Legend = styled.div`
  ${css`
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
    color: #1f2937;
    padding: 1rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 10;

    small {
      color: #6b7280;
      display: block;
      font-family: "Helvetica Neue", Arial, sans-serif;
      margin-top: 0.75rem;
    }
  `}

  @media (max-width: 640px) {
    left: 1rem;
    right: 1rem;
    top: 1rem;
  }
`;

export const Container = styled.main`
  ${css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    min-height: 100vh;
    padding: 1rem;
    position: relative;
    width: 100%;
  `}

  @media (max-width: 640px) {
    align-content: center;
    flex-direction: column;
    padding: 0.75rem;
  }
`;
