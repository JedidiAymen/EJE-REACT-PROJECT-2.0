import "./flashsales.css"
import arrow_left from "./icons/icons_arrow-left.png";
import arrow_right from "./icons/icons arrow-rightb.png";
function Head2(){
  return(
  <div className="alll">
    <div className="date">
      <div className="deco"></div>
      <h2>Our Products </h2>
    </div> 
    <div className="flex-containner-1">
      <div className="flex-containner-2">
          <p>Explore Our Products</p>
    </div>
      <div className="flex-buttons">
        <button><img src={arrow_left} alt="arrow-left" /></button>
        <button><img src={arrow_right} alt="arrow-right" /></button>
      </div>
    </div>
  </div>
  )
}
export default Head2
