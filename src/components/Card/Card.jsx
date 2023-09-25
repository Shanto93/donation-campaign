import PropTypes from 'prop-types'

const Card = ({ card }) => {
    const { title, img, category } = card || {};
    
    // Define a mapping of category colors
    const categoryColors = {
        Health: '#0052FF',
        Education: '#FF444A',
        Clothing: '#79C23F',
        Food: '#F87147',
    };

    // Get the color based on the category (default to black if not found)
    const textColor = categoryColors[category] || 'black';
    const backColor = categoryColors[category] || 'black';

    return (
        <div className="card w-60 shadow-xl" style={{ backgroundColor: backColor }}>
            <img src={img} alt="Shoes" />
            <div className="card-actions justify-start py-3 px-3">
                <button className="border py-1 px-3 bg-white rounded-lg" style={{ color: textColor }} >{category}</button>
            </div>
            {/* Apply the dynamic text color to the title */}
            <h2 className="pb-2 px-3 text-white text-lg font-bold">{title}</h2>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
}
export default Card;
