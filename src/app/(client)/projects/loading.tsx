import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md border border-border rounded-xl overflow-hidden">
        <div className="bg-card p-8 flex flex-col items-center gap-3">
          <div className="w-14 h-14 bg-title-secondary rounded-full flex items-center justify-center">
            <Loader2 size={28} className="text-title animate-spin" />
          </div>
          <h5>Loading...</h5>
          <p className="text-sm text-center">
            Please wait while we fetch your content.
          </p>
        </div>
      </div>
    </section>
  );
}
