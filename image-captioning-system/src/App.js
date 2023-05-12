import React, { useState } from 'react';
import { Beforeuploadpg } from './pages';
import { Afteruploadpg } from './pages';
import { Login, Homepage } from './pages';
import { Signingup } from './pages';
import { Loader } from './components';
import { Captionstab } from './components';
import { Bettercaption, Bettercaption1, Bettercaption2, Bettercaption3, Errorer, Serverroer, Regularapp, Attentionapp, Nepaliapp } from './components';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<Signingup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Beforeuploadpg />} />
          <Route path="/results" element={<Afteruploadpg />} />
          <Route path="/captiontab" element={<Captionstab />} />
          <Route path="/b1" element={<Bettercaption />} />
          <Route path="/b2" element={<Bettercaption1 />} />
          <Route path="/b3" element={<Bettercaption2 />} />
          <Route path="/b4" element={<Bettercaption3 />} />
          <Route path="/tempError" element={<Errorer />} />
          <Route path="/tempError1" element={<Serverroer />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/regtemp" element={<Regularapp />} />
          <Route path="/attemp" element={<Attentionapp />} />
          <Route path="/neptemp" element={<Nepaliapp />} />

          {/* Catch-all route */}
          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;