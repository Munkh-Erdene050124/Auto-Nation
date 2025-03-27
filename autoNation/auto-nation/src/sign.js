// Toggle between login/signup forms
function showForm(formType) {
    // Remove active class from all tabs and forms
    document.querySelectorAll('.auth-tab').forEach(tab =>
        tab.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form =>
        form.classList.remove('active'));

    // Add active class to selected tab and form
    document.querySelector(`[onclick="showForm('${formType}')"]`).classList.add('active');
    document.getElementById(`${formType}Form`).classList.add('active');
}

// Mobile menu functions (same as index.js)
function showMenu() {
    document.getElementById("navLinks").style.right = "0";
}

function hideMenu() {
    document.getElementById("navLinks").style.right = "-200px";
}

// Form validation can be added here
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add login logic
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add signup logic
});

// Initialize users array in localStorage
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
}

// Signup Function
function handleSignup(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users'));
    const formData = new FormData(e.target);

    const newUser = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        password: formData.get('password')
    };

    // Check if user already exists
    const exists = users.some(user =>
        user.email === newUser.email || user.phone === newUser.phone
    );

    if (exists) {
        alert('Хэрэглэгч аль хэдийн бүртгэлтэй байна!');
        return;
    }

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Амжилттай бүртгүүллээ! Нэвтрэх форм руу шилжинэ.');
    showForm('login');
    e.target.reset();
}

// Login Function
function handleLogin(e) {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users'));
    const formData = new FormData(e.target);

    const emailPhone = formData.get('emailPhone');
    const password = formData.get('password');

    // Find user
    const user = users.find(user =>
        (user.email === emailPhone || user.phone === emailPhone) &&
        user.password === password
    );

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Амжилттай нэвтэрлээ!');
        window.location.href = 'profile.html';
    } else {
        alert('Имэйл/утасны дугаар эсвэл нууц үг буруу байна!');
    }
}

// Update form submissions
document.getElementById('loginForm').addEventListener('submit', handleLogin);
document.getElementById('signupForm').addEventListener('submit', handleSignup);