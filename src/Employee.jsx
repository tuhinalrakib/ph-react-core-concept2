export default function Employee({employer}){
    const {id, name, address, company} = employer
    const {companyName} = company
    const {city} = address

    return(
        <div>
            <h3>{id}. {name}</h3>
            <p>Address: {city}</p>
            <h5>Company Name: {companyName}</h5>
        </div>
    )
}