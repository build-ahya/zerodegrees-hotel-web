import { combineReducers } from "@reduxjs/toolkit";

import blog from "./blog";
import content from "./content";

const rootReducer = combineReducers({
  content,
  blog,
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
