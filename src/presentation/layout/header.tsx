import { useContext } from "react"
import UserContext from "../shared/auth-context/auth-context"

const Header = () => {
    const auth = useContext(UserContext)

    return (
        <div>
            Header
            {
                // JSON.stringify(auth)
                auth?.user?.name
            }
        </div>
    )
}

export default Header