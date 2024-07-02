document.addEventListener('DOMContentLoaded', async () => {
    const urlUbicaciones = sessionStorage.getItem("urlLogic") + `/ubicaciones`;
    const urlBarberos = sessionStorage.getItem("urlLogic") + `/barberos/admin`;
    const urlServicios = sessionStorage.getItem("urlLogic") + `/servicios`;

    try {
        // Realizar peticiones al servidor para obtener los datos
        const [ubicacionesResponse, barberosResponse, serviciosResponse] = await Promise.all([
            fetch(urlUbicaciones),
            fetch(urlBarberos),
            fetch(urlServicios)
        ]);
        // Verificar que todas las respuestas sean exitosas
        if (ubicacionesResponse.ok || barberosResponse.ok || serviciosResponse.ok) {

            const ubicacionesData = await ubicacionesResponse.json();
            const barberosData = await barberosResponse.json();
            const serviciosData = await serviciosResponse.json();

            const ubicacionesSelect = document.getElementById('ubicacion');
            const barberosSelect = document.getElementById('barbero');
            const serviciosSelect = document.getElementById('servicio');

            // Llenar el select de ubicaciones
            ubicacionesData.ubicaciones.forEach(ubicacion => {
                const option1 = document.createElement('option');
                option1.value = ubicacion.idUbicacion;
                option1.text = ubicacion.titulo;
                ubicacionesSelect.appendChild(option1);
            });

            // Llenar el select de barberos
            barberosData.barberos.forEach(barbero => {
                const option2 = document.createElement('option');
                option2.value = barbero.id;
                option2.text = barbero.barbero;
                barberosSelect.appendChild(option2);
            });

            // Llenar el select de servicios
            serviciosData.servicios.forEach(servicio => {
                const option3 = document.createElement('option');
                option3.value = servicio.idServicio;
                option3.text = servicio.tipoServicio;
                serviciosSelect.appendChild(option3);
            });
        }

    } catch (error) {
        console.error('Error al cargar datos del servidor:', error);
        // Manejo de errores según necesidades del proyecto
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al cargar datos del servidor. Por favor, inténtelo de nuevo más tarde.',
            showConfirmButton: true,
            customClass: {
                popup: 'bg-alert',
            }
        });
    }

    // Manejar el envío del formulario de agregar
    document.getElementById('addForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        // Obtener valores del formulario
        const id = sessionStorage.getItem('id')
        const ubicacion = document.getElementById('ubicacion').value;
        const barbero = document.getElementById('barbero').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('horario').value;
        const servicio = document.getElementById('servicio').value;
        const comentario = document.getElementById('notas').value;

        // Validación básica (puedes agregar más validaciones según tus requerimientos)
        if (!ubicacion || !barbero || !fecha || !hora || !servicio) {
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

        // Ejemplo de envío de datos al servidor para agregar una reservación (adaptar según tu backend)
        try {
            const formData = {
                id,
                ubicacion,
                barbero,
                fecha,
                hora,
                servicio,
                comentario
            };

            const token = sessionStorage.getItem("token");
            const response = await fetch(sessionStorage.getItem("urlLogic") + `/reservas/crear`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': token
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Reserva realizada exitosamente' + "</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                    }
                });
                // Redirigir a otra página u hacer alguna acción adicional
                setTimeout(() => {
                    window.location.href = `/admin/menu`;
                }, 1500);
            } else {
                // Mostrar mensaje de error si falla el envío
                throw new Error('Error al enviar la reservación');
            }
        } catch (error) {
            console.error('Error al enviar la reservación:', error);
            // Mostrar mensaje de error al usuario
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error al enviar la reservación. Por favor, inténtelo de nuevo más tarde.',
                showConfirmButton: true,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});