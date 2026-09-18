import styled, { css } from "styled-components";

export const Panel = styled.div`
  background: rgba(20, 29, 40, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 8px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.24);
  color: #fff;
  padding: 1rem;
`;

export const Btn = styled.button`
  background: #b56b38;
  border: 1px solid #d08a55;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font: inherit;
  padding: 0.65rem 1rem;
  transition:
    background-color 0.2s ease,
    transform 0.2s ease;

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
`;

export const Legend = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  color: #1f2937;
  padding: 1rem;
  position: absolute;
  right: 1rem;
  top: 1rem;
  z-index: 10;
`;

export const Container = styled.main`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  min-height: 100vh;
  padding: 1rem;
  position: relative;
  width: 100%;
`;

export const RobotDashboard = styled.main`
  --ink: #17212b;
  --muted: #66727d;
  --line: #d9e1e4;
  --paper: #f7faf8;
  --lime: #c9ed52;
  --cyan: #a9e4df;
  background: var(--paper);
  color: var(--ink);
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.6fr);
  margin: 0 auto;
  max-width: 1180px;
  min-height: calc(100vh - 5rem);
  padding: clamp(1.5rem, 4vw, 4rem) clamp(1rem, 4vw, 3rem);

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const Eyebrow = styled.p`
  color: #52706d;
  font-family: "Courier New", monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  margin: 0 0 0.7rem;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  font-size: clamp(2.8rem, 7vw, 6.6rem);
  letter-spacing: -0.06em;
  line-height: 0.88;
  margin: 0;
  max-width: 8ch;
`;

export const RobotPanel = styled.section`
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 1.1rem;
`;

export const RobotFace = styled.div`
  align-items: center;
  background: var(--ink);
  border-radius: 8px;
  display: flex;
  height: 190px;
  justify-content: center;
  margin-bottom: 1rem;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    background: var(--lime);
    border-radius: 50%;
    box-shadow: 0 0 22px var(--lime);
    content: "";
    height: 26px;
    position: absolute;
    top: 45%;
    width: 26px;
  }

  &::before {
    left: 28%;
  }
  &::after {
    right: 28%;
  }
`;

export const Meter = styled.div`
  background: #e7eeeb;
  border-radius: 99px;
  height: 8px;
  margin-top: 0.5rem;
  overflow: hidden;

  span {
    background: var(--lime);
    display: block;
    height: 100%;
    width: ${({ value = 0 }) => `${value}%`};
  }
`;

export const TopicGrid = styled.div`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const TopicCard = styled.article`
  background: ${({ $group }) =>
    $group === "javascript"
      ? "#fff"
      : $group === "service"
        ? "var(--cyan)"
        : "var(--lime)"};
  border: 1px solid var(--ink);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-height: 245px;
  padding: 1rem;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;

  &:hover {
    box-shadow: 5px 5px 0 var(--ink);
    transform: translate(-3px, -3px);
  }

  pre {
    background: rgba(23, 33, 43, 0.08);
    border-radius: 4px;
    font-size: 0.72rem;
    line-height: 1.5;
    margin: auto 0 0;
    overflow-x: auto;
    padding: 0.7rem;
  }
`;

export const Pill = styled.span`
  align-self: flex-start;
  border: 1px solid currentColor;
  border-radius: 99px;
  font-family: "Courier New", monospace;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
`;

export const CodeLine = styled.code`
  color: #37524f;
  display: block;
  font-family: "Courier New", monospace;
  font-size: 0.82rem;
  margin: 0.7rem 0 1.1rem;
`;

export const StatusRow = styled.div`
  align-items: center;
  border-top: 1px solid var(--line);
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
  padding-top: 0.8rem;
`;

export const Muted = styled.span`
  color: var(--muted);
  font-family: "Courier New", monospace;
  font-size: 0.72rem;
`;

export const HeaderRule = styled.div`
  align-items: end;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.4rem;

  ${css`
    h2 {
      font-size: clamp(1.5rem, 3vw, 2.4rem);
      letter-spacing: -0.04em;
      margin: 0;
    }
  `}
`;
