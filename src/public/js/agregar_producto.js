document.getElementById("formAgregarProducto").addEventListener("submit", async (e) => {
    e.preventDefault();

    // Captura los valores del formulario
    const nombre = document.getElementById("agregar_nombre").value;
    const descripcion = document.getElementById("agregar_descripcion").value;
    const precio = document.getElementById("agregar_precio").value;
    const cantidad = document.getElementById("agregar_cantidad").value;
    const foto = document.getElementById("agregar_imagen").files[0]; // Captura el archivo seleccionado

    // Crea un objeto FormData para manejar la subida del archivo
    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("descripcion", descripcion);
    formData.append("precio", precio);
    formData.append("cantidad", cantidad);
    formData.append("foto", foto);

    try {
        // Enviar los datos al servidor
        const response = await fetch('http://localhost:3000/productos/crear', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Producto agregado:", data);

        // Aquí podrías agregar una notificación de éxito como en los ejemplos anteriores
    } catch (error) {
        console.error("Fetch error:", error);
        // Aquí podrías manejar el error y mostrar una notificación al usuario
    }
});
