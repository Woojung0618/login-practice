import React, { useContext } from "react";
import { AuthContext } from "../App";
import { SignupFormCafe, SignupFormFarmer } from "../components";

const Signup = () => {
    const authContext = useContext(AuthContext);

    return (
        <div>
            <h2>SIGN UP</h2>
            {authContext.state.userType === 'c' ? (
                <div>
                    <SignupFormCafe />
                </div>
            ) : (
                <div>
                    <SignupFormFarmer />
                </div>
            )}
        </div>
    );
};

export default Signup;
