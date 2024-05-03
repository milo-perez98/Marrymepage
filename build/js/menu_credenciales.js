// JavaScript para mostrar y ocultar las páginas superpuestas y manejar el clic fuera del menú
    document.getElementById('login').addEventListener('click', function() {
        document.getElementById('login-overlay').style.display = 'block';
    });

    document.getElementById('register').addEventListener('click', function() {
        document.getElementById('register-overlay').style.display = 'block';
    });

    // Función para ocultar las páginas superpuestas y mostrar la página principal cuando se hace clic fuera del menú
    window.addEventListener('click', function(event) {
        var loginOverlay = document.getElementById('login-overlay');
        var registerOverlay = document.getElementById('register-overlay');

        if (event.target == loginOverlay || event.target == registerOverlay) {
            // Ocultar las páginas superpuestas
            loginOverlay.style.display = 'none';
            registerOverlay.style.display = 'none';

            // Mostrar la página principal
            // Aquí puedes añadir el código para mostrar la página principal nuevamente
        }
    });