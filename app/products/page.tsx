import { ProductList } from "@/components/generals/product-list";
import { stripe } from "@/lib/stripe";

export default async function ProductsPage() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
  });

  return (
    <section className="py-8 px-4">
      <h1 className="text-3xl font-semibold text-center mb-6 text-foreground">
        All Products
      </h1>
      <ProductList products={products.data} />
    </section>
  );
}
