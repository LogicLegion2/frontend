async function eliminarComentario(id) {
    localStorage.getItem('comentarioSeleccionado', id);
    Swal.fire({
        title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + '¿Estás seguro de eliminarlo?' + "</h5>",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#318331",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
        customClass: {
            popup: 'bg-alert',
            content: 'text-alert'
        }
    }).then(async (result) => {
        if (result.isConfirmed) {
            if (id) {
                const token = sessionStorage.getItem("token")
                const urlLogic = sessionStorage.getItem("urlLogic") + `/comentarios/eliminar`;
                const respuesta = await fetch(urlLogic, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        "x-access-token": token
                    },
                    body: JSON.stringify({ id: id })
                });
                if (respuesta.ok) {
                    Swal.fire({
                        icon: 'success',
                        title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Comentario eliminado exitosamente' + "</h5>",
                        showConfirmButton: false,
                        timer: 1500,
                        customClass: {
                            popup: 'bg-alert',
                            content: 'text-alert'
                        }
                    });
                    setTimeout(() => {
                        window.location.reload();
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
                }
            } else {
                Swal.fire({
                    icon: 'error',
                    title: "<h5 style='color:white; font-family: 'Aleo', serif;'>" + 'Seleccione un comentario primero' + "</h5>",
                    showConfirmButton: false,
                    timer: 1500,
                    customClass: {
                        popup: 'bg-alert',
                    }
                });
            }
        }
    });
}