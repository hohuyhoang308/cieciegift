import HeroSection from "@/components/hero-section"
import ProductGrid from "@/components/product-grid"

import products from "@/public/data/products.json"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductGrid products={products} />

    </main>
  )
}

