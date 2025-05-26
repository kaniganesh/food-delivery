import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ image, name, price, desc, id }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const currency = "₹";

    // Ensure ID is treated as a string for consistency with MongoDB _id
    const itemId = String(id);

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt={name} />
                {!cartItems[itemId] ? (
                    <img
                        className='add'
                        onClick={() => addToCart(itemId)}
                        src={assets.add_icon_white}
                        alt="Add"
                    />
                ) : (
                    <div className="food-item-counter">
                        <img
                            src={assets.remove_icon_red}
                            onClick={() => removeFromCart(itemId)}
                            alt="Remove"
                        />
                        <p>{cartItems[itemId]}</p>
                        <img
                            src={assets.add_icon_green}
                            onClick={() => addToCart(itemId)}
                            alt="Add More"
                        />
                    </div>
                )}
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">{currency}{price}</p>
            </div>
        </div>
    );
};

export default FoodItem;
