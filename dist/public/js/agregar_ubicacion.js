document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("formAgregarUbicacion").addEventListener("submit", async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Captura los valores del formulario
        const titulo = document.getElementById("agregar_titulo").value;
        const ubicacion = document.getElementById("agregar_ubicacion").value;
        const descripcion = document.getElementById("agregar_descripcion").value;
        const foto = document.getElementById("agregar_imagen").files[0]; // Captura el archivo seleccionado

        // Verifica si todos los campos están llenos
        if (!titulo || !ubicacion || !descripcion || !foto) {
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

        // Obtener token de sessionStorage
        const token = sessionStorage.getItem("token");

        // Crear un objeto JSON con los datos a enviar
        const dataToSend = {
            titulo: titulo,
            ubicacion: ubicacion,
            descripcion: descripcion,
            foto: foto.name // Envía solo el nombre del archivo, ajustar según necesidad
        };

        try {
            // Enviar los datos al servidor
            const response = await fetch(sessionStorage.getItem("urlLogic") + '/ubicaciones/crear', {
                method: 'POST',
                headers: {
                    "content-Type": "application/json",
                    "x-access-token": token
                },
                body: JSON.stringify(dataToSend)
            });

            if (!response.ok) {
                const errorMessage = await response.text(); // Obtener el mensaje de error del servidor
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            const responseData = await response.json(); // Parsea la respuesta a JSON
            console.log("Ubicación registrada:", responseData); // Muestra en consola la respuesta del servidor

            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Ubicación registrada exitosamente</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });

            // Opcional: Recargar la página después de agregar la ubicación
            // location.reload();

        } catch (error) {
            console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch

            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al registrar ubicación</h5>",
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
