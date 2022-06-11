import React from "react";

export default function Bag({ bagList }) {
  return (
    <div>
      <div className="bag-container">
        <h1>Items in your bag today</h1>
        {bagList.map((item) => {
          const { name, price, id, image } = item;
          return (
            <div key={id} className="bag">
              <img src={image} className="bag-image" />
              <div className="bag-description">
                <p>{name}</p>
                <div className="bag-btn">
                  <button className="btn-desc">+</button>
                  <p className="bag-value">1</p>
                  <button className="btn-desc">-</button>
                  <p className="bag-price">$ {price}</p>
                  <button className="remove-btn">x</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <h3>Total MDL : 450</h3>
    </div>
  );
}
