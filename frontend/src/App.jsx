import { useEffect, useState } from 'react'
import './App.css'
import Home from './home/Home';
import Navbar from './navbar/Navbar';
function App() {
  const [selectedLocations, setSelectedLocations] = useState([]);   
  return (
        <>
          <Navbar selectedLocations={selectedLocations} onLocationChange={setSelectedLocations} />
          <Home selectedLocations={selectedLocations} />
        </>
  )
}

export default App
