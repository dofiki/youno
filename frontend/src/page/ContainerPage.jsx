import React from 'react'
import NavBar from '../components/NavBar'
import WorkSpace from '../components/WorkSpace/index'

function ContainerPage() {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <WorkSpace />
    </div>
  )
}

export default ContainerPage
