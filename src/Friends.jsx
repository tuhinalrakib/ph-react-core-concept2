import { use } from "react"
import Friend from "./Friend"

export default function Friends({friendsPromise}){

    const friends = use(friendsPromise)
    console.log(friends)

    return(
        <div className="style">
            {
                friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}