import { useCallback, useState } from "react";
import Controls from "../components/Controls";
import Scene from "../components/Scene";
import StatusBar from "../components/StatusBar";
import useModels from "../hooks/useModels";
import { Panel } from "../styles/styled";

function ViewerPage() {
  const { data, isLoading, error } = useModels();
  const [rotation, setRotation] = useState(0);
  const [autoSpin, setAutoSpin] = useState(true);
  const [isExploded, setIsExploded] = useState(false);

  const handleRotate = useCallback(() => {
    setAutoSpin(false);
    setRotation((previousRotation) => (previousRotation + 30) % 360);
  }, []);

  const handleManualRotate = useCallback((nextRotation) => {
    setAutoSpin(false);
    setRotation(nextRotation);
  }, []);

  const handleToggleSpin = useCallback(() => {
    setAutoSpin((previousAutoSpin) => !previousAutoSpin);
  }, []);

  const handleAssemble = useCallback(() => setIsExploded(false), []);
  const handleExplode = useCallback(() => setIsExploded(true), []);

  if (error) {
    return <StatusBar message={`⚠ Fejl: ${error.message}`} />;
  }

  const resolveAssetUrl = (assetUrl, fallback) => {
    const path = assetUrl || fallback;
    return path.startsWith("/")
      ? `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`
      : path;
  };
  const baseUrl = resolveAssetUrl(data?.models?.base, "/models/base.glb");
  const adapterUrl = resolveAssetUrl(
    data?.models?.adapter,
    "/models/adapter.glb"
  );

  return (
    <>
      {isLoading ? (
        <StatusBar message="Indlæser modeller…" />
      ) : (
        <>
          <Scene
            baseUrl={baseUrl}
            adapterUrl={adapterUrl}
            rotation={rotation}
            autoSpin={autoSpin}
            isExploded={isExploded}
            onManualRotate={handleManualRotate}
          />
          <Panel
            style={{
              bottom: "1.25rem",
              left: "50%",
              position: "fixed",
              transform: "translateX(-50%)",
              zIndex: 20
            }}
          >
            <Controls
              onAssemble={handleAssemble}
              onExplode={handleExplode}
              onRotate={handleRotate}
              onToggleSpin={handleToggleSpin}
              autoSpin={autoSpin}
            />
          </Panel>
        </>
      )}
    </>
  );
}

export default ViewerPage;
