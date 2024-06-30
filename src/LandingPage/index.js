import './index.css';
import bag from '../Images/bag.jpg'


function Landing() {
    return (
        <>
            <div className="navbar">
            <button>Search</button>
            <a>Home</a>
           <a>Shop</a>
           <a>Sale</a>  
            </div>
            <div className="parent-container"> 
                <div id="img" className="landingimg">
                    <img className="landingimg" src={bag} alt="Bag" />
                </div>
                <div className="card">
                    <p className="txt">Free Shopping On order above $300</p>
                    <button className="shop">Shop Now</button>
                </div>
            </div>
        </>
    );
}
export default Landing;
