import ProductGrid from "@/components/product-grid"
import products from "@/public/data/products.json"
import Image from "next/image"

export default function ValentinePage() {
  // Thêm offset 100 vào ID của sản phẩm Valentine
  const valentineProducts = products.valentine.map(product => ({
    ...product,
    id: product.id + 100 // Thêm offset 100 để tránh trùng với ID sản phẩm doanh nghiệp
  }));

  return (
    <main className="min-h-screen bg-[#4a1414]">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/home.png"
            alt="Quà tặng Valentine"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">QUÀ TẶNG VALENTINE</h1>
            <p className="text-xl text-white/90 mb-2">Món quà Valentine ý nghĩa và độc đáo</p>
            <p className="text-lg text-white/80">Sang trọng - Tinh tế - Đong đầy yêu thương</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="container mx-auto py-12">
        <ProductGrid 
          products={valentineProducts}
          title=""
          subtitle=""
        />
      </div>
    </main>
  )
} 