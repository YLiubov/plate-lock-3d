import { Legend as LegendCard } from "../styles/styled";

function Legend() {
  return (
    <LegendCard aria-label="Forklaring">
      <strong>Forklaring:</strong>
      <div>⚫ Bund = bordbeslag</div>
      <div>⚪ Top = adapter på tallerken</div>
      <div>🟠 = klikpunkter (3 stk.)</div>
      <small>Træk for at rotere og se op/ned. Brug scroll for zoom.</small>
    </LegendCard>
  );
}

export default Legend;
