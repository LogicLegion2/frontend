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

    // Crear un objeto FormData para enviar datos binarios
    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("ubicacion", ubicacion);
    formData.append("descripcion", descripcion);
    formData.append("foto", foto);

    try {
        // Enviar los datos al servidor
        const response = await fetch('http://localhost:3000/ubicaciones/crear', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Ubicación agregada:", data);

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
        setTimeout(() => {
            location.reload();
        }, 1500);
    } catch (error) {
        console.error("Fetch error:", error);
        Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al registrar ubicación</h5>",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
                popup: 'bg-alert',
            }
        });
    }
});
