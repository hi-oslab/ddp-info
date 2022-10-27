import { useFrame } from "@react-three/fiber";
import { useRouter } from "next/router";
import { useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import {
  Text3D,
  Float,
  Center,
  useHelper,
  Sphere,
  Environment,
} from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { ContactShadows } from "@react-three/drei";
import { ambientLightHelper, directionalLightHelper } from "three";

const Object = ({ route }) => {
  const router = useRouter();
  // This reference will give us direct access to the THREE.Mesh object
  const mesh = useRef(null);
  const ambientLight = useRef();
  const directionalLight = useRef();

  const colorMap = useLoader(TextureLoader, "/img/texturecolor.jpg");

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) =>
  //   mesh.current
  //     ? (mesh.current.rotation.y = mesh.current.rotation.x += 0.01)
  //     : null
  // );
  useHelper(ambientLight, ambientLightHelper, "teal");
  useHelper(directionalLight, directionalLightHelper, 0.5, "hotpink");
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <>
      <Center>
        <Float floatIntensity={3} speed={2}>
          <ambientLight intensity={0.5} />
          <Text3D
            font={"/Galmuri9 Regular_Regular.json"}
            position={[0, 4, 0]}
            bevelEnabled
            size={0.8}
            receiveShadow
          >
            끌:력
            <meshPhysicalMaterial
              attach="material"
              color="white"
              roughness={0.1}
              metalness={0.9}
            />
          </Text3D>
          <Text3D
            font={"/Galmuri9 Regular_Regular.json"}
            position={[-1.8, 3, 0]}
            bevelEnabled
            size={0.4}
            receiveShadow
          >
            서로가 서로를 이끄는 힘
            <meshPhysicalMaterial
              attach="material"
              color="white"
              roughness={0.1}
              metalness={0.9}
            />
          </Text3D>
          <spotLight position={[50, 50, -30]} castShadow />
          <pointLight position={[-10, -10, -10]} color="blue" intensity={3} />
          <pointLight position={[0, -5, 5]} intensity={0.5} />
          <directionalLight position={[0, -5, 0]} color="red" intensity={3} />
        </Float>
      </Center>
      <Environment preset="warehouse" />
    </>
  );
};
export default Object;
