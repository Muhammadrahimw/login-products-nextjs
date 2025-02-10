import {CategoryComponent} from "@/components/categories";
import {ProductsComponent} from "@/components/products";

const Products = () => {
	return (
		<section className="w-[95%] mx-auto py-5">
			<CategoryComponent />
			<div className="grid grid-cols-4 gap-4 mt-5">
				<ProductsComponent />
			</div>
		</section>
	);
};

export default Products;
