
import { lazy, Suspense } from 'react'
import './App.css'

import { BeatLoader } from "react-spinners";


const AllRoute = lazy(()=>import('./components/routes/AllRoute'))
function App() {

  return (
    <>
    
      <Suspense fallback={<div className='flex justify-center items-center h-[100vh]  font-medium'><BeatLoader size={20} /></div>}>
      <AllRoute/>
      </Suspense>
    </>
  )
}

export default App
