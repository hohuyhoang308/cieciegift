# 🎁 CieCie Gift - Cửa hàng quà tặng handmade độc đáo

[![Live Demo](https://img.shields.io/badge/Live%20Demo-https://cieciegift.id.vn/-green?style=for-the-badge&logo=vercel)](https://cieciegift.id.vn/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

## 📖 Giới thiệu

**CieCie Gift** là một ứng dụng web thương mại điện tử chuyên về quà tặng handmade độc đáo, được phát triển bằng Next.js 15 với TypeScript và Tailwind CSS. Website cung cấp các sản phẩm quà tặng cao cấp cho doanh nghiệp và Valentine với giao diện hiện đại, responsive và trải nghiệm người dùng tuyệt vời.

### ✨ Tính năng chính

- 🛍️ **Cửa hàng trực tuyến** với danh mục sản phẩm đa dạng
- 🎯 **Quà tặng doanh nghiệp** - Giải pháp quà tặng chuyên nghiệp
- 💕 **Quà tặng Valentine** - Món quà ý nghĩa và độc đáo
- 🛒 **Giỏ hàng thông minh** với tính năng thêm/xóa sản phẩm
- 📱 **Responsive Design** - Tối ưu cho mọi thiết bị
- 🔒 **Bảo mật cao** với các security headers
- ⚡ **Performance tối ưu** với Next.js 15 và Image Optimization
- 🎨 **UI/UX hiện đại** với Tailwind CSS

## 🚀 Cài đặt và Chạy dự án

### Yêu cầu hệ thống

- Node.js 18.0 trở lên
- npm hoặc yarn
- Git

### Bước 1: Clone repository

```bash
git clone https://github.com/hohuyhoang308/cieciegift.git
cd cieciegift
```

### Bước 2: Cài đặt dependencies

```bash
npm install
# hoặc
yarn install
```

### Bước 3: Chạy ứng dụng

```bash
npm run dev
# hoặc
yarn dev
```

Mở trình duyệt và truy cập [http://localhost:3000](http://localhost:3000)

### Bước 4: Build cho production

```bash
npm run build
npm start
# hoặc
yarn build
yarn start
```

## 🛠️ Công nghệ sử dụng

### Frontend
- **Next.js 15.1.6** - React framework với App Router
- **TypeScript 5.0** - Type-safe JavaScript
- **Tailwind CSS 3.0** - Utility-first CSS framework
- **React 18** - UI library với hooks và context

### UI Components
- **Radix UI** - Headless UI components
- **Lucide React** - Beautiful icons
- **Custom Components** - Tùy chỉnh theo brand

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📁 Cấu trúc dự án

```
cieciegift/
├── app/                          # Next.js App Router
│   ├── blog/                     # Trang blog
│   ├── contact/                  # Trang liên hệ
│   ├── products/                 # Trang sản phẩm chi tiết
│   ├── qua-tang-doanh-nghiep/    # Trang quà tặng doanh nghiệp
│   ├── qua-tang-valentine/       # Trang quà tặng Valentine
│   ├── layout.tsx                # Layout chính
│   └── page.tsx                  # Trang chủ
├── components/                   # React components
│   ├── ui/                       # UI components cơ bản
│   ├── cart.tsx                  # Component giỏ hàng
│   ├── header.tsx                # Header component
│   ├── hero-section.tsx          # Hero section
│   └── product-grid.tsx           # Grid sản phẩm
├── lib/                          # Utilities và context
│   ├── context/                  # React Context
│   │   └── cart-context.tsx      # Context giỏ hàng
│   ├── types.ts                  # TypeScript types
│   └── utils.ts                  # Utility functions
├── public/                       # Static files
│   ├── data/                     # Dữ liệu JSON
│   │   ├── products.json         # Dữ liệu sản phẩm
│   │   └── blog.json             # Dữ liệu blog
│   └── images/                   # Hình ảnh
├── next.config.js                # Cấu hình Next.js
├── tailwind.config.js            # Cấu hình Tailwind
└── package.json                  # Dependencies
```

## 🎯 Cách sử dụng

### 1. Duyệt sản phẩm
- Truy cập trang chủ để xem tất cả sản phẩm
- Sử dụng menu để chọn danh mục:
  - **Quà tặng doanh nghiệp**: Sản phẩm cao cấp cho doanh nghiệp
  - **Quà tặng Valentine**: Sản phẩm lãng mạn cho Valentine

### 2. Xem chi tiết sản phẩm
- Click vào sản phẩm để xem thông tin chi tiết
- Xem mô tả, giá cả, và thông tin vận chuyển
- Xem sản phẩm liên quan

### 3. Quản lý giỏ hàng
- Click "Thêm vào giỏ hàng" để thêm sản phẩm
- Click icon giỏ hàng để xem và quản lý
- Tăng/giảm số lượng hoặc xóa sản phẩm
- Xem tổng tiền

### 4. Tính năng "Xem thêm"
- Mỗi trang hiển thị tối đa 16 sản phẩm
- Click "Xem thêm sản phẩm" để tải thêm
- Tự động load thêm 16 sản phẩm mỗi lần

## 🔧 Cấu hình

### Environment Variables
Tạo file `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://cieciegift.id.vn
```

### Security Headers
Dự án đã được cấu hình với các security headers:
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy`
- `X-Frame-Options: DENY`
- `Strict-Transport-Security`

## 📱 Responsive Design

Website được tối ưu cho tất cả các thiết bị:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Khuyến nghị)
1. Push code lên GitHub
2. Kết nối repository với Vercel
3. Deploy tự động

### Netlify
1. Build project: `npm run build`
2. Upload thư mục `out` lên Netlify

### Server tự quản lý
1. Build: `npm run build`
2. Start: `npm start`
3. Cấu hình reverse proxy với Nginx

## 🤝 Đóng góp

Chúng tôi hoan nghênh mọi đóng góp! Vui lòng:

1. Fork repository
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request


## 👨‍💻 Tác giả

**Hồ Huy Hoàng**
- GitHub: [@hohuyhoang308](https://github.com/hohuyhoang308)
- Website: [https://cieciegift.id.vn/](https://cieciegift.id.vn/)

## 📞 Liên hệ
- **Facebook**: [Hồ Huy Hoàng](https://www.facebook.com/hohuyhoang308/)

## 🙏 Lời cảm ơn

Cảm ơn tất cả những người đã đóng góp và hỗ trợ dự án này!

---

⭐ **Nếu bạn thích dự án này, hãy cho chúng tôi một star!** ⭐