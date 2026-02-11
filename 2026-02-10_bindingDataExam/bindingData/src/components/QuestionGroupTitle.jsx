export default function QuestionGroupTitle({ title, description }) {
  return (
    <div className="mb-6 bg-blue-50 p-4 rounded-md border-l-4 border-blue-500">
      <h3 className="font-extrabold text-gray-800 text-lg uppercase">
        Questions {title}
      </h3>
      <div 
        className="text-gray-600 italic mt-1 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}