document.getElementById('form-comprar-producto').addEventListener('submit', async (event) => {
    event.preventDefault();

    const metodoPago = document.getElementById('metodoPago').value;
    const metodoEntrega = document.getElementById('metodoEntrega').value;
    const direccion = document.getElementById('direccion').value;

    const productos = JSON.parse(localStorage.getItem('productos') || '[]');
    const totalGlobal = localStorage.getItem('totalGlobal');
    const id = sessionStorage.getItem('id');
    const urlLogic = sessionStorage.getItem("urlLogic") + "/ventas/compra";
    try {
        const response = await fetch(urlLogic, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, productos, totalGlobal, metodoPago, metodoEntrega, direccion })
        });
        console.log(response);
        if (response.ok) {
            localStorage.removeItem('productos');
            localStorage.removeItem('totalGlobal');
            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Compra realizada exitosamente' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            }); 
            setTimeout(() => {
                window.location.href = `/cliente/menu`;
            }, 1500);
        } else {
            console.error('Error en la compra');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});