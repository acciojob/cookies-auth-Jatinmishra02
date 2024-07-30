//your JS code here. If required.
        document.addEventListener('DOMContentLoaded', () => {
            const form = document.getElementById('form');
            const message = document.getElementById('message');
            const welcome = document.getElementById('welcome');
            const userSpan = document.getElementById('user');
            const loginForm = document.getElementById('login-form');
            const logoutButton = document.getElementById('logout');

            // Helper functions to manage cookies
            function setCookie(name, value, days) {
                let expires = "";
                if (days) {
                    const date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    expires = "; expires=" + date.toUTCString();
                }
                document.cookie = name + "=" + (value || "") + expires + "; path=/";
            }

            function getCookie(name) {
                const nameEQ = name + "=";
                const ca = document.cookie.split(';');
                for(let i=0;i < ca.length;i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                }
                return null;
            }

            function eraseCookie(name) {
                document.cookie = name + '=; Max-Age=-99999999;';
            }

            // Check login status
            const username = getCookie('username');
            if (username) {
                loginForm.style.display = 'none';
                welcome.style.display = 'block';
                userSpan.textContent = username;
            } else {
                loginForm.style.display = 'block';
                welcome.style.display = 'none';
            }

            // Handle login form submission
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                // For demonstration, we'll accept any username/password
                if (username && password) {
                    setCookie('username', username, 7); // Set cookie to expire in 7 days
                    loginForm.style.display = 'none';
                    welcome.style.display = 'block';
                    userSpan.textContent = username;
                    message.textContent = '';
                } else {
                    message.textContent = 'Invalid username or password';
                }
            });

            // Handle logout button click
            logoutButton.addEventListener('click', () => {
                eraseCookie('username');
                loginForm.style.display = 'block';
                welcome.style.display = 'none';
                userSpan.textContent = '';
            });
        });
