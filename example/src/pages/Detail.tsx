import React from 'react'
import { useRouter, Link } from 'react-router-wrapper'

function Detail() {
  const { params, location, searchParams } = useRouter()

  console.log(params, location, searchParams)

  return (
    <div>
      <Link to={{ name: 'home' }}>trang chu</Link>
    </div>
  )
}

export default Detail
