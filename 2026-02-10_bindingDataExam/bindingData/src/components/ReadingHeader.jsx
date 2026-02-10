// Khai báo 1 React component tên là Sidebar
//export default → file khác có thể import

export default function ReadingHeader({ packageData }){
// { examTitle } - Destructuring object: Dùng để lấy dữ liệu từ object / array
    return (
    <div className="block bg-[#f4f4f4ea] h-25 p-3 border-b border-gray-300">
      <div className="flex items-center justify-center gap-2 text-[13px] text-blue-800 font-semibold ">
        <span>{packageData.title}</span>
      </div>

      <div className="text-sm bg-[#c1c7ccea] mt-3 h-12 rounded-[10px] pl-5 pt-0.75">
        <span className="font-bold">Part 3</span>
        <p className="text-gray-700">Read the text and answer questions 27-40</p>
      </div>
    </div>
    )
}