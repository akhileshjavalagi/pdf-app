import { useState } from 'react'
import './App.css'
import AllRoutes from './components/AllRoutes'
import { GameStateContext } from "./context/Context";

function App() {
  const [showpdf, setShowPdf] = useState([])

  return (
    <div className="App">
      <GameStateContext.Provider
        value={{
          showpdf,
          setShowPdf
        }}
      >
      <AllRoutes/>
      </GameStateContext.Provider>
    </div>
  )
}

export default App
