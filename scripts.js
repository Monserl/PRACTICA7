document.getElementById('generate-btn').addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById('password').value = password;
    updateStrength(password);
});

document.getElementById('copy-btn').addEventListener('click', async () => {
    const passwordField = document.getElementById('password');
    
    try {
        await navigator.clipboard.writeText(passwordField.value);
        alert('Contraseña copiada al portapapeles');
    } catch (err) {
        console.error('Error al copiar la contraseña: ', err);
        alert('No se pudo copiar la contraseña');
    }
});

document.getElementById('length').addEventListener('input', (e) => {
    document.getElementById('length-value').textContent = e.target.value;
});

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

    let allowedChars = '';
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;

    let password = '';
    for (let i = 0; i < length; i++) {
        
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function updateStrength(password) {
    const strengthBar = document.querySelector('.bar');
    const strengthText = document.getElementById('strength-text');

    let strength = 0;
    if (password.length >= 12) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    const strengthLevels = ['DÉBIL', 'MEDIA', 'FUERTE', 'MUY FUERTE'];
    const colors = ['#dc3545', '#ffc107', '#28a745', '#218838'];

    strengthBar.style.width = `${(strength / 4) * 100}%`;
    strengthBar.style.backgroundColor = colors[strength];
    strengthText.textContent = strengthLevels[strength];

    const lengthSlider = document.getElementById('length');
    const lengthValue = document.getElementById('length-value');
    lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
}); 
}