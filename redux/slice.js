import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
  nbItem: 0,
};

export const wishlistSlice = createSlice({
  name: "wishList",
  initialState: initialState,
  reducers: {
    addToWishList(state, action) {
      const movies = action.payload;
      console.log(movies);
      state.wishlist.push(movies);
      state.nbItem++;
    },
    removeFromWishList(state, action) {
      const itemToRemove = action.payload;
      console.log(itemToRemove);

      state.wishlist = state.wishlist.filter(
        (movie) => movie.id !== itemToRemove.idItem
      );
      state.nbItem--;
    },

    clearWishList(state) {
      state.wishlist = [];
      state.nbItem = 0;
    },
  },
});

export const { addToWishList, removeFromWishList, clearWishList } =
  wishlistSlice.actions;
