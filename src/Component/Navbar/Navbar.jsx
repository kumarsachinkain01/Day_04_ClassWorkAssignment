import './Navbar.css'
const Navbar = ()=> {
    return(
        <div className="main-container"style={{display:'flex', alignItems:'center', justifyContent:'space-around', backgroundColor:'light-grey', height:'50px'}}>
            <section style={{display:'flex', alignItems:'center',gap:'35px'}}>
                <h1>Hootsuite</h1>
                <span>Platform</span>
                <span>Plans</span>
                <span>Enterprise</span>
                <span>Resources</span>
                <span>Education</span>
            </section>

            <section style={{display:'flex', alignItems:'center', gap:'35px'}}>
                <span>Contact Us</span>
                <span>Log In</span>
                <button style={{backgroundColor:'green', color:'white', height:'40px', width:'80px', borderRadius:'10px', border:'none'}}>Sign Up</button>
            </section>
        </div>
    )
}

export default Navbar;