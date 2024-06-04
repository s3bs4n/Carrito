// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Evitar el envío del formulario

//     // Variables con los valores almacenados
//     const storedEmail = "sebastian@duoc.com";
//     const storedPassword = "12345";

//     // Obtener los valores ingresados en el formulario
//     const inputEmail = document.getElementById('txt_correo').value;
//     const inputPassword = document.getElementById('txt_clave').value;

//     // Validar los valores ingresados
//     if (inputEmail === storedEmail && inputPassword === storedPassword) {
//         // Redirigir a otra página si la validación es exitosa
//         window.location.href = "index.html";
//     } else {
//         // Mostrar un mensaje de error si la validación falla
//         alert('Correo o contraseña incorrectos');
//     }
// });

// VERSION ANTIGUA LA DE ARRIBA, UTILIZANDO DATOS EN CRUDO



// Función para manejar el inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores ingresados en el formulario
    const email = document.getElementById('txt_correo').value;
    const password = document.getElementById('txt_clave').value;

    // Obtener usuarios existentes del localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Buscar el usuario con el correo electrónico ingresado
    const user = users.find(user => user.email === email);

    // Validar los datos ingresados
    if (user && user.password === password) {
        // Redirigir a otra página si la validación es exitosa
        alert('Inicio de sesión exitoso');
        window.location.href = "index.html";
    } else {
        // Mostrar un mensaje de error si la validación falla
        alert('Correo o contraseña incorrectos');
    }
});

// Función para borrar todos los datos del localStorage (por si necesitas utilizarla)
function clearLocalStorage() {
    localStorage.clear();
    alert('Todos los datos del localStorage han sido eliminados.');
}
