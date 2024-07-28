window.addEventListener('load', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = sessionStorage.getItem('token');
    const id = sessionStorage.getItem('id');
    const recursoCancelar = sessionStorage.getItem("urlLogic") + "/ventas/ultima";

    if (urlParams.get('status') === 'error') {
        const responseCancelar = await fetch(recursoCancelar, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "x-access-token": token
            },
            body: JSON.stringify({ id })
        });
        if (responseCancelar.ok) {
            Swal.fire({
                icon: 'warning',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Compra cancelada exitosamente' + "</h5>",
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
        }
    } else {
        document.getElementById('form-comprar-producto').addEventListener('submit', async (event) => {
            event.preventDefault();

            const metodoEntrega = document.getElementById('metodoEntrega').value;
            const direccion = document.getElementById('direccion').value;

            const productos = JSON.parse(localStorage.getItem('productos') || '[]');
            const totalGlobal = localStorage.getItem('totalGlobal');
            const urlLogic = sessionStorage.getItem("urlLogic") + "/ventas/compra";
            const recursoPago = sessionStorage.getItem("urlLogic") + "/create-order"
            const recursoReiniciar = sessionStorage.getItem("urlLogic") + "/ventas/reiniciar"

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

                const responseReiniciar = await fetch(recursoReiniciar, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "x-access-token": token
                    },
                    body: JSON.stringify({ id })
                });
                
                if (responsePago.ok) {

                    const response = await fetch(urlLogic, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            "x-access-token": token
                        },
                        body: JSON.stringify({ id, productos, totalGlobal, metodoEntrega, direccion })
                    });

                    localStorage.removeItem('productos');

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
    }
});
