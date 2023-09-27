import { json } from 'react-router-dom';
import Swal from 'sweetalert2'

const Details = ({ data }) => {
    const { id, img, title, description, price, category } = data;

    const categoryColors = {
        Health: '#0052FF',
        Education: '#FF444A',
        Clothing: '#79C23F',
        Food: '#F87147',
    };

    const handleAlert = () => {

        const addToDonate = [];

        const donateItems = JSON.parse(localStorage.getItem('donate'));

        if (!donateItems) {
            addToDonate.push(data);
            localStorage.setItem('donate', JSON.stringify(addToDonate));
            Swal.fire(
                'Successfully Donated',
                'Added to donation list',
                'Thank you for Donating',
            )
        }
        else {

            const isExist = donateItems.find(donate => donate.id == id);

            if (!isExist) {
                addToDonate.push(...donateItems, data);
                localStorage.setItem('donate', JSON.stringify(addToDonate));
                Swal.fire(
                    'Successfully Donated',
                    'Added to donation list',
                    'Thank you for Donating',
                )
            } else {
                Swal.fire(
                    'Already Donated',
                    'Thank you',)
            }



        }
    }

    // const textColor = categoryColors[category] || 'black';
    const backColor = categoryColors[category] || 'black';

    return (
        <div>
            <div className="bg-white bg-opacity-80 w-full border-2 ">
                <img className="w-full h-[70vh] lg:relative" src={img} alt="" />
                <button onClick={handleAlert} className="border px-3 py-2 rounded-lg text-white lg:absolute md:top-[430px] right-[1050px]" style={{ backgroundColor: backColor }}>Donate ${price}</button>
            </div>
            <div className='p-2 md:p-0'>
                <h2 className="mt-5 text-xl font-bold">{title} </h2>
                <p className="mt-2 text-base">{description} </p>
            </div>
        </div>
    );
};

export default Details;