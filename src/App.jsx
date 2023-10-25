import { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Analytics from './Components/Analytics'
import Newsletter from './Components/Newsletter'
import Cards from './Components/Cards'
import Footer from './Components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    
   <Navbar/>
   
    <Hero />
    <Analytics/>
    <Newsletter/>
    <Cards/>
    <Footer/>

   </div>
  )
}

export default App
