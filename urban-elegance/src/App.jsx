import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";

import Store from "./components/store/Store";
import FormsLogin from "./components/formsfirebase/FormsLogin";
import FormRegister from "./components/formsfirebase/FormRegister";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<FormsLogin />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
