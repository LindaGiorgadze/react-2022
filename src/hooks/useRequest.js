import { useState, useEffect } from "react";
import apiRequest from "../apiRequest";

export default function UseRequest(link, method, params, headers) {
    const [data, setData] = useState();

    useEffect(() => {
        apiRequest(link, method, params, headers)
        .then((response) => setData(response.data.data))
        .catch((error) => console.log(error));
    }, []);

    return data;
}