
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import { Suspense } from 'react'
import PricingOption from './components/PricingOption/PricingOption'

function App() {
 
const PricingPromise = fetch('https://raw.githubusercontent.com/faiji31/bottles-data/refs/heads/main/PricingData').then(res=>res.json())
  return (
    <>
    <header>
          <DaisyNav></DaisyNav>
          <NavBar></NavBar>
    </header>
    <main>
     <Suspense fallback={<div><span className="loading loading-spinner loading-lg"></span></div>}>
     <PricingOption PricingPromise={PricingPromise}></PricingOption>
     </Suspense>
    </main>
  


    </>
  )
}

export default App
