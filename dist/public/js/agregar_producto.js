document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("formAgregarProducto").addEventListener("submit", async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Captura los valores del formulario
        const nombre = document.getElementById("agregar_nombre").value;
        const descripcion = document.getElementById("agregar_descripcion").value;
        const precio = document.getElementById("agregar_precio").value;
        const cantidad = document.getElementById("agregar_cantidad").value;
        const foto = document.getElementById("agregar_imagen").files[0]; // Captura el archivo seleccionado

        // Verifica si todos los campos están llenos
        if (!nombre || !descripcion || !precio || !cantidad || !foto) {
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
        
        const formData = new FormData();
        formData.append("nombre", nombre);
        formData.append("descripcion", descripcion);
        formData.append("precio", precio);
        formData.append("cantidad", cantidad);
        formData.append("foto", foto);

        try {
            // Enviar los datos al servidor
            const response = await fetch(sessionStorage.getItem("urlLogic") + '/productos/crear', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                const errorMessage = await response.text(); // Obtener el mensaje de error del servidor
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            const data = await response.json(); // Parsea la respuesta a JSON
            console.log("Producto agregado:", data); // Muestra en consola la respuesta del servidor

            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Producto agregado exitosamente</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });

            // Limpiar el formulario después de enviar los datos
            document.getElementById("formAgregarProducto").reset();

        } catch (error) {
            console.error("Fetch error:", error); // Manejo de errores si falla la petición fetch

            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar producto</h5>",
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
