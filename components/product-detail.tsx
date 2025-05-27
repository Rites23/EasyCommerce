import Stripe from "stripe";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "./ui/card";

interface Props {
  product: Stripe.Product;
}

export const ProductDetail = ({ product }: Props) => {
  const price = product.default_price as Stripe.Price;
  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto py-10">
      {product.images?.[0] && (
        <div className="relative w-full max-w-xs h-80 mx-auto md:mx-0">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
      )}
      <Card className="flex-1 p-6 bg-white/90 shadow-xl rounded-xl">
        <CardTitle className="text-3xl font-bold mb-4 text-gray-900">
          {product.name}
        </CardTitle>
        <CardContent className="text-gray-700">
          {product.description && (
            <p className="mb-4 text-base">{product.description}</p>
          )}
          {price?.unit_amount && (
            <p className="text-2xl font-semibold text-black mb-6">
              ${(price.unit_amount / 100).toFixed(2)}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
