import React, { useState, useEffect } from 'react';
import AppointmentService from '../services/AppointmentService';

function AppointmentList() {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);    

    useEffect(() => {
        AppointmentService.getAppointments()
            .then((res) => {
                setAppointments(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Erreur lors du chargement des rendez-vous');
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Appointments</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        {appointment.patient.name} with {appointment.doctor.name} at {appointment.appointmentTime}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AppointmentList;
