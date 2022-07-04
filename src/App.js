import Navbar from "./component/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from "./pages/Browse";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-[80px]">
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/browse' exact element={<Browse />} />
        </Routes>
        </div>
      </Router>

    </>

  );
}

export default App;
