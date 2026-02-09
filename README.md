Dự án được xây dựng để làm quen với ReactJS cơ bản, tập trung vào:

Tư duy component

Cách React render UI

Sử dụng JSX, props, .map()

Styling với TailwindCSS

🛠 Công nghệ

ReactJS (Function Component)

Vite

TailwindCSS

JavaScript ES6+

📁 Cấu trúc chính
src/
├── components/
│   ├── Sidebar.jsx
│   ├── Topbar.jsx
│   ├── StatCard.jsx
│   └── QuickAction.jsx
├── pages/
│   ├── Login.jsx
│   └── Dashboard.jsx
├── App.jsx

✨ Chức năng đã làm
🔐 Login Page

Giao diện đăng nhập (UI only)

Tách thành page riêng (Login.jsx)

Render từ App.jsx

📊 Dashboard

Layout gồm: Sidebar, Topbar, Content

Sidebar:

Render menu bằng .map()

Highlight item active

Stat Cards:

Component tái sử dụng

Truyền dữ liệu qua props

Quick Actions:

Render danh sách action bằng .map()

Tránh lặp code

🧠 Kiến thức React áp dụng

Function Component

Props & component reuse

Render list với .map() và key

Hiểu sự khác nhau giữa map và forEach

Sử dụng spread operator (...) để tạo mảng / object mới

Không mutate dữ liệu gốc

Tổ chức code theo component

🎨 Giao diện

Styling bằng TailwindCSS

Sử dụng Flexbox, Grid

Class động theo điều kiện