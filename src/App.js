import './App.css';
import { Route, Routes } from 'react-router';
import Sample from './screens/sample/Sample';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sample />} />
    </Routes>
  );
}

export default App;
