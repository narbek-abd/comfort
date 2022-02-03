import React from 'react';
import GlobalStyle from './globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages';

function App() {
  return (
    <div className="App">
     <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
