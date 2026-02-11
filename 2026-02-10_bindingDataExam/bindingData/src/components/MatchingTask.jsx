export default function MatchingTask({ questions }) {
  // Lấy các nhãn cột (A, B, C...) từ dữ liệu hoặc mặc định
  const options = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="overflow-x-auto shadow-sm border rounded-lg">
      <table className="w-full text-left border-collapse bg-white">
        {/* Hàng 1 */}
        <thead>
          <tr className="bg-gray-100 border-b">
            {/* Cột 1 */}
            <th className="p-3 text-sm font-bold text-gray-700 w-16">No.</th> 
            {/* Cột 2 */}
            <th className="p-3 text-sm font-bold text-gray-700">Question Content</th>
            {options.map(opt => (
              <th key={opt} className="p-3 text-center text-sm font-bold text-gray-700 w-12">{opt}</th>
            ))}
       {/* ==================================================
            Code	        Ý nghĩa
            options.map()	Lặp qua mảng
            key={opt}	    Gắn ID riêng cho từng phần tử
            {opt}	        Hiển thị A, B, C...
           ================================================== */}
          </tr>
        </thead>
        {/* Hàng 2 */}
        <tbody>
          {questions.map((q) => ( 
            // Lần lặp	  |       q
            // 1	      |      id:1, orderNumber:27, title:"What is React?"
            // 2	      |      id:2, orderNumber:28, title:"What is useEffect?" 
            // 👉 Mỗi lần lặp → return ra 1 <tr></tr>

            <tr key={q.id} className="border-b hover:bg-gray-50 transition-colors">
                {/* cột 1 */}
              <td className="p-3 font-bold text-blue-600">{q.orderNumber}</td>
                {/* cột 2  */}
              <td className="p-3 text-gray-700" dangerouslySetInnerHTML={{ __html: q.title }} />
              {options.map(opt => (
                <td key={opt} className="p-3 text-center">
                    {/* mỗi lần lặp opt thì tạo ra 1 radio */}
                  <input 
                    type="radio" 
                    name={`question-${q.id}`} 
                    // Nhóm radio theo từng câu hỏi, Mỗi câu hỏi là 1 nhóm riêng, Mỗi câu chỉ chọn được 1 đáp án, Nhưng các câu khác nhau không ảnh hưởng nhau
                    className="w-4 h-4 cursor-pointer accent-blue-600"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}