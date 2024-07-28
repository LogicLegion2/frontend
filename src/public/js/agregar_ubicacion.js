document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("formAgregarUbicacion").addEventListener("submit", async (e) => {
        e.preventDefault(); 

        const titulo = document.getElementById("agregar_titulo").value;
        const ubicacion = document.getElementById("agregar_ubicacion").value;
        const descripcion = document.getElementById("agregar_descripcion").value;
        const foto = document.getElementById("agregar_imagen").files[0]; 

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
            return; 
        }

        const token = sessionStorage.getItem("token");

        const dataToSend = {
            titulo: titulo,
            ubicacion: ubicacion,
            descripcion: descripcion,
            foto: foto.name 
        };

        try {
            const response = await fetch(sessionStorage.getItem("urlLogic") + '/ubicaciones/crear', {
                method: 'POST',
                headers: {
                    "content-Type": "application/json",
                    "x-access-token": token
                },
                body: JSON.stringify(dataToSend)
            });

            if (!response.ok) {
                const errorMessage = await response.text(); 
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            const responseData = await response.json();
            console.log("Ubicación registrada:", responseData);

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
            window.location.href = "/admin/ubicacion"

        } catch (error) {
            console.error("Fetch error:", error);

            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al registrar ubicación</h5>",
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
