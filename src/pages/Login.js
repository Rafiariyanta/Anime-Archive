import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/context/auth";

const Login = () => {
    const [user, setUser] = useState('')
    const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.path || '/';

    const handleLogin = () => {
        auth.login(user);
        navigate(redirectPath, { replace: true })
    }

    return ( 
        <div className="h-[91.5vh] bg-zinc-200 flex justify-center items-center">
            <div className="w-64 bg-zinc-50 border border-black rounded-xl flex flex-col justify-start p-4">
                <h1>Username</h1>
                <input className="bg-zinc-50 border-b-2 border-gray-400" onChange={(e) => setUser(e.target.value)}></input>
                <button className="mt-5" onClick={handleLogin}>Sign In</button>
            </div>
        </div>
     );
}
 
export default Login;