package com.example.medical_platform.service;

import com.example.medical_platform.model.Patient;
import com.example.medical_platform.repository.PatientRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PatientServiceTest {

    @Mock
    private PatientRepository patientRepository;

    @InjectMocks
    private PatientService patientService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldReturnAllPatients() {
        List<Patient> mockPatients = new ArrayList<>();
        mockPatients.add(new Patient());
        when(patientRepository.findAll()).thenReturn(mockPatients);

        List<Patient> result = patientService.getAllPatients();
        assertEquals(1, result.size());
    }

    @Test
    void shouldSavePatient() {
        Patient patient = new Patient();
        when(patientRepository.save(patient)).thenReturn(patient);

        Patient result = patientService.savePatient(patient);
        assertEquals(patient, result);
    }
}
