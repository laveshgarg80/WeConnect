import { useState } from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Container,
  Paper,
  LinearProgress
} from '@mui/material';

const steps = [
  'Welcome',
  'Import Profile',
  'Skills & Interests',
  'Privacy Settings',
  'Review'
];

const Onboarding = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => {
      const nextStep = prevStep + 1;
      setProgress((nextStep / (steps.length - 1)) * 100);
      return nextStep;
    });
  };

  const handleBack = () => {
    setActiveStep((prevStep) => {
      const nextStep = prevStep - 1;
      setProgress((nextStep / (steps.length - 1)) * 100);
      return nextStep;
    });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h4" gutterBottom>
              Welcome to Professional Network
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Let's set up your professional profile
            </Typography>
          </Box>
        );
      case 1:
        return (
          <Box sx={{ py: 4 }}>
            <Typography variant="h6" gutterBottom>
              Import your existing profile
            </Typography>
            <Button variant="outlined" sx={{ mr: 2 }}>
              Import from LinkedIn
            </Button>
            <Button variant="outlined">
              Import from Indeed
            </Button>
          </Box>
        );
      case 2:
        return (
          <Box sx={{ py: 4 }}>
            <Typography variant="h6" gutterBottom>
              Select your skills and interests
            </Typography>
            {/* Skills and interests selection will be implemented here */}
          </Box>
        );
      case 3:
        return (
          <Box sx={{ py: 4 }}>
            <Typography variant="h6" gutterBottom>
              Privacy Settings
            </Typography>
            {/* Privacy settings configuration will be implemented here */}
          </Box>
        );
      case 4:
        return (
          <Box sx={{ py: 4 }}>
            <Typography variant="h6" gutterBottom>
              Review Your Profile
            </Typography>
            {/* Profile review will be implemented here */}
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ mb: 4 }}
        />
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ mt: 4 }}>
          {activeStep === steps.length ? (
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                All steps completed!
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="/#/home"
                sx={{ mt: 2 }}
              >
                Go to Dashboard
              </Button>
            </Box>
          ) : (
            <>
              {renderStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4 }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Paper>
    </Container>
  );
};

export default Onboarding;