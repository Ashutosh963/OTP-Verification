document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;
    

    setTimeout(function() {
      const message = `Login successful. Welcome, ${email}!`;
      document.getElementById('message').innerText = message;
    }, 1000); 
  });
  