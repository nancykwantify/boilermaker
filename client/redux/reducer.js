// import thunkMiddleware from "redux-thunk";
// import axios from "axios";
// import { connect } from "react-redux";
// import { createStore } from "redux";
// import { applyMiddleware } from "redux";

// // Action types
// const SET_PUPPIES = "SET_PUPPIES";

// // Action creators
// export const setPuppies = (puppies) => ({
//   type: SET_PUPPIES,
//   puppies,
// });

// // Thunk creators
// export const fetchPuppies = () => {
//   return async (dispatch) => {
//     const res = await axios.get("/api/puppies");
//     const puppies = res.data;
//     const action = setPuppies(puppies);
//     dispatch(action);
//   };
// };

// const initialState = {
//   puppies: [],
// };

// export default function puppiesReducer (state = initialState, action) {
//   switch (action.type) {
//     case SET_PUPPIES:
//       return { ...state, puppies: action.puppies };
//     default:
//       return state;
//   }
// }
