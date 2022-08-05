import React, { useState, useEffect } from 'react'
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@mui/material'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import { commerce } from '../../../lib/commerce'
import { Link, useNavigate } from 'react-router-dom'

const steps = ['Shipping address', 'Payment details']

export default function Checkout( {cart,  order, handleCaptureCheckout, error}) {
  const [activeStep, setActiveStep] = useState(0)
  const [checkoutToken, setCheckoutToken] = useState(null)
  const [shippingData, setShippingData] = useState({})
  let navigate = useNavigate()

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateTokenFrom('cart', cart.id)

        console.log('this is the token')
        console.log(token)
        setCheckoutToken(token)
      } catch (error){
        console.log(error)
        if (activeStep !== steps.length) navigate('/')
      }
    }

    generateToken()
  
  }, [cart, activeStep, navigate])

  const nextStep = () => setActiveStep((prevActiveState) => prevActiveState + 1)
  const backStep = () => setActiveStep((prevActiveState) => prevActiveState - 1)

  const next = (data) => {
    setShippingData(data)

    nextStep()
  }

  let Confirmation = () => order.customer ?  (
    <>
      <div>
        <Typography variant='h5'>Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}</Typography>
        <Divider style={{margin: '20px 0px'}}/>
        <Typography variant='subtitle2'>Order ref: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button'>Back to home</Button>
    </>
  ) : (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress />
    </div>
  )

  if (error) {
    <>
      <Typography variant='h5'>Error: {error}</Typography>
      <br />
      <Button component={Link} to='/' variant='outlined' type='button'>Back to home</Button>
    </>
  }

  const Form = () => activeStep === 0
  ? <AddressForm checkoutToken={checkoutToken} next={next}/>
  : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} backStep={backStep} nextStep={nextStep} handleCaptureCheckout={handleCaptureCheckout}/>

  return (
    <>
    <CssBaseline />
      <div style={{marginTop: '90px'}}/>
      <main style={{marginTop: '5%', width: 'auto', marginLeft: '25%', marginRight: '25%'}}>
        <Paper style={{marginTop: '24px', marginBottom: '24px', padding: '16px'}}>
          <Typography variant='h4' align='center'>Checkout</Typography>
          <Stepper activeStep={activeStep} style={{padding: '24px'}}>
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
