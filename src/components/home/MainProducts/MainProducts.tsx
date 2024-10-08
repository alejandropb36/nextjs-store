
const getProducts = async () => {
    const response = await fetch(`${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-10/products.json`, {
        headers: new Headers({
            'X-Shopify-Access-Token': process.env.SHOPIFY_API_KEY ?? '',
            'Content-Type': 'application/json'
        })
    });

    const data = await response.json();

    return data;
};

export const MainProducts = async () => {
    const products = await getProducts();

    console.log(products);
    console.log(process.env.SHOPIFY_HOSTNAME);
    return (
        <section>Main products</section>
    )
}