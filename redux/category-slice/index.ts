"use client";

import {productType} from "@/@types/intex";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface categoryStateType {
	selectedCategory: string;
	shop: productType[];
}

const initialState: categoryStateType = {
	selectedCategory: "",
	shop: [],
};

const categorySlice = createSlice({
	name: `category`,
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<string>) => {
			state.selectedCategory = action.payload;
		},
		addShopProduct: (state, {payload}: PayloadAction<productType>) => {
			state.shop.push(payload);
			localStorage.setItem(`shopProducts`, JSON.stringify(state.shop));
		},
	},
});

export const {setCategory, addShopProduct} = categorySlice.actions;
export default categorySlice.reducer;
