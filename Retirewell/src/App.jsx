import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import Form from './components/Form'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import BubblesBackground from './components/BubblesBackground';
import LoginPage from "./components/LoginPage"
import SignUpPage from './components/SignupPage';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, offset: 100 });
  }, []);

  const [count, setCount] = useState(0)

  return (
    <>
      {/* <BubblesBackground /> */}
      <Homepage></Homepage>
      {/* <Form /> */}
      {/* <LoginPage /> */}
    </>
  )
}

export default App
