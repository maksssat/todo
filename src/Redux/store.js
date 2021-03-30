import { configureStore } from "@reduxjs/toolkit";
import dateReducer from "./date/dateSlice";
import todoReducer from "./todo/todoSlice";

export default configureStore({ reducer: { 
    date: dateReducer, 
    todo: todoReducer 
}
});
