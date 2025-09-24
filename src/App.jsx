import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import Internships from './Components/Internships'
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
      <Internships/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </>
  )
}

export default App
