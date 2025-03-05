import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quà Tặng Doanh Nghiệp | CieCie Gift',
  description: 'Giải pháp quà tặng chuyên nghiệp cho doanh nghiệp. Đa dạng mẫu mã, giá cả hợp lý, chất lượng cao. SANG TRỌNG - ĐẲNG CẤP - Ý NGHĨA',
  openGraph: {
    title: 'Quà Tặng Doanh Nghiệp | CieCie Gift',
    description: 'Giải pháp quà tặng chuyên nghiệp cho doanh nghiệp. Đa dạng mẫu mã, giá cả hợp lý, chất lượng cao. SANG TRỌNG - ĐẲNG CẤP - Ý NGHĨA',
    images: ['/images/home.png'],
  },
}

export default function DoanhNghiepLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 