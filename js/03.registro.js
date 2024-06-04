document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los valores ingresados en el formulario
    const email = document.getElementById('txt_correo').value;
    const password = document.getElementById('txt_clave').value;
    const repeatPassword = document.getElementById('txt_repetir_clave').value;

    // Validar que las contraseñas coincidan
    if (password !== repeatPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Obtener usuarios existentes del localStorage
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Verificar si el usuario ya existe
    if (users.some(user => user.email === email)) {
        alert('Este correo electrónico ya está registrado');
        return;
    }

    // Crear un nuevo usuario
    const newUser = {
        email: email,
        password: password
    };

    // Añadir el nuevo usuario a la lista de usuarios
    users.push(newUser);

    // Guardar la lista actualizada de usuarios en localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Mostrar un mensaje de éxito y redirigir al inicio de sesión
    alert('Registro exitoso');
    window.location.href = 'login.html';
});
