import "./App.css";
import { Suspense, lazy, useState } from "react";
import { Leva } from "leva";
//import RoomMakerLanding from "./components/RoomMakerLanding";
import LittleTown from "./components/ThreeProject/LittleTown";

const MainApp = lazy(() => import("./components/MainApp"));

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  return (
    <>
      {!hasStarted ? (
        <LittleTown onStart={() => setHasStarted(true)} />
      ) : (
        <Suspense fallback={<div>Loading 3D Room...</div>}>
          <>
            <MainApp />
            <Leva collapsed />
          </>
        </Suspense>
      )}
    </>
  );
}

export default App;
