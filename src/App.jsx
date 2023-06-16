import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/banner/Banner'


export default function App() {
  const [count, setCount] = useState(0)

  return (

    <div>

      <Navbar />
      <Banner />

      {/* <Banner/>
      <Thumbnail />
      <VideoThumbnail/> */}

    </div>
  )
}

