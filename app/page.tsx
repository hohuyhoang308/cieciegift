import HeroSection from "@/components/hero-section"
import ProductGrid from "@/components/product-grid"
import products from "@/public/data/products.json"

export default function Home() {
  // Thêm offset cho id của sản phẩm valentine để tránh trùng lặp
  const valentineProducts = products.valentine.map(product => ({
    ...product,
    id: product.id + 100 // Thêm offset 100 để tránh trùng với id của sản phẩm doanh nghiệp
  }))

  // Gộp cả hai mảng sản phẩm thành một
  const allProducts = [...products.doanhnghiep, ...valentineProducts]
  
  // Random thứ tự các sản phẩm
  const shuffledProducts = [...allProducts].sort(() => Math.random() - 0.5)

  return (
    <main>
      <HeroSection />
      <ProductGrid 
        products={shuffledProducts}
        title="TẤT CẢ SẢN PHẨM"
        subtitle=""
      />
    </main>
  )
}

