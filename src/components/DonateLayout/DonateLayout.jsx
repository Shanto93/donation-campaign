const DonateLayout = ({ donate }) => {
    const { id, title, img, category, price } = donate;

    const categoryColors = {
        Health: '#0052FF',
        Education: '#FF444A',
        Clothing: '#79C23F',
        Food: '#F87147',
    };

    const textColor = categoryColors[category] || 'black';
    const backColor = categoryColors[category] || 'black';

    return (
        <div>
            <div className="flex mt-5" style={{ backgroundColor: backColor, back: 0.5 }}>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="pl-5 space-y-2">
                    <button className="bg-white mt-3 px-3 py-2 rounded-xl" style={{ color: textColor }}>{category}</button>
                    <h2 className="text-lg font-semibold
                ">{title} </h2>
                    <button className="px-1 py-1 border rounded-lg bg-white block" style={{ color: textColor }}>${price} </button>
                    <button className="border px-3 py-1 text-white rounded-xl" style={{ backgroundColor: backColor }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default DonateLayout;