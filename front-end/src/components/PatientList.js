import React, { useState, useEffect } from 'react';
import PatientService from '../services/PatientService';

function PatientList() {
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);   

    useEffect(() => {
        PatientService.getPatients()
            .then((res) => {
                setPatients(res.data);
                setLoading(false);  
            })
            .catch((err) => {
                setError('Erreur lors du chargement des patients');
                setLoading(false);
            });
    }, []);

   
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Patients</h2>
            <ul>
                {patients.map(patient => (
                    <li key={patient.id}>
                        {patient.name} - {patient.email}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PatientList;
