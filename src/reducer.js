export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Can't remove product (id: " +
            action.id +
            ") as it's not in the basket!"
        );
      }

      return { ...state, basket: newBasket };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;

// //////
// // export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

// export const initialState = {
//     basket: [],
//     user: null
// }

// function reducer(state, action){
//     switch(action.type){
//         case "SET_USER":
//             return{
//                 ...state,
//                 user: action.user
//             }
//         case 'ADD_TO_BASKET':
//             //add to basket
//             return {
//                 ...state,
//                 basket: [...state.basket, action.item]
//             };
//             break;
//         case 'REMOVE_FROM_BASKET':
//             //remove from basket
//             let newBasket = [...state.basket];
//             let index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);

//             if(index >= 0){
//                 newBasket.splice(index, 1);
//             }else{
//                 console.warn(
//                     `this ( id: ${action.id}) not found`
//                 )
//             }
//             return {...state, basket: newBasket};
//         default:
//             return state;
//     }
// }

// export default reducer;
