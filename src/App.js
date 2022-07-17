import { AuthProvider } from './hooks/context/auth'
import Navbar from "./component/Navbar";
import RequireAuth from './component/RequireAuth'
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Browse from "./pages/Browse";
import AnimeDetail from "./pages/animeDetail";
import About from "./pages/About";
import CollectionContextProvider from './hooks/context/CollectionContext';
import Collection from "./pages/Collection";
import Login from './pages/Login';


function App() {
  return (
    <AuthProvider>
      <CollectionContextProvider>
        <Router>
          <Navbar />
          <div className="pt-[80px]">
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/browse' exact element={<Browse />} />
              <Route path='/about' exact element={<About />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/collection' exact element={
                <RequireAuth>
                  <Collection />
                </RequireAuth>
              } />
              <Route path='/anime/:id' exact element={<AnimeDetail />} />
            </Routes>
          </div>
        </Router>
      </CollectionContextProvider>
    </AuthProvider>

  );
}

export default App;
