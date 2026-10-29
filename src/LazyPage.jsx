import { Suspense } from "react";

function LazyPage({ children }) {
  return <Suspense fallback={null}>{children}</Suspense>;
}

export default LazyPage;
