import { useEffect, useState } from "react"

export default function Players(){
    const [Players,setPlayers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setPlayers(data))
    }, [])

    return(
        <div className="style">
            <h4>Players: {Players.length}</h4>
            <ol>
                {
                    Players.map(player=><li>{player.name}</li>)
                }
            </ol>
        </div>
    )
}