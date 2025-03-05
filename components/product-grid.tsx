"use client"

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Product } from "@/lib/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export default function ProductGrid({ products = [], title = "SẢN PHẨM QUÀ DOANH NGHIỆP", subtitle = "GIỎ QUÀ TẶNG" }: ProductGridProps) {
  const [visibleProducts, setVisibleProducts] = useState(16);

  if (!products || products.length === 0) {
    return null;
  }

  const showMoreProducts = () => {
    setVisibleProducts(prev => prev + 16);
  };

  const displayedProducts = products.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < products.length;

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
          {displayedProducts.map((product) => (
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

        {hasMoreProducts && (
          <div className="text-center mt-8">
            <Button 
              onClick={showMoreProducts}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-2"
            >
              Xem thêm sản phẩm
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
