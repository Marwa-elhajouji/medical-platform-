import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import PatientList from './components/PatientList';
import DoctorList from './components/DoctorList';
import AppointmentList from './components/AppointmentList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hospital Bed Management</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/patients">Patients</Link></li>
                        <li><Link to="/doctors">Doctors</Link></li>
                        <li><Link to="/appointments">Appointments</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/patients" element={<PatientList />} />
                    <Route path="/doctors" element={<DoctorList />} />
                    <Route path="/appointments" element={<AppointmentList />} />
                </Routes>
            </header>
        </div>
    );
}

export default App;
