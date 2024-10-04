import axios from 'axios';

const APPOINTMENT_API_BASE_URL = "/api/appointments";

class AppointmentService {
    getAppointments() {
        return axios.get(APPOINTMENT_API_BASE_URL);
    }

    createAppointment(appointment) {
        return axios.post(APPOINTMENT_API_BASE_URL, appointment);
    }
}

const instance = new AppointmentService();
export default instance;
