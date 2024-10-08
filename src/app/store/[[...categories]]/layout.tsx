import { getCollections } from "app/services/shopify/collections";
import Link from "next/link";

export default async function CategoryLayout(
    { children }: { children: React.ReactNode }
) {

    const collections = await getCollections();
    console.log(collections);

    return (
        <main>
            <nav>
                {
                    collections.map((c: any) => (
                        <Link key={c.id} href={'store/' + c.handle}> {c.title} </Link>
                    ))
                }
            </nav>
            {children}
        </main>
    )
}