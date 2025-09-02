import { createContext, useContext, useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'

// Step 1: Create context with proper naming (capitalized)
const WidthContext = createContext()

function App() {
  const [count, setCount] = useState(0)
  const [widthLimitReach, setLimit] = useState(false)
  
  useEffect(() => {
    // Initial check
    if (window.innerWidth < 750) setLimit(true)
    else setLimit(false)
    
    // Resize handler
    const handleResize = () => {
      if (window.innerWidth < 750) setLimit(true)
      else setLimit(false)
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize)
    
    // Cleanup function
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    // Step 2: Wrap only once with provider
    <WidthContext.Provider value={{ widthLimitReach }}>
      <Home />
    </WidthContext.Provider>
  )
}

// Step 3: Export the hook with proper naming
export const useWidthContext = () => useContext(WidthContext)
export default App
