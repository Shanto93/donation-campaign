import { useEffect, useState } from "react";
import DonateLayout from "../DonateLayout/DonateLayout";

const Donation = () => {
    const [donates, setDonates] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);


    useEffect(()=>{
        const donateItems = JSON.parse(localStorage.getItem('donate'));

        if(donateItems){
            setDonates(donateItems);
        }else{
            setNoFound("No donation found.");
        }

    },[])
    return <div>{noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> :
    <div>
        <div className="grid md:grid-cols-2 gap-5">
        {
            isShow? donates.map(donate => <DonateLayout key={donate.id} donate={donate} ></DonateLayout>):
            donates.slice(0,4).map(donate => <DonateLayout key={donate.id} donate={donate}></DonateLayout>)
        }
    </div>
    <div className="flex justify-center items-center mt-3">
    {
        donates.length > 4 && <button onClick={()=>setIsShow(!isShow)} className={`px-3 py-2 text-white font-semibold rounded-lg bg-black ${isShow?'hidden':''}`}>See All</button>
    }
    </div>
    </div>
    
    }

    </div>
};

export default Donation;