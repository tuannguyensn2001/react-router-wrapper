import React from 'react'
import { Link } from 'react-router-wrapper'

function Home() {
  return (
    <div>
      <div>
        <Link to={'/login'}>abc</Link>
      </div>
    </div>
  )
}

export default Home
