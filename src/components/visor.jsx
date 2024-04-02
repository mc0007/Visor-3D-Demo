import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

const Visor = () => {
  const [model, setModel] = React.useState(null);

  React.useEffect(() => {
    
    const loader = new STLLoader();
    loader.load(
      'https://storage.googleapis.com/testingpython-70c7c.appspot.com/a.stl',
        (geometry) => {
        setModel(geometry.scale(0.1, 0.1, 0.1)); // Ajusta la escala según sea necesario
        },
        undefined,
        (error) => {
        console.error('Error cargando el modelo:', error);
    }
    
    );
    
}, []);

return (
    
    <div  style={{width: '800px', height: '600px', margin: '0 auto'}}>
    <Canvas style={{ backgroundColor: '#353638', width: '100%', height: '100%' }}  camera={{ exposure: 1 }}>
   <> 

  <mesh position={[0, 0, 0]}  rotation={[Math.PI / -2, 0, 0]}>
    <primitive object={model} />
    <meshStandardMaterial />
    <ambientLight intensity={0.5} />
    
    <directionalLight castShadow position={[-5, -5, -5]} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    
    <orthographicCamera />
    
    <OrbitControls
    enablePan={true}
    enableRotate={true}
    maxDistance={15}
    minDistance={7}/>
  </mesh>
  </> 
</Canvas>
</div>

);
};

export default Visor;