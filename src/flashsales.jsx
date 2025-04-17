import React,{useState,useEffect} from "react"
import "./flashsales.css"
import arrow_left from "./icons/icons_arrow-left.png";
import arrow_right from "./icons/icons arrow-rightb.png";
const Timer=({duration})=>{
  const[time,setTime]=useState(duration)
  useEffect(()=>{
    setTimeout(()=>{
      setTime(time-1000);
      
    },1000)
  },[time])
  const getFormatedTime=(millisecond)=>{
    let total_sec=parseInt(Math.floor(millisecond/1000));
    let total_miutes=parseInt(Math.floor(total_sec/60));
    let total_hours=parseInt(Math.floor(total_miutes/60))
    let days=parseInt(Math.floor(total_hours/24))
    let seconds=parseInt(total_sec%60)
    let minutes=parseInt(total_miutes%60)
    let hours=parseInt(total_hours%24)
    return <p>{days} <span>:</span> {hours}  <span>:</span>  {minutes}  <span>:</span>   {seconds} </p>
  }
  return getFormatedTime(time)
}
function Head1(){
  return(
  <div className="alll">
    <div className="date">
      <div className="deco"></div>
      <h2>Today's</h2>
    </div> 
    <div className="flex-containner-1">
      <div className="flex-containner-2">
          <p>Flash Sales</p>
          <div className="Days-hours">
            <div className="seconds">
              <p>Days</p>
              <p>Hours</p>
              <p>Minutes</p>
              <p>Seconds</p>
             </div>
          <Timer duration={3*24*60*60*1000}/>
      </div>
    </div>
      <div className="flex-buttons">
        <button><img src={arrow_left} alt="arrow-left" /></button>
        <button><img src={arrow_right} alt="arrow-right" /></button>
      </div>
    </div>
  </div>

  )

} 
export default Head1
