import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../App";
import { getApi, postApi } from "../api";

const CafeDetail = () => {
    const authContext = useContext(AuthContext);
    const [cafeData, setCafeData] = useState({
        cafename: "",
        location: "",
        time: "",
        coffee: "",
        message: "",
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        // await postApi(
        //     {},
        //     "/"
        // )
    }

    useEffect(() => {
        const getCafeDetail = async () => {
            await getApi(
                {
                    userName: authContext.state.userName,
                },
                "/cafedetail",
                authContext.state.token
            )
                .then(({ status, data }) => {
                    if (status === 200) {
                        console.log(data);
                        setCafeData({
                            cafename: data.cafename,
                            location: data.location,
                            time: data.time,
                            coffee: data.coffee,
                            message: data.message,
                        });
                    }
                })
                .catch((e) => {
                    alert("Error!");
                });
        };
        // getCafeDetail();
    }, []);

    return (
        <div>
            <div>
                <div>
                    카페이름
                    {cafeData.cafename}
                </div>
                <div>
                    위치
                    {cafeData.location}
                </div>
                <div>
                    커피박 수거 가능 시간
                    {cafeData.time}
                </div>
                <div>   
                    커피박 양
                    {cafeData.coffee}
                </div>
                <div>
                    메세지
                    {cafeData.message}
                </div>
            </div>

            <button
                type="submit"
                onClick={submitHandler}
            >
                신청버튼
            </button>
        </div>
    );
};

export default CafeDetail;
