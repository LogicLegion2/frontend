document.getElementById("crearPreguntaForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura los valores del formulario
    const pregunta = document.getElementById("pregunta").value;
    const respuesta = document.getElementById("respuesta").value;

    // Objeto con los datos de la pregunta
    const datosPregunta = {
        pregunta: pregunta,
        respuesta: respuesta
    };

    try {
        // Enviar los datos al servidor
        const response = await fetch('http://localhost:3000/preguntas/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosPregunta)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parsea la respuesta a JSON
        console.log("Pregunta agregada:", data); // Muestra en consola la respuesta del servidor

        Swal.fire({
            icon: 'success',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Pregunta agregada exitosamente</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
            }
        });

        // Opcional: Recargar la página después de agregar la pregunta
        // location.reload();

    } catch (error) {
        console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch

        Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar pregunta</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'bg-alert',
            }
        });
    }
});
