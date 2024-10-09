import { Chat } from "app/components/chat/chat"
import { getProducts } from "app/services/shopify/products"
import { createAgent } from "app/utils/openai/createAgent";

export default async function ChatPage() {
  const products = await getProducts();
  const productTitles = products.map(p => p.title);
  const flapProductTitles = productTitles.join('\n');

  const agent = createAgent(flapProductTitles);

  return (
    <>
      <h1>Chat</h1>
      <Chat agent={agent}/>
    </>
  )
}