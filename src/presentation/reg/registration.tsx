import { useParams } from "react-router-dom"



const Registration = () => {
    const {id}=useParams()

    return (
        <div>
            {id}
        </div>
    )
}

export default Registration