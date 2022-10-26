import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Center, Text3D } from "@react-three/drei";

const BoxComponent = ({ route }) => {
  const router = useRouter();
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null);
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) =>
    mesh.current
      ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
      : null
  );
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <Center rotation={[-0.5, -0.25, 0]}>
        <Text3D
          onPointerOver={() => setHover(true)}
          onPointerOut={() => setHover(false)}
          curveSegments={32}
          bevelEnabled
          bevelSize={0.04}
          bevelThickness={0.1}
          height={0.5}
          lineHeight={0.5}
          letterSpacing={-0.06}
          size={1.5}
          font="/KoddiUD OnGothic Bold_Regular.json"
        >
          {`끌:력 \n 서로가 서로를 이끄는 힘`}
          <meshNormalMaterial />
        </Text3D>
      </Center>

      <directionalLight position={[5, 5, 5]} />
      <ambientLight />
    </>
  );
};
export default BoxComponent;
