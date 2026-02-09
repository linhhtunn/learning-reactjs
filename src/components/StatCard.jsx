export default function StatCard({ color, number, label }) {
  return (
    <div className={`rounded p-5 text-white ${color}`}>
      <h1 className="text-3xl font-bold">{number}</h1>
      <p className="mt-1">{label}</p>
      <button className="mt-3 text-sm bg-white/20 px-3 py-1 rounded">
        Xem thêm →
      </button>
    </div>
  );
}
