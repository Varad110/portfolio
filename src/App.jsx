import "./App.css";
import SplashCursor from "./component/SplashCursor";
import { Header, Hero, About, Project, Contact } from "./component/index.js";
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from "@vercel/speed-insights/next";
function App() {
  return (
    <>
      <div className=" scroll-smooth">
        <Header activePage={"Home"} />

        <SplashCursor
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

        <main className=" scroll-smooth relative top-0 z-10 mx-auto flex min-h-100 w-full max-w-8xl flex-col gap-24 py-12 px-5  text-white ">
          <Hero />
          <About />
          <Project />
          <Contact />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            theme="dark"
          />
        </main>
        <SpeedInsights />
      </div>
    </>
  );
}

export default App;
