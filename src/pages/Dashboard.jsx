import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import QuickAction from "../components/QuickAction";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        {/* Cards */}
        <div className="grid grid-cols-4 gap-4 p-5">
          <StatCard color="bg-cyan-500" number="0" label="Tin nhắn chưa đọc" />
          <StatCard color="bg-green-500" number="0" label="Thông báo chưa đọc" />
          <StatCard color="bg-yellow-400 text-black" number="7" label="Tổng học sinh" />
          <StatCard color="bg-red-500" number="4" label="Tổng số giáo viên" />
        </div>

        {/* Hành động nhanh */}
        <div className="bg-white mx-5 p-5 rounded shadow">
          <h3 className="font-semibold mb-4">⚡ Hành động nhanh</h3>

          <div className="grid grid-cols-4 gap-6">
            <QuickAction icon="👥" label="Quản lý người dùng" />
            <QuickAction icon="🎓" label="Quản lý lớp học" />
            <QuickAction icon="📅" label="Lịch học" />
            <QuickAction icon="🧑‍🎓" label="Quản lý học viên" />

            <QuickAction icon="✅" label="Điểm danh" />
            <QuickAction icon="📝" label="Giao bài tập" />
            <QuickAction icon="✔️" label="Chấm điểm" />
            <QuickAction icon="❓" label="Kiểm tra & Quiz" />

            <QuickAction icon="📚" label="Bài học & Tài nguyên" />
            <QuickAction icon="📊" label="Thống kê - Báo cáo" />
            <QuickAction icon="💰" label="Thống kê thu chi" />
            <QuickAction icon="⭐" label="Feedback từ học viên" />

            <QuickAction icon="🔔" label="Thông báo & Nhắc lịch" />
            <QuickAction icon="💬" label="Chat" />
            <QuickAction icon="🤖" label="Trợ lý AI" />
          </div>
        </div>
      </div>
    </div>
  );
}
