document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("enviar").addEventListener("click", async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Captura los valores del formulario
        const comentario = document.getElementById("comentario").value;

        // Obtener el ID de usuario del sessionStorage
        const idUsuario = sessionStorage.getItem("userId"); // Ajusta esto según cómo almacenas el ID del usuario

        // Obtener el ID del barbero seleccionado
        const idBarbero = sessionStorage.getItem("selectedBarberId"); // Ajusta esto según cómo obtienes el ID del barbero seleccionado

        // Objeto con los datos del comentario
        const datosComentario = {
            comentario: comentario,
            idUsuario: idUsuario,
            idBarbero: idBarbero
        };

        try {
            // Obtener token de sessionStorage
            const token = sessionStorage.getItem("token");

            // Enviar los datos al servidor
            const response = await fetch(sessionStorage.getItem("urlLogic") + '/comentarios/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "x-access-token": token
                },
                body: JSON.stringify(datosComentario)
            });

            const contentType = response.headers.get("content-type");
            if (!response.ok) {
                const errorText = await response.text(); // Lee la respuesta como texto
                throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
            }

            if (contentType && contentType.includes("application/json")) {
                const data = await response.json(); // Parsea la respuesta a JSON
                console.log("Comentario agregado:", data); // Muestra en consola la respuesta del servidor

                Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Comentario agregado exitosamente</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                    }
                });

                // Opcional: Recargar la página después de agregar el comentario
                // location.reload();
            } else {
                throw new Error("Received content is not JSON");
            }

        } catch (error) {
            console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch

            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar comentario</h5>",
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
