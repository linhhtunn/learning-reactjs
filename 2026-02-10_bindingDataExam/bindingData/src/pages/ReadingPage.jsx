import { useEffect, useState } from "react";
//{ useEffect, useState } → ES6 destructuring
// Tương đương với 
// ======================================================
// |            import React from "react";              |
// |            const useEffect = React.useEffect;      |
// |            const useState = React.useState;        |
// ======================================================
import ReadingHeader from "../components/ReadingHeader";
import ReadingTitle from "../components/ReadingTitle";
import QuestionsContainer from "../components/QuestionsContainer"; // Cần import component cha
import examData from "../libs/data.json";
// ===============================================
// | Đây là ES6 import default                   |
// | import X from "..." → import default export |
// ===============================================
export default function ReadingPage() {
  const [packageData, setPackageData] = useState({});
// =================================================================
// |   [packageData, setPackageData] → ES6 Array Destructuring     |
// |   const [a, b] = something();                                 |
// =================================================================

  useEffect(() => {                                      //useEffect() → React Hook
    // Lấy gói câu hỏi đầu tiên từ dữ liệu JSON
    if (examData && examData.data) { //Nếu examData tồn tại → lấy examData.data                 // ================ A && B =======================
                                      //Nếu examData không tồn tại → dừng lại, không chạy tiếp  // | Nếu A đúng (truthy) → trả về B              |
                                                                                                // | Nếu A sai (falsy) → trả về A luôn           |
                                                                                                // ===============================================
                                    


      setPackageData(examData.data.questionPackages[0]);
    }
  }, []); // ==============================================
          // |    [] (dependency array)                   |
          // |    [] → chỉ chạy 1 lần khi component mount |
          // ==============================================

  return ( //return JSX : JSX = JavaScript + HTML
    <div className="h-screen w-full overflow-hidden bg-white flex flex-col">
      <ReadingHeader packageData={packageData} />

      <div className="flex flex-1 overflow-hidden">
        {/* CỘT TRÁI: NỘI DUNG BÀI ĐỌC */}
        <div className="w-1/2 flex flex-col border-r border-gray-300 overflow-y-auto p-8 pt-4 custom-scrollbar">
          <ReadingTitle title={packageData.title} />  
              {/* Props truyền xuống component */}
          <div 
            className="reading-content-container mx-auto text-justify text-[15px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: packageData.description }} 
         //  ===================== 
         //  | JSX {} = chèn JS  |
         //  | JS {} = object    |
         //  =====================
          />
        </div>

        {/* CỘT PHẢI: PHẦN CÂU HỎI */}
        <div className="w-1/2 bg-[#f8fafc] overflow-y-auto custom-scrollbar">
          {packageData.children ? (
            <QuestionsContainer questionsData={packageData.children} />
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400 font-medium">
              Đang tải câu hỏi...
            </div>
          )}
          {/* Ternary Operator → ES6: toán tử 3 ngôi 
              condition ? value1 : value2 */}
          
        </div>
      </div>
    </div>
  );
}