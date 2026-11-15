import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Sidebar from './components/sidebar/Sidebar'
import Calendar from './components/calendar/Calendar';
import Recipes from './components/recipes/Recipes';
import Shopping from './components/shopping/Shopping';

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/about" element={<Recipes />} />
          <Route path="/contact" element={<Shopping />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
