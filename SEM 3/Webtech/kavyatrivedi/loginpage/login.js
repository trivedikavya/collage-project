const canvas = document.getElementById('captcha-canvas');
    const ctx = canvas.getContext('2d');
    let captchaText = '';

    function generateCaptcha() {
      // Clear previous CAPTCHA
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Generate random text (6 characters: letters and numbers)
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      captchaText = Array.from({ length: 6 })
        .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
        .join('');

      // Add background color
      ctx.fillStyle = '#add8e6'; // Light blue
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw the text with distortion
      ctx.font = '30px Arial';
      ctx.fillStyle = '#000080'; // Dark blue
      for (let i = 0; i < captchaText.length; i++) {
        const x = 30 + i * 40;
        const y = 50 + Math.random() * 20; // Slightly randomize the vertical position
        const angle = (Math.random() - 0.5) * 0.4; // Random rotation
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillText(captchaText[i], 0, 0);
        ctx.restore();
      }

      // Add random lines for extra distortion
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.strokeStyle = '#000080'; // Dark blue
        ctx.lineWidth = 2;
        ctx.stroke();
      }
    }

    function verifyCaptcha() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const userInput = document.getElementById('captcha-input').value;
      const result = document.getElementById('result');

      if (!username || !password || !userInput) {
        result.textContent = 'Please fill in all fields.';
        result.style.color = 'red';
        return;
      }

      if (userInput === captchaText) {
        result.textContent = 'CAPTCHA verified successfully!';
        result.style.color = 'green';
        setTimeout(() => {
          window.location.href = '/jeet/mainpage/mainpage.html'; // Redirect to main.html
        }, 1000);
      } else {
        result.textContent = 'CAPTCHA verification failed. Try again.';
        result.style.color = 'red';
        generateCaptcha(); // Regenerate CAPTCHA on failure
      }
    }

    function redirectToMain() {
      window.location.href = '/jeet/mainpage/mainpage.html'; // Redirect to main.html
    }

    // Generate CAPTCHA on page load
    window.onload = generateCaptcha;