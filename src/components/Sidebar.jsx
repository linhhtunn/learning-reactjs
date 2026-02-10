// Khai báo 1 React component tên là Sidebar
//export default → file khác có thể import
export default function Sidebar() {

  return (
    //<aside> Dùng cho sidebar / menu phụ
    <aside className="w-60 bg-slate-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">🎓 EPU English</h2>

      <ul className="space-y-2 text-sm">
        {[
          //Mảng dữ liệu
          "Trang chủ",
          "Điểm danh",
          "Lớp học",
          "Lịch học",
          "Bài tập",
          "Chấm điểm",
          "Kiểm tra & Quiz",
          "Bài học & Tài nguyên",
          "Học viên",
          "Báo cáo",
          "Thống kê thu chi",
          "Feedback",
          "Trợ lý AI",
          "Thông báo",
          "Chat",
        ].map((item, i) => (
          <li
            key={i}
            className={`px-3 py-2 rounded cursor-pointer hover:bg-blue-500 ${
              i === 0 ? "bg-blue-500" : ""
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
