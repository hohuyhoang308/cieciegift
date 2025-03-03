import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function ProductGrid({ products = [], title = "SẢN PHẨM QUÀ TẾT", subtitle = "GIỎ QUÀ TẶNG NĂM 2025" }: ProductGridProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-8 sm:py-16 bg-[#501414]">
      <div className="container px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <div className="text-center mb-8 sm:mb-12">
            {title && <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{title}</h2>}
            {subtitle && <p className="text-sm sm:text-base text-white">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="block">
              <Card className="h-full group hover:shadow-lg transition-shadow">
                <CardContent className="p-3 sm:p-4">
                  <div className="aspect-square relative mb-2 sm:mb-4 overflow-hidden rounded-lg image-container">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2 line-clamp-2 text-white">{product.name}</h3>
                  <p className="text-white font-bold text-sm sm:text-base">{product.price}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
