import React, { useState, useEffect } from 'react';
import DoctorService from '../services/DoctorService';

function DoctorList() {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);    

    useEffect(() => {
        DoctorService.getDoctors()
            .then((res) => {
                setDoctors(res.data);
                setLoading(false);  
            })
            .catch((err) => {
                setError('Erreur lors du chargement des docteurs');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Doctors</h2>
            <ul>
                {doctors.map(doctor => (
                    <li key={doctor.id}>
                        {doctor.name} - {doctor.specialization}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DoctorList;
