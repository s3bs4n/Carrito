document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Variables con los valores almacenados
    const storedEmail = "sebastian@duoc.com";
    const storedPassword = "12345";

    // Obtener los valores ingresados en el formulario
    const inputEmail = document.getElementById('txt_correo').value;
    const inputPassword = document.getElementById('txt_clave').value;

    // Validar los valores ingresados
    if (inputEmail === storedEmail && inputPassword === storedPassword) {
        // Redirigir a otra página si la validación es exitosa
        window.location.href = "index.html";
    } else {
        // Mostrar un mensaje de error si la validación falla
        alert('Correo o contraseña incorrectos');
    }
});