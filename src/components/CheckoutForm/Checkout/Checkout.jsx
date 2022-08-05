import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@mui/material'
import styles from '../../../assets/css/checkout.module.css'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce'

const steps = ['Shipping address', 'Payment details']

export default function Checkout( {cart}) {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateTokenFrom('cart', cart.id)

        console.log('is this firing?')
        console.log(token)
        setCheckoutToken(token)
      } catch (error){
        // if (activeStep !== steps.length) history.push('/');
      }
    }

    generateToken()
  
  }, [cart])

  console.log(checkoutToken)

  const Confirmation = () => (
    <div>Confimation</div>
  )

  const Form = () => activeStep === 0
  ? <AddressForm checkoutToken={checkoutToken}/>
  : <PaymentForm />

  return (
    <>
      <div className={styles.toolbar}/>
      <main className={styles.layout}>
        <Paper className={styles.paper}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={activeStep} className={styles.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  )
}
