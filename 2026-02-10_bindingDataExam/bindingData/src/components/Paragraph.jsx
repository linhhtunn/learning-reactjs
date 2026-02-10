export default function Paragraph({ letter, content }) {
  return (
    <div className="flex gap-4 mb-5 text-[15px] leading-relaxed text-gray-800">
      <span className="font-bold min-w-5">{letter}</span>
      <p className="text-justify flex-1">{content}</p>
    </div>
  );
}