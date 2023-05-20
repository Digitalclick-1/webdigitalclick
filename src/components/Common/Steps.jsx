// import React from "react";
// import NavigationTwo from "../Navigation/Navigation2";
// import './steps.css';
// import { useState } from "react";
// const Steps=()=>{
//   const [toggleState,setToggleState] = useState(1);
//   const toggleTab = (index) =>{
//     setToggleState(index);
	
// }  
//     return(
//         <div>
//         <div className="steps" id="steps">
//   <button className={toggleState ===1 ? "tabs active" : "tabs"} onClick={()=>toggleTab(1)} data-step="1" >1</button>
//   <div></div>
//   <button className={toggleState ===2 ? "tabs active" : "tabs"} onClick={()=>toggleTab(2)} data-step="2">2</button>
//   <div></div>
//   <button className={toggleState ===3 ? "tabs active" : "tabs"} onClick={()=>toggleTab(3)} data-step="3">3</button>
// </div>

// <div className="contents" id="contents">
// {toggleState==1? id="tab1" >
//   <div className={toggleState ===1 ? "tab_container" : "content"}  data-step="1">
 
//     <div className="content__box">
//       1
//     </div>
//   </div> :null}
//   <div className="content" data-step="2">
//     <div className="content__box">
//       2
//     </div>
//   </div>
//   <div className="content" data-step="3">
//     <div className="content__box">
//       3
//     </div>
//   </div>
// </div>
// </div>



//     );
// }
// export default Steps;