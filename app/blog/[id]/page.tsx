import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import blogData from '@/public/data/blog.json'

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogData.posts.find(post => post.id === parseInt(params.id))

  if (!post) {
    return (
      <main className="min-h-screen bg-[#4a1414] py-16">
        <div className="container text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Không tìm thấy bài viết</h1>
          <Link href="/blog">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Quay lại trang blog
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#4a1414] py-16">
      <div className="container max-w-4xl">
        <div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="bg-[rgb(92 36 36)] p-8 rounded-lg">
          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <p className="text-red-400 mb-8">{post.date}</p>
          
          <div className="prose prose-invert max-w-none">
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('#')) {
                const level = paragraph.match(/^#+/)?.[0].length || 1
                const text = paragraph.replace(/^#+\s*/, '')
                return (
                  <h2 key={index} className={`text-${level === 1 ? '3xl' : '2xl'} font-bold text-white mb-4`}>
                    {text}
                  </h2>
                )
              }
              return <p key={index} className="text-gray-300 mb-4">{paragraph}</p>
            })}
          </div>

          <div className="mt-8 text-center">
            <Link href="/blog">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Quay lại trang blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 