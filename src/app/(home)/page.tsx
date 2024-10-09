import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Future world',
  description: 'Welcome to the future world ecommerce',
  keywords: ['ecommerce', 'future', 'technology']
}
 

export default function Home() {
  return (
    <div>
      <main>
        <MainProducts />
      </main>
    </div>
  );
}
