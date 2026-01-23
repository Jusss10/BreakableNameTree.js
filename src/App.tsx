import "./App.css";
import { Suspense, lazy, useState } from "react";
import RoomMakerLanding from "./components/RoomMakerLanding";

const MainApp = lazy(() => import("./components/MainApp"));

function App() {
  const [hasStarted, setHasStarted] = useState(false);
  return (
    <>
      {!hasStarted ? (
        <RoomMakerLanding onStart={() => setHasStarted(true)} />
      ) : (
        <Suspense fallback={<div>Loading 3D Room...</div>}>
          <MainApp />
        </Suspense>
      )}
    </>
  );
}

export default App;
