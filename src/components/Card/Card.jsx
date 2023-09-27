import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, title, img, category } = card || {};

    const categoryColors = {
        Health: '#0052FF',
        Education: '#FF444A',
        Clothing: '#79C23F',
        Food: '#F87147',
    };


    const textColor = categoryColors[category] || 'black';
    const backColor = categoryColors[category] || 'black';

    return (
        <Link to={`/home/${id}`}>
            <div className="card w-60 shadow-xl" style={{ backgroundColor: backColor }}>
                <img src={img} alt="Shoes" />
                <div className="card-actions justify-start py-3 px-3">
                    <button className="border py-1 px-3 bg-white rounded-lg" style={{ color: textColor }} >{category}</button>
                </div>
                <h2 className="pb-2 px-3 text-white text-lg font-bold">{title}</h2>
            </div>
        </Link>
    );
};

Card.propTypes = {
    card: PropTypes.object.isRequired,
}
export default Card;
