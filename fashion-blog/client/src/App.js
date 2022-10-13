
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Posts from './components/Posts';
import Details from './components/Details';
import Contact from './components/Contact';

function App() {
  return (
    <BrowserRouter className="App">
      <Routes >
        <Route path='/' element={<Layout />}>
        <Route path='/posts' element={<Posts />} />
          <Route path='/posts/:id' element={<Details />} />
          <Route path='/contact' element={<Contact />} />
          <Route index element={<Home/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
