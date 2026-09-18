import { useCallback } from "react";
import { Btn } from "../styles/styled";

function Controls({
  onAssemble,
  onExplode,
  onRotate,
  onToggleSpin,
  autoSpin
}) {
  const handleAssemble = useCallback(() => {
    onAssemble();
  }, [onAssemble]);

  const handleExplode = useCallback(() => {
    onExplode();
  }, [onExplode]);

  const handleToggleSpin = useCallback(() => {
    onToggleSpin();
  }, [onToggleSpin]);

  const handleRotate = useCallback(() => {
    onRotate();
  }, [onRotate]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
      <Btn type="button" onClick={handleAssemble}>
        Samlet
      </Btn>
      <Btn type="button" onClick={handleExplode}>
        Adskilt
      </Btn>
      <Btn
        type="button"
        onClick={handleToggleSpin}
        className={autoSpin ? "active" : undefined}
      >
        Auto-rotation: {autoSpin ? "TIL" : "FRA"}
      </Btn>
      <Btn type="button" onClick={handleRotate}>
        Rotér 30°
      </Btn>
    </div>
  );
}

export default Controls;
