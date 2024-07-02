document.getElementById("registrarBarbero").addEventListener("click", (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const descripcion = document.getElementById("descripcion").value;

    // Verifica si todos los campos están llenos
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
        return; // Sale de la función si hay algún campo vacío
    }

    // Objeto con los datos del barbero
    const datosBarbero = {
        nombre: nombre,
        correo: correo,
        contrasena: contrasena,
        telefono: telefono,
        descripcion: descripcion,
    };

    // Enviar los datos al servidor
    fetch('http://localhost:3000/usuarios/barbero', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosBarbero)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Parsea la respuesta a JSON
    })
    .then(data => {
        // Verifica si la respuesta está vacía antes de intentar analizarla como JSON
        if (data) {
            console.log("Barbero agregado:", data); // Muestra en consola la respuesta del servidor
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
            // location.reload(); // Recarga la página después de agregar el barbero (opcional)
        } else {
            console.error("Fetch error: Respuesta vacía o no válida");
        }
    })
    .catch(error => {
        console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch
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
