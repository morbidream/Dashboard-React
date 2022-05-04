import {    combineReducers    } from "redux";
    import products from "./slices/productsSlice";
    import brands from "./slices/brandsSlice";

    import comments from "./slices/commentSlice";
    import ratings from "./slices/ratingSlice";
    const reducers = combineReducers({
    products,brands,comments,ratings

    });
    export default reducers;