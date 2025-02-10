"use client";

import {useGetFetch} from "@/hooks/getFetch";
import {Card, CardContent, CardHeader, CardTitle} from "../ui/card";
import Image from "next/image";

interface productType {
	id: number;
	title: string;
	image: string;
	price: number;
	description: string;
	brand: string;
	model: string;
	color: string;
	category: string;
	discount: number;
}

export const ProductsComponent = () => {
	const {data, isLoading, isError} = useGetFetch({
		key: `products`,
		url: `products`,
	});

	console.log(data?.products[0]);

	return (
		<>
			{data?.products.map((value: productType) => (
				<Card>
					<CardHeader>
						<CardTitle className="text-base">
							{/* {value.title.slice(0, 32)} */}
						</CardTitle>
					</CardHeader>
					<CardContent>
						{/* {value.image && (
							<Image src={value.image} width={200} height={200} alt="fs" />
						)} */}
					</CardContent>
				</Card>
			))}
		</>
	);
};
