import React from 'react'
import ChangeName from './ChangeName'

const ControlledName = () => {
    const [name,setName]=useState("KIET");
    const [sname,setSName]=useState("MCA");
  return (
    <div className="container mt-3">
         <div>{name}</div>
         <button className="btn btn-warning" onClick={onUpdate}>Change Name</button>
     </div>
  )
}

export default ControlledName