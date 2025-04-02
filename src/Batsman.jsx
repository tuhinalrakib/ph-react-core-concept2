import { useState } from "react"

export default function Batsman(){
    const [run,setRun] = useState(0)
    const [sixes,setSixes] = useState(0)
    const [fours,setFours] = useState(0)

    const handleSingles = ()=>{
        const updatedRuns = run + 1
        setRun(updatedRuns)
    }

    const handleFour = ()=>{
        const updatedRuns = run + 4
        const updatedFours = fours + 1
        setFours(updatedFours)
        setRun(updatedRuns)
    }

    const handleSix = ()=>{
        const updatedRuns = run + 6
        const updatedSixes = sixes + 1
        setSixes(updatedSixes)
        setRun(updatedRuns)
    }

    return(
        <div>
            <h3>Players Bangla Batsman</h3>
            <h3>Total Sixes: {sixes}</h3>
            <h3>Total Fours: {fours}</h3>
            {
                run >= 50 && alert('Congratulation you done half sentury')
            }
            <h1>Score: {run}</h1>
            <button onClick={handleSingles}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}