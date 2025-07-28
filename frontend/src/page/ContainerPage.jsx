import React from 'react'
import NavBar from '../components/NavBar'
import WorkSpace from '../components/WorkSpace/index'
import FooterSection from '../components/FooterSection'

function ContainerPage() {
  return (
    <div className='flex flex-col'>
      <NavBar />
      <WorkSpace />
      <FooterSection />
    </div>
  )
}

export default ContainerPage
