
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const { googleSignin } = useContext(AuthContext);
    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)

                })
                    .then(res => res.json())
                    .then(() => {

                        navigate(from, { replace: true })
                    })

            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="text-center w-full">
                <button onClick={handleGoogleSignin} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;