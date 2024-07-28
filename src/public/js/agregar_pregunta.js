document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("crearPreguntaForm").addEventListener("submit", async (e) => {
        e.preventDefault();

        const pregunta = document.getElementById("pregunta").value;
        const respuesta = document.getElementById("respuesta").value;

        const datosPregunta = {
            pregunta: pregunta,
            respuesta: respuesta
        };

        try {
            const token = sessionStorage.getItem("token");

            const response = await fetch(sessionStorage.getItem("urlLogic") + '/preguntas/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "x-access-token": token
                },
                body: JSON.stringify(datosPregunta)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json(); 
            console.log("Pregunta agregada:", data); 

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

            window.location.href = "/admin/pregunta"

        } catch (error) {
            console.error("Fetch error:", error); 
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
});
