import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, image }) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${image})`}} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}.00</span>
            </div>
    </div>
)

export default CollectionItem;