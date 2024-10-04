import axios from 'axios';

const PATIENT_API_BASE_URL = "/api/patients";

class PatientService {
    getPatients() {
        return axios.get(PATIENT_API_BASE_URL);
    }

    createPatient(patient) {
        return axios.post(PATIENT_API_BASE_URL, patient);
    }
}

const instance = new PatientService();
export default instance;
