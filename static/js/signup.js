login = document.getElementById('login_link')

login.addEventListener("click", function(){
    window.location.href='/login'
})

home = document.getElementById('home_button')

home.addEventListener("click", function(){
    window.location.href='/'
})

function validateForm() {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm_password').value;
            
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return false;
            }
            return true;
        }