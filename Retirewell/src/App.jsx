import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage></Homepage>
    </>
  )
}

export default App
