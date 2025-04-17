import "./fsproducts.css" 
import manette from "./Products/manette.png"
import quick_view from "./icons/Quick View.png"
import like from "./icons/Vector (1).png"
import fill_star from "./icons/yellow-star.png"
import empty_star from "./icons/star.png"
import keyboard from "./Products/keyboard.png"
import chair from "./Products/chair.png"
import monitor from "./Products/Monitor.png"

function Product(props){
  return(
<div className="flex-colum">
  <div className="product-image">
      <img src={props.img} alt={props.name} />
      <div className="quick-acess">
        <button><img src={quick_view} alt="quick_view" /></button>
        <button><img src={like} alt="like" /></button>
      </div>
      <button className="discount">{props.discount}</button>
      <button className="add">Add To Cart</button>
  </div>
  <p className="titre">{props.name}</p>
  <div className="price">
    <p className="new-price">{props.newprice}</p>
      <p className="old-price">{props.oldprice}</p>
  </div>
  <div className="rating">
    <div className="stars">
      {[...Array(props.numberofstar)].map((_, index) => (
        <img key={index}  src={fill_star} alt="fill_star" />
      ))}
      {[...Array(5 - props.numberofstar)].map((_, index) => (
        <img key={index} src={empty_star} alt="empty_star" />
      ))}    </div>
    <p>{props.people}</p>
  </div>


</div>
  )
}
function Flashsalesproducts(){
  var products=[
    {
      name:"Havit HV-G92 Gamepad",
      img:manette,
      oldprice:"$120",
      newprice:"$160",
      numberofstar:5,
      people:"88",
      discount:"-40%",
    },  
    {
      name:"Ak-900 Wired Keyboard",
      img:keyboard,
      oldprice:"$960",
      newprice:"$1160",
      numberofstar:4,
      people:"75",
      discount:"-35%",
    },
   {
      name:"Ips LCD Gaming Monitor",
      img:monitor,
      oldprice:"$370",
      newprice:"$400",
      numberofstar:1,
      people:"88",
      discount:"-30%",
    },
   {
      name:"S-Series Comfort Chair",
      img:chair,
      oldprice:"$375",
      newprice:"$400",
      numberofstar:5,
      people:"98",
      discount:"-25%",
    },
    {
      name:"S-Series Comfort Chair",
      img:chair,
      oldprice:"$375",
      newprice:"$400",
      numberofstar:5,
      people:"98",
      discount:"-25%",
    },
  ]

  return (
    <div className="flash-sales-products">
      {products.map((product, index) => (
        <Product
          key={index}
          img={product.img} 
          name={product.name}
          oldprice={product.oldprice}
          newprice={product.newprice}
          numberofstar={product.numberofstar}
          people={product.people}
          discount={product.discount}
        />
      ))}
    </div>
  );

}
export default Flashsalesproducts
