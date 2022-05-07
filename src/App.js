import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Scan from './components/Scan';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Scan />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
