import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Details from "../Details/Details";


const CardDetails = () => {
    const [data, setData] = useState({});

    const {id} = useParams();
    const datas = useLoaderData();

    useEffect(() => {
        const findData = datas?.find(data => data.id == id);
        setData(findData);
        
    },[id,datas])

    return (
        <div>
            <Details data={data}></Details>
        </div>
    );
};

export default CardDetails;