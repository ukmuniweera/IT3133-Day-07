import { useState } from "react";
import ChildComponent from "./ChildComponent";

function App() {
  const [childname,setChildname]=useState("Default");
  const receiveName=(name)=>{
    setChildname(name);
  }
  return (
    <div>
        <h3>Hello! I'm parent</h3>
        <ChildComponent setFun={receiveName}/>
        <p>Parent: My child said: {childname}</p>
    </div>   
  );
}

export default App;
