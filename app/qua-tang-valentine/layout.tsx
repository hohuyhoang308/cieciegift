import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quà Tặng Valentine | CieCie Gift',
  description: 'Món quà Valentine ý nghĩa và độc đáo. Sang trọng - Tinh tế - Đong đầy yêu thương.',
  openGraph: {
    title: 'Quà Tặng Valentine | CieCie Gift',
    description: 'Món quà Valentine ý nghĩa và độc đáo. Sang trọng - Tinh tế - Đong đầy yêu thương.',
    images: ['/images/home.png'],
  },
}

export default function ValentineLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 