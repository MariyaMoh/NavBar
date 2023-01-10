import './App.css';
import Sidebar from './components/SideMenu/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { FixedNav } from './components/fixedNav/FixedNav';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Navbar />
        {/* <FixedNav /> */}

        <Routes>
          <Route path="/overview" exact component={Overview} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
