import { ProductsWrapper } from "app/components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify/products";

interface CategoryProps {
    params: {
        categories: string[];
    },
    searchParams?: any;
}

export default async function CategoryPage(props: CategoryProps) {
    const products = await getProducts();
    
    return (
        <ProductsWrapper products={products} />
    )
}