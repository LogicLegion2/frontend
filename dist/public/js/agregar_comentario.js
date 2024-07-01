document.querySelector(".btn-send").addEventListener("click", async (e) => {
    e.preventDefault(); // Evita el comportamiento por defecto del botón

    // Captura el valor del comentario
    const comentario = document.getElementById("comentario").value;

    if (!comentario) {
        Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>El comentario no puede estar vacío</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'bg-alert',
            }
        });
        return; // Sale de la función si el comentario está vacío
    }

    // Objeto con los datos del comentario
    const datosComentario = {
        comentario: comentario
    };

    try {
        // Enviar los datos al servidor
        const response = await fetch('http://localhost:3000/comentarios/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosComentario)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

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

        // Limpiar el campo de comentario después de enviarlo
        document.getElementById("comentario").value = "";

    } catch (error) {
        console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch

        Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar comentario</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'bg-alert',
            }
        });
    }
});
