import "./publicity.css"
import Iphone from "./icons/1200px-Apple_gray_logo 1.png"
import Iphoneall from "./Products/hero_endframe__cvklg0xk3w6e_large 2.png"
import arrow_right from "./icons/icons arrow-right.png";
function Publicity(){
  return(
  <section className="publicity">
     <ul>
        <li>Women's Fashion</li>
        <li>Men's Fashion</li>
        <li>Electronics</li>
        <li>Home & LifeStyle</li>
        <li>Medecine</li>
        <li>Sports & Outdoors</li>
        <li>Baby's Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
     </ul>
    <div className="Iphone">
        <div className="Info">
          <div className="Iphone-logo">
            <img src={Iphone} alt="iphone" />
            <p>Iphone 14 Series</p>
          </div>
          <div>
            <p>Up to 10% </p>
            <p>off Voucher</p>
          </div>
          <div className="shop">
            <button>Shop Now</button>
            <img src={arrow_right} alt="arrow-right" />
          </div>
        </div>
        <img className="hello" src={Iphoneall} alt="Iphoneall" />

      
    </div>
  </section>
  )
}
export default Publicity
