import React, { useState } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'

const steps = ['Shipping address', 'Payment details']

export default function Checkout() {
  const [activrStep, setActiveStep] = useState(0)
  return (
    <>
      <div className={styles.toolbar}/>
      <main className={styles.layout}>
        <Paper className={styles.paper}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={activrStep} className={styles.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </main>
    </>
  )
}
