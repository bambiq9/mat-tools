import { Route, Routes, useLocation } from "react-router-dom";
import { Register } from "@pages/Register";
import { Login } from "@pages/Login";
import { Box, Button } from "@mui/material";
import { useDispatch } from "@services/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { getUser, logoutUser } from "@services/userSlice";
import { Header } from "@components/Header";

function App() {
  const location = useLocation();
  const background = location.state?.background;
  const auth = getAuth();

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(getUser(user.uid));
    });
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header />
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
        <Route path="scheme-list" element={null} />
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
    </Box>
  );
}

export default App;
