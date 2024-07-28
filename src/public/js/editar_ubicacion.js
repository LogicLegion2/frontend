document.addEventListener('DOMContentLoaded', async () => {
    const id = localStorage.getItem('ubicacionSeleccionada');
    
    if (id) {
        const urlLogic = sessionStorage.getItem("urlLogic") + `/ubicaciones/obtener/${id}`;

        try {
            const response = await fetch(urlLogic);
            const data = await response.json();
            document.getElementById('ubicacion_id').value = id;
            document.getElementById('titulo').value = data.titulo;
            document.getElementById('ubicacion').value = data.ubicacion;
            document.getElementById('descripcion').value = data.descripcion;

            document.getElementById('titulo').setAttribute('placeholder', data.titulo);
            document.getElementById('ubicacion').setAttribute('placeholder', data.ubicacion);
            document.getElementById('descripcion').setAttribute('placeholder', data.descripcion);
        } catch (error) {
            console.error('Error fetching location data:', error);
        }
    }

    document.getElementById('editForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = {
            id: document.getElementById('ubicacion_id').value,
            titulo: document.getElementById('titulo').value,
            ubicacion: document.getElementById('ubicacion').value,
            descripcion: document.getElementById('descripcion').value,
        };

        try {
            const token = sessionStorage.getItem("token");
            const response = await fetch(sessionStorage.getItem("urlLogic") + '/ubicaciones/editar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    "x-access-token": token
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Ubicación editada exitosamente' + "</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                        content: 'text-alert'
                    }
                });
                setTimeout(() => {
                    window.location.href = `/admin/ubicacion`;
                }, 1500);
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
                    window.location.href = `/admin/ubicacion`;
                }, 1500);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Error al editar la ubicaqción' + "</h5>",
                showConfirmButton: false,
                timer: 1500,
                customClass: {
                    popup: 'bg-alert',
                }
            });
        }
    });
});