document.getElementById("registrarUsuario").addEventListener("click", (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("password").value;
    const rol = document.getElementById("rol").value;

    const token = sessionStorage.getItem("token");
    const options = {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "x-access-token": token
        },
        body: JSON.stringify({
            nombre: nombre,
            telefono: telefono,
            correo: correo,
            contrasena: contrasena,
            rol: rol
        })
    }

    // Enviar los datos al servidor
    fetch(sessionStorage.getItem("urlLogic") + '/usuarios/registrar', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data) {
                console.log("Usuario agregado:", data); 
                Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Usuario registrado exitosamente</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                    }
                });
                setTimeout(() => {
                    window.location.href = "/admin/usuario"
                }, 1500);
            } else {
                console.error("Fetch error: Respuesta vacía o no válida");
            }
        })
        .catch(error => {
            console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch
        });
});
