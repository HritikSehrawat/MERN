import React, { useState } from 'react'

// const ChangeName = ({sname}) => {
//    // let sname=props;
//    const [name,setName]=useState(sname);
//   return (
//     <div className="container mt-3">
//         <div>{name}</div>
//         <button className="btn btn-warning" onClick={() =>setName("JAVASCRIPT")}>Change Name</button>
//     </div>
//   )
// }

const ChangeName = (props) => {
    let {name,onUpdate}=props;
    
   return (
     <div className="container mt-3">
         <div>{name}</div>
         <button className="btn btn-warning" onClick={onUpdate}>Change Name</button>
     </div>
   )
 }

export default ChangeName