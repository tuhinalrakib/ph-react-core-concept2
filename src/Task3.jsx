import { use } from "react"
import Employee from "./Employee"

export default function Task3({employeePromise}){

    const employers = use(employeePromise)

    console.log(employers)
    return(
        <div className="style">
            <h4>Employers</h4>
            <ol>
                {
                employers.map(employer=><Employee key={employer.id} employer={employer}></Employee>)
            }
            </ol>
        </div>
    )
}