'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import blogData from '@/public/data/blog.json'

export default function Blog() {
  return (
    <section className="py-16 bg-[#4a1414]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">BLOG & TIN TỨC</h2>
          <p className="text-gray-300">Cập nhật những tin tức mới nhất về quà tặng và dịch vụ của chúng tôi</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.posts.map((post) => (
            <Card key={post.id} className="bg-[rgb(92 36 36)] border-red-900 hover:shadow-lg hover:shadow-red-900/50 transition-shadow">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl line-clamp-2">{post.title}</CardTitle>
                <p className="text-red-400 text-sm">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-400 text-red-400 hover:bg-red-950 hover:text-white hover:border-red-950"
                  >
                    Đọc thêm
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white"
              size="lg"
            >
              Xem tất cả bài viết
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 