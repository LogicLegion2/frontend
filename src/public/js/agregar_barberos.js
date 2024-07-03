document.getElementById("registrarBarbero").addEventListener("click", (e) => {
    e.preventDefault(); 

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const descripcion = document.getElementById("descripcion").value;

    if (!nombre || !telefono || !correo || !contrasena || !descripcion) {
        Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Todos los campos son obligatorios</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'bg-alert',
            }
        });
        return; 
    }

    const token = sessionStorage.getItem("token");
    const options = {
        method: "POST",
        headers: {
            "content-Type": "application/json",
            "x-access-token": token
        },
        body: JSON.stringify({
            nombre: nombre,
            correo: correo,
            contrasena: contrasena,
            telefono: telefono,
            descripcion: descripcion,
        })
    }

    fetch(sessionStorage.getItem("urlLogic") + '/usuarios/barbero', options)

        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); 
        })
        .then(data => {
            if (data) {
                console.log("Barbero agregado:", data); 
                Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Barbero registrado exitosamente</h5>",
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
            console.error("Fetch error:", error);
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al registrar barbero</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        });
});
