document.addEventListener('DOMContentLoaded', () => {
    // Escuchar el evento submit del formulario
    document.querySelector('form').addEventListener('submit', async (e) => {
        e.preventDefault(); // Evitar que se envíe el formulario automáticamente

        // Obtener los valores del formulario
        const ubicacion = document.getElementById('ubicacion').value;
        const barbero = document.getElementById('barbero').value;
        const fecha = document.getElementById('fecha').value;
        const horario = document.getElementById('horario').value;
        const servicio = document.getElementById('servicio').value;
        const notas = document.getElementById('notas').value;

        // Objeto con los datos de la reserva
        const datosReserva = {
            ubicacion: ubicacion,
            barbero: barbero,
            fecha: fecha,
            horario: horario,
            servicio: servicio,
            notas: notas
        };

        try {
            // Enviar los datos al servidor
            const response = await fetch('/crearReserva', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(datosReserva)
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Mostrar mensaje de éxito
            alert('Reserva creada correctamente.');

            // Opcional: Redireccionar a otra página
            // window.location.href = '/ruta-a-otra-pagina'; // Cambiar por la ruta deseada

        } catch (error) {
            console.error('Error al crear reserva:', error);
            // Mostrar mensaje de error
            alert('Ocurrió un error al crear la reserva. Por favor, inténtalo de nuevo.');
        }
    });
});
