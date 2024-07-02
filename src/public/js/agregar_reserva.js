document.addEventListener('DOMContentLoaded', async () => {
    const urlUbicaciones = sessionStorage.getItem("urlLogic") + `/ubicaciones`;
    const urlBarberos = sessionStorage.getItem("urlLogic") + `/barberos`;
    const urlHorarios = sessionStorage.getItem("urlLogic") + `/horarios`;
    const urlServicios = sessionStorage.getItem("urlLogic") + `/servicios`;

    try {
        // Realizar peticiones al servidor para obtener los datos
        const [ubicacionesResponse, barberosResponse, horariosResponse, serviciosResponse] = await Promise.all([
            fetch(urlUbicaciones),
            fetch(urlBarberos),
            fetch(urlHorarios),
            fetch(urlServicios)
        ]);

        // Verificar que todas las respuestas sean exitosas
        if (!ubicacionesResponse.ok || !barberosResponse.ok || !horariosResponse.ok || !serviciosResponse.ok) {
            throw new Error('Error al obtener datos del servidor');
        }

        // Convertir las respuestas a formato JSON
        const ubicacionesData = await ubicacionesResponse.json();
        const barberosData = await barberosResponse.json();
        const horariosData = await horariosResponse.json();
        const serviciosData = await serviciosResponse.json();

        // Función para crear opciones en un select a partir de un arreglo de datos
        function populateSelect(selectElement, dataArray) {
            selectElement.innerHTML = ''; // Limpiar select antes de agregar nuevas opciones
            const defaultOption = document.createElement('option');
            defaultOption.disabled = true;
            defaultOption.selected = true;
            defaultOption.textContent = 'Seleccione opción';
            selectElement.appendChild(defaultOption);

            dataArray.forEach(item => {
                const option = document.createElement('option');
                option.textContent = item.nombre; // Ajustar según la estructura de tus datos
                option.value = item.id; // Ajustar según la estructura de tus datos
                selectElement.appendChild(option);
            });
        }

        // Obtener referencias a los elementos select del formulario
        const ubicacionSelect = document.getElementById('ubicacion');
        const barberoSelect = document.getElementById('barbero');
        const horarioSelect = document.getElementById('horario');
        const servicioSelect = document.getElementById('servicio');

        // Llenar los select con los datos obtenidos del servidor
        populateSelect(ubicacionSelect, ubicacionesData);
        populateSelect(barberoSelect, barberosData);
        populateSelect(horarioSelect, horariosData);
        populateSelect(servicioSelect, serviciosData);

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
        const ubicacion = document.getElementById('ubicacion').value;
        const barbero = document.getElementById('barbero').value;
        const fecha = document.getElementById('fecha').value;
        const horario = document.getElementById('horario').value;
        const servicio = document.getElementById('servicio').value;
        const notas = document.getElementById('notas').value;

        // Validación básica (puedes agregar más validaciones según tus requerimientos)
        if (!ubicacion || !barbero || !fecha || !horario || !servicio) {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son obligatorios',
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
                ubicacion,
                barbero,
                fecha,
                horario,
                servicio,
                notas
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
                    title: 'Reservación realizada exitosamente',
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                    }
                });
                // Redirigir a otra página u hacer alguna acción adicional
                setTimeout(() => {
                    window.location.href = `/admin/reservacion`;
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
