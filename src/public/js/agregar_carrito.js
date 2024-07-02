document.addEventListener('DOMContentLoaded', () => {
    const urlLogic = sessionStorage.getItem("urlLogic");
    const token = sessionStorage.getItem("token");
    const id = sessionStorage.getItem("id"); 

    async function agregarCarrito(producto) {
        try {
            const response = await fetch(`${urlLogic}/ventas/carrito/agregar/${producto}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
                body: JSON.stringify({ id: id })
            });
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'producto añadido al carrito' + "</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                    }
                });
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Debes iniciar sesión primero' + "</h5>",                                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                    }
                });
            }
        } catch (error) {
            console.error('Error adding favorite:', error);
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al añadir a favoritos' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    }
    window.agregarCarrito = agregarCarrito;
});