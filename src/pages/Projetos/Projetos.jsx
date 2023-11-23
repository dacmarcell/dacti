import * as THREE from 'three'
import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Html, OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { useNavigate } from 'react-router-dom'
import { IoCaretBack } from 'react-icons/io5'

function Model(props) {
  const { nodes, materials } = useGLTF('/earth.gltf')

  return (
    <group rotation={[-Math.PI / 2, 0, Math.PI]} {...props} dispose={null}>
      <mesh geometry={nodes['URF-Height_Lampd_Ice_0'].geometry} material={materials.Lampd_Ice} />
      <mesh geometry={nodes['URF-Height_watr_0'].geometry} material={materials.watr} material-roughness={0} />
      <mesh geometry={nodes['URF-Height_Lampd_0'].geometry} material={materials.Lampd} material-color="lightgreen">
        <group position={[0, 0, 1.3]} rotation={[0, 0, Math.PI]}>
          <Marker rotation={[0, Math.PI / 2, Math.PI / 2]}>
            <div style={{ fontSize: 10 }}>{props.text}</div>
          </Marker>
        </group>
      </mesh>
    </group>
  )
}

function Marker({ children, ...props }) {
  const ref = useRef()
  const [isOccluded, setOccluded] = useState()
  const [isInRange, setInRange] = useState()
  const isVisible = isInRange && !isOccluded
  const vec = new THREE.Vector3()

  useFrame((state) => {
    const range = state.camera.position.distanceTo(ref.current.getWorldPosition(vec)) <= 10
    if (range !== isInRange) setInRange(range)
  })
  return (
    <group ref={ref}>
      <Html
        transform
        occlude
        onOcclude={setOccluded}
        style={{ transition: 'all 0.2s', opacity: isVisible ? 1 : 0, transform: `scale(${isVisible ? 1 : 0.25})` }}
        {...props}>
        {children}
      </Html>
    </group>
  )
}

const Loader = () => {
  return <h1>Carregando...</h1>
}

export default function Projetos() {
  const navigate = useNavigate()

  return (
    <>
      <h2 className="goBackIcon" onClick={() => navigate('/')}>
        <IoCaretBack />
      </h2>
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ position: [5, 0, 0], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Model position={[0, 0.25, 0]} text="Em Construção!" />
          <Environment preset="city" />
          <ContactShadows frames={1} scale={5} position={[0, -1, 0]} far={1} blur={5} opacity={0.5} color="#204080" />
          <OrbitControls />
        </Canvas>
      </Suspense>
    </>
  )
}
