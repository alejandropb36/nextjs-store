import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { useParams, useSearchParams } from "next/navigation";

interface ProductPageProps {
    searchParams: {
        id: string;
    }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
    const products = await getProducts(searchParams.id);

    const product = products[0];
    console.log(product);
    return (
        <ProductView product={product}/>
    )
}