import { Action } from "@reduxjs/toolkit";
import Blog from "@/models/blog";

interface PayloadAction extends Action {
  payload: Blog;
}
const initialState: Array<Blog> = [];

export default function blog(state = initialState, action: PayloadAction) {
  switch (action.type) {
    case "BLOG/SET_BLOG": {
      const blogState = action.payload;
      return blogState;
    }
    default:
      return state;
  }
}
