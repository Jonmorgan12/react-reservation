import React from 'react';
import { TablesListItemsProps } from '../../Types/global';
import '../../Styles/TableListItems.css';

const TablesListItems = ({
  id,
  image,
  name,
  reviews,
  rating,
  typeofFood,
  cost,
  onClick,
}: TablesListItemsProps) => {
  return (
    <section key={id} className="table-items">
      <img src={image} alt="default image" className="image" />
      <div className="main-container">
        <div className="restaurant-name">{name}</div>
        <div className="info-container">
          <div>Reviews: {reviews}</div>
          <div>Rating: {rating} out of 5</div>
        </div>
        <div>
          {typeofFood} / $ {cost} / Nashville
        </div>
      </div>
      <div className="button-container">
        <button onClick={onClick}>Reserve</button>
      </div>
    </section>
  );
};

export default TablesListItems;
