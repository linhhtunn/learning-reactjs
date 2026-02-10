import { useEffect, useState } from "react";
import ReadingHeader from "../components/ReadingHeader";
import ReadingTitle from "../components/ReadingTitle";

import examData from "../libs/data.json"; // Import trực tiếp file json
//examData = toàn bộ nội dung của file data.json
export default function ReadingPage() {
  const [readingContent, setReadingContent] = useState("");

//-------------- State - Component cha -------------------------
  const [examTitle, setExamTitle] = useState("");
/*
┌───────────────────────┬──────────────────────────────┐
│        PHẦN           │            NGHĨA             │
├───────────────────────┼──────────────────────────────┤
│ examTitle             │ Giá trị state hiện tại       │
│                       │ (tiêu đề đang được hiển thị) │
├───────────────────────┼──────────────────────────────┤
│ setExamTitle          │ Hàm cập nhật state           │
│                       │ (dùng để đổi tiêu đề)        │
├───────────────────────┼──────────────────────────────┤
│ ""                    │ Giá trị khởi tạo ban đầu     │
│                       │ (chưa có dữ liệu)            │
└───────────────────────┴──────────────────────────────┘ 
*/


  const [packageData, setPackageData] = useState({});
  useEffect(() => {
    // Truy xuất dữ liệu từ cấu trúc JSON của bạn

    setPackageData(examData.data.questionPackages[0])
    //“Lấy bài đọc đầu tiên trong danh sách questionPackages và gán nó vào biến packageData”
    setExamTitle(examData.data.title);

  }, []);

  return (
    <div className=" h-screen w-full overflow-hidden bg-white">
      
{/*---------------- TRUYỀN STATE QUA JSX: PROP ----------------------*/}

        <ReadingHeader packageData={packageData} />

    {/*
   ┌───────────────────────┬──────────────────────────────┐
   │        PHẦN           │            NGHĨA             │
   ├───────────────────────┼──────────────────────────────┤
   │ ReadingHeader         │ Component con được render    │
   │                       │ trong JSX                    │
   ├───────────────────────┼──────────────────────────────┤
   │ examTitle=            │ Tên prop truyền vào component│
   ├───────────────────────┼──────────────────────────────┤
   │ {examTitle}           │ Giá trị state được truyền    │
   │                       │ xuống component con          │
   ├───────────────────────┼──────────────────────────────┤
   │ {}                    │ Nhúng biểu thức JavaScript   │
   │                       │ vào JSX                      │
   └───────────────────────┴──────────────────────────────┘ */}
      {/* CỘT TRÁI: READING CONTENT */}
      <div className="w-1/2 flex flex-col border-r border-gray-300">


        
        <div className="flex-1 overflow-y-auto p-8 pt-4 custom-scrollbar">
          <ReadingTitle title={packageData.title} />
          
          {/* Vì description là HTML string, ta dùng dangerouslySetInnerHTML */}
          <div 
            className="reading-content-container max-w-2xl mx-auto text-justify text-[15px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: packageData.description }} 
          />
        </div>
      </div>

      {/* CỘT PHẢI: QUESTIONS */}
      <div className="w-1/2 bg-[#f8fafc] overflow-y-auto">
        <div className="h-full flex items-center justify-center text-gray-400 font-medium">
          Phần câu hỏi sẽ làm ở bước tiếp theo
        </div>
      </div>
    </div>
  );
}