package com.example.medical_platform.repository;

import com.example.medical_platform.model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient, String> {
}


