import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h3>Hello</h3>
        <h2 className="checkout_title">Your shopping Basket</h2>

        {basket?.map((item) => (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

////

// import React from 'react';
// import { useStateValue, usrStateValue } from './StateProvider';
// import './Checkout.css';
// import CheckoutProduct  from './CheckoutProduct';
// import Subtotal from './Subtotal';
// import FlipMove from 'react-flip-move';


// function Checkout() {
//     const [ { basket }] = useStateValue();

//     return (
//         <div className="checkout">
//                 <div className="checkout__left">
//                 <img  className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" />
//                 {
//                     basket?.length === 0 ? (
//                         <div>
//                             <h2>Your Shopping Basket is empty</h2>
//                             <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
//                         </div>
//                     ) : (
//                         <div>
//                             <h2 className="checkout__title">Your Shopping Basket</h2>

//                            <FlipMove
//                             staggerDurationBy={30}
//                             duration={750}
//                             delay={30}
//                             >
//                             { basket?.map((item, i) => (
//                                 <li key={item.id + i}>
//                                     <CheckoutProduct   
//                                     id={item.id}
//                                     title={item.title}
//                                     image={item.image}
//                                     price={item.price}
//                                     rating={item.rating}
//                                 />
//                                 </li>

//                             ))}
//                             </FlipMove>
//                         </div>
//                     )
//                     }
//         </div>
//         { basket.length > 0 && (
//             <div className="checkout__right">
//                 <Subtotal />
//             </div>
//         )}
//         </div>
//     )
// }

// export default Checkout














// import React from "react";
// import "./Checkout.css";
// import Subtotal from "../Subtotal/Subtotal";
// import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
// import { useStateValue } from "../StateProvider";

// function Checkout() {
//   const [{ basket }, dispatch] = useStateValue();
//   return (
//     <div className="checkout">
//       <div className="checkot_left">
//         <img
//           className="checkout_ad"
//           src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
//           alt=""
//         />
//         <h3>Hello</h3>
//         <h2 className="checkout_title">Your shopping Basket</h2>

//         {basket?.map((item) => {
//           return (
//             {basket?.map((item) => (
//               <CheckoutProduct
//                 id={item.id}
//                 title={item.title}
//                 image={item.image}
//                 price={item.price}
//                 rating={item.rating}
//               />
//             ))
//           );
//         })}
//       </div>
//       <div className="checkout_right">
//         <Subtotal />
//       </div>
//     </div>
//   );
// }

// export default Checkout;
