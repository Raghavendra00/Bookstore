import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Booklist from "./screens/Booklist";
import Home from "./screens/Home";

// import login from "./screens/Login";
import Login from "./screens/Login";
import Output from "./screens/Output";
import Search from "./screens/Search";
import Sign from "./screens/Sign";

function App() {
  return (
    <>
      <Router>
        <Home />
        <br />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<Search />} />
          <Route path="/output/:name" element={<Output />} />
          <Route path="/booklist" element={<Booklist  />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
