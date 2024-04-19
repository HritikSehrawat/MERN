// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'

import Languages from './component/Languages'
// import Message from './component/Message'
//import ChangeName from './component/ChangeName'
 //import Counter3 from './component/Counter3'
//import React, { useState } from 'react'
// import ResetandTotal from './component/ResetandTotal'
 //import MyCounter from './component/MyCounter'
import MyCard from './component/MyCard'
//import ControlledInfo from './component/ControlledInfo'
import HomePage from "./component/HomePage"
import NavBar from "./component/NavBar"
import ErrorPage from "./component/ErrorPage"
import About from "./component/About"
import Product from "./component/Product"
import Product1 from "./component/Product1"
import Product2 from "./component/Product2"
import Product3 from "./component/Product3"
import Student from "./component/Student"
import MyCounter from "./component/MyCounter"
import { Route, Routes } from "react-router-dom"

function App() {
  // const [count, setCount] = useState(0)
  // const [name,setName]=useState("KIET");
  // const [sname,setSName]=useState("MCA");

  return (
    <>
      {/* <ChangeName name={name} onUpdate={()=>setName("KIET MCA")}/>
      <ChangeName name={sname} onUpdate={()=>setSName("MCA KIET")}/> */}
      {/* <MyCard/> */}
      {/* <MyCounter/> */}
      {/* <ChangeName/> */}

      <NavBar/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/MyCard" element={<MyCard/>}/>
      <Route path="/MyCounter" element={<MyCounter/>}/>
      <Route path="/Languages" element={<Languages/>}/>
      <Route path="/About" element={<About/>}/>
      
      <Route path="/Student" element={<Student/>}>
      <Route path="/Student/:name" element={<Student/>}/>
      </Route>


      <Route path="/Product" element={<Product/>}>
      <Route path="Product1" element={<Product1/>}/>
      <Route path="Product2" element={<Product2/>}/>
      <Route path="Product3" element={<Product3/>}/>

      </Route>

      <Route path="*" element={<ErrorPage/>}/>
     </Routes>
    </>
  )
}

export default App
