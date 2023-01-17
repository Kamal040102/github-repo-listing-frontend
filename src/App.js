import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Navbar from './Components/Navbar/Navbar.component';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home.page';
import Result from './Pages/Result/Result.page';
import Error from './Pages/Error/Error.page';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/repos/:username' element={<Result />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
