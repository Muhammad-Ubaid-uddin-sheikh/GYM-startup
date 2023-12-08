
import Logo from '../../assets/logo-no-background.png'
import './AllPages.css'

function Navbar() {
 
  
  

  return (
    <>
    
      <div className='mainNavbar'>
        <div className="rwNavbar">
            <div className="colm2navbar">
                <img src={Logo} alt="" width="20%" style={{padding:'8px'}} />
            </div>
            <div className="colm2navbar w-1/3" style={{justifyContent:'end'}}>
<div className=" flex justify-between min-w-full ">
  
    <a className='checking text-xs md:text-sm  to-white text-white font-normal ' href="">Home</a>
<a className='checking text-xs md:text-sm  to-white text-white ' href="">Shop</a>
    <a className='checking text-xs md:text-sm  to-white text-white ' href="">Contact</a>
    <a className='checking text-xs md:text-sm  to-white text-white ' href="">About</a>
    <a className='checking text-xs md:text-sm  to-white text-white ' href="">Blog</a>
    
</div>

            </div>
        </div>

       </div>
    
    </>
  )
}

export default Navbar
