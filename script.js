document.getElementById('create-account').addEventListener('click', function(e) {

    e.preventDefault();
    const fname = document.getElementById('fname').value.trim();
    const sname = document.getElementById('sname').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pass = document.getElementById('pass').value.trim();
    const confirm = document.getElementById('confirm').value.trim();

    if (!fname) {
        alert('First Name is required');
        return;
    }

    if (!sname) {
        alert('Last Name is required');
        return;
    }

    if (!email) {
        alert('Email is required');
        return;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
    }

    if (!phone) {
        alert('Phone Number is required');
        return;
    } else {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid 10-digit phone number');
            return;
        }
    }

    if (!pass) {
        alert('Password is required');
        return;
    }

    if (!confirm) {
        alert('Confirm Password is required');
        return;
    }

    if (pass !== confirm) {
        alert('Passwords do not match');
        return;
    }

    alert('Account created successfully!');
});
