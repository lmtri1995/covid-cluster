import React, { useState } from 'react'
import './App.css'
import Layout from '../src/views/Layout'
import { MainProvider } from './contexts/MainContext'

function App() {
  

  return (
    <div className="App">
      <MainProvider>
        <Layout />
      </MainProvider>
    </div>
  );
}

export default App;
