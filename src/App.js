import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Doar from "./components/pages/Doar";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doar" element={<Doar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
