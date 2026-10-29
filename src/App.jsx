import {
  Header,
  Hero,
  About,
  Project,
  Contact,
  Certificate,
} from "./component/index.js";
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { lazy, Suspense, useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

const SplashCursor = lazy(() => import("./component/SplashCursor.jsx"));

function DeferredSplashCursor() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(min-width: 768px) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    if (!mediaQuery.matches) return;

    const enable = () => setEnabled(true);
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(enable, { timeout: 2000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(enable, 1500);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!enabled) return null;

  return (
    <Suspense fallback={null}>
      <SplashCursor
        DYE_RESOLUTION={720}
        PRESSURE_ITERATIONS={10}
        DENSITY_DISSIPATION={4}
        VELOCITY_DISSIPATION={4}
        PRESSURE={0.1}
        CURL={1}
        SPLAT_RADIUS={0.1}
        SPLAT_FORCE={3000}
        COLOR_UPDATE_SPEED={11}
        SHADING
        RAINBOW_MODE
        COLOR="#A855F7"
      />
    </Suspense>
  );
}

function App() {
  return (
    <>
      <div className=" scroll-smooth">
        <Header activePage={"Home"} />

        <DeferredSplashCursor />

        <main className=" scroll-smooth relative top-0 z-10 mx-auto flex min-h-100 w-full max-w-8xl flex-col gap-24 py-12 px-5  text-white ">
          <Hero />
          <About />
          <Certificate />
          <Project />
          <Contact />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            theme="dark"
          />
        </main>
        <SpeedInsights />
        <Analytics />
      </div>
      <Analytics />
    </>
  );
}

export default App;
