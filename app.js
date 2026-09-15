const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const lockOverlay = document.querySelector('#lock-overlay');
function checkAuth() {
    const isLoggedIn = localStorage.getItem('loggedIn') === 'true';
    if (lockOverlay) {
        lockOverlay.style.display = isLoggedIn ? 'none' : 'flex';
    }
}

checkAuth();
  const loginForm = document.querySelector('#login-form');
        const loginMessage = document.querySelector('#login-message');

        if (localStorage.getItem('loggedIn') === 'true') {
            window.location.href = 'index.html';
        }

        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.querySelector('#login-email').value.trim();
            const password = document.querySelector('#login-password').value;

            if (email === 'user@example.com' && password === 'password123') {
                localStorage.setItem('loggedIn', 'true');
                loginMessage.textContent = 'Login successful! Redirecting...';
                loginMessage.style.color = '#34d399';
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 800);
            } else {
                loginMessage.textContent = 'Invalid credentials. Use user@example.com / password123';
                loginMessage.style.color = '#f87171';
            }
        });



