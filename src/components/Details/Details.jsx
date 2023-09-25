import Swal from 'sweetalert2'

const Details = ({ data }) => {
    const { img, title, description, price, category } = data;

    const categoryColors = {
        Health: '#0052FF',
        Education: '#FF444A',
        Clothing: '#79C23F',
        Food: '#F87147',
    };

    const handleAlert = () =>{
        Swal.fire(
            'Successfully Donated',
            'Thank you for Donating',
          )
    }

    // const textColor = categoryColors[category] || 'black';
    const backColor = categoryColors[category] || 'black';

    return (
        <div>
            <div className="bg-white bg-opacity-80 w-full border-2 ">
            <img className="w-full h-[70vh] relative" src={img} alt="" />
            <button onClick={handleAlert} className="border px-3 py-2 rounded-lg text-white absolute top-[430px] right-[1050px]" style={{ backgroundColor: backColor }}>Donate ${price}</button>
            </div>
            <h2 className="mt-5 text-xl font-bold">{title} </h2>
            <p className="mt-2 text-base">{description} </p>
        </div>
    );
};

export default Details;