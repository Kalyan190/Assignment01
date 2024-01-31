// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import ShowDetails from './components/Summary';
import BookingForm from './components/BookingForm';// Import the new component
import ConfirmationPage from './components/ConfirmationPage';
import Error from './Error';
import './App.css'



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/show/:id" element={<ShowDetails/>} />
        <Route path="/book/:id" element={<BookingForm/>} />
        <Route path="/confirmation" element={<ConfirmationPage/>} />
        <Route path='*' element={<Error/>} />
        
      </Routes>
    </Router>
  );
}

export default App;
