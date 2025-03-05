'use client'

import { use, useMemo } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useCart } from '@/lib/context/cart-context'
import products from '@/public/data/products.json'
import ProductGrid from '@/components/product-grid'
import { Product } from '@/lib/types'

// Xử lý sản phẩm một lần duy nhất khi module được load
const processedProducts = (() => {
  const valentineProducts = products.valentine.map(product => ({
    ...product,
    id: product.id + 100 // Offset cố định cho sản phẩm Valentine
  }));
  return [...products.doanhnghiep, ...valentineProducts];
})();

// Hàm tạo số ngẫu nhiên với seed
function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

// Hàm lấy sản phẩm liên quan từ cùng danh mục với seed
function getRelatedProducts(currentProduct: Product | undefined, count: number, seed: number) {
  if (!currentProduct) return [];
  
  // Xác định danh mục của sản phẩm hiện tại
  const isValentine = currentProduct.id > 100;
  
  // Lấy danh sách sản phẩm cùng danh mục
  const sameCategory = isValentine 
    ? products.valentine.map(p => ({ ...p, id: p.id + 100 }))
    : products.doanhnghiep;
  
  // Lọc bỏ sản phẩm hiện tại
  const filteredProducts = sameCategory.filter(p => p.id !== currentProduct.id);
  
  // Sắp xếp sử dụng seededRandom
  return [...filteredProducts]
    .sort((a, b) => seededRandom(seed + a.id) - seededRandom(seed + b.id))
    .slice(0, count);
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = parseInt(resolvedParams.id);
  const { addToCart } = useCart();

  const product = processedProducts.find(p => p.id === productId);
  
  // Sử dụng useMemo để cache kết quả và đảm bảo tính nhất quán
  const relatedProducts = useMemo(() => 
    getRelatedProducts(product, 4, productId), 
    [product, productId]
  );

  if (!product) {
    return <div className="min-h-screen bg-[#4a1414] text-white p-8">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="min-h-screen bg-[#4a1414]">
      <div className="container py-8">
        <Card className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="h-full group hover:shadow-lg transition-shadow">
              <div className="rounded-xl border bg-[rgb(92 36 36)] text-card-foreground shadow hover:shadow-lg hover:shadow-[#ff3700] p-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="object-cover rounded-lg"
                />
              </div>
            </Card>

            <div className="space-y-6">
              <h1 className="text-2xl font-bold text-white">{product.name}</h1>
              <p className="text-red-400 text-xl font-bold">{product.price}</p>
              <p className="text-gray-300">{product.description}</p>
              
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-white">Chi tiết sản phẩm:</h2>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {product.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-red-950 pt-4">
                <h2 className="text-lg font-semibold text-white mb-2">Thông tin vận chuyển:</h2>
                <p className="text-gray-300">{product.shipping}</p>
              </div>

              <div className="space-y-4">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white" 
                  size="lg"
                  onClick={() => addToCart(product)}
                >
                  Đặt hàng ngay
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-red-400 text-red-400 hover:bg-red-950 hover:text-white hover:border-red-950" 
                  size="lg"
                  onClick={() => addToCart(product)}
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Phần sản phẩm liên quan */}
        <div className="mt-12">
          <ProductGrid 
            products={relatedProducts}
            title="Sản phẩm cùng loại"
            subtitle=""
          />
        </div>
      </div>
    </div>
  )
} 