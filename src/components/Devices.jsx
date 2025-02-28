import { Canvas } from "@react-three/fiber";
import "./Devices.css";
import { Macbook } from "../assets/3D/Macbook";
import { ScrollControls } from "@react-three/drei";

export default function Animation() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={1} />
        <ScrollControls pages={3} damping={0.25}>
          <Macbook />
        </ScrollControls>
      </Canvas>
    </div>
  );
}
