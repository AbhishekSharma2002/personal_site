import Enroll from "./Components/Enroll";
import Navbar from "./Components/Navbar";
import Newsection from "./Components/Newsection";
import Newsection1 from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Route path="/login" element={<Login />} />

        </Routes>

        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-center text-2xl font-bold mb-8 mt-2">Manage Your Todo</h1>
            <div className="mb-4">
              {/* Todo form goes here */}
            </div>
            <div className="flex flex-wrap gap-y-3">
              {/* Loop and add Todoitem here */}
            </div>
          </div>
        </div>

        {/* < Footer className="sticky bottom-0" /> */}
      </Router >
    </>
  );
}

export default App;