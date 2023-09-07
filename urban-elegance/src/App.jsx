import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import FormsLogin from "./components/formsfirebase/FormsLogin";
import FormRegister from "./components/formsfirebase/FormRegister";
import Create from "./components/admin/Create";

import { useAuth } from "./context/AuthContext";
import Detail from "./components/detail/Detail";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<FormsLogin />} />
      <Route path="/register" element={<FormRegister />} />

      <Route
        path="/store"
        element={user ? <Store /> : <Navigate to="/login" />}
      />

      <Route
        path="/detail/:id"
        element={user ? <Detail /> : <Navigate to="/login" />}
      />

      <Route
        path="/create"
        element={user ? <Create /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
