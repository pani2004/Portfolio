import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
