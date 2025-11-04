import React from 'react'
import SectionOne from '../components/sectionOne'
import Header from '../components/Header/Header'

function Gallary() {
  return (
    <div className='gallaryPage'>
     {/* <Headers/> */}
     <Header/>
      <SectionOne/>
      {/* <div>section two</div> */}
    </div>
  )
}

export default Gallary