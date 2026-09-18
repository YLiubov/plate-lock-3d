import { Panel } from "../styles/styled";

function StatusBar({ message }) {
  return (
    <Panel
      as="section"
      aria-live="polite"
      style={{ left: "1rem", position: "fixed", top: "5rem", zIndex: 20 }}
    >
      {message}
    </Panel>
  );
}

export default StatusBar;
