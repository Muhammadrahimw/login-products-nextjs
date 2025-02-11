"use client";

import {useGetFetch} from "@/hooks/getFetch";
import {Button} from "../ui/button";
import {ShoppingBag} from "lucide-react";
import {Skeleton} from "../ui/skeleton";
import {useDispatch} from "react-redux";
import {setCategory, updateAllProducts} from "@/redux/category-slice";
import {useEffect} from "react";
import Link from "next/link";

export const CategoryComponent = () => {
	const dispatch = useDispatch();
	const {data, isLoading, isError} = useGetFetch({
		key: `categories`,
		url: `products/category`,
	});

	useEffect(() => {
		dispatch(setCategory(data?.categories[0]));
		dispatch(
			updateAllProducts(
				JSON.parse(localStorage.getItem(`shopProducts`) || `[]`)
			)
		);
	}, [data]);

	return (
		<div className="flex items-center justify-between gap-5">
			<div className="flex items-center gap-5">
				{isLoading || isError ? (
					<>
						{Array.from({length: 6}).map((_, id: number) => (
							<Skeleton key={id} className="w-[5em] h-10" />
						))}
					</>
				) : (
					data?.categories?.map((value: string, id: number) => (
						<Button
							onClick={() => dispatch(setCategory(value))}
							variant={"outline"}
							key={id}
							className="font-semibold">
							{value}
						</Button>
					))
				)}
			</div>
			{isLoading || isError ? (
				<Skeleton className="w-[2.5em] h-10" />
			) : (
				<Link href={`/shop`}>
					<ShoppingBag className="cursor-pointer" size={25} />
				</Link>
			)}
		</div>
	);
};
