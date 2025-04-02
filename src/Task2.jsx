import { useState } from "react"

export default function Task2(){

    const [visibility,setVisbility] = useState(false)
    const [showText,setShowText] = useState(' ')

    const handleShow = ()=>{
        setVisbility(true)
        const newText = 'Hello, React Learner!'
        setShowText(newText)
    }

    const handleHide = ()=>{
        setVisbility(false)
        showText(' ')
    }

    return(
        <div className="style">
            {visibility && <h1>{showText}</h1>}
            <button style={{margin : "10px"}} onClick={handleShow}>show</button>
            <button onClick={handleHide}>Hide</button>
        </div>
    )
}