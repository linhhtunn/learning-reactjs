export default function ReadingTitle({ title }) {
  return (
    <div className="py-8 px-4 text-center">
      <h1 className="text-lg font-bold text-gray-800 leading-tight">
        {title || "--"}
      </h1>
    </div>
  );
}