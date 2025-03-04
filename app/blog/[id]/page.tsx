import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import blogData from '@/public/data/blog.json'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  date: string
}

interface PageParams {
  id: string
}

interface PageProps {
  params: Promise<PageParams>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const post = await getBlogPost(id)

  if (!post) {
    return {
      title: 'Không tìm thấy bài viết',
      description: 'Bài viết bạn đang tìm kiếm không tồn tại.'
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image]
    }
  }
}

export default async function BlogPost({ params }: PageProps) {
  const { id } = await params
  const post = await getBlogPost(id)

  if (!post) {
    notFound()
  }

  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      // Xử lý heading level 1 (# Title)
      if (paragraph.startsWith('# ')) {
        return (
          <h1 key={index} className="text-4xl font-bold text-white mb-6">
            {paragraph.replace('# ', '')}
          </h1>
        )
      }
      
      // Xử lý heading level 2 (## Title)
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-3xl font-bold text-white mb-4">
            {paragraph.replace('## ', '')}
          </h2>
        )
      }

      // Xử lý heading level 3 (### Title)
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-2xl font-bold text-white mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        )
      }

      // Xử lý đoạn văn bản thông thường
      if (paragraph.trim()) {
        return (
          <p key={index} className="text-gray-300 mb-4">
            {paragraph}
          </p>
        )
      }

      // Thêm khoảng trống cho các dòng trống
      return <div key={index} className="h-4" />
    })
  }

  return (
    <main className="min-h-screen bg-[#4a1414] py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/blog"
            className="inline-flex items-center text-white mb-8 hover:text-red-300 transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                clipRule="evenodd" 
              />
            </svg>
            Quay lại Blog
          </Link>

          <h1 className="text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="text-gray-300 mb-8">{post.date}</div>
          
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="prose prose-invert max-w-none">
            {renderContent(post.content)}
          </div>

          <div className="flex justify-center mt-12">
            <Link 
              href="/blog"
              className="inline-flex items-center text-white px-6 py-3 text-lg font-semibold bg-red-900 rounded-lg hover:bg-red-800 transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              Quay lại Blog
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

async function getBlogPost(id: string): Promise<BlogPost | undefined> {
  return blogData.posts.find(post => post.id === parseInt(id))
} 