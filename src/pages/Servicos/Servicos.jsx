import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { IoCaretBack } from 'react-icons/io5'
import './styles.css'
import { useNavigate } from 'react-router-dom'

function Dodecahedron({ time, ...props }) {
  return (
    <mesh {...props}>
      <dodecahedronGeometry />
      <meshStandardMaterial roughness={0.75} emissive="#404057" />
      <Html distanceFactor={10}>
        <div class="content">{props.title}!</div>
      </Html>
    </mesh>
  )
}

function Content() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z += 0.004))
  return (
    <group ref={ref}>
      <Dodecahedron position={[-2, 0, 0]} title="Webapps!" />
      <Dodecahedron position={[0, -2, -3]} title="Aplicativos Mobile" />
      <Dodecahedron position={[3, 0, 0]} title="Aplicativos Desktop!" />
      <Dodecahedron position={[-2, -3, -2]} title="Websites!" />
      <Dodecahedron position={[1, -1, 2]} title="Softwares em geral!" />
    </group>
  )
}

export default function Servicos({}) {
  const navigate = useNavigate()

  return (
    <>
      <h2 className="goBackIcon" onClick={() => navigate('/')}>
        <IoCaretBack />
      </h2>
      <Canvas camera={{ position: [0, 0, 7.5] }}>
        <pointLight color="indianred" />
        <pointLight position={[10, 10, -10]} color="orange" />
        <pointLight position={[-10, -10, 10]} color="lightblue" />
        <Content />
      </Canvas>
    </>
  )
}
