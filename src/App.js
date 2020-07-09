import React from 'react';
import logo from './logo.svg';
import './App.css';
import HexaGrid from '../src/components/HexaGrid'

const hexaGridData = {'0,0': 'ax', '0,-1': 'bx', '0,1': 'cx', '1,-1': 'dx', '1,0': 'ex', '-1,1': 'fx', '-1,0': 'gx', '-2,0': 'hx'}
function App() {
  return (
    <div className="App">
      <h2>Welcome to Hexaland</h2>
      <HexaGrid data={hexaGridData} />
    </div>
  );
}

export default App;
