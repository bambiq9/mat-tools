import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Register } from "@pages/Register";
import { Login } from "@pages/Login";
import { Box, Button, Modal } from "@mui/material";
import { useDispatch } from "@services/store";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { getUser, logoutUser } from "@services/userSlice";
import { Header } from "@components/Header";
import { ProtectedRoute } from "@components/ProtectedRoute";
import { SchemeList } from "@pages/SchemeList";
import { AssemblyUnitPartCard } from "@components/AssemblyUnitPartCard";

function App() {
  const location = useLocation();
  const background = location.state?.background;
  const auth = getAuth();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) dispatch(getUser(user.uid));
    });
  }, []);

  const [modalOpen, setModalOpen] = useState(true);
  const modalCloseHandler = () => {
    navigate(-1);
    setModalOpen(false);
  };

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
        <Route
          path="register"
          element={
            <ProtectedRoute isUnAuthOnly>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route
          path="login"
          element={
            <ProtectedRoute isUnAuthOnly>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="insulation" element={null}>
          <Route path="list" element={null}>
            <Route path="compare" element={null} />
          </Route>
          <Route path="calc" element={null} />
          <Route path="stats" element={null} />
        </Route>
        <Route path="scheme-list" element={<SchemeList />} />
        <Route path="filter" element={null} />
        <Route path="sets" element={null} />
        <Route path="*" element={null} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/insulation/list/:id" element={null} />
          <Route path="/insulation/list/:id/edit" element={null} />
          <Route
            path="/scheme-list/part/:id"
            element={
              <Modal open={true} onClose={modalCloseHandler}>
                <AssemblyUnitPartCard />
              </Modal>
            }
          />
        </Routes>
      )}
    </Box>
  );
}

export default App;
