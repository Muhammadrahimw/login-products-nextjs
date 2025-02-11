"use client";

import {useGetFetch} from "@/hooks/getFetch";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../ui/card";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {ShoppingBag} from "lucide-react";
import type {productType} from "@/@types/intex";
import {Button} from "../ui/button";

export const ProductsComponent = () => {
	const dispatch = useDispatch();
	const {data, isLoading, isError} = useGetFetch({
		key: `products`,
		url: `products`,
	});

	const selectedCategory = useSelector(
		(state: RootState) => state.category.selectedCategory
	);

	const filteredData = data?.products.filter(
		(value: productType) => value.category === selectedCategory
	);

	const addShopProduct = (product: productType) => {
		const productShop = JSON.parse(localStorage.getItem(`productShop`) || `[]`);
		const checkedProductShop = productShop.some(
			(value: productType) => value.id === product.id
		);

		if (!checkedProductShop) {
			productShop.push(product);
			localStorage.setItem("productShop", JSON.stringify(productShop));
		}
	};

	return (
		<>
			{filteredData?.slice(0, 8).map((value: productType) => (
				<Card key={value.id}>
					<CardHeader>
						<CardTitle className="text-xl">
							{value.title.slice(0, 47)}...
						</CardTitle>
					</CardHeader>
					<CardContent>
						{value.image && (
							<Image
								src={value.image}
								width={500}
								height={500}
								className="w-full h-auto max-h-[17.5em] min-h-[17.5em] object-cover"
								alt="product image"
								priority
							/>
						)}
					</CardContent>
					<CardFooter>
						<Button
							onClick={() => {
								addShopProduct(value);
							}}
							className="w-full"
							variant={"outline"}>
							<p className="text-[1.2em]">Add to Shop</p>
							<ShoppingBag className="cursor-pointer" size={30} />
						</Button>
					</CardFooter>
				</Card>
			))}
		</>
	);
};
