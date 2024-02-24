const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const users = new Map();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
  const { email, otp } = req.body;
  

  const storedOTP = users.get(email);
  if (storedOTP && storedOTP === otp) {
    users.delete(email);
    res.status(200).json({ message: `Login successful. Welcome, ${email}!` });
  } else {
    res.status(401).json({ error: 'Invalid OTP. Please try again.' });
  }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));



