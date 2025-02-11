import {ShopProductsComponent} from "@/components/shopProduct";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const ShopProducts = () => {
	return (
		<section className="w-[95%] mx-auto py-5">
			<Link href={`/products`}>
				<Button className="px-5 py-2" variant={"outline"}>
					Back to Products
				</Button>
			</Link>
			<div className="grid grid-cols-4 gap-4 mt-5">
				<ShopProductsComponent />
			</div>
		</section>
	);
};

export default ShopProducts;
