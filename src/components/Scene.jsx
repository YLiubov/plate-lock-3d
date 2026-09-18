import { useEffect, useRef } from "react";
import "aframe";

function Scene({
  baseUrl,
  adapterUrl,
  rotation,
  autoSpin,
  isExploded,
  onManualRotate
}) {
  const modelGroupRef = useRef(null);
  const adapterRef = useRef(null);
  const cameraRef = useRef(null);
  const sceneRef = useRef(null);
  const rotationRef = useRef(rotation);

  useEffect(() => {
    if (!modelGroupRef.current) return;
    rotationRef.current = rotation;
    if (autoSpin) {
      modelGroupRef.current.setAttribute(
        "animation__spin",
        "property: rotation; from: 0 0 0; to: 0 360 0; dur: 8000; loop: true; easing: linear"
      );
    } else {
      modelGroupRef.current.removeAttribute("animation__spin");
      modelGroupRef.current.setAttribute("rotation", `0 ${rotation} 0`);
    }
  }, [autoSpin, rotation]);

  useEffect(() => {
    const sceneElement = sceneRef.current;
    if (!sceneElement) return undefined;

    let isDragging = false;
    let activePointerId = null;
    let previousX = 0;
    let previousY = 0;

    const orbit = { phi: 1.1, radius: 3, theta: 0 };

    const updateCamera = () => {
      const camera = cameraRef.current?.object3D;
      if (!camera) return;
      const target = { x: 0, y: 0.15, z: 0 };
      camera.position.set(
        target.x + orbit.radius * Math.sin(orbit.phi) * Math.sin(orbit.theta),
        target.y + orbit.radius * Math.cos(orbit.phi),
        target.z + orbit.radius * Math.sin(orbit.phi) * Math.cos(orbit.theta)
      );
      const horizontalDistance = orbit.radius * Math.sin(orbit.phi);
      const pitch = Math.atan2(
        target.y - camera.position.y,
        horizontalDistance
      );
      const yaw = Math.atan2(camera.position.x, camera.position.z);
      camera.rotation.order = "YXZ";
      camera.rotation.set(pitch, yaw, 0);
    };

    const handlePointerDown = (event) => {
      isDragging = true;
      activePointerId = event.pointerId;
      previousX = event.clientX;
      previousY = event.clientY;
      sceneElement.setPointerCapture?.(event.pointerId);
    };

    const handlePointerMove = (event) => {
      if (!isDragging || event.pointerId !== activePointerId) return;
      const deltaX = event.clientX - previousX;
      const deltaY = event.clientY - previousY;
      previousX = event.clientX;
      previousY = event.clientY;
      rotationRef.current = (rotationRef.current + deltaX * 0.6 + 360) % 360;
      modelGroupRef.current?.setAttribute(
        "rotation",
        `0 ${rotationRef.current} 0`
      );
      orbit.phi = Math.max(0.2, Math.min(2.95, orbit.phi + deltaY * 0.01));
      updateCamera();
      onManualRotate?.(rotationRef.current);
    };

    const handleWheel = (event) => {
      event.preventDefault();
      orbit.radius = Math.max(
        1.6,
        Math.min(6, orbit.radius + event.deltaY * 0.0025)
      );
      updateCamera();
    };

    const stopDragging = (event) => {
      if (event.pointerId !== activePointerId) return;
      isDragging = false;
      activePointerId = null;
      sceneElement.releasePointerCapture?.(event.pointerId);
    };

    sceneElement.addEventListener("pointerdown", handlePointerDown);
    sceneElement.addEventListener("pointermove", handlePointerMove);
    sceneElement.addEventListener("pointerup", stopDragging);
    sceneElement.addEventListener("pointercancel", stopDragging);
    sceneElement.addEventListener("wheel", handleWheel, { passive: false });
    sceneElement.addEventListener("loaded", updateCamera);
    updateCamera();

    return () => {
      sceneElement.removeEventListener("pointerdown", handlePointerDown);
      sceneElement.removeEventListener("pointermove", handlePointerMove);
      sceneElement.removeEventListener("pointerup", stopDragging);
      sceneElement.removeEventListener("pointercancel", stopDragging);
      sceneElement.removeEventListener("wheel", handleWheel);
      sceneElement.removeEventListener("loaded", updateCamera);
    };
  }, [onManualRotate]);

  useEffect(() => {
    if (!adapterRef.current) return;
    adapterRef.current.setAttribute(
      "animation__separate",
      {
        property: "position",
        to: { x: 0, y: isExploded ? 0.5 : 0.15, z: 0 },
        dur: 600,
        easing: "easeInOutCubic"
      }
    );
  }, [isExploded]);

  return (
    <a-scene
      ref={sceneRef}
      embedded
      vr-mode-ui="enabled: true"
      renderer="antialias: true; colorManagement: true"
      background="color: #111827"
      style={{ cursor: "grab", height: "min(72vh, 680px)", touchAction: "none", width: "100%" }}
    >
      <a-entity light="type: ambient; color: #ffffff; intensity: 1.2" />
      <a-entity
        light="type: directional; color: #ffffff; intensity: 1.4"
        position="-2 4 3"
      />
      <a-plane
        position="0 0 0"
        rotation="-90 0 0"
        width="3"
        height="3"
        color="#263244"
      />
      <a-entity ref={modelGroupRef} rotation="0 0 0">
        <a-entity
          gltf-model={baseUrl}
          position="0 0 0"
          rotation="-90 0 0"
          scale="0.01 0.01 0.01"
        />
        <a-entity
          ref={adapterRef}
          gltf-model={adapterUrl}
          position="0 0.15 0"
          rotation="-90 0 0"
          scale="0.01 0.01 0.01"
        />
      </a-entity>
      <a-camera
        ref={cameraRef}
        position="0 1.5 3"
        look-controls="enabled: false"
        wasd-controls="enabled: true"
      />
    </a-scene>
  );
}

export default Scene;
