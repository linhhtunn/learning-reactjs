export default function Topbar() {
  return (
    <header className="h-12 bg-white shadow px-5 flex items-center justify-between">
      <span className="cursor-pointer">☰</span>

      <div className="flex items-center gap-4 text-sm">
        <span>🇻🇳 Tiếng Việt</span>
        <span>🔔</span>
        <span className="font-medium">Admin System</span>
      </div>
    </header>
  );
}
