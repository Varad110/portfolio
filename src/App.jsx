import "./App.css";
import SplashCursor from "./component/SplashCursor";
import { Hero, Header } from "./component/index.js";
function App() {
  return (
    <>
      <div className=" scroll-smooth">
        <Header />

        <SplashCursor
          DENSITY_DISSIPATION={4}
          VELOCITY_DISSIPATION={4}
          PRESSURE={0.1}
          CURL={10}
          SPLAT_RADIUS={0.1}
          SPLAT_FORCE={3000}
          COLOR_UPDATE_SPEED={11}
          SHADING
          RAINBOW_MODE
          COLOR="#A855F7"
        />

        <main className=" scroll-smooth relative top-0 z-10 mx-auto flex min-h-100 w-full max-w-6xl flex-col gap-24 px-6  text-white sm:px-10 lg:px-12">
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;
