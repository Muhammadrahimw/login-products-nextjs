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
		updateAllProducts: (state, {payload}: PayloadAction<productType[]>) => {
			state.shop = payload;
		},
		addShopProduct: (state, {payload}: PayloadAction<productType>) => {
			state.shop.push(payload);
		},
	},
});

export const {setCategory, addShopProduct, updateAllProducts} =
	categorySlice.actions;
export default categorySlice.reducer;
