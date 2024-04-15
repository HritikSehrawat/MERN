// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

// import Languages from './component/Languages'
// import Message from './component/Message'
//import ChangeName from './component/ChangeName'
//import Counter from './component/Counter1'
import React, { useState } from 'react'
import ControlledInfo from './component/ControlledInfo'

function App() {
  // const [count, setCount] = useState(0)
  // const [name,setName]=useState("KIET");
  // const [sname,setSName]=useState("MCA");

  return (
    <>
      {/* <ChangeName name={name} onUpdate={()=>setName("KIET MCA")}/>
      <ChangeName name={sname} onUpdate={()=>setSName("MCA KIET")}/> */}
      <ControlledInfo/>
    </>
  )
}

export default App
