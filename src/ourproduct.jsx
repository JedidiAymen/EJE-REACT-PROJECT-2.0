import "./fsproducts.css" 
import quick_view from "./icons/Quick View.png"
import like from "./icons/Vector (1).png"
import fill_star from "./icons/yellow-star.png"
import empty_star from "./icons/star.png"
import Asus from "./Products/Asus Fhd Gaming.png"
import canon from "./Products/canon Eos dslr camera.png"
import breed from "./Products/Breed Dry Dog Food.png"
import car from "./Products/kids Electric car.png"
import jacket from "./Products/Jacket.png"
import soccer from "./Products/Jr.zoom soccer cleats.png"
import Gamepad from "./Products/Gamepad.png"
import cosmetic from "./Products/cosmetic.png"
function OurProduct(props) {
  return (
    <div className="flex-colum">
      <div className="product-image">
        <img src={props.img} alt={props.name} />
        <div className="quick-acess">
          <button><img src={quick_view} alt="quick_view" /></button>
          <button><img src={like} alt="like" /></button>
        </div>
        {props.isnew && (<button className="discount new">New</button>)}
        <button className="add">Add To Cart</button>
      </div>
      <p className="titre">{props.name}</p>
      <div className="price">
        <p className="new-price">{props.newprice}</p>
        <div className="rating">
          <div className="stars">
            {[...Array(props.numberofstar)].map((_, index) => (
              <img key={index} src={fill_star} alt="fill_star" />
            ))}
            {[...Array(5 - props.numberofstar)].map((_, index) => (
              <img key={index} src={empty_star} alt="empty_star" />
            ))}
          </div>
          <p>{props.people}</p>
        </div>
      </div>
      {props.iscolor && (
        <div className="buttoncolor">
          <button style={{ background: props.color1 }}></button>
          <button style={{ background: props.color2 }}></button>
        </div>
      )}
    </div>
  );
}function Products1(){
  var products=[
    {
      name:"Breed Dry Dog Food",
      img:breed,
      newprice:"$100",
      numberofstar:3,
      people:"35",
      discount:"-40%",
      isnew:false,
      iscolor:false,
      color1:null,
      color2:null,

    },  
    {
      name:"Canon EOS DSLR Camera",
      img:canon,
      newprice:"$360",
      numberofstar:4,
      people:"95",
      discount:"-35%",
      isnew:false,
      iscolor:false,
      color1:null,
      color2:null,
    },
   {
      name:"ASUS FHD Gaming Laptop",
      img:Asus,
      newprice:"$700",
      numberofstar:1,
      people:"88",
      discount:"-30%",
      isnew:false,
      iscolor:false,
      color1:null,
      color2:null,
    },
   {
      name:"Curology Product Set",
      img:cosmetic,
      newprice:"$500",
      numberofstar:4,
      people:"145",
      discount:"-25%",
      isnew:false,
      iscolor:false,
      color1:null,
      color2:null,
    },
    {
      name:"Kids Electric car",
      img:car,
      newprice:"$960",
      numberofstar:5,
      people:"98",
      discount:"-25%",
      isnew:true,
      iscolor:false,
      color1:"#dddddd",
      color2:"#DB4444",
    },
    {
      name:"Kids Electric car",
      img:car,
      newprice:"$960",
      numberofstar:5,
      people:"98",
      discount:"-25%",
      isnew:true,
      iscolor:true,
      color1:"#dddddd",
      color2:"#DB4444",
    }, 
    {
      name:"Jr.Zoom Soccer Cleats",
      img:soccer,
      newprice:"$1160",
      numberofstar:5,
      people:"35",
      discount:"-25%",
      isnew:false,
      iscolor:true,
      color1:"#EEFF61",
      color2:"#DB4444",
    },
   {
      name:"GP11 Shooter USB Gamepad",
      img:Gamepad,
      newprice:"$660",
      numberofstar:4,
      people:"55",
      discount:"-25%",
      isnew:true,
      iscolor:true,
      color1:"#000000",
      color2:"#DB4444"
    },
    {
      name:"Quilted Satin Jacket",
      img:jacket,
      newprice:"$660",
      numberofstar:4,
      people:"55",
      discount:"-25%",
      isnew:false,
      iscolor:true,
      color1:"#184A48",
      color2:"#DB4444",
    },
    {
      name:"Kids Electric car",
      img:car,
      newprice:"$960",
      numberofstar:5,
      people:"98",
      discount:"-25%",
      isnew:true,
      iscolor:false,
    },



  ]

  return (
    <div className="flash-sales-products">
      {products.map((product, index) => (
        <OurProduct
          key={index}
          img={product.img} 
          name={product.name}
          newprice={product.newprice}
          numberofstar={product.numberofstar}
          people={product.people}
          discount={product.discount}
          isnew={product.isnew}
          iscolor={product.iscolor}
          color1={product.color1}
          color2={product.color2}
        />
      ))}
    </div>
  );

}
export default Products1
