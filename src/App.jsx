import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Navbar />
      {/* <Banner/>
      <VideoThumbnail/> */}

    </div>
  )
}


