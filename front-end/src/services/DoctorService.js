import axios from 'axios';

const DOCTOR_API_BASE_URL = "/api/doctors";

class DoctorService {
    getDoctors() {
        return axios.get(DOCTOR_API_BASE_URL);
    }

    createDoctor(doctor) {
        return axios.post(DOCTOR_API_BASE_URL, doctor);
    }
}

const instance = new DoctorService();
export default instance;
