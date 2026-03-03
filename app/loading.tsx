export default function Loading() {
  return (
    <div className="fixed inset-0 bg-bg-primary flex items-center justify-center z-50">
      <div className="text-center">
        <div className="w-12 h-12 border-2 border-border border-t-accent rounded-full animate-spin mb-4 mx-auto" />
        <p className="text-text-muted text-sm font-medium tracking-widest uppercase text-[10px]">Loading</p>
      </div>
    </div>
  );
}
