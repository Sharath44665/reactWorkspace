import { useDispatch, useSelector } from "react-redux";

const UserProfile = () =>{
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch({type:"LOGOUT"})
    }

    const handleLogin = () => {
        dispatch({
            type: "LOGIN",
            payload: {
                id: 1,
                name: "sharath chandra",
                email: "sharathchandra@example.com",
            },
        })
    }
    return ( 
        <div>
            <h2> 
            user profile
            </h2>
            {
                isAuthenticated? (
                    <div>
                        <p>Welcome, {user?.name}</p>
                        <p>Email: {user?.email}</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ): (
                    <div>
                        <p>Please login to user profile</p>
                        <button onClick={handleLogin}>Login</button>
                    </div>
                )
            }
        </div>
    )
}

export default UserProfile;