// // signup.html
// document.querySelector('form').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
  
//     try {
//       const response = await fetch('/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ username, email, password })
//       });
  
//       if (response.ok) {
//         alert('Signup successful!');
//       } else {
//         const { error } = await response.json();
//         alert(`Signup failed: ${error}`);
//       }
//     } catch (err) {
//       alert('Error signing up');
//     }
//   });

document.getElementById('signup-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('/signup', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, email, password })
      });

      if (response.ok) {
          alert('Signup successful!');
          window.location.href = '/'; // Redirect to homepage after signup
      } else {
          const { error } = await response.json();
          alert(`Signup failed: ${error}`);
      }
  } catch (err) {
      alert('Error signing up');
  }
});
