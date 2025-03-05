import ProductGrid from "@/components/product-grid"
import products from "@/public/data/products.json"
import Image from "next/image"

export default function DoanhNghiepPage() {
  return (
    <main className="min-h-screen bg-[#4a1414]">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[50vh] min-h-[400px]">
          <Image
            src="/images/home.png"
            alt="Quà tặng doanh nghiệp"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">QUÀ TẶNG DOANH NGHIỆP</h1>
            <p className="text-xl text-white/90 mb-2">Giải pháp quà tặng chuyên nghiệp cho doanh nghiệp</p>
            <p className="text-lg text-white/80">Đa dạng mẫu mã - Giá cả hợp lý - Chất lượng cao</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <div className="container mx-auto py-12">
        <ProductGrid 
          products={products.doanhnghiep}
          title=""
          subtitle=""
        />
      </div>
    </main>
  )
} 