import ProductGrid from "@/components/product-grid"
import products from "@/public/data/products.json"
import Image from "next/image"

export default function DoanhNghiepPage() {
  return (
    <main className="min-h-screen bg-[#4a1414]">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="relative min-h-[calc(50vh-3rem)]">
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <Image
                src="/images/home.png"
                alt="Quà tặng doanh nghiệp"
                fill
                className="object-cover object-left"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>
          <div className="container mx-auto px-4 py-12 md:py-16 relative">
            <div className="text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-secondary tracking-wide leading-tight">
                QUÀ TẶNG DOANH NGHIỆP
              </h1>
              
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-medium tracking-wide leading-relaxed">
                Giải pháp quà tặng chuyên nghiệp cho doanh nghiệp
              </p>
              
              <div className="h-0.5 w-24 md:w-32 bg-secondary/50 mx-auto"></div>
              
              <p className="text-base sm:text-lg md:text-xl text-white/80 font-medium tracking-wide">
                Đa dạng mẫu mã - Giá cả hợp lý - Chất lượng cao
              </p>
            </div>
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