document.getElementById('btn-realizar-compra').addEventListener('click', async () => {
    const productos = [];
    document.querySelectorAll('.cont-perf').forEach((productoDiv) => {
        const idProducto = productoDiv.querySelector('input[id^="unidades-"]').id.split('-')[1];
        const cantidad = productoDiv.querySelector('input[id^="unidades-"]').value;
        productos.push({ idProducto, cantidad });
    });

    const totalGlobal = document.getElementById('totalGlobal').value.replace('$', '');

    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('totalGlobal', totalGlobal);

    window.location.href = '/cliente/comprar';
    const urlLogic = sessionStorage.getItem("urlLogic") + "/ventas/compra";

    try {
        const response = await fetch(urlLogic, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productos, totalGlobal })
        });

        if (response.ok) {
            window.location.href = '/cliente/comprar';
        } else {
            console.error('Error en la compra');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'success') {
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
    }
});


window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('status') === 'error') {
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
});