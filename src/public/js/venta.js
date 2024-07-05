document.getElementById('form-comprar-producto').addEventListener('submit', async (event) => {
    event.preventDefault();

    const metodoPago = document.getElementById('metodoPago').value;
    const metodoEntrega = document.getElementById('metodoEntrega').value;
    const direccion = document.getElementById('direccion').value;
    const checkout = document.getElementById('checkout');

    const productos = JSON.parse(localStorage.getItem('productos') || '[]');
    const totalGlobal = localStorage.getItem('totalGlobal');
    const id = sessionStorage.getItem('id');
    const urlLogic = sessionStorage.getItem("urlLogic") + "/ventas/compra";
    const token = sessionStorage.getItem('token');

    try {
        const response = await fetch(urlLogic, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "x-access-token": token
            },
            body: JSON.stringify({ id, productos, totalGlobal, metodoPago, metodoEntrega, direccion })
        });

        const recursoPago = sessionStorage.getItem("urlLogic") + "/create-order"
        const responsePago = await fetch(recursoPago, {
            method: 'POST'
        });
        const data = await responsePago.json();
        // console.log({ "PAGO ": recursoPago, "DATA": data });
        window.location.href = data.links[1].href;

        if (response.ok && responsePago.ok) {
            // localStorage.removeItem('productos');
            // localStorage.removeItem('totalGlobal');

            // Swal.fire({
            //     icon: 'success',
            //     title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Compra realizada exitosamente' + "</h5>",
            //     showConfirmButton: false,
            //     timer: 1500,
            //     customClass: {
            //         popup: 'bg-alert',
            //         content: 'text-alert'
            //     }
            // });
            // setTimeout(() => {
            //     window.location.href = `/cliente/menu`;
            // }, 1500);
        } else {
            Swal.fire({
                icon: 'warning',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Debes iniciar sesión primero' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
            setTimeout(() => {
                window.location.href = `/cliente/carrito`;
            }, 1500);
        }
    } catch (error) {
        console.error('Error:', error);
    }
});