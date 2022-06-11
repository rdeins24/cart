import React from "react";

export default function Pizza({ pizza,moveToBag }) {
  return (
    <div>
     
      {pizza.map((item) => {
        const { id, price, image, ingredients, name } = item;
        return (
          <div key={id} className="description-container">
            <div className="description">
              <p>{name}</p>
              {/* <p>ingredients : {ingredients}</p> */}
              {/* <p>{id}</p> */}

              <img src={image} className="image" />
              <p>Price :$ {price}</p>
              <div>
                <button onClick={()=>moveToBag(id)}>add to cart</button>
              
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
