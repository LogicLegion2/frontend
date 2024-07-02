document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("enviar").addEventListener("click", async (e) => {
        e.preventDefault();

        // Captura los valores del formulario
        const comentario = document.getElementById("comentario").value;

        // Id de usuario del sessionStorage
        const idUsuario = sessionStorage.getItem("id"); 

        // Id del barbero seleccionado
        const idBarbero = sessionStorage.getItem("idBarbero"); 

        // Obtener token de sessionStorage
        const token = sessionStorage.getItem("token");
        
        // Objeto con los datos del comentario
        const datosComentario = {
            comentario: comentario,
            idUsuario: idUsuario,
            idBarbero: idBarbero
        };

        try {
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
                const errorText = await response.text(); 
                throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
            }

            if (contentType && contentType.includes("application/json")) {
                const data = await response.json();
                console.log("Comentario agregado:", data); 

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
                window.location.reload();
            } else {
                throw new Error("Received content is not JSON");
            }

        } catch (error) {
            console.error("Fetch error:", error);

            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar comentario</h5>",
                text: error.message,
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});
