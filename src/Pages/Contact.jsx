import React from 'react'
import Footer from './Footer'
import Layout from './Layout'

const Contact = () => {
  return (
    <>
    <header>
          <div style={{
            border:'1px solid black', 
            width:60,
            height:60,
            borderRadius:20,
            display:'inline-block',
            marginLeft:50,
            marginTop:10

          }}>
            <p>logo</p>
          </div>
          <h1 className="Title">Village & Trible Mission</h1>
      </header>
      <div >
        <hr style={{
          outline: 'none'
        }} className='underline' />
      </div>

      <h1 style={{ textAlign: 'center' }}>Contact Us</h1>
      <br />
      
      <div style={{ textAlign: 'center' }}>
      </div>

      <div className='ContactDetail'
        style={{
          
        }}
      >
        <div className='EmailContact'>

        </div>
        <div className='EmailContact'>

        </div>
      </div>


      {/* Footer */}
      <Footer />

    </>
  )
}

export default Contact


