import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import './css/viewer.css';

const Visor = () => {
  const models = [
      'https://storage.googleapis.com/testingpython-70c7c.appspot.com/a.stl',
      "https://storage.googleapis.com/testingpython-70c7c.appspot.com/0-Villar.stl",
      "https://storage.googleapis.com/testingpython-70c7c.appspot.com/1-Villar.stl",
      "https://storage.googleapis.com/testingpython-70c7c.appspot.com/2-Villar.stl",
      "https://storage.googleapis.com/testingpython-70c7c.appspot.com/3-Villar.stl",
      "https://storage.googleapis.com/testingpython-70c7c.appspot.com/4-Villar.stl",
      "https://storage.googleapis.com/testingpython-70c7c.appspot.com/5-Villar.stl",
      "https://storage.googleapis.com/testingpython-70c7c.appspot.com/6-Villar.stl",
  ];

  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const [modelsLoaded, setModelsLoaded] = useState(new Array(models.length).fill(false));
  const modelsRefs = useRef([]);

  const loadModel = (index) => {
    const loader = new STLLoader();
    loader.load(
      models[index],
      (geometry) => {
        const scaledGeometry = geometry.clone().scale(0.1, 0.1, 0.1);
        const newModelsRefs = [...modelsRefs.current]; // Clonamos el array de referencias
        newModelsRefs[index] = { current: scaledGeometry }; // Establecemos la referencia en el índice correcto
        modelsRefs.current = newModelsRefs; // Actualizamos el array de referencias
        setModelsLoaded((prev) => {
          const newLoaded = [...prev];
          newLoaded[index] = true;
          return newLoaded;
        });
      },
      undefined,
      (error) => {
        console.error('Error cargando el modelo:', error);
      }
    );
  };
  
  // Cargar todos los modelos al inicio
  useState(() => {
    models.forEach((_, index) => {
      loadModel(index);
    });
  }, []);

  const handleNextModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex + 1) % models.length);
  };

  const handlePreviousModel = () => {
    setCurrentModelIndex((prevIndex) => (prevIndex - 1 + models.length) % models.length);
  };

  return (
    <>
    <div style={{ backgroundColor: '#353638', width: '800px', height: '80vh', margin: '0 auto', position: 'relative' }}>
      
      <Canvas style={{ position: 'relative',  width: '100%', height: '100%' }} camera={{ exposure: 1 }}>
        {modelsLoaded[currentModelIndex] && (
          <mesh position={[0, 0, 0]} rotation={[Math.PI / -2, 0, 0]}>
            <primitive object={modelsRefs.current[currentModelIndex].current} />
            <meshStandardMaterial />
            <ambientLight intensity={0.5} />
            <directionalLight castShadow position={[-5, -5, -5]} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <orthographicCamera />
            <OrbitControls enablePan={true} enableRotate={true} maxDistance={15} minDistance={5} {...{passive: true}} />
          </mesh>
        )}
        
      </Canvas>
      <div style={{  position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
        <p style={{ color: 'white', marginTop: '10px',textAlign: 'center' }}>-Model: {currentModelIndex}-</p> 
        <button className="boton" onClick={handlePreviousModel}>Anterior</button>
        <button className="boton" onClick={handleNextModel}>Siguiente</button>
        
      </div>
    </div>  
  </>
  );
};

export default Visor;
