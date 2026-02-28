import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import SocialLinks from './Components/SocialLinks'
import About from './Components/About'
import Achievements from './Components/Achievements'
import Internships from './Components/Internships'
import Portfolio from './Components/Portfolio'
import Experience from './Components/Experience'
import GitHubStats from './Components/GitHubStats'
import Contact from './Components/Contact'
import ScrollProgress from './Components/ScrollProgress'
import ToastProvider from './Components/ToastProvider'
import ErrorBoundary from './Components/ErrorBoundary'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary>
      <ToastProvider>
        <ScrollProgress />
        <Navbar/>
        <Home/>
        <SocialLinks/>
        <About/>
        <Achievements/>
        <Internships/>
        <Portfolio/>
        <Experience/>
        <GitHubStats/>
        <Contact/>
      </ToastProvider>
    </ErrorBoundary>
  )
}

export default App
