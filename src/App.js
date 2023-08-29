import Enroll from "./Components/Enroll";
import Navbar from "./Components/Navbar";
import Newsection from "./Components/Newsection";
import Newsection1 from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Together from "./Components/Together";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Newsection />} />
          <Route path="/Home/Enroll" element={<Enroll />} />
          <Route path="/newsection1" element={<Newsection1 />} />
          <Route path="/work" element={<Together />} />
          <Route path="/login" element={<Login />}/>

        </Routes>
        < Footer className="sticky bottom-0" />
      </Router >
    </>
  );
}

export default App;