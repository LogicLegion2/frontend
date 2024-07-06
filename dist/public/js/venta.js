document.getElementById('form-comprar-producto').addEventListener('submit', async (event) => {
    event.preventDefault();

    const metodoPago = document.getElementById('metodoPago').value;
    const metodoEntrega = document.getElementById('metodoEntrega').value;
    const direccion = document.getElementById('direccion').value;

    const productos = JSON.parse(localStorage.getItem('productos') || '[]');
    const totalGlobal = localStorage.getItem('totalGlobal');
    const id = sessionStorage.getItem('id');
    const urlLogic = sessionStorage.getItem("urlLogic") + "/ventas/compra";
    const recursoPago = sessionStorage.getItem("urlLogic") + "/create-order"
    const token = sessionStorage.getItem('token');

    try {
        const responsePago = await fetch(recursoPago, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ totalGlobal })
        });

        const data = await responsePago.json();
        window.location.href = data.links[1].href;

        if (responsePago.ok) {
            const metodoPago = document.getElementById('metodoPago').value;
            const metodoEntrega = document.getElementById('metodoEntrega').value;
            const direccion = document.getElementById('direccion').value;

            const productos = JSON.parse(localStorage.getItem('productos') || '[]');
            const totalGlobal = localStorage.getItem('totalGlobal');
            const token = sessionStorage.getItem('token');

            const response = await fetch(urlLogic, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "x-access-token": token
                },
                body: JSON.stringify({ id, productos, totalGlobal, metodoPago, metodoEntrega, direccion })
            });
            if (response.ok) {
                localStorage.removeItem('productos');
                localStorage.removeItem('totalGlobal');
            } else {
                Swal.fire({
                    icon: 'warning',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error PayPal' + "</h5>",
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