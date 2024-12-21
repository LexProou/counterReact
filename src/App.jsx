import { useState } from "react"
import './App.css'


 function App() {
    const [count, setCount] = useState(0)

    const inc = () => {
      setCount( count + 1)
    }

    const dec = () => {
      setCount( count - 1 )
    }

   return(
     <>
     <div className="App">
       <h1>Counter:{count}</h1>
       <button onClick={inc}>Increment</button>
       <button onClick={dec}>Decrement</button>
     </div>
     </>
   )
 }

 export default App
