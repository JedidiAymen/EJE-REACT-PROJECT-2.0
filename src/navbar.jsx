import  Component  from "./icons/Component 2.png"
import wishlist from "./icons/Wishlist.png"
import cart from "./icons/Cart1 with buy.png"
import "./navbar.css"
function Navbar(){
  return(
<nav className="flex-containner-nav">
    <p className="logo">Exclusive</p>
    <ul>
      <li className="active">Home</li>
      <li>Contact</li>
      <li>About</li>
      <li>Sign Up</li>
    </ul>
    <div className="all">
      <div className="search">
        <input type="text" name="text" id="text" placeholder="What are you looking for?" />
        <button><img src={Component} alt="Component" /></button>
      </div>
      <div className="cart">
        <button><img src={wishlist} alt="Wishlist" /></button>
        <button><img src={cart} alt="cart" /></button>
      </div>
    </div>
  </nav>
  )
}
export default Navbar
