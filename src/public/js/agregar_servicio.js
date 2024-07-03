document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("crearServicio").addEventListener("submit", async (e) => {
        e.preventDefault(); 

        const tipoServicio = document.getElementById("tiposervicio").value;
        const descripcion = document.getElementById("descripcion").value;
        const precio = document.getElementById("precio").value;
        const fotoServicio = document.getElementById("fotoServicio").files[0]; 

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
            return; 
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
            const response = await fetch(sessionStorage.getItem("urlLogic") + '/servicios/crear', options);

            if (!response.ok) {
                const errorMessage = await response.text(); 
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const data = await response.json(); 
                console.log("Servicio agregado:", data); 

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
            } else {
                const text = await response.text();
                console.error("Respuesta no JSON:", text);

                Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar servicio</h5>",
                    text: "Error en la respuesta del servidor", 
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                    }
                });
            }

        } catch (error) {
            console.error("Fetch error:", error); 
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar servicio</h5>",
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
