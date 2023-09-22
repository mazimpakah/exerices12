import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Route, Routes, Navigate } from "react-router-dom";
import { configureStore } from "./store/configureStore";
import Layout from './components/layout';
import { Login } from './pages/auth';
import NavigationRoutes from './Routes';
const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<Layout routes={NavigationRoutes} />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
