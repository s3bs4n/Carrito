// Función para manejar la recuperación de contraseña
document.getElementById('recoverForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener el correo ingresado en el formulario
    const email = document.getElementById('txt_correo').value;

    // Obtener usuarios existentes del localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar el usuario con el correo electrónico ingresado
    const user = users.find(user => user.email === email);

    // Validar si el correo electrónico existe
    if (user) {
        // Mostrar la contraseña en una alerta
        alert(`Tu contraseña es: ${user.password}`);
    } else {
        // Mostrar un mensaje de error si el correo no existe
        alert('El correo electrónico no está registrado');
    }
});
