import { useState } from "react"

export default function Task1(){
    const [result,setResult] = useState(0)

    const handleAdd = ()=>{
        const newResult = result + 1
        setResult(newResult)
    }

    const handleSub = ()=>{
        let newResult = result - 1
        setResult(newResult)
    }

    const handleReset = ()=>{
        setResult(0)
    }

    const btnStyle = {
        margin : "10px"
    }

    return(
        <div>
            <h1>Result: {result}</h1>

            <button style={btnStyle} onClick={handleAdd}>+1</button>
            <button style={btnStyle} onClick={handleSub}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}