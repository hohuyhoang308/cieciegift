'use client'

import { use, useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useCart } from '@/lib/context/cart-context'
import products from '@/public/data/products.json'
import ProductGrid from '@/components/product-grid'

function getRandomProducts(products: any[], currentId: number, count: number) {
  return [...products]
    .filter(p => p.id !== currentId)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params)
  const { addToCart } = useCart()
  const product = products.find(p => p.id === parseInt(resolvedParams.id))
  const [randomProducts, setRandomProducts] = useState<any[]>([])

  useEffect(() => {
    if (product) {
      setRandomProducts(getRandomProducts(products, product.id, 4))
    }
  }, [product])

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>
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
            products={randomProducts}
            title="Sản phẩm khác"
            subtitle=""
          />
        </div>
      </div>
    </div>
  )
} 