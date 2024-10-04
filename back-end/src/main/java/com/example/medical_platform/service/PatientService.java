package com.example.medical_platform.service;

import com.example.medical_platform.model.Patient;
import com.example.medical_platform.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;




@Service
public class PatientService {

    private final PatientRepository patientRepository;

    public PatientService(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }
}