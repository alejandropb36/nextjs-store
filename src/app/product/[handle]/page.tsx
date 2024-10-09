import { ProductView } from "app/components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface ProductPageProps {
    searchParams: {
        id: string;
    }
}

export async function generateMetadata({searchParams}: ProductPageProps) {
    const products = await getProducts(searchParams.id);

    const product = products[0];

    return {
        title: product.title,
        description: product.description,
        keywords: product.tags,
        openGraph: {
            images: [product.image]
        }
    }
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
    if (!searchParams.id) {
        redirect('/store');
    }

    const products = await getProducts(searchParams.id);

    const product = products[0];
    return (
        <ProductView product={product}/>
    )
}