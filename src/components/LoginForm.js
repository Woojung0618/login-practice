import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { postApi } from "../api";


const LoginForm = ({ history }) => {
    const [details, setDetails] = useState({
        cf: "",
        uid: "", 
        password: "",
    }); // useState 정보 : id, password
    const [loginErrorMsg, setLoginErrorMsg] = useState("");
    const authContext = useContext(AuthContext);

    const submitHandler = async (e) => {
        e.preventDefault();

        await postApi(details, "/api/login/")
            .then(({ status, data }) => {
                authContext.dispatch({
                    type: "login",
                    token: data.token,
                    uid: details.uid,
                }); // useContext 처리
                
                history.push("/"); // 성공 시 home으로 이동
            })
            .catch((e) => {
                alert("Login Failed");
                console.log(e.response);
                setLoginErrorMsg("Login Failed");
            });
    };

    return (
        <form className="Login-outer-form" onSubmit={submitHandler}>
            <div className="Login-form-header">
            </div>
            <div className="form-group">
                <h5>ID</h5>
                <input
                    type="text"
                    name="uid"
                    placeholder=""
                    onChange={
                        (e) => setDetails({ ...details, uid: e.target.value })
                    }
                    value={details.uid}
                />
            </div>
            <div className="form-group">
                <h5>PASSWORD</h5>
                <input
                    type="password"
                    name="password"
                    placeholder=""
                    onChange={(e) =>
                        setDetails({ ...details, password: e.target.value })
                    }
                    value={details.password}
                />
            </div>
            
            <p>{loginErrorMsg}</p>
            <br></br>
            <button type="submit">LOG IN</button>
            <br />
        </form>
    );
};

export default LoginForm;
