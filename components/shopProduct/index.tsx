"use client";

import Image from "next/image";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "../ui/card";
import {Button} from "../ui/button";
import {ShoppingBag} from "lucide-react";
import type {productType} from "@/@types/intex";

export const ShopProductsComponent = () => {
	const productShop = JSON.parse(localStorage.getItem(`productShop`) || `[]`);

	return (
		<>
			{productShop?.map((value: productType) => (
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
								// addShopProduct(value);
							}}
							className="w-full"
							variant={"outline"}>
							<p className="text-[1.2em]">Coming soon</p>
							<ShoppingBag className="cursor-pointer" size={30} />
						</Button>
					</CardFooter>
				</Card>
			))}
		</>
	);
};
