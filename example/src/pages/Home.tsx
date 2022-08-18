import React from 'react'
import { Link, useRouter } from 'react-router-wrapper'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push({ name: 'detail', params: { id: 1 } })
  }

  return (
    <div>
      <div>
        <Link to={{ name: 'login' }}>abc</Link>
        <button onClick={handleClick}>CLick navigate</button>
      </div>
    </div>
  )
}

export default Home
