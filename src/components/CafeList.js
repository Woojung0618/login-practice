import React, { useContext, useState } from "react";
import { AuthContext } from "../App";
import { getApi } from "../api";

const CafeList = () => {
    const authContext = useContext(AuthContext);
    
    return (
        <div>
            CafeList
        </div>
    );
};

export default CafeList;
