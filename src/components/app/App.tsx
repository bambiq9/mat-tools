import { Route, Routes, useLocation } from "react-router-dom";
import { Register } from "@pages/Register";
import "./App.css";
import { Login } from "@pages/Login";
import { Button } from "@mui/material";
import { useDispatch } from "@services/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { getUser, logoutUser } from "@services/userSlice";

function App() {
  const location = useLocation();
  const background = location.state?.background;

  const [authState, setAuthState] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState(true);
        dispatch(getUser(user.uid));
      } else {
        setAuthState(false);
      }
    });
  }, []);

  const dispatch = useDispatch();

  const logoutHandler = () => dispatch(logoutUser());

  return (
    <div>
      <span>{authState ? "Signed in" : "Signed out"}</span>
      <Button onClick={logoutHandler}>Logout</Button>
      <Routes location={background || location}>
        {/* <Route path="/" element={<App />} /> */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
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
