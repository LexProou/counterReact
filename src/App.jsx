import { useSelector, useDispatch } from "react-redux"
import { inc, dec } from './actions'
import './App.css'



function App() {
   
  const counter = useSelector((state) => state.counter )
  const dispatch = useDispatch()


  return(
    <>
    <div className="App">
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(inc())}>Increment</button>
      <button onClick={() => dispatch(dec())}>Decrement</button>
    </div>
    </>
  )
}

export default App
