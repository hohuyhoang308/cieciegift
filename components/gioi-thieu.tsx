import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function GioiThieu() {
  return (
    <div className="bg-[#410c00] text-white min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">Về Cie Cie Gift</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Chúng tôi là đơn vị tiên phong trong lĩnh vực quà tặng doanh nghiệp, mang đến những giải pháp sáng tạo và
            độc đáo cho khách hàng.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-[#501414] border-none">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-white">Sứ Mệnh</h2>
              <p className="text-white/80">
                Chúng tôi cam kết mang đến những món quà ý nghĩa, chất lượng cao, giúp doanh nghiệp xây dựng mối quan hệ
                bền vững với đối tác và khách hàng.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#501414] border-none">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-white">Tầm Nhìn</h2>
              <p className="text-white/80">
                Trở thành đối tác tin cậy hàng đầu trong lĩnh vực quà tặng doanh nghiệp, tiên phong trong việc áp dụng
                các ý tưởng sáng tạo và độc đáo.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Giá Trị Cốt Lõi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Chất Lượng",
                description: "Cam kết cung cấp sản phẩm quà tặng chất lượng cao nhất",
              },
              {
                title: "Sáng Tạo",
                description: "Không ngừng đổi mới và tìm kiếm ý tưởng quà tặng độc đáo",
              },
              {
                title: "Tận Tâm",
                description: "Luôn lắng nghe và đáp ứng nhu cầu đặc biệt của từng khách hàng",
              },
            ].map((value, index) => (
              <Card key={index} className="bg-[#501414] border-none">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 text-white">{value.title}</h3>
                  <p className="text-white">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Company Image */}
        <div className="relative h-[200px] sm:h-[300px] md:h-[400px] mb-16 rounded-lg overflow-hidden">
          <Image src="/images/home.png" alt="Hình ảnh công ty" fill className="object-cover" />
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Liên Hệ Với Chúng Tôi</h2>
          <p className="text-lg text-white mb-6">
            Hãy liên hệ với chúng tôi để được tư vấn về giải pháp quà tặng phù hợp cho doanh nghiệp của bạn
          </p>
          <a href="https://www.facebook.com/hohuyhoang308/" className="bg-[#501414] text-white px-6 py-3 rounded-lg hover:bg-[#501414]/90 transition-colors">
    Liên Hệ Ngay
</a>
        </div>
      </div>
    </div>
  )
}

