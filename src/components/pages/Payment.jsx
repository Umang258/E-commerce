// src/components/PaymentOptions.jsx

import React, { useState } from 'react';
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import GPayIcon from '@mui/icons-material/Payment'; // Replace with the appropriate icon
import CODIcon from '@mui/icons-material/LocalAtm'; // Replace with the appropriate icon
import PhonePeIcon from '@mui/icons-material/PhoneAndroid'; // Replace with the appropriate icon

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('googlePay');
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('@okhdfcbank');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };
  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  return (
    <Box sx={{ maxWidth: 400, margin: '0 auto', p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Recommended Payment Options
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="payment method"
          name="paymentMethod"
          value={paymentMethod}
          onChange={handlePaymentChange}
        >
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <FormControlLabel
                value="googlePay"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <Typography>Google Pay</Typography>
                    <Box component="span" sx={{ ml: 1, color: 'green' }}>
                      1 Offer
                    </Box>
                    <GPayIcon sx={{ ml: 'auto', color: 'grey.500' }} />
                  </Box>
                }
              />
              {paymentMethod === 'googlePay' && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    label="Enter UPI ID here"
                    variant="outlined"
                    fullWidth
                    value={upiId}
                    onChange={handleUpiIdChange}
                    sx={{ mb: 2 }}
                  />
                  <Select
                    value={selectedBank}
                    onChange={handleBankChange}
                    fullWidth
                  >
                    <MenuItem value="@okhdfcbank">@okhdfcbank</MenuItem>
                    <MenuItem value="@okicici">@okicici</MenuItem>
                    <MenuItem value="@okaxis">@okaxis</MenuItem>
                    <MenuItem value="@oksbi">@oksbi</MenuItem>
                  </Select>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 2 }}>
                    Cashback up to ₹250. On First RuPay Credit Card transactions of ₹500 and above. TCA
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    PAY NOW
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <FormControlLabel
                value="cashOnDelivery"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <Typography>Cash on Delivery (Cash/UPI)</Typography>
                    <CODIcon sx={{ ml: 'auto', color: 'grey.500' }} />
                  </Box>
                }
              />
                {paymentMethod === 'cashOnDelivery' && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    You can pay via Cash/UPI on delivery.
                  </Typography>
                  <Button variant="contained" color="secondary" fullWidth sx={{ backgroundColor: '#ff4081' }}>
                    PLACE ORDER
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <FormControlLabel
                value="phonePe"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <Typography>PhonePe</Typography>
                    <PhonePeIcon sx={{ ml: 'auto', color: 'grey.500' }} />
                  </Box>
                }
              />
            </CardContent>
          </Card>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default Payment;
