import React from 'react'

const Hero = () => {
  return (
    <div style={{backgroundColor:'rgb(24,49,91)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white', height:'350px'}}>
            <h1 style={{marginBottom:'1%'}}>See value from social sooner</h1>
            <p style={{marginBottom:'2%', width:'400px', paddingLeft:'2%'}}>Our training and strategic services have helped thousands of organizations succeed on social.</p>
            <button style={{backgroundColor:'green', color:'white', border:'none', borderRadius:'10px', height:'40px', width:'120px'}}>Request a Demo</button>
        </div>
  )
}

export default Hero
