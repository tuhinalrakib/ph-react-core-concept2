import { useState } from "react"

export default function Counter(){

    const [count,setCount] = useState(0)

    const handleCount = ()=>{
        let newCount = count + 1
        setCount(newCount)
    }

    const counterStyle = {
        border : '2px solid yellow'
    }

    return(
        <div style={counterStyle}>
            <h3>Count: </h3>
            <button onClick={handleCount}>Add {count}</button>
        </div>
    )
}