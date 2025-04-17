import "./fsproducts.css" 
import coat from "./Products/coat.png"
import rbg from "./Products/RBG.png"
import guccibag from "./Products/GucciBag.png"
import bookself from "./Products/bookself.png"
import quick_view from "./icons/Quick View.png"
import like from "./icons/Vector (1).png"
import fill_star from "./icons/yellow-star.png"
import empty_star from "./icons/star.png"
import chair from "./Products/chair.png"

function Product(props){
  return(
<div className="flex-colum">
  <div className="product-image">
      <img src={props.img} alt={props.name} />
      <div className="quick-acess">
        <button><img src={quick_view} alt="quick_view" /></button>
        <button><img src={like} alt="like" /></button>
      </div>
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
    <p className="people">({props.people})</p>
  </div>


</div>
  )
}
function Best(){
  var products=[
    {
      name:"The north coat",
      img:coat,
      oldprice:"$260",
      newprice:"$360",
      numberofstar:5,
      people:"85",
    },  
    {
      name:"Gucci duffle bag",
      img:guccibag,
      oldprice:"$960",
      newprice:"$1160",
      numberofstar:4,
      people:"75",
    },
   {
      name:"RGB liquid Cpu Cooler",
      img:rbg,
      oldprice:"$160",
      newprice:"$170",
      numberofstar:1,
      people:"88",
    },
   {
      name:"Small BookSelf",
      img:bookself,
      oldprice:null,
      newprice:"$400",
      numberofstar:5,
      people:"98",
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
export default Best 
