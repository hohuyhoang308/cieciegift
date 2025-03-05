'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Xử lý gửi form ở đây
    console.log('Form data:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <main className="min-h-screen bg-[#4a1414] py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">LIÊN HỆ</h1>
          <p className="text-xl text-gray-300">Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn sớm nhất</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Liên Hệ */}
          <Card className="bg-[rgb(92 36 36)] p-8 border-red-900">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">Họ và tên</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-[rgb(74 20 20)] border-red-900"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-[rgb(74 20 20)] border-red-900 "
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-2">Số điện thoại</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-[rgb(74 20 20)] border-red-900 "
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Nội dung</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-[rgb(74 20 20)] border-red-900 min-h-[150px]"
                  required
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Gửi tin nhắn
              </Button>
            </form>
          </Card>

          {/* Thông Tin Liên Hệ */}
          <div className="space-y-6">
            <Card className="bg-[rgb(92 36 36)] p-8 border-red-900">
              <h2 className="text-2xl font-bold text-white mb-6">Thông Tin Liên Hệ</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-red-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Điện thoại</h3>
                    <p className="text-gray-300">0123.456.789</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-red-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-300">info@cieciegift.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-red-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Địa chỉ</h3>
                    <p className="text-gray-300">123 Đường ABC, Quận 1, TP.HCM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-red-400 mt-1" />
                  <div>
                    <h3 className="text-white font-semibold">Giờ làm việc</h3>
                    <p className="text-gray-300">Thứ 2 - Chủ nhật: 8:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[rgb(92 36 36)] p-8 border-red-900">
              <h2 className="text-2xl font-bold text-white mb-6">Bản đồ</h2>
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.269311836789!2d106.70042331531915!3d10.777201989258053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d39c3b0c1c1%3A0x3b0c1c1c1c1c1c1c1!2zVHLGsOG7nW5nIMSQ4bqhaSBI4buNYyBLaG9hIEjhu41jIFThu7Egbmhpw6puIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1620000000000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
} 