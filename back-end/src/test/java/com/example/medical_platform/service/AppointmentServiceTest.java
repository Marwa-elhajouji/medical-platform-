package com.example.medical_platform.service;

import com.example.medical_platform.model.Appointment;
import com.example.medical_platform.repository.AppointmentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class AppointmentServiceTest {

    @Mock
    private AppointmentRepository appointmentRepository;

    @InjectMocks
    private AppointmentService appointmentService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldReturnAllAppointments() {
        List<Appointment> mockAppointments = new ArrayList<>();
        mockAppointments.add(new Appointment());
        when(appointmentRepository.findAll()).thenReturn(mockAppointments);

        List<Appointment> result = appointmentService.getAllAppointments();
        assertEquals(1, result.size());
    }

    @Test
    void shouldSaveAppointment() {
        Appointment appointment = new Appointment();
        when(appointmentRepository.save(appointment)).thenReturn(appointment);

        Appointment result = appointmentService.saveAppointment(appointment);
        assertEquals(appointment, result);
    }

    @Test
    void shouldDeleteAppointment() {
        String appointmentId = "test-id";
        appointmentService.deleteAppointment(appointmentId);
        verify(appointmentRepository, times(1)).deleteById(appointmentId);
    }
}
