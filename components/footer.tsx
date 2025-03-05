import Link from "next/link"
import { Facebook, Phone, Mail, MapPin, Twitter, Youtube, Linkedin, MessageCircle, TrendingUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#410c00] text-white">
      {/* Top Contact Bar */}
      <div className="bg-[#501414] py-3">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>HOTLINE: 0333845968</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5" />
            <span>Email: cieciegift@gmail.com</span>
          </div>
          <Link
            href="https://m.me/100027117851907"
            className="bg-[#35090d] hover:bg-[#35090d]/80 px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Live chat
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Thông tin */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Thông tin</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gioi-thieu" className="text-white/80 hover:text-white">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/tuyen-dung" className="text-white/80 hover:text-white">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc" className="text-white/80 hover:text-white">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-white/80 hover:text-white">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Dịch vụ */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Dịch vụ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/qua-tang-doanh-nghiep" className="text-white/80 hover:text-white">
                  Quà tặng doanh nghiệp
                </Link>
              </li>
              <li>
                <Link href="/qua-tang-valenitne" className="text-white/80 hover:text-white">
                  Quà tặng valenitne
                </Link>
              </li>
              <li>
                <Link href="/hop-qua-tet" className="text-white/80 hover:text-white">
                  Hộp quà tết
                </Link>
              </li>
              <li>
                <Link href="/gio-qua-tet" className="text-white/80 hover:text-white">
                  Giỏ quà tết
                </Link>
              </li>
            </ul>
          </div>

          {/* Chính sách */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Chính sách</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chinh-sach-bao-mat" className="text-white/80 hover:text-white">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/dieu-khoan-su-dung" className="text-white/80 hover:text-white">
                  Điều khoản sử dụng
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach-doi-tra" className="text-white/80 hover:text-white">
                  Chính sách đổi trả
                </Link>
              </li>
              <li>
                <Link href="/phuong-thuc-thanh-toan" className="text-white/80 hover:text-white">
                  Phương thức thanh toán
                </Link>
              </li>
            </ul>
          </div>

          {/* Kết nối */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Kết nối với chúng tôi</h3>
            <div className="flex gap-4">
              <Link href="https://facebook.com" className="text-white/80 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com" className="text-white/80 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com" className="text-white/80 hover:text-white">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="https://linkedin.com" className="text-white/80 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="border-t border-[#501414] pt-8">
          <div className="grid gap-4">
            <h2 className="text-xl font-bold text-white">CÔNG TY TNHH CIE CIE GIFT</h2>
            <div className="flex items-start gap-2">
              <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Trụ sở chính:</p>
                <p className="text-white/80">123 Đường ABC, Phường XYZ, Quận 123, TP. Hà Nội</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="h-5 w-5 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-white">Mã số thuế:</p>
                <p className="text-white/80">0123456789</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 text-sm text-white/60">
            <p>© 2024 Cie Cie Gift. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

