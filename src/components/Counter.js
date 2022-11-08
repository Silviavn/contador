import { useState} from "react"

const Counter = (props) => {
const  [count, setCount] = useState(0)
return (
<>
<button onClick = {() => setCount(count -1)}>RESTAR </button>
<span>Cantidad: {count}</span>
<button onClick = {() => setCount(count +1)}>SUMAR </button>


</>






)
}
export default Counter
