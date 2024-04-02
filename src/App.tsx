//import React from 'react';
import './App.css';
//import { Canvas } from '@react-three/fiber';
import Main from './components/main';
import Footer from './components/footer';
import Header from './components/header';

function App() {
  return (
    <div className="App"  style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <>
        <Header/>
        <Main/>
        <Footer/>
      </>
    </div>
  );
}

export default App;
