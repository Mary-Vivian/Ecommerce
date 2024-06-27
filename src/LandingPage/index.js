import './index.css';
import bag from '../Images/bag.jpg'


function Landing(){
    return(
        <>   <div className='navbar'>
            <button>Search</button>
       
                <a>Home</a>
                <a>Shop</a>
                <a>Sale</a>
      
        </div>
        <div id='img'>
        <img  className='landingimg ' src={bag}/>
        </div>
        </>
     
        
    )
}
export default Landing;