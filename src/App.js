import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";
import { ContactShadows, OrbitControls, Select } from "@react-three/drei";
import { Suspense, useState } from "react";

function App() {
  const [selected, setSelected] = useState([]);
  return (
    <>
      <Canvas camera={{ position: [5, 5, 5], fov: 75 }}>
        <OrbitControls
          makeDefault
          rotateSpeed={2}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.5}
        />
        <Suspense fallback={null}>
          <Select multiple box onChange={setSelected}>
            <Box position={[0, 0.5, 0]} />
          </Select>
          <ContactShadows
            frames={1}
            position={[0, -0.1, 0]}
            scale={15}
            opacity={0.2}
            far={1}
            blur={2}
          />
          <ambientLight />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          {/* <gridHelper /> */}
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
