document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("formAgregarProducto").addEventListener("submit", async (e) => {
        e.preventDefault();

        const nombre = document.getElementById("agregar_nombre").value;
        const descripcion = document.getElementById("agregar_descripcion").value;
        const precio = document.getElementById("agregar_precio").value;
        const cantidad = document.getElementById("agregar_cantidad").value;
        const foto = document.getElementById("agregar_imagen").files[0]; 
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
        const token = sessionStorage.getItem('token')
        const options = {
            method: 'POST',
            headers:{
                "content-Type": "application/json",
                "x-access-token": token
            },
            body:JSON.stringify({
                nombre: nombre,
                descripcion: descripcion,
                cantidad: cantidad,
                precio: precio,
                foto: foto
            })
        };
        console.log({"OPTIONS":options});
        try {
            const response = await fetch(sessionStorage.getItem("urlLogic") + '/productos/crear', options);

            if (!response.ok) {
                const errorMessage = await response.text(); 
                throw new Error(`HTTP error! Status: ${response.status} - ${errorMessage}`);
            }

            const data = await response.json(); 
            console.log("Producto agregado:", data); 

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

            window.location.href = '/admin/producto'

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: \"Aleo\", serif;'>Error al agregar producto</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});
