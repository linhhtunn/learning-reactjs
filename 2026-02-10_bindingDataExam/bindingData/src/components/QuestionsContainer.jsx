import QuestionGroupTitle from "./QuestionGroupTitle";
import MatchingTask from "./MatchingTask";
import MultipleChoiceTask from "./MultipleChoiceTask";

export default function QuestionsContainer({ questionsData }) {
  if (!questionsData) return null;

  // SẮP XẾP: Nhóm nào có câu hỏi số nhỏ hơn thì đứng trước (Giữ nguyên code cũ)
  const sortedGroups = [...questionsData].sort((a, b) => {
    const aMin = Math.min(...a.questions.map(q => q.orderNumber));
    const bMin = Math.min(...b.questions.map(q => q.orderNumber));
    return aMin - bMin;
  });
// ========================================================================================================
// | Code                             | Tên syntax                   | Ý nghĩa                            |
// | -------------------------------- | ---------------------------- | ---------------------------------- |
// | `sortedGroups`                   | JS (variable name)           | Tên biến lưu mảng đã sắp xếp       |
// | `[...questionsData]`             | ES6 (Spread operator)        | Tạo bản sao mảng                   |
// | `.sort()`                        | JS (Array method)            | Sắp xếp mảng                       |
// | `(a, b) => {}`                   | ES6 (Arrow function)         | Hàm so sánh 2 phần tử khi sort     |
// | `a`, `b`                         | JS (parameters)              | 2 phần tử đang được đem ra so sánh |
// | `Math.min()`                     | JS (Built-in function)       | Tìm số nhỏ nhất                    |
// | `...` trong `Math.min(...array)` | ES6 (Spread operator)        | Tách mảng thành từng số riêng lẻ   |
// | `a.questions`                    | JS (Dot notation)            | Truy cập thuộc tính                |
// | `.map()`                         | JS (Array method ES5)        | Lặp qua mảng và trả về mảng mới    |
// | `q => q.orderNumber`             | ES6 (Arrow function)         | Lấy orderNumber của từng question  |
// | `return aMin - bMin`             | JS (Return statement)        | Quyết định thứ tự sắp xếp          |
// | `aMin - bMin`                    | JS (Number comparison trick) | < 0 → a trước, > 0 → b trước       |
// ========================================================================================================

// 1️⃣ Copy mảng questionsData
// 2️⃣ Dùng sort() để so sánh từng group
// 3️⃣ Trong mỗi group:
//      Lấy tất cả orderNumber
//      Tìm số nhỏ nhất
// 4️⃣ So sánh số nhỏ nhất giữa 2 group
// 5️⃣ Group có số nhỏ hơn → đứng trước

 
  return (
    <div className="p-6 flex flex-col gap-10">
      {sortedGroups.map((group, index) => {
        // 1. Sắp xếp câu hỏi bên trong từng nhóm
        const sortedQuestions = [...group.questions].sort((a, b) => a.orderNumber - b.orderNumber);

        // 2. LOGIC FIX: Tính toán dải câu hỏi (ví dụ: lấy từ 27 đến 32)
        const firstQuestionNumber = sortedQuestions[0]?.orderNumber;
        const lastQuestionNumber = sortedQuestions[sortedQuestions.length - 1]?.orderNumber;
        
        // Tạo chuỗi hiển thị: Nếu đầu = cuối thì hiện 1 số, ngược lại hiện "đầu-cuối"
        const questionRange = firstQuestionNumber === lastQuestionNumber 
          ? `${firstQuestionNumber}` 
          : `${firstQuestionNumber}-${lastQuestionNumber}`;

        return (
          <div key={group.id || index} className="animate-fadeIn">
            {/* 3. Truyền questionRange vào title thay vì group.title cũ */}
            <QuestionGroupTitle 
              title={questionRange} 
              description={group.description} 
            />

            {/* 4. Component Nội dung câu hỏi theo dạng (Giữ nguyên) */}
            {group.viewType === "VIEW_MATCHING_INFOMATION_TO_PARAGRAPHS" ? (
              <MatchingTask questions={sortedQuestions} />
            ) : (
              <MultipleChoiceTask questions={sortedQuestions} />
            )}
          </div>
        );
      })}
    </div>
  );
}


// | Bước + Code                                                                                         | Ý nghĩa                                                               |        
// | ----------------------------------------------------------------------------------------------------| --------------------------------------------------------------------- | 
// | Bước 1:{sortedGroups.map((group, index) => {`                                                       | Lặp qua từng group trong mảng sortedGroups để render UI               |         
// | Bước 2:const sortedQuestions = [...group.questions].sort((a, b) => a.orderNumber - b.orderNumber);  | Với mỗi group: copy mảng câu hỏi và sắp xếp tăng dần theo orderNumber |                         
// | Bước 3:return (` (bên trong map)                                                                    | Với mỗi group, trả về một khối UI riêng                               |                                               
// | Bước 4:<div key={group.id                                                                           | Tạo div cho từng group; `key` giúp React quản lý danh sách                                                                 
// | Bước 5:{group.viewType === "VIEW_MATCHING_INFOMATION_TO_PARAGRAPHS" ? (                             | Kiểm tra loại câu hỏi của group                                       |                                                    
                                                
