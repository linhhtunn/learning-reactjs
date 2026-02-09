export default function QuickAction({ icon, label }) {
  return (
    <div className="flex flex-col items-center cursor-pointer hover:text-blue-500">
      <div className="text-3xl">{icon}</div>
      <p className="mt-2 text-sm text-center">{label}</p>
    </div>
  );
}
