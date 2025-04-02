export default function Friend({friend}){

    const {id, name, email, website} = friend

    return(
        <div className="style">
            <li>{id}</li>
            <h4>Name: {name}</h4>
            <p>{email}</p>
            <small>www.{website}</small>
        </div>
    )
}