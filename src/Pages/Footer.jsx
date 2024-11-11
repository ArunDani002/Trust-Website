import React from 'react'
import '../App.css'
import LayoutFooter from './LayoutFooter'

const Footer = () => {
  return (
    <>
    <footer className='Footer'>
      <h3>
        Contact us
      </h3>
      <q>Email : Address@gmail.com</q>
      <h1 >Village & Trible Mission</h1>
      <LayoutFooter />
      <span className='FooterAddress'>
        <h3 style={{ fontSize:20}}>Address</h3>
        <address style={{marginRight:100}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste mollitia quisquam veritatis harum commodi illo atque repudiandae, sed, qui eveniet tenetur! Voluptatem dolorum voluptas voluptatibus sed corrupti ut reiciendis provident.
        </address>
      </span>
    </footer>
    
    </>
  )
}

export default Footer