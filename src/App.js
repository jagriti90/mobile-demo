import React from 'react'
import Navbar from './component/Navbar' 
import Hero from './component/Hero'
import Analytist from './component/Analytist'
import Newsletter from './component/Newsletter'
import Card from './component/Card'
import Footar from './component/Footar'
import About from './component/pages/About'
// import Stories from './component/Stories'


const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Analytist/>
    <Newsletter />
    <Card />
    <Footar />
    <About/>
    {/* <Stories/> */}
    </>
  )
}

export default App