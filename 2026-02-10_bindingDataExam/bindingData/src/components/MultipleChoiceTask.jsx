export default function MultipleChoiceTask({ questions }) {
  return (
    <div className="space-y-8">
      {questions.map((q) => (
        <div key={q.id} className="question-item">
          <div className="flex gap-2 mb-3">
            <span className="font-bold text-blue-600">{q.orderNumber}.</span>
            <div className="font-medium text-red-800" dangerouslySetInnerHTML={{ __html: q.title }} />
          </div>
          
          <div className="grid gap-3 ml-7">
            {q.attributeMap.map((option) => (
              <label key={option.attributeName} className="flex items-start gap-3 p-3 border rounded-lg hover:border-blue-400 hover:bg-blue-50 cursor-pointer group transition-all">
                <input 
                  type="radio" 
                  name={`q-${q.id}`} 
                  className="mt-1 w-4 h-4 accent-blue-600"
                />
                <span className="text-gray-700">
                  <span className="font-bold mr-1">{option.attributeName}.</span>
                  {option.attributeValue}
                </span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}