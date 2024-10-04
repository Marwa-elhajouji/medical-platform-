import React from 'react';
import { Button, Container, Typography } from '@mui/material';

function Home() {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Welcome to our Medical Platform
            </Typography>
            <Typography variant="body1" gutterBottom>
                This application allows you to manage patients, doctors, and appointments.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Select an option from the navigation menu to get started.
            </Typography>
            <Button variant="contained" color="primary" href="/patients">
                View Patients
            </Button>
        </Container>
    );
}

export default Home;
