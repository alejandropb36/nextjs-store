import Link from "next/link"
import { ChatLink } from "app/components/Store/ChatLink"
import { getCollections } from "app/services/shopify/collections"
import styles from './StoreLayout.module.sass'

export default async function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  const collections = await getCollections()

  return (
    <main className={styles.StoreLayout}>
      <h1>Explore</h1>
      <nav>
        <ul className={styles.StoreLayout__list}>
          {
            collections?.map((collection: {id: string; handle: string; title: string;}) => (
              <Link key={collection.id} href={'/store/' + collection.handle} className={styles.StoreLayout__chip}>
                {collection.title}
              </Link>
            ))
          }
        </ul>
        <ChatLink />
      </nav>
      {children}
    </main>
  )
}