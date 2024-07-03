document.addEventListener('DOMContentLoaded', async () => {
    const urlProductos = sessionStorage.getItem("urlLogic") + `/productos`;

    try {
        const responseProductos = await fetch(urlProductos);

        if (!responseProductos.ok) {
            throw new Error(`Error al obtener productos: ${responseProductos.status} ${responseProductos.statusText}`);
        }

        const productosData = await responseProductos.json();

        const productosSelect1 = document.getElementById('producto1');
        const productosSelect2 = document.getElementById('producto2');

        productosData.productos.forEach(producto => {
            const option1 = document.createElement('option');
            option1.value = producto.idProducto;
            option1.text = producto.producto;
            productosSelect1.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = producto.idProducto;
            option2.text = producto.producto;
            productosSelect2.appendChild(option2);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        Swal.fire({
            icon: 'error',
            title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al obtener productos' + "</h5>",
            text: error.message,
            showConfirmButton: true,
            customClass: {
                popup: 'bg-alert',
                content: 'text-alert'
            }
        });
    }

    document.getElementById('addForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const producto1 = document.getElementById('producto1').value;
        const producto2 = document.getElementById('producto2').value;
        const descripcion = document.getElementById('descripcion').value;
        const precio = document.getElementById('precio').value;
        const foto = document.getElementById('formFile').files[0];

        console.log('Producto 1:', producto1);
        console.log('Producto 2:', producto2);
        console.log('Descripción:', descripcion);
        console.log('Precio:', precio);
        console.log('Archivo:', foto);

        if (!producto1 || !producto2 || !descripcion || !precio || !foto) {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Todos los campos son obligatorios' + "</h5>",
                showConfirmButton: true,
                customClass: {
                    popup: 'bg-alert',
                }
            });
            return;
        }

        const token = sessionStorage.getItem("token");
        const options = {
            method: "POST",
            headers:{
                "content-Type": "application/json",
                "x-access-token": token
            },
            body:JSON.stringify({
                producto1: producto1,
                producto2: producto2,
                descripcion: descripcion,
                precio: precio,
                foto: foto
            })
        }

        try {
            const response = await fetch(sessionStorage.getItem("urlLogic") + '/ofertas/crear', options);

            if (!response.ok) {
                const responseText = await response.text(); // Leer la respuesta como texto para depuración
                throw new Error(`Error: ${response.status} ${response.statusText} - ${responseText}`);
            }

            const responseData = await response.json();
            Swal.fire({
                icon: 'success',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Oferta agregada exitosamente' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                    content: 'text-alert'
                }
            });
            setTimeout(() => {
                window.location.href = `/admin/oferta`;
            }, 1500);
        } catch (error) {
            console.error('Error al agregar la oferta:', error);
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al agregar la oferta' + "</h5>",
                showConfirmButton: true,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});
