document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("crearServicio").addEventListener("submit", async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Captura los valores del formulario
        const tipoServicio = document.getElementById("tiposervicio").value;
        const descripcion = document.getElementById("descripcion").value;
        const precio = document.getElementById("precio").value;
        const fotoServicio = document.getElementById("fotoServicio").files[0]; // Captura el archivo seleccionado

        // Verifica si todos los campos están llenos
        if (!tipoServicio || !descripcion || !precio || !fotoServicio) {
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

        const token = sessionStorage.getItem("token");
        const options = {
            method: "POST",
            headers:{
                "content-Type": "application/json",
                "x-access-token": token
            },
            body:JSON.stringify({
                tipoServicio: tipoServicio,
                descripcion: descripcion,
                precio: precio,
                fotoServicio: fotoServicio
            })
        }

        try {
            // Enviar los datos al servidor
            const response = await fetch(sessionStorage.getItem("urlLogic") + '/servicios/crear', options);

            if (!response.ok) {
                const errorMessage = await response.text(); // Obtener el mensaje de error del servidor
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json(); // Parsea la respuesta a JSON si es posible
                console.log("Servicio agregado:", data); // Muestra en consola la respuesta del servidor

                Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Servicio agregado exitosamente</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                    }
                });setTimeout(() => {
                    window.location.href = `/admin/servicio`;
                }, 1500);

                // Opcional: Recargar la página después de agregar el servicio
                // location.reload();
            } else {
                const text = await response.text(); // Obtener el texto de la respuesta
                console.error("Respuesta no JSON:", text); // Mostrar el contenido de la respuesta no JSON

                Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar servicio</h5>",
                    text: "Error en la respuesta del servidor", // Mensaje de error genérico
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                    }
                });
            }

        } catch (error) {
            console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch

            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar servicio</h5>",
                text: error.message, // Mostrar el mensaje de error detallado
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});
