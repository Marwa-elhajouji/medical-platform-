package com.example.medical_platform.service;

import com.example.medical_platform.model.Doctor;
import com.example.medical_platform.repository.DoctorRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class DoctorServiceTest {

    @Mock
    private DoctorRepository doctorRepository;

    @InjectMocks
    private DoctorService doctorService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldReturnAllDoctors() {
        List<Doctor> mockDoctors = new ArrayList<>();
        mockDoctors.add(new Doctor());
        when(doctorRepository.findAll()).thenReturn(mockDoctors);

        List<Doctor> result = doctorService.getAllDoctors();
        assertEquals(1, result.size());
    }

    @Test
    void shouldSaveDoctor() {
        Doctor doctor = new Doctor();
        when(doctorRepository.save(doctor)).thenReturn(doctor);

        Doctor result = doctorService.saveDoctor(doctor);
        assertEquals(doctor, result);
    }
}
