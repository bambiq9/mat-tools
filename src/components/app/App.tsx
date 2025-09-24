import { Route, Routes, useLocation } from "react-router-dom";
import { Register } from "@pages/Register/Register";
import "./App.css";

function App() {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<App />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={null} />
        <Route path="insulation" element={null}>
          <Route path="list" element={null}>
            <Route path="compare" element={null} />
          </Route>
          <Route path="calc" element={null} />
          <Route path="stats" element={null} />
        </Route>
        <Route path="filter" element={null} />
        <Route path="sets" element={null} />
        <Route path="*" element={null} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/insulation/list/:id" element={null} />
          <Route path="/insulation/list/:id/edit" element={null} />
        </Routes>
      )}
    </div>
  );
}

export default App;
