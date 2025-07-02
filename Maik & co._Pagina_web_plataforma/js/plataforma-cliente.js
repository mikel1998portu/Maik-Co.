// Cerrar sesión (desactivado el control de sesión)
function cerrarSesion() {
    // localStorage.removeItem('clienteLogueado');
    // window.location.href = 'login.html';
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const cerrarBtn = document.querySelector('.nav-links a[href="#"]');
    if (cerrarBtn) {
        cerrarBtn.addEventListener('click', function(e) {
            e.preventDefault();
            cerrarSesion();
        });
    }
}); 