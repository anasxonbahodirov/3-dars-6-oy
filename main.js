document.addEventListener("DOMContentLoaded", function() {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        document.getElementById('displayName').textContent = 'Sizning ismingiz: ' + savedName;
    }
});

function saveName() {
    const nameInput = document.getElementById('nameInput').value;
    if (nameInput) {
        localStorage.setItem('userName', nameInput);
        document.getElementById('displayName').textContent = 'Sizning ismingiz: ' + nameInput;
    }
}




