function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function generatePassword(username) {
    const randomString = generateRandomString(6); // Generate 6 random characters
    return username + randomString;
}

document.getElementById('generateBtn').addEventListener('click', function() {
    const username = document.getElementById('usernameInput').value;
    const password = generatePassword(username);
    document.getElementById('passwordDisplay').textContent = `Generated Password: ${password}`;
});
