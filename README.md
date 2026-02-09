# ReactJS Dashboard UI

## 🎯 Mục tiêu
- Làm quen với ReactJS thông qua việc xây dựng UI Dashboard
- Hiểu cách React render UI và tái sử dụng component
- Thực hành JSX, props, map(), component reuse
- Styling bằng TailwindCSS

## 🛠 Công nghệ sử dụng
- ReactJS (Function Component)
- Vite
- TailwindCSS
- JavaScript ES6+

## 📁 Cấu trúc thư mục


```text
src/
├─ components/
│  ├─ Sidebar.jsx
│  ├─ Topbar.jsx
│  ├─ StatCard.jsx
│  └─ QuickAction.jsx
├─ pages/
│  ├─ Login.jsx
│  └─ Dashboard.jsx
└─ App.jsx

## 🔐 Login Page
- Xây dựng giao diện đăng nhập (UI only)
- Tách riêng thành page `Login.jsx`
- Render thông qua `App.jsx`

## 📊 Dashboard
- Layout gồm: Sidebar + Topbar + Content
- Sidebar:
  - Render menu bằng `map()`
  - Highlight item đang active
- Stat Cards:
  - Component tái sử dụng
  - Truyền dữ liệu qua props
- Quick Actions:
  - Render danh sách action bằng `map()`
  - Tránh lặp code

## 📚 Kiến thức React áp dụng
- Function Component
- Props & component reuse
- Render list với `map()` và `key`
- Phân biệt `map()` và `forEach()`
- Sử dụng spread operator (`...`) để tạo mảng / object mới
