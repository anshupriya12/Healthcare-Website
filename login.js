// // login.html
// document.querySelector('form').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
  
//     try {
//       const response = await fetch('/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, password })
//       });
  
//       if (response.ok) {
//         alert('Login successful!');
//       } else {
//         const { error } = await response.json();
//         alert(`Login failed: ${error}`);
//       }
//     } catch (err) {
//       alert('Error logging in');
//     }
//   });


document.querySelector('form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (!username || !password) {
      alert('Please enter both username and password.');
      return;
  }

  try {
      const response = await fetch('/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
      });

      if (response.ok) {
          alert('Login successful!');
      } else {
          let errorMessage;
          if (response.status === 401) {
              errorMessage = 'Invalid username or password.';
          } else {
              const { error } = await response.json();
              errorMessage = error || 'Login failed.';
          }
          alert(`Login failed: ${errorMessage}`);
      }
  } catch (err) {
      alert('Error logging in. Please try again later.');
  }
});
