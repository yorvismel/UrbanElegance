import { useAuth } from "../../context/AuthContext"

const Store = () => {
    const auth = useAuth()
    const { displayName } = auth.user;
    console.log(displayName);
    return (
        <h1>Bienvenido al store {displayName}</h1>
    )
        
}

export default Store