export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#0a0a0b] flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-[#27272a] border-t-[#6366f1] rounded-full animate-spin mb-4 mx-auto" />
        <p className="text-[#71717a] text-sm">Loading...</p>
      </div>
    </div>
  );
}
