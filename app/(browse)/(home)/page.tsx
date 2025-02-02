import { Suspense } from "react";
import { Results, ResultSkeleton } from "./_components/results";

export default function Page() {
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultSkeleton />}>
        <Results />
      </Suspense>
    </div>
  );
}
