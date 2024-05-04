import image1 from './img1.png';
import image2 from './img2.png';
import image3 from './img3.png';
import React from 'react'



const Footer = () => {
    return(
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:'100px', marginTop:'2%'}}>

        <section style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={image1} alt="p1" style={{width:'100px', height:'100px'}} />
            <h5>2,500</h5>
            <p>enterprise organizations successfully launched</p>
        </section>

        <section style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={image2} alt="p2" style={{width:'100px', height:'100px'}} />
            <h5>45,000</h5>
            <p>enterprise users onboarded seamlessly</p>
        </section>

        <section style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <img src={image3} alt="p3" style={{width:'100px', height:'100px'}} />
            <h5>200,000+</h5>
            <p>professionals trained on product and strategy</p>
        </section>
    </div>
  )
}

export default Footer
